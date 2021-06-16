<?php

use App\Http\Controllers\v1\AuthController;
use App\Http\Controllers\v1\ToolController;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->name('auth.')->group(function() {
    Route::post('login', [AuthController::class, 'login'])->name('login');
    Route::post('register', [AuthController::class, 'register'])->name('register');

    Route::middleware('auth:api')->group(function() {
        Route::post('refresh', [AuthController::class, 'refresh'])->name('refresh');
        Route::post('me', [AuthController::class, 'me'])->name('me');
        Route::post('logout', [AuthController::class, 'logout'])->name('logout');
    });
});

Route::middleware('auth:api')->group(function() {
    Route::prefix('tools')->name('tools.')->group(function() {
        Route::get('/', [ToolController::class, 'index'])->name('index');
        Route::post('/', [ToolController::class, 'store'])->name('store');
        Route::delete('/{tool}', [ToolController::class, 'delete'])->name('delete');
    });
});