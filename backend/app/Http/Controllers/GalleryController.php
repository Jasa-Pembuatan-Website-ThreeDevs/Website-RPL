<?php

namespace App\Http\Controllers;

use App\Http\Requests\GalleryRequest;
use App\Http\Resources\GalleryResource;
use App\Models\Gallery;
use App\Traits\HandlesFileUploads;
use Illuminate\Http\JsonResponse;

class GalleryController extends Controller
{
    use HandlesFileUploads;

    public function index(): JsonResponse
    {
        $galleries = Gallery::latest()->get();
        return $this->sendResponse(
            GalleryResource::collection($galleries),
            'Gallery items retrieved successfully'
        );
    }

    public function store(GalleryRequest $request): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $data['image_path'] = $this->uploadFile($request->file('image'), 'galleries');
        }

        $gallery = Gallery::create($data);

        return $this->sendResponse(
            new GalleryResource($gallery),
            'Image added to gallery successfully',
            201
        );
    }

    public function show(Gallery $gallery): JsonResponse
    {
        return $this->sendResponse(
            new GalleryResource($gallery),
            'Gallery item details retrieved'
        );
    }

    public function update(GalleryRequest $request, Gallery $gallery): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $data['image_path'] = $this->updateFile($request->file('image'), 'galleries', $gallery->image_path);
        }

        $gallery->update($data);

        return $this->sendResponse(
            new GalleryResource($gallery),
            'Gallery item updated successfully'
        );
    }

    public function destroy(Gallery $gallery): JsonResponse
    {
        if ($gallery->image_path) {
            $this->deleteFile($gallery->image_path);
        }
        $gallery->delete();

        return $this->sendResponse(
            null,
            'Gallery item deleted successfully'
        );
    }
}
