<?php namespace App\Modules\User\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Modules\User\Models\Permission;
use App\Modules\User\Models\Role;
use App\Modules\User\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Zizaco\Entrust\Entrust;

/**
 * Class RolesController
 * @package App\Modules\User\Controllers
 * @author BKKrishna bkkrishna@dreamsys.com.np
 */
class RoleController extends Controller {

    public function __construct(){
        $this->middleware('auth');
    }

    /**
     * Display a listing of the Roles.
     *
     * @return Response
     */
    public function role_index()
    {
        $user=Auth::user();
        if ($user->hasRole('admin')||$user->can('user_role_index')) {
            $role = Role::all();
            return view('User::role_index')->with('role', $role);
        }
        else{
            abort(403);
        }
    }


    /**
     * Show the form for creating a new Role.
     *
     * @return Response
     */
    public function role_create()
    {
        $user=Auth::user();
        if ($user->hasRole('admin')||$user->can('user_role_create')) {
            $drop_perms = Permission::pluck('display_name', 'id');
            return view('User::role_create')->with('drop_perms', $drop_perms);
        }
        else{
            abort(403);
        }
    }


    /**
     * Store a newly created Role with its permissions.
     *
     * @return Response
     */
    public function role_store(Request $request)
    {
        $user=Auth::user();
        if ($user->hasRole('admin')||$user->can('user_role_store')) {
            $this->validate($request, [
                'name' => 'required|min:3|unique:roles',
                'display_name' => 'required|min:3',
                'description' => 'required|min:3',
                'permission_list' => 'required'
            ]);

            $role_name = snake_case($request->input('name'));

            $role_input_initial = collect($request->all());
            $role_input = $role_input_initial->merge(['name' => $role_name]);
            $perm_list = $role_input->pop();
            $role_input_table = $role_input->all();

            $role = Role::create($role_input_table);
            session()->flash('user_created', 'The Role has been successfully created !');

            $role->perms()->attach($perm_list);
            return redirect('/role/');
        }
        else{
            abort(403);
        }

    }


    /**
     * Show the form for editing the specified Role.
     *
     * @param  int  $id
     * @return Response
     */
    public function role_edit($id)
    {
        $user = Auth::user();
        if ($user->hasRole('admin') || $user->can('user_role_index')) {
            $role = Role::findOrFail($id);
            $select_perms = $role->perms()->pluck('id')->toArray();
            $drop_perms = Permission::pluck('display_name', 'id');

            return view('User::role_edit')->with(['role' => $role, 'drop_perms' => $drop_perms, 'select_perms' => $select_perms]);
        }
        else{
            abort(403);
        }
    }

    /**
     * Update the specified Role.
     *
     * @param  int $id
     * @return Response
     */
    public function role_update(Request $request, $id)
    {
        $user = Auth::user();
        if ($user->hasRole('admin') || $user->can('user_role_update')) {
            $role = Role::findOrFail($id);

            $this->validate($request, [
                'name' => 'required|min:3',
                'display_name' => 'required|min:3',
                'description' => 'required|min:3',
                'permission_list' => 'required'
            ]);

            $role_name = snake_case($request->input('name'));

            $role_input_initial = collect($request->all());
            $role_input = $role_input_initial->merge(['name' => $role_name]);
            $perms_list = $role_input->pop();
            $role_input_table = $role_input->all();

            $role->fill($role_input_table)->save();
            $role->perms()->sync($perms_list);
            session()->flash('user_created', 'The Role has been updated !');

            return redirect('/role/');
        }
        else{
            abort(403);
            }
    }



    /**
     * Remove the specified Role and its relations from pivot tables.
     *
     * @param  int  $id
     * @return Response
     */
    public function role_destroy($id)
    {
        $user=Auth::user();
        if ($user->hasRole('admin')||$user->can('user_role_destroy')) {
        $role_delete = Role::findOrFail($id);
        Role::whereId($id)->delete();
        session()->flash('user_created',"The Role has been deleted !");
        return redirect('/role/');
    }
    else{
            abort(403);
        }
    }
}
