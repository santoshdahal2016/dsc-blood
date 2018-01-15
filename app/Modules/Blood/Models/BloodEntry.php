<?php
/**
 * Created by PhpStorm.
 * User: santosh
 * Date: 1/15/18
 * Time: 12:27 PM
 */

namespace App\Modules\Blood\Models;


class BloodEntry extends Model {

    protected  $table = "blood_entry";
    protected $fillable = ['phone_id', 'blood_group','parent_user_id'];


    public function parent()
    {
        return $this->hasOne('App\Modules\User\Models\User', 'parent_user_id');
    }

}