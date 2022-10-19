<?php

namespace App\Models\Website;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Admin\Area;
use Illuminate\Database\Eloquent\SoftDeletes;

class Packages extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = [
        'name',
        'mobile',
        'email',
        'area_id',
        'visit',
        'test',
        'date',
        'message',
    ];
    public function areas()
    {
        return $this->belongsTo(Area::class,'area_id','id');
    }
   
}
