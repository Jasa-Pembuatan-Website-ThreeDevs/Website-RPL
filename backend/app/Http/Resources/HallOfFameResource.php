<?php

namespace App\Http\Resources;

use App\Support\MediaUrl;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HallOfFameResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'class_year' => $this->class_year,
            'role' => $this->role,
            'company' => $this->company,
            'location' => $this->location,
            'description' => $this->description,
            'color' => $this->color,
            'image_url' => MediaUrl::fromPath($this->image_path),
            'is_active' => (bool) $this->is_active,
            'created_at' => $this->created_at,
        ];
    }
}

