<?php

Route::group(['module' => 'Blood', 'middleware' => ['web'], 'namespace' => 'App\Modules\Blood\Controllers'], function() {

    Route::get('/blood','BloodController@index');
    Route::get('/add','BloodController@add');
    Route::post('/add','BloodController@store')->name('blood.add');


    Route::post('/blood/import','BloodController@import')->name('blood.import');

    Route::get('/search','BloodController@search');


});
Route::post('/blood/api','\App\Modules\Blood\Controllers\BloodController@api');
