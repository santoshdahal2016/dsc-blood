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

use Carbon\Carbon;

use App\Modules\Blood\Models\Blood;
use App\Modules\Blood\Models\BloodEntry;


class ApiRegisterController extends controller
{
    use IssueTokenTrait;
    private $client;
    public function __construct(){
        $this->client = Client::find(2);
    }
    public function register(Request $request){



        $this->validate($request, [
            'username' => 'required|min:3',
            'email' => 'required|email|unique:users',
            'phone' => 'required|max:10|min:10',
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
        if($request->help == true){
                    $detail['donate'] = 1;

        }else{
                    $detail['donate'] = 0;

        }
             if($request->blood == 'o+'){
                   $detail['blood_group'] =  'O+';

        }elseif($request->blood == 'o-'){
                   $detail['blood_group'] =  'O-';
        }else{
                    $detail['blood_group'] = $request->blood;

        }

        UserDetail::create($detail);

        $data1['name'] = $request->username;
        $data1['phone'] = $request->phone;

        if($request->blood == 'o+'){
            $data2['blood_group'] = 'O+';
            $data1['blood_group'] = 'O+';
        }elseif($request->blood == 'o-'){
            $data2['blood_group'] = 'O-';
            $data1['blood_group'] = 'O-';
        }else{
            $data2['blood_group'] = $request->blood;
            $data1['blood_group'] = $request->blood;
        }
     
        $data2['parent_user_id'] = $created_user->id;
        $blood = Blood::where('phone', $request->phone)->first();

        if (isset($blood)) {
            $data2['phone_id'] = $blood->id;
            $already = BloodEntry::where('phone_id', $blood->id)->where('parent_user_id', $created_user->id)->first();
            if (isset($already)) {
                $already->fill($data2)->save();
            } else {
                BloodEntry::create($data2);
            }
        } else {

            $data2['parent_user_id'] = $created_user->id;
            $blood = Blood::create($data1);
            $data2['phone_id'] = $blood->id;

            if ($blood) {

                BloodEntry::create($data2);
            }

        }





        $tokenResult = $created_user->createToken('Personal Access Token');
        $token = $tokenResult->token;

//        if ($request->remember_me)
        $token->expires_at = Carbon::now()->addWeeks(10);

        $token->save();

        return response()->json([
            'id' => $created_user->id,
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => $tokenResult->token->expires_at

        ]);

        $request1 = new \Illuminate\Http\Request();
        $request1->setMethod('POST');
        $request1->request->add(['username' => $request->phone]);
        $request1->request->add(['password' => $request->password]);

        $this->validate($request1, [
            'username' => 'required',
            'password' => 'required'
        ]);

        error_log($request1->username);
        error_log($request1->password);


        return $this->issueToken($request1, 'password');
    }
}