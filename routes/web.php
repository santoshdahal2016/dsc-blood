<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('login', '\App\Http\Controllers\Auth\LoginController@showLoginForm')->name('login');
Route::post('login', '\App\Http\Controllers\Auth\LoginController@login');

Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');

Route::get('/','\App\Modules\User\Controllers\UserController@home');
Route::get('/home','\App\Modules\User\Controllers\UserController@dashboard');
Route::get('/dashboard','\App\Modules\User\Controllers\UserController@dashboard');