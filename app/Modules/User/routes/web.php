<?php

Route::group(array('module' => 'User', 'middleware' => ['web'], 'namespace' => 'App\Modules\User\Controllers'), function() {

    //Users
    Route::get('/user','UserController@index');
    Route::get('/user_create','UserController@create');
    Route::post('/user_create','UserController@store');
    Route::get('/user_edit/{id}','UserController@edit');
    Route::post('/user_edit/{id}','UserController@update');
    Route::get('/user_show/{id}','UserController@show');
    Route::get('/user_delete/{id}','UserController@destroy');


    //Roles
    Route::get('/role','RoleController@role_index');
    Route::get('/role_create','RoleController@role_create');
    Route::post('/role_create','RoleController@role_store');
    Route::get('/role_edit/{id}','RoleController@role_edit');
    Route::post('/role_edit/{id}','RoleController@role_update');
    Route::get('/role_show/{id}','RoleController@role_show');
    Route::get('/role_delete/{id}','RoleController@role_destroy');

    //Permissions
    Route::get('/permission','PermissionController@permission_index');
    Route::get('/permission_create','PermissionController@permission_create');
    Route::post('/permission_create','PermissionController@permission_store');
    Route::get('/permission_edit/{id}','PermissionController@permission_edit');
    Route::post('/permission_edit/{id}','PermissionController@permission_update');
    Route::get('/permission_show/{id}','PermissionController@permission_show');
    Route::get('/permission_delete/{id}','PermissionController@permission_destroy');


});
