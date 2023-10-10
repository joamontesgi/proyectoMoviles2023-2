<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BankAccount;

class BankAccountsController extends Controller
{
    public function index()
    {
        $bankaccounts = BankAccount::all();
        return response()->json([
            'success' => true,
            'message' => 'Bank Accounts retrieved successfully.',
            'data' => $bankaccounts
        ], 200);
    }


    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
