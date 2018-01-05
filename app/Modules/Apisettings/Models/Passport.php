<?php

namespace App\Modules\Apisettings\Models;

use Illuminate\Database\Eloquent\Model;

class Passport extends Model
{
    protected $table = 'oauth_clients';
    protected $fillable=['id','user_id','name','secret','redirect','created_at','updated_at'];
}
