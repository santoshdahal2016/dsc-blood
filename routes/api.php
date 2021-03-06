<?php


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', 'ApiRegisterController@register');
Route::post('login', 'ApiLoginController@login');
Route::post('refresh', 'ApiLoginController@refresh');

Route::group(['middleware' => ['auth:api']], function () {

    Route::get('blood', 'ApiController@blood');
    Route::post('edit', 'ApiController@BloodEdit');


});









