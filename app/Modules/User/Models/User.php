<?php

namespace App\Modules\User\Models;

use Illuminate\Auth\Authenticatable;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
//use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
//use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Notifications\Notifiable;
use Zizaco\Entrust\Traits\EntrustUserTrait;


class User extends Model implements AuthenticatableContract,
    CanResetPasswordContract
{
    use EntrustUserTrait, Authenticatable, CanResetPassword, Notifiable;


    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'email', 'password'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    public function event()
    {
        return $this->hasMany('App\Modules\Event\Models\Event', 'user_id');
    }

    public function question()
    {
        return $this->hasManyThrough('App\Modules\Question\Models\Question', 'App\Modules\Event\Models\Event', 'user_id', 'event_id', '');

    }

    public function lottery_entry()
    {
        return $this->hasManyThrough('App\Modules\Lottery\Models\Lottery', 'App\Modules\Event\Models\Event', 'user_id', 'event_id', '');

    }

    public function prize()
    {
        return $this->hasManyThrough('App\Modules\Prize\Models\Prize', 'App\Modules\Event\Models\Event', 'user_id', 'event_id', '');

    }

    public function role()
    {
        return $this->belongsToMany('App\Modules\User\Models\Role');

    }

    public function sms_credential()
    {
        return $this->hasOne('App\Modules\Sms\Models\Sms_credentials');
    }

    public function sms_record()
    {
        return $this->hasOne('App\Modules\Sms\Models\Sms_records');
    }

    public function email_credential()
    {
        return $this->hasOne('App\Modules\Email\Models\Email_credentials');
    }

    public function email_record()
    {
        return $this->hasOne('App\Modules\Email\Models\Email_records');
    }


}
