<?php

Route::group(array('module' => 'Apisettings', 'middleware' => ['web'], 'namespace' => 'App\Modules\Apisettings\Controllers'), function() {


    Route::get('/apisettings', 'ApisettingsController@index');
    Route::post('/apisettings_create','ApisettingsController@create');
    Route::get('/apisettings_delete/{id}','ApisettingsController@destroy');
    Route::post('/apisettings_update','ApisettingsController@update');

});



