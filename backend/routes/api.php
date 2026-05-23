<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\DudikaController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\StudentProfileController;
use App\Http\Controllers\StudentProjectController;
use App\Http\Controllers\PublicApiController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes - Headless CMS Profil Jurusan
|--------------------------------------------------------------------------
*/

/**
 * Authentication Routes
 */
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

/**
 * Public Routes (Frontend Showcase)
 */
Route::get('/public/projects', [PublicApiController::class, 'projects']);
Route::get('/public/categories', [PublicApiController::class, 'categories']);

// Legacy Public Routes
Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{slug}', [PostController::class, 'show']);
Route::get('/teachers', [TeacherController::class, 'index']);
Route::get('/galleries', [GalleryController::class, 'index']);
Route::get('/partners', [DudikaController::class, 'index']);
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{project:slug}', [ProjectController::class, 'show']);
Route::post('/messages', [MessageController::class, 'store']);

/**
 * Protected Routes (Student Dashboard & Admin Management)
 */
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', fn() => auth()->user());

    // Student Profile Management
    Route::get('/student/profile', [StudentProfileController::class, 'show']);
    Route::post('/student/profile', [StudentProfileController::class, 'updateOrCreate']);

    // Student Project Management
    Route::get('/student/projects', [StudentProjectController::class, 'index']);
    Route::post('/student/projects', [StudentProjectController::class, 'store']);
    Route::put('/student/projects/{id}', [StudentProjectController::class, 'update']);
    Route::delete('/student/projects/{id}', [StudentProjectController::class, 'destroy']);

    // CMS Management (Admin Full CRUD)
    Route::apiResource('posts', PostController::class)->except(['index', 'show']);
    Route::apiResource('teachers', TeacherController::class)->except(['index']);
    Route::apiResource('galleries', GalleryController::class)->except(['index']);
    Route::apiResource('projects', ProjectController::class)->except(['index', 'show']);
    Route::apiResource('partners', DudikaController::class)->except(['index']);

    // Message Management
    Route::get('/messages', [MessageController::class, 'index']);
    Route::get('/messages/{message}', [MessageController::class, 'show']);
    Route::delete('/messages/{message}', [MessageController::class, 'destroy']);
});
