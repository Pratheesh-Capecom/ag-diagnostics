<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ManagePackage extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'package',
        'package_code',
        'alias_name',
        'pre_instruction',
        'report_delivery',
        'home_collection',
        'description',
        'condition_id',
        'organ_id',
        'specialty_id',
        'tests_included',
        'status',
    ];
    public function condition()
    {
        return $this->belongsTo(Condition::class,'condition_id','id');
    }
    public function organ()
    {
        return $this->belongsTo(Organ::class,'organ_id','id');
    }
    public function specialty()
    {
        return $this->belongsTo(Speciality::class,'specialty_id','id');
    }
    
    
}
