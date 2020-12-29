<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Response;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::namespace('Api')->group(function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');

    Route::middleware(['auth:api'])->group(function () {
        Route::apiResource('users', 'UserController');
        Route::apiResource('roles', 'RoleController');
        Route::apiResource('products', 'ProductController');
        Route::apiResource('files', 'StorageController');
        Route::apiResource('orders', 'OrderController')->only(['index', 'show']);
    });
});

Route::fallback(function () {
    abort(Response::HTTP_NOT_FOUND, 'Page Not Found.');
});