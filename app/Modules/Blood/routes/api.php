<?php

Route::group(['module' => 'Blood', 'middleware' => ['api'], 'namespace' => 'App\Modules\Blood\Controllers'], function() {

    Route::resource('Blood', 'BloodController');

});
