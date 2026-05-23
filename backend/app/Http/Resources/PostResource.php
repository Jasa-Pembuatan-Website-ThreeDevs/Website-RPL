<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'content' => $this->content,
            'image_url' => $this->image_path ? asset(Storage::url($this->image_path)) : null,
            'is_published' => (bool) $this->is_published,
            'author' => $this->whenLoaded('user', function() {
                return [
                    'name' => $this->user->name
                ];
            }),
            'published_at' => $this->created_at->format('d M Y H:i'),
            'human_date' => $this->created_at->diffForHumans(),
        ];
    }
}
