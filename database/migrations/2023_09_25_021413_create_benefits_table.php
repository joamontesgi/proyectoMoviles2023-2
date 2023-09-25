<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBenefitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('benefits', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('bank_account_id');
            $table->foreign('bank_account_id')->on('bank_accounts')->references('id');
            $table->boolean('unlimited_withdrawals')->comment('Retiros ilimitados');
            $table->boolean('unlimited_consultations')->comment('Consultas ilimitadas');
            $table->boolean('handling_fee')->comment('Cuota de manejo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('benefits');
    }
}
