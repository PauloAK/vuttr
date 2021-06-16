<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\v1\Tool\StoreToolRequest;
use App\Http\Resources\v1\ToolResource;
use App\Models\Tool;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

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
        $query = auth()->user()->tools()->with('tags');
        
        if ($request->has('tag')) {
            $query->whereHas('tags', function($query) use ($request) {
                $query->where('tags.name', 'ilike', $request->input('tag'));
            });
        }

        $tools = $query->get();

        return ToolResource::collection($tools)->response()->setStatusCode(201);
    }

    /**
     * Store a new tool
     *
     * @param StoreToolRequest $request
     * @return JsonResponse
     */
    public function store(StoreToolRequest $request) : JsonResponse
    {
        $tool = auth()->user()->tools()->create($request->validated());

        $tags = explode(' ', $request->input('tags'));
        $tags = array_map(function($tag){
            return trim($tag);
        }, $tags);

        $tool->tags()->create($tags);

        return (new ToolResource($tool))->response()->setStatusCode(200);
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
