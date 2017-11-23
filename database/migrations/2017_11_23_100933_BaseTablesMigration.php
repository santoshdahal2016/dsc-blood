<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class BaseTablesMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->bigInteger('phone')->unique();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('users_details', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->string('primary_address');
            $table->string('secondary_address');
            $table->string('image');

            $table->string('register_ip_address');
            $table->string('last_ip_address');


            $table->string('register_lat_address');
            $table->string('register_lon_address');

            $table->string('last_lat_address');
            $table->string('last_lon_address');


            $table->integer('weight');
            $table->dateTime('date_of_birth');
            $table->enum('blood_group' ,['o+','o-','A+','A-','B+','B-','AB+','AB-','Unknown']);

            $table->foreign('user_id')->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('users_donation', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->dateTime('date');

            $table->integer('acceptor_user_id')->unsigned();


            $table->foreign('user_id')->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('acceptor_user_id')->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
        Schema::create('exchanges', function (Blueprint $table) {
            $table->increments('id');
            $table->date('date');
            $table->integer('acceptor_user_id')->unsigned();
            $table->foreign('acceptor_user_id')->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('exchange_search', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('exchange_id')->unsigned();
            $table->text('text');

            $table->foreign('exchange_id')->references('id')->on('exchanges')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('exchange_donor', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('exchange_id')->unsigned();
            $table->integer('donor_id')->unsigned();

            $table->foreign('exchange_id')->references('id')->on('exchanges')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('donor_id')->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });


        Schema::create('exchange_status', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('exchange_id')->unsigned();

            $table->enum('status' ,['unaccepted','accepted','donated']);

            $table->foreign('exchange_id')->references('id')->on('exchanges')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('password_resets', function (Blueprint $table) {
            $table->string('email')->index();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        // Create table for storing roles
        Schema::create('roles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->unique();
            $table->string('display_name')->nullable();
            $table->string('description')->nullable();
            $table->timestamps();
        });

        // Create table for associating roles to users (Many-to-Many)
        Schema::create('role_user', function (Blueprint $table) {
            $table->integer('user_id')->unsigned();
            $table->integer('role_id')->unsigned();

            $table->foreign('user_id')->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('role_id')->references('id')->on('roles')
                ->onUpdate('cascade')->onDelete('cascade');

            $table->primary(['user_id', 'role_id']);
        });

        // Create table for storing permissions
        Schema::create('permissions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->unique();
            $table->string('display_name')->nullable();
            $table->string('description')->nullable();
            $table->timestamps();
        });

        // Create table for associating permissions to roles (Many-to-Many)
        Schema::create('permission_role', function (Blueprint $table) {
            $table->integer('permission_id')->unsigned();
            $table->integer('role_id')->unsigned();

            $table->foreign('permission_id')->references('id')->on('permissions')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('role_id')->references('id')->on('roles')
                ->onUpdate('cascade')->onDelete('cascade');

            $table->primary(['permission_id', 'role_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('password_resets');
        Schema::dropIfExists('users');
        Schema::dropIfExists('users_details');

        Schema::drop('permission_role');
        Schema::drop('permissions');
        Schema::drop('role_user');
        Schema::drop('roles');
    }
}
