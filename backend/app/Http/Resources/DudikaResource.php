<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

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
        if (!$this->logo_image) {
            return null;
        }

        if (str_starts_with($this->logo_image, 'http://') || str_starts_with($this->logo_image, 'https://')) {
            return $this->logo_image;
        }

        return asset(Storage::url($this->logo_image));
    }
}
