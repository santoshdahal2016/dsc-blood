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
            $table->string('name')->nullable();
            $table->bigInteger('phone');
            $table->foreign('phone')->references('phone')->on('users')
                ->onUpdate('cascade');
            $table->timestamps();
        });

        Schema::create('blood_entry', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('phone_id');
            $table->enum('blood_group' ,['O+','O-','A+','A-','B+','B-','AB+','AB-','UNKNOWN']);

            $table->integer('parent_user_id')->unsigned();
            $table->foreign('parent_user_id')->references('id')->on('users')
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
        Schema::dropIfExists('blood_entry');
    }
}
