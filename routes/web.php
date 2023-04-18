<?php

use Illuminate\Support\Facades\Route;

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

//get
Route::get('/', 'App\Http\Controllers\frontendController@homePage' )->name('home');
Route::get('/create', 'App\Http\Controllers\frontendController@create' )->name('create');
Route::get('/edit/{userId?}', 'App\Http\Controllers\frontendController@edituser' )->name('edit.user');
Route::get('/edit-user/{userId?}', 'App\Http\Controllers\frontendController@delete' )->name('delete.user');
Route::get('/activate-user/{userId?}', 'App\Http\Controllers\frontendController@activateUser' )->name('activate.user');
Route::get('/force-delete/{userId?}', 'App\Http\Controllers\frontendController@forceDelete' )->name('forcedelete.user');

//post
Route::post('/save', 'App\Http\Controllers\frontendController@saveUser' )->name('save.user');
Route::post('/edit', 'App\Http\Controllers\frontendController@saveEdit' )->name('save.edit');
