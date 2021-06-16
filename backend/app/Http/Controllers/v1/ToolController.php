<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\v1\Tool\StoreToolRequest;
use App\Http\Resources\v1\ToolResource;
use App\Models\Tool;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ToolController extends Controller
{
    /**
     * List user tools
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request) : JsonResponse
    {
        $tagFilter = $request->input('tag');
        $tools = auth()->user()
            ->tools()
            ->with('tags')
            ->when($tagFilter, function($query) use ($tagFilter) {
                $query->where('tags.name', 'ilike', "%{$tagFilter}%");
            })
            ->get();

        return response()->json(ToolResource::collection($tools), 200);
    }

    /**
     * Store a new tool
     *
     * @param StoreToolRequest $request
     * @return JsonResponse
     */
    public function store(StoreToolRequest $request) : JsonResponse
    {
        DB::beginTransaction();
        try {
            $tool = auth()->user()->tools()->create($request->validated());

            $tags = explode(' ', $request->input('tags'));
            $tags = array_map(fn ($tag) => trim($tag), $tags);

            $tool->tags()->create($tags);

            DB::commit();
            return response()->json(new ToolResource($tool), 201);
        } catch (Exception $e) {
            DB::rollBack();
            Log::error($e->getMessage);
            return response()->json(['message' => 'An error occured while storing your tool.'], 500);
        }
    }

    /**
     * Delete a tool
     *
     * @param Tool $tool
     * @return JsonResponse
     */
    public function delete(Tool $tool) : JsonResponse
    {
        $tool->delete();

        return response()->json([], 204);
    }
}
