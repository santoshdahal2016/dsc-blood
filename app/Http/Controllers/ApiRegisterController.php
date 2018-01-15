<?php
/**
 * Created by PhpStorm.
 * User: santosh
 * Date: 1/6/18
 * Time: 8:51 AM
 */

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Modules\User\Models\User;
use App\Modules\User\Models\UserDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Passport\Client;

class ApiRegisterController extends controller
{
    use IssueTokenTrait;
    private $client;
    public function __construct(){
        $this->client = Client::find(6);
    }
    public function register(Request $request){



        $this->validate($request, [
            'username' => 'required|min:3',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:4',
        ]);
        $request['name'] = $request->username;

        $request['roles_id'] = 2;
        $user_input = $request->all();
        $user_input['password'] = bcrypt($user_input['password']);


        $created_user = User::create($user_input);
        $created_user->roles()->attach($request['roles_id']);

        $detail['user_id'] =$created_user->id;
        $detail['primary_address'] = $request->primary;
        $detail['secondary_address'] = $request->secondary;
        $detail['donate'] = $request->help;
        $detail['blood_group'] = $request->blood;

        UserDetail::create($detail);


        return $this->issueToken($request, 'password');
    }
}