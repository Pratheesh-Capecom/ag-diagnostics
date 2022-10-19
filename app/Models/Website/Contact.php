<?php

namespace App\Models\Website;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Contact extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = [
        'full_name',
        'mobile',
        'email',
        'message',
        'dnc_ndnc',
        'status',
    ];
}
