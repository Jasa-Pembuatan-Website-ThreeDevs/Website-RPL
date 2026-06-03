<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PpdbApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'nisn',
        'school_origin',
        'whatsapp',
        'reason',
        'status',
    ];
}
