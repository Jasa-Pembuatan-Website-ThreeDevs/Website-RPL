<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DudikaPartner extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_name',
        'logo_image',
        'description',
        'internship_quota',
        'website_url',
    ];
}
