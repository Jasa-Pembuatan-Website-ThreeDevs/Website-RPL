<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\DudikaController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Authentication Routes
Route::post('/login', [AuthController::class, 'login']);

// Public Routes
Route::get('/teachers', [TeacherController::class, 'index']);
Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{post:slug}', [PostController::class, 'show']);
Route::get('/galleries', [GalleryController::class, 'index']);
Route::post('/messages', [MessageController::class, 'store']);

Route::get('/students', [StudentController::class, 'index']);
Route::get('/students/{student}', [StudentController::class, 'show']);
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{project}', [ProjectController::class, 'show']);
Route::get('/dudika', [DudikaController::class, 'index']);
Route::get('/dudika/{dudika}', [DudikaController::class, 'show']);

// Admin Protected Routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', function (Request $request) {
        return $request->user();
    });

    // Teacher Management
    Route::apiResource('teachers', TeacherController::class)->except(['index']);

    // Post Management
    Route::apiResource('posts', PostController::class)->except(['index', 'show']);

    // Gallery Management
    Route::apiResource('galleries', GalleryController::class)->except(['index']);

    // Message Management
    Route::get('/messages', [MessageController::class, 'index']);
    Route::get('/messages/{message}', [MessageController::class, 'show']);
    Route::delete('/messages/{message}', [MessageController::class, 'destroy']);
    Route::patch('/messages/{message}/read', [MessageController::class, 'markAsRead']);
});
