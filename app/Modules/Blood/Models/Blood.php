<?php

namespace App\Modules\Blood\Models;

use Illuminate\Database\Eloquent\Model;

class Blood extends Model {

    protected $fillable = ['name', 'phone', 'blood_group','parent_user_id'];


    public function parent()
    {
        return $this->hasOne('App\Modules\User\Models\User', 'parent_user_id');
    }

    public function user()
    {
        return $this->hasOne('App\Modules\User\Models\User', 'phone');
    }

}
