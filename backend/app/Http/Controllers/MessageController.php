<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageRequest;
use App\Http\Resources\MessageResource;
use App\Models\Message;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class MessageController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        $messages = Message::latest()->get();
        return MessageResource::collection($messages);
    }

    public function store(MessageRequest $request): JsonResponse
    {
        $message = Message::create($request->validated());

        return response()->json([
            'status' => 'success',
            'message' => 'Message sent successfully',
            'data' => new MessageResource($message),
        ], 201);
    }

    public function show(Message $message): MessageResource
    {
        // Auto mark as read when viewed by admin
        if (!$message->is_read) {
            $message->update(['is_read' => true]);
        }

        return new MessageResource($message);
    }

    public function destroy(Message $message): JsonResponse
    {
        $message->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Message deleted successfully',
        ]);
    }

    public function markAsRead(Message $message): JsonResponse
    {
        $message->update(['is_read' => true]);

        return response()->json([
            'status' => 'success',
            'message' => 'Message marked as read',
            'data' => new MessageResource($message),
        ]);
    }
}
