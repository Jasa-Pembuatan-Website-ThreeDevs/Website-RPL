<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Traits\HandlesFileUploads;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentProfileController extends Controller
{
    use HandlesFileUploads;

    /**
     * Get the current student's profile.
     */
    public function show(Request $request)
    {
        $user = $request->user()->load('student');

        return response()->json([
            'status' => 'success',
            'message' => 'Profile retrieved successfully',
            'data' => $user
        ]);
    }

    /**
     * Update or create the student's profile.
     */
    public function updateOrCreate(Request $request)
    {
        $user = $request->user();

        $validator = Validator::make($request->all(), [
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'grade_level' => 'required|in:10,11,12',
            'specialty' => 'required|string|max:255',
            'github_url' => 'nullable|url|max:255',
            'linkedin_url' => 'nullable|url|max:255',
            'bio' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 422);
        }

        $studentData = $validator->validated();
        $student = $user->student;

        if ($request->hasFile('avatar')) {
            $oldAvatar = $student ? $student->avatar : null;
            $studentData['avatar'] = $this->updateFile($request->file('avatar'), 'avatars', $oldAvatar);
        }

        $student = Student::updateOrCreate(
            ['user_id' => $user->id],
            $studentData
        );

        return response()->json([
            'status' => 'success',
            'message' => 'Profile updated successfully',
            'data' => $student->load('user')
        ]);
    }
}
