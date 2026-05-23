<?php

namespace App\Http\Controllers;

use App\Http\Requests\TeacherRequest;
use App\Http\Resources\TeacherResource;
use App\Models\Teacher;
use App\Traits\HandlesFileUploads;
use Illuminate\Http\JsonResponse;

class TeacherController extends Controller
{
    use HandlesFileUploads;

    public function index(): JsonResponse
    {
        $teachers = Teacher::latest()->get();
        return $this->sendResponse(
            TeacherResource::collection($teachers),
            'Teachers retrieved successfully'
        );
    }

    public function store(TeacherRequest $request): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('photo')) {
            $data['photo_path'] = $this->uploadFile($request->file('photo'), 'teachers');
        }

        $teacher = Teacher::create($data);

        return $this->sendResponse(
            new TeacherResource($teacher),
            'Teacher created successfully',
            201
        );
    }

    public function show(Teacher $teacher): JsonResponse
    {
        return $this->sendResponse(
            new TeacherResource($teacher),
            'Teacher details retrieved'
        );
    }

    public function update(TeacherRequest $request, Teacher $teacher): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('photo')) {
            $data['photo_path'] = $this->updateFile($request->file('photo'), 'teachers', $teacher->photo_path);
        }

        $teacher->update($data);

        return $this->sendResponse(
            new TeacherResource($teacher),
            'Teacher updated successfully'
        );
    }

    public function destroy(Teacher $teacher): JsonResponse
    {
        if ($teacher->photo_path) {
            $this->deleteFile($teacher->photo_path);
        }
        $teacher->delete();

        return $this->sendResponse(
            null,
            'Teacher deleted successfully'
        );
    }
}
