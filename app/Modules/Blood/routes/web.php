<?php

Route::group(['module' => 'Blood', 'middleware' => ['web'], 'namespace' => 'App\Modules\Blood\Controllers'], function() {

    Route::get('/blood','BloodController@index');
    Route::post('/blood/import','BloodController@import')->name('blood.import');
    Route::get('/blood/api','BloodController@api');

    Route::get('/search','BloodController@search');


});
