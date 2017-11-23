<?php namespace App\Modules\User\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Modules\User\Models\Permission;
use App\Modules\User\Models\Role;
use App\Modules\User\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

/**
 * Class PermissionsController
 * @package App\Modules\User\Controllers
 * @author BKKrishna bkkrishna@dreamsys.com.np
 */

class PermissionController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    /**
     * Display a listing of the Permissions.
     *
     * @return Response
     */
    public function permission_index()
    {
        $user=Auth::user();
        if ($user->hasRole('admin')||$user->can('user_permission_index')) {
            $permissions = Permission::all();
            return view('User::permission_index')->with('permission', $permissions);
        }
        else{
            abort(403);
        }
    }

    /**
     * Show the form for creating a new Permission.
     *
     * @return Response
     */
    public function permission_create()
    {
        $user=Auth::user();
        if ($user->hasRole('admin')||$user->can('user_permission_create')) {
        $drop_roles = Role::pluck('display_name', 'id');
        return view('User::permission_create')->with('drop_roles', $drop_roles);
        }
        else{
            abort(403);
        }

    }

    /**
     * Store a newly created Permission with its roles.
     *
     * @return Response
     */
    public function permission_store(Request $request)
    {
        $user=Auth::user();
        if ($user->hasRole('admin')||$user->can('user_permission_create')) {
            $this->validate($request, [
                'name' => 'required|min:3|unique:permissions',
                'display_name' => 'required|min:3',
                'description' => 'required|min:1',
                'roles_list' => 'required'
            ]);

            $perm_name = snake_case($request->input('name'));

            $perm_input_initial = collect($request->all());
            $perm_input = $perm_input_initial->merge(['name' => $perm_name]);
            $roles_list = $perm_input->pop();
            $perm_input_table = $perm_input->all();

            $perm = Permission::create($perm_input_table);
            session()->flash('user_created', 'The Permission has been successfully created !');

            $perm->roles()->attach($roles_list);
            return redirect('/permission/');
        }
        else{
                abort(403);
            }
    }


    /**
     * Show the form for editing the specified Permission.
     *
     * @param  int  $id
     * @return Response
     */
    public function permission_edit($id)
    {
        $user=Auth::user();
        if ($user->hasRole('admin')||$user->can('user_permission_edit')) {
        $perms = Permission::findOrFail($id);
        $select_roles = $perms->roles()->pluck('id')->toArray();
        $drop_roles = Role::pluck('display_name', 'id');
        return view('User::permission_edit')->with(['permission' => $perms, 'drop_roles' => $drop_roles, 'select_roles' => $select_roles]);
        }
        else{
            abort(403);
        }
    }

    /**
     * Update the specified Permission.
     *
     * @param  int $id
     * @return Response
     */
    public function permission_update(Request $request, $id)
    {
        $user=Auth::user();
        if ($user->hasRole('admin')||$user->can('user_permission_update')) {
            $perm = Permission::findOrFail($id);

            $this->validate($request, [
                'name' => 'required|min:3',
                'display_name' => 'required|min:3',
                'description' => 'required|min:1',
                'roles_list' => 'required'
            ]);

            $perm_name = snake_case($request->input('name'));

            $perm_input_initial = collect($request->all());
            $perm_input = $perm_input_initial->merge(['name' => $perm_name]);
            $roles_list = $perm_input->pop();
            $perm_input_table = $perm_input->all();

            $perm->fill($perm_input_table)->save();
            session()->flash('user_created', 'The Permission has been updated !');

            $perm->roles()->sync($roles_list);
            return redirect('/permission/');
        }
        else{
                abort(403);
            }
    }

    /**
     * Remove the specified Permission and its relations from pivot tables.
     * @param  int  $id
     * @return Response
     */
    public function permission_destroy($id)
    {
        $user=Auth::user();
        if ($user->hasRole('admin')||$user->can('user_permission_destroy')) {
        $perm_delete = Permission::findOrFail($id);
        $perm_delete->delete();

        session()->flash('user_created',"The Permission has been deleted !");
        return redirect('/permission/');
        }
        else{
            abort(403);
        }
    }

    /**
     * Permissions search box
     * @param Request $request
     * @return $this
     */
    public function search(Request $request)
    {
        $user=Auth::user();
        if ($user->hasRole('admin')||$user->can('user_permission_search')) {
        $this->validate($request, ['perms_search' => 'required']);
        $search_string = $request->input('perms_search');
        $search_result = Permission::search($search_string,['name']);
        $search_array = $search_result->simplePaginate(20);
        /*dd($search_array);
        $search_result->setPath('results');*/

        return view('User::perms_show')->with(['box_header' => 'Search results',
            'search_string' => $search_string,
            'perms' => $search_array]);
        }
        else{
            abort(403);
        }
    }
}
