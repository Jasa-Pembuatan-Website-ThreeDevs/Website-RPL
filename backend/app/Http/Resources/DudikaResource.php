<?php

namespace App\Http\Resources;

use App\Support\MediaUrl;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DudikaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'company_name' => $this->company_name,
            'logo_image' => $this->logo_image,
            'logo_url' => $this->resolveLogoUrl(),
            'description' => $this->description,
            'internship_quota' => $this->internship_quota,
            'website_url' => $this->website_url,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }

    private function resolveLogoUrl(): ?string
    {
        return MediaUrl::fromPath($this->logo_image);
    }
}
