<?php

namespace App\Http\Controllers;

use App\Http\Requests\GalleryRequest;
use App\Http\Resources\GalleryResource;
use App\Models\Gallery;
use App\Traits\HandlesFileUploads;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class GalleryController extends Controller
{
    use HandlesFileUploads;

    public function index(): AnonymousResourceCollection
    {
        $galleries = Gallery::latest()->get();
        return GalleryResource::collection($galleries);
    }

    public function store(GalleryRequest $request): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $data['image_path'] = $this->uploadFile($request->file('image'), 'galleries');
        }

        $gallery = Gallery::create($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Image added to gallery',
            'data' => new GalleryResource($gallery),
        ], 201);
    }

    public function show(Gallery $gallery): GalleryResource
    {
        return new GalleryResource($gallery);
    }

    public function update(GalleryRequest $request, Gallery $gallery): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $data['image_path'] = $this->updateFile($request->file('image'), 'galleries', $gallery->image_path);
        }

        $gallery->update($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Gallery item updated',
            'data' => new GalleryResource($gallery),
        ]);
    }

    public function destroy(Gallery $gallery): JsonResponse
    {
        $this->deleteFile($gallery->image_path);
        $gallery->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Gallery item deleted',
        ]);
    }
}
