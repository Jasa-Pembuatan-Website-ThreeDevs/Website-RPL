<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Traits\HandlesFileUploads;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PostController extends Controller
{
    use HandlesFileUploads;

    public function index(Request $request): AnonymousResourceCollection
    {
        $query = Post::latest();

        // If not authenticated, only show published posts
        if (!auth('sanctum')->check()) {
            $query->where('is_published', true);
        }

        $posts = $query->paginate($request->get('per_page', 10));
        return PostResource::collection($posts);
    }

    public function store(PostRequest $request): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $data['image_path'] = $this->uploadFile($request->file('image'), 'posts');
        }

        $post = Post::create($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Post created successfully',
            'data' => new PostResource($post),
        ], 201);
    }

    public function show(Post $post): PostResource
    {
        if (!$post->is_published && !auth('sanctum')->check()) {
            abort(404);
        }

        return new PostResource($post);
    }

    public function update(PostRequest $request, Post $post): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $data['image_path'] = $this->updateFile($request->file('image'), 'posts', $post->image_path);
        }

        $post->update($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Post updated successfully',
            'data' => new PostResource($post),
        ]);
    }

    public function destroy(Post $post): JsonResponse
    {
        $this->deleteFile($post->image_path);
        $post->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Post deleted successfully',
        ]);
    }
}
