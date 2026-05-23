<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Traits\HandlesFileUploads;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class StudentProjectController extends Controller
{
    use HandlesFileUploads;

    /**
     * Get all projects for the authenticated student.
     */
    public function index(Request $request)
    {
        $student = $request->user()->student;

        if (!$student) {
            return response()->json([
                'status' => 'error',
                'message' => 'Student profile not found',
            ], 404);
        }

        $projects = $student->projects()->with('category')->get();

        return response()->json([
            'status' => 'success',
            'message' => 'Projects retrieved successfully',
            'data' => $projects
        ]);
    }

    /**
     * Store a new project.
     */
    public function store(Request $request)
    {
        $student = $request->user()->student;

        if (!$student) {
            return response()->json([
                'status' => 'error',
                'message' => 'Student profile not found. Please complete your profile first.',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'thumbnail_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'tech_stack' => 'required|array',
            'demo_url' => 'nullable|url|max:255',
            'repo_url' => 'nullable|url|max:255',
            'category_id' => 'required|exists:categories,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 422);
        }

        $data = $validator->validated();
        $data['student_id'] = $student->id;
        $data['slug'] = Str::slug($data['title']) . '-' . Str::random(5);

        if ($request->hasFile('thumbnail_image')) {
            $data['thumbnail_image'] = $this->uploadFile($request->file('thumbnail_image'), 'projects');
        }

        $project = Project::create($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Project created successfully',
            'data' => $project->load('category')
        ], 201);
    }

    /**
     * Update a project.
     */
    public function update(Request $request, $id)
    {
        $student = $request->user()->student;
        $project = Project::where('student_id', $student->id)->findOrFail($id);

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'thumbnail_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'tech_stack' => 'sometimes|required|array',
            'demo_url' => 'nullable|url|max:255',
            'repo_url' => 'nullable|url|max:255',
            'category_id' => 'sometimes|required|exists:categories,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 422);
        }

        $data = $validator->validated();

        if (isset($data['title']) && $data['title'] !== $project->title) {
            $data['slug'] = Str::slug($data['title']) . '-' . Str::random(5);
        }

        if ($request->hasFile('thumbnail_image')) {
            $data['thumbnail_image'] = $this->updateFile($request->file('thumbnail_image'), 'projects', $project->thumbnail_image);
        }

        $project->update($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Project updated successfully',
            'data' => $project->load('category')
        ]);
    }

    /**
     * Delete a project.
     */
    public function destroy(Request $request, $id)
    {
        $student = $request->user()->student;
        $project = Project::where('student_id', $student->id)->findOrFail($id);

        $this->deleteFile($project->thumbnail_image);
        $project->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Project deleted successfully'
        ]);
    }
}
