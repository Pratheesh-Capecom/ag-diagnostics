<?php

namespace App\Models\Website;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Careers extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = [
        'full_name',
        'mobile',
        'email',
        'apply',
        'file',
        
    ];
}
