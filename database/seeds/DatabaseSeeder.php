<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //insert admin user data in users table
        DB::table('users')->insert([
            'name'=>'Default User',
            'email'=>'dummy@user.com',
            'phone'=>'9811316068',

            'password'=>'$2y$10$bdd6JyRdD9T1Ad8j8uIfzeHUGPr5Vz4/qRuFEypHmpM6kZV1p/lAK'
        ]);

        //insert base data in admin settings table


        //insert base data in advertisers table



        //insert base data in roles table
        DB::table('roles')->insert(
            array(
                'name'=>'admin',
                'display_name'=>'Admin',
                'description'=>'Admin',
                )
        );


        //insert base data in role_user table
        DB::table('role_user')->insert(
            array(
                'user_id'=>'1',
                'role_id'=>'1',
            )
        );

        //insert base data in role_user table
        $permissions = [
//
            //            User Permissions
            [   'name'=>'user_index',
                'display_name'=>'User Index',
                'description'=>'User Index',
            ],

            [   'name'=>'user_create',
                'display_name'=>'User Create',
                'description'=>'User Create',
            ],

            [   'name'=>'user_store',
                'display_name'=>'User Store',
                'description'=>'User Store',
            ],

            [   'name'=>'user_show',
                'display_name'=>'User Show',
                'description'=>'User Show',
            ],

            [   'name'=>'user_edit',
                'display_name'=>'User Edit',
                'description'=>'User Edit',
            ],

            [   'name'=>'user_update',
                'display_name'=>'User Update',
                'description'=>'User Update',
            ],

            [   'name'=>'user_destroy',
                'display_name'=>'User Destroy',
                'description'=>'User Destroy',
            ],

            //            User Role Permissions
            [   'name'=>'user_role_index',
                'display_name'=>'User Role Index',
                'description'=>'User Role Index',
            ],

            [   'name'=>'user_role_create',
                'display_name'=>'User Role Create',
                'description'=>'User Role Create',
            ],

            [   'name'=>'user_role_store',
                'display_name'=>'User Role Store',
                'description'=>'User Role Store',
            ],

            [   'name'=>'user_role_edit',
                'display_name'=>'User Role Edit',
                'description'=>'User Role Edit',
            ],

            [   'name'=>'user_role_update',
                'display_name'=>'User Role Update',
                'description'=>'User Role Update',
            ],

            [   'name'=>'user_role_destroy',
                'display_name'=>'User Role Destroy',
                'description'=>'User Role Destroy',
            ],

            //            User_permissions Permissions
            [   'name'=>'user_permission_index',
                'display_name'=>'User Permission Index',
                'description'=>'User Permission Index',
            ],

            [   'name'=>'user_permission_create',
                'display_name'=>'User Permission Create',
                'description'=>'User Permission Create',
            ],

            [   'name'=>'user_permission_store',
                'display_name'=>'User Permission Store',
                'description'=>'User Permission Store',
            ],

            [   'name'=>'user_permission_edit',
                'display_name'=>'User Permission Edit',
                'description'=>'User Permission Edit',
            ],

            [   'name'=>'user_permission_update',
                'display_name'=>'User Permission Update',
                'description'=>'User Permission Update',
            ],

            [   'name'=>'user_permission_destroy',
                'display_name'=>'User Permission Destroy',
                'description'=>'User Permission Destroy',
            ],

            [   'name'=>'user_permission_search',
                'display_name'=>'User Permission Search',
                'description'=>'User Permission Search',
            ]
        ];
        DB::table('permissions')->insert($permissions);

    }
}
