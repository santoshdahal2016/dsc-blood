<?php

namespace App\Modules\Blood\Models;

use Illuminate\Database\Eloquent\Model;

class Blood extends Model {

    protected $fillable = ['name', 'phone'];


    public function user()
    {
        return $this->hasOne('App\Modules\User\Models\User', 'phone');
    }

}
