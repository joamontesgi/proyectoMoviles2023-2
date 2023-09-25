<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\BankAccountsController;
use App\Http\Controllers\BenefitsController;
use App\Http\Controllers\ConsultanciesController;
use App\Http\Controllers\CreditsController;
use App\Http\Controllers\LifeInsurancesController;
use App\Http\Controllers\OfficesController;


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


Route::apiResource('/users', UsersController::class);
Route::apiResource('/bank-accounts', BankAccountsController::class);
Route::apiResource('/benefits', BenefitsController::class);
Route::apiResource('/consultancies', ConsultanciesController::class);
Route::apiResource('/credits', CreditsController::class);
Route::apiResource('/life-insurances', LifeInsurancesController::class);
Route::apiResource('/offices', OfficesController::class);


