<?php

Route::group(['module' => 'Blood', 'middleware' => ['web'], 'namespace' => 'App\Modules\Blood\Controllers'], function() {

    Route::get('/blood','BloodController@index');
    Route::post('/blood/import','BloodController@import')->name('blood.import');

});