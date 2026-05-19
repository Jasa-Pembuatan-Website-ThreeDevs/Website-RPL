<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait HandlesFileUploads
{
    /**
     * Upload a file and return the path.
     */
    public function uploadFile(UploadedFile $file, string $directory): string
    {
        return $file->store($directory, 'public');
    }

    /**
     * Delete a file from storage.
     */
    public function deleteFile(?string $path): void
    {
        if ($path && Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
        }
    }

    /**
     * Update a file: delete the old one and upload the new one.
     */
    public function updateFile(UploadedFile $file, string $directory, ?string $oldPath = null): string
    {
        $this->deleteFile($oldPath);
        return $this->uploadFile($file, $directory);
    }
}
