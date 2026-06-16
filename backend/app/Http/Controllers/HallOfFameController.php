<?php

namespace App\Http\Controllers;

use App\Http\Requests\HallOfFameRequest;
use App\Http\Resources\HallOfFameResource;
use App\Models\HallOfFame;
use App\Traits\HandlesFileUploads;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class HallOfFameController extends Controller
{
    use HandlesFileUploads;

    public function index(Request $request): JsonResponse
    {
        $onlyActive = filter_var($request->query('active', '1'), FILTER_VALIDATE_BOOLEAN);

        $q = HallOfFame::query()->latest();
        if ($onlyActive) {
            $q->where('is_active', true);
        }

        $items = $q->get();

        return $this->sendResponse(
            HallOfFameResource::collection($items),
            'Hall of fame retrieved successfully'
        );
    }

    public function store(HallOfFameRequest $request): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $data['image_path'] = $this->uploadFile($request->file('image'), 'hall_of_fame');
        }

        $item = HallOfFame::create($data);

        return $this->sendResponse(
            new HallOfFameResource($item),
            'Hall of fame created successfully',
            201
        );
    }

    public function show(HallOfFame $hall_of_fame): JsonResponse
    {
        return $this->sendResponse(
            new HallOfFameResource($hall_of_fame),
            'Hall of fame details retrieved'
        );
    }

    public function update(HallOfFameRequest $request, HallOfFame $hall_of_fame): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $data['image_path'] = $this->updateFile($request->file('image'), 'hall_of_fame', $hall_of_fame->image_path);
        }

        $hall_of_fame->update($data);

        return $this->sendResponse(
            new HallOfFameResource($hall_of_fame),
            'Hall of fame updated successfully'
        );
    }

    public function destroy(HallOfFame $hall_of_fame): JsonResponse
    {
        if ($hall_of_fame->image_path) {
            $this->deleteFile($hall_of_fame->image_path);
        }

        $hall_of_fame->delete();

        return $this->sendResponse(
            null,
            'Hall of fame deleted successfully'
        );
    }
}

