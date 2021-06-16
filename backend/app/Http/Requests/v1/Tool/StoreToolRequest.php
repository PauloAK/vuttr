<?php

namespace App\Http\Requests\v1\Tool;

use Illuminate\Foundation\Http\FormRequest;

class StoreToolRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'max:120'],
            'link' => ['required', 'url'],
            'description' => ['required'],
            'tags' => ['required']
        ];
    }
}
