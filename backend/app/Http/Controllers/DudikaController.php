<?php

namespace App\Http\Controllers;

use App\Models\DudikaPartner;
use App\Http\Resources\DudikaResource;
use Illuminate\Http\JsonResponse;

class DudikaController extends Controller
{
    /**
     * Display a listing of partners.
     */
    public function index(): JsonResponse
    {
        return $this->sendResponse(
            DudikaResource::collection(DudikaPartner::all()),
            'Partners retrieved successfully'
        );
    }

    /**
     * Display the specified partner.
     */
    public function show(DudikaPartner $partner): JsonResponse
    {
        return $this->sendResponse(
            new DudikaResource($partner),
            'Partner details retrieved'
        );
    }

    /**
     * Store partner (Admin)
     */
    public function store(\Illuminate\Http\Request $request): JsonResponse
    {
        // Simple store for demo/completeness
        $partner = DudikaPartner::create($request->all());
        return $this->sendResponse(new DudikaResource($partner), 'Partner created', 201);
    }

    /**
     * Update partner
     */
    public function update(\Illuminate\Http\Request $request, DudikaPartner $partner): JsonResponse
    {
        $partner->update($request->all());
        return $this->sendResponse(new DudikaResource($partner), 'Partner updated');
    }

    /**
     * Delete partner
     */
    public function destroy(DudikaPartner $partner): JsonResponse
    {
        $partner->delete();
        return $this->sendResponse(null, 'Partner deleted');
    }
}
