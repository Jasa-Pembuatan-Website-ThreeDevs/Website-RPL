<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Resources\ProjectResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Get all projects with student and category
     */
    public function index(Request $request): JsonResponse
    {
        $projects = Project::with(['student.user', 'category'])
            ->latest()
            ->paginate($request->get('per_page', 10));

        return $this->sendResponse(
            ProjectResource::collection($projects)->response()->getData(true),
            'Projects retrieved successfully'
        );
    }

    /**
     * Get project by slug
     */
    public function show($slug): JsonResponse
    {
        $project = Project::with(['student.user', 'category'])
            ->where('slug', $slug)
            ->firstOrFail();

        return $this->sendResponse(
            new ProjectResource($project),
            'Project details retrieved successfully'
        );
    }
}
