<?php

namespace App\Modules\User\Models;

use Zizaco\Entrust\EntrustPermission;

use Illuminate\Database\Eloquent\Model;

class Permission extends EntrustPermission
{
    protected $fillable = ['name', 'display_name', 'description'];

}
