<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class ManageTest extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'test',
        'test_code',
        'alias_name',
        'type',
        'category_id',
        'pre_instruction',
        'report_delivery',
        'home_collection',
        'description',
        'status',
    ];

}
