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
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Passport\Client;

class ApiRegisterController extends controller
{
    use IssueTokenTrait;
    private $client;
    public function __construct(){
        $this->client = Client::find(1);
    }
    public function register(Request $request){

        return $request->all();
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:4'
        ]);
        $user = User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => bcrypt(request('password'))
        ]);
        return $this->issueToken($request, 'password');
    }
}