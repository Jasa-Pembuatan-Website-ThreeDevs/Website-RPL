<?php

namespace App\Http\Controllers;

use App\Http\Requests\TeacherRequest;
use App\Http\Resources\TeacherResource;
use App\Models\Teacher;
use App\Traits\HandlesFileUploads;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class TeacherController extends Controller
{
    use HandlesFileUploads;

    public function index(): AnonymousResourceCollection
    {
        $teachers = Teacher::latest()->get();
        return TeacherResource::collection($teachers);
    }

    public function store(TeacherRequest $request): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('photo')) {
            $data['photo_path'] = $this->uploadFile($request->file('photo'), 'teachers');
        }

        $teacher = Teacher::create($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Teacher created successfully',
            'data' => new TeacherResource($teacher),
        ], 201);
    }

    public function show(Teacher $teacher): TeacherResource
    {
        return new TeacherResource($teacher);
    }

    public function update(TeacherRequest $request, Teacher $teacher): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('photo')) {
            $data['photo_path'] = $this->updateFile($request->file('photo'), 'teachers', $teacher->photo_path);
        }

        $teacher->update($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Teacher updated successfully',
            'data' => new TeacherResource($teacher),
        ]);
    }

    public function destroy(Teacher $teacher): JsonResponse
    {
        $this->deleteFile($teacher->photo_path);
        $teacher->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Teacher deleted successfully',
        ]);
    }
}
