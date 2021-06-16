<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'tool_id'
    ];

    /**
     * Owner tool
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function tool() : \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Tool::class);
    }
}
