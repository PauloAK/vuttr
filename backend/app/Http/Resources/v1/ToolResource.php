<?php

namespace App\Http\Resources\v1;

use Illuminate\Http\Resources\Json\JsonResource;

class ToolResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'link' => $this->link,
            'description' => $this->description,
            $this->mergeWhen($this->resource->relationLoaded('tags'), [
                'tags' => $this->tags->pluck('name')->toArray()
            ]),
            'created_at'    => $this->created_at,
            'updated_at'    => $this->updated_at
        ];
    }
}
