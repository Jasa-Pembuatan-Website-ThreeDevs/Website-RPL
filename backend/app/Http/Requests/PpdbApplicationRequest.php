<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PpdbApplicationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'fullName' => 'required|string|max:255',
            'nisn' => 'nullable|string|max:50',
            'schoolOrigin' => 'nullable|string|max:255',
            'whatsapp' => 'nullable|string|max:50',
            'reason' => 'nullable|string',
        ];
    }

    public function validatedPayload(): array
    {
        $data = $this->validated();

        return [
            'full_name' => $data['fullName'] ?? null,
            'nisn' => $data['nisn'] ?? $data['NISN'] ?? null,
            'school_origin' => $data['schoolOrigin'] ?? null,
            'whatsapp' => $data['whatsapp'] ?? null,
            'reason' => $data['reason'] ?? null,
        ];
    }
}
