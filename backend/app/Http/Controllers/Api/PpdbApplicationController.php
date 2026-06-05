<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PpdbApplicationRequest;
use App\Models\PpdbApplication;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class PpdbApplicationController extends Controller
{
    public function store(PpdbApplicationRequest $request): JsonResponse
    {
        $payload = $request->validatedPayload();

        $application = DB::transaction(function () use ($payload) {
            return PpdbApplication::create($payload);
        });

        return response()->json(["message" => "Application submitted", "data" => $application], 201);
    }
}
