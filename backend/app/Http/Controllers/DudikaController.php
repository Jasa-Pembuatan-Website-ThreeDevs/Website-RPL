<?php

namespace App\Http\Controllers;

use App\Models\DudikaPartner;
use App\Http\Resources\DudikaResource;
use Illuminate\Http\Request;

class DudikaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return DudikaResource::collection(DudikaPartner::all());
    }

    /**
     * Display the specified resource.
     */
    public function show(DudikaPartner $dudika)
    {
        return new DudikaResource($dudika);
    }
}
