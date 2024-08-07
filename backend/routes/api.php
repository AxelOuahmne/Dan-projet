<?php

use App\Http\Controllers\Api\AuthController ;
use App\Http\Controllers\Api\ForgotPasswordController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::controller(AuthController::class)->group(function(){
    Route::post('register','register');
    Route::post('login','login');
    Route::post('forgetpassword', 'forget');
    Route::post('resetpassword',  'reset');
});
Route::controller(ForgotPasswordController::class)->group(function(){

    Route::post('forgetpassword', 'forget');
    Route::post('resetpassword',  'reset');
});
Route::controller(AuthController::class)->group(function(){
    Route::get('user','getUserDetail');
    Route::get('logout','logout');

})->middleware('auth:sanctum');