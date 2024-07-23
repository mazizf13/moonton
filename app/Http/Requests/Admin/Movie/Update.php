<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Update extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        return [
            'name' => 'nullable|string|max:255'.$this->movie->id,
            'category' => 'nullable',
            'video_url' => 'nullable|url',
            'thumbnail' => 'nullable|image',
            'rating' => 'nullable|numeric|min:0|max:10',
            'is_featured' => 'nullable|boolean',
        ];
    }
}
