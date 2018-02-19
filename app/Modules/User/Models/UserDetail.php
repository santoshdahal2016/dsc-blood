<?php

namespace App\Modules\User\Models;
use Illuminate\Database\Eloquent\Model;



class UserDetail extends Model
{


    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users_details';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['user_id', 'primary_address', 'secondary_address','blood_group','donate','image','weight','date_of_birth','register_ip_address','last_ip_address','register_lat_address','register_lon_address'];




    public function user()
    {
        return $this->hasOne('App\Modules\User\Models\User', 'user_id');
    }


}
