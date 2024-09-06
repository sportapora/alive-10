<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    use HasFactory;

    protected $fillable = ['category', 'image'];

    protected function casts(): array
    {
        return [
            'image' => 'array',
        ];
    }
}
