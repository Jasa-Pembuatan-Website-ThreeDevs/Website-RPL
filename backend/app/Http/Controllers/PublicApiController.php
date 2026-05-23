<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Category;
use Illuminate\Http\Request;

class PublicApiController extends Controller
{
    /**
     * Get all projects for the public showcase.
     */
    public function projects(Request $request)
    {
        $query = Project::with(['student.user', 'category']);

        // Filter by category if provided
        if ($request->has('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        // Filter by grade level if provided
        if ($request->has('grade_level')) {
            $query->whereHas('student', function ($q) use ($request) {
                $q->where('grade_level', $request->grade_level);
            });
        }

        $projects = $query->latest()->get();

        return response()->json([
            'status' => 'success',
            'message' => 'Public projects retrieved successfully',
            'data' => $projects
        ]);
    }

    /**
     * Get all categories for filtering.
     */
    public function categories()
    {
        $categories = Category::all();

        return response()->json([
            'status' => 'success',
            'message' => 'Categories retrieved successfully',
            'data' => $categories
        ]);
    }
}
