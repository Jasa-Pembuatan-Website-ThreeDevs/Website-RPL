<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Traits\HandlesFileUploads;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PostController extends Controller
{
    use HandlesFileUploads;

    /**
     * Get all published posts
     */
    public function index(Request $request): JsonResponse
    {
        $posts = Post::where('is_published', true)
            ->latest()
            ->paginate($request->get('per_page', 10));

        return $this->sendResponse(
            PostResource::collection($posts)->response()->getData(true),
            'Posts retrieved successfully'
        );
    }

    /**
     * Get single post by slug
     */
    public function show($slug): JsonResponse
    {
        $post = Post::where('slug', $slug)
            ->where('is_published', true)
            ->firstOrFail();

        return $this->sendResponse(
            new PostResource($post),
            'Post details retrieved successfully'
        );
    }

    /**
     * Store new post (Admin only usually, but requested as example)
     */
    public function store(PostRequest $request): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $data['image_path'] = $this->uploadFile($request->file('image'), 'posts');
        }

        $post = Post::create($data);

        return $this->sendResponse(
            new PostResource($post),
            'Post created successfully',
            201
        );
    }

    /**
     * Update post
     */
    public function update(PostRequest $request, Post $post): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $data['image_path'] = $this->updateFile($request->file('image'), 'posts', $post->image_path);
        }

        $post->update($data);

        return $this->sendResponse(
            new PostResource($post),
            'Post updated successfully'
        );
    }

    /**
     * Delete post
     */
    public function destroy(Post $post): JsonResponse
    {
        if ($post->image_path) {
            $this->deleteFile($post->image_path);
        }
        
        $post->delete();

        return $this->sendResponse(
            null,
            'Post deleted successfully'
        );
    }
}
