<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBloodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bloods', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->bigInteger('phone');
            $table->enum('blood_group' ,['o+','o-','A+','A-','B+','B-','AB+','AB-','Unknown']);
            $table->integer('parent_user_id')->unsigned();
            $table->foreign('parent_user_id')->references('id')->on('users')
                ->onUpdate('cascade');
            $table->foreign('phone')->references('phone')->on('users')
                ->onUpdate('cascade');
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
        Schema::dropIfExists('bloods');
    }
}
