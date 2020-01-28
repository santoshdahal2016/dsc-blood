<?php
/**
 * Created by PhpStorm.
 * User: santosh
 * Date: 1/6/18
 * Time: 8:45 AM
 */

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

trait IssueTokenTrait{
    public function issueToken(Request $request, $grantType, $scope = ""){

        $params = [
            'grant_type' => $grantType,
            'client_id' => $this->client->id,
            'client_secret' => $this->client->secret,
            'scope' => $scope
        ];
        if($grantType !== 'social'){
            $params['username'] = $request->email ?: $request->username;
        }
        $request->request->add($params);

        

        $proxy = Request::create('oauth/token', 'POST');


        return Route::dispatch($proxy);
    }
}