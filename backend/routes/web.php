<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\GerenteController;
use App\Http\Controllers\AsesorController;
use Illuminate\Support\Facades\Auth;

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

Route::get('/', function () {
    return view('welcome');
});



Route::middleware(['auth', 'role:gerente'])->group(function () {
    Route::get('/gerente', [GerenteController::class, 'index'])->name('gerente');
    Route::get('/asesor', [AsesorController::class, 'index'])->name('asesor');
    Route::get('/usuarios', [UsersController::class, 'index'])->name('usuarios.index');
    Route::post("usuarios", [UsersController::class, 'store'])->name('usuarios.store');
    Route::get("usuarios/{id}", [UsersController::class, 'edit'])->name('usuarios.edit');
    Route::delete("usuarios/{id}", [UsersController::class, 'destroy'])->name('usuarios.destroy');
    Route::put("usuarios/{id}", [UsersController::class, 'update'])->name('usuarios.update');
});

Route::middleware(['auth', 'role:usuario'])->group(function () {
    Route::get('/usuario', [UsersController::class, 'index'])->name('usuario');
});

Route::middleware(['auth', 'role:asesor'])->group(function () {
    Route::get('/asesor', [AsesorController::class, 'index'])->name('asesor');
});

Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
