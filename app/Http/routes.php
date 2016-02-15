<?php

Route::group(['middleware' => ['web']], function () {
    Route::get('/', function () {
	    return view('app');
	});
	Route::group(['prefix'=>'auth'],function(){
		Route::post('login','Auth\AuthController@login');
		Route::post('logout','Auth\AuthController@logout');
		Route::get('user','Auth\AuthController@user');
	});

	Route::group(['prefix'=>'api/v1','middleware' => ['jwt.refresh']],function(){

	});
});
