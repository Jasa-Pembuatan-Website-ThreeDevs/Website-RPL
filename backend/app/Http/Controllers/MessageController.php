<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageRequest;
use App\Http\Resources\MessageResource;
use App\Models\Message;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Get all messages (Admin)
     */
    public function index(): JsonResponse
    {
        $messages = Message::latest()->get();
        return $this->sendResponse(
            MessageResource::collection($messages),
            'Messages retrieved successfully'
        );
    }

    /**
     * Store a new contact message
     */
    public function store(MessageRequest $request): JsonResponse
    {
        // Fields: sender_name, email, subject, message
        $message = Message::create($request->validated());

        return $this->sendResponse(
            new MessageResource($message),
            'Message sent successfully! We will get back to you soon.',
            201
        );
    }

    /**
     * Show message detail
     */
    public function show(Message $message): JsonResponse
    {
        if (!$message->is_read) {
            $message->update(['is_read' => true]);
        }

        return $this->sendResponse(
            new MessageResource($message),
            'Message details retrieved'
        );
    }

    /**
     * Delete message
     */
    public function destroy(Message $message): JsonResponse
    {
        $message->delete();

        return $this->sendResponse(
            null,
            'Message deleted successfully'
        );
    }
}
