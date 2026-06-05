<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HallOfFameRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $isUpdate = $this->isMethod('PUT') || $this->isMethod('PATCH');

        return [
            'name' => 'required|string|max:255',
            'class_year' => 'nullable|string|max:50',
            'role' => 'nullable|string|max:255',
            'company' => 'nullable|string|max:255',
            'location' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'color' => 'nullable|string|max:30',
            'is_active' => 'nullable|boolean',
            'image' => ($isUpdate ? 'nullable' : 'nullable') . '|image|mimes:jpeg,png,jpg,gif,webp|max:5120',
        ];
    }
}

