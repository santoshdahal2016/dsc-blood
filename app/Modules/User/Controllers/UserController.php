<?php namespace App\Modules\User\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Modules\Email\Models\Email_credentials;
use App\Modules\Event\Models\Event;
use App\Modules\User\Models\User;
use App\Modules\Question\Models\Question;
use Illuminate\Support\Facades\Log;
use App\Modules\Lottery\Models\Lottery;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Zizaco\Entrust\Entrust;
use App\Modules\User\Models\Permission;
use App\Modules\User\Models\Role;
use App\Modules\Sms\Models\Sms_credentials;

/**
 * Class UserController
 * @package App\Modules\User\Controllers
 */
class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth',['except'=>['home']]);

    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */

    public function index()
    {
        $user = Auth::user();

        if ($user->hasRole('admin')) {
            $users = User::all();
            return view('User::index')->with('users', $users);
        }

        elseif($user->can('user_index'))
        {
            $users = User::where('id','=',$user->id)->get();
            return view('User::index')->with('users', $users);
        }
        else{
            abort(403);
        }

    }
    public function dashboard()
    {
        return view('User::dashboard');


    }

    public function home()
    {
        return view('User::home');


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        $user = Auth::user();
        $all_roles = Role::pluck('display_name', 'id');
        if($user->hasRole('admin')|| $user->can('user_create')) {
            return view('User::register')->with('all_roles', $all_roles);
        }
        else{
            abort(403);
        }

    }


    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {

        dd($request->all());
        $user = Auth::user();


        if($user->hasRole('admin')|| $user->can('user_store')) {
            $this->validate($request, [
                'name' => 'required|min:3',
                'email' => 'required|email|unique:users',
                'password' => 'required|min:6|confirmed',
                'roles_id' => 'required'
            ]);

            $user_input = $request->all();
            $user_input['password'] = bcrypt($user_input['password']);

            
            $created_user = User::create($user_input);
            $created_user->roles()->attach($request['roles_id']);


            return redirect('/user/');
            // }
        }
        else{
            abort(403);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function show($id)
    {
        $user = Auth::user();
        $user = User::where('id', $id)->first();

        if ($user->hasRole('admin') ) {
            return view('User::show')->with('user', $user);
        }

        elseif ($user->can('user_show') && $user->id == $id)
        {
            return view('User::index')->with('users', $users);
        }
        else{
            abort(403);
        }


    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function edit($id)
    {
        $user = Auth::user();

        $all_roles = Role::pluck('display_name', 'id');
        if ($user->hasRole('admin')) {

            $this_user = User::findOrFail($id);
            $selected_role = $this_user->roles()->first()->id;
            return view('User::edit')->with(['user' => $this_user, 'all_roles' => $all_roles, 'selected_role' => $selected_role]);
        }

        elseif ($user->can('user_edit') && $user->id == $id)
        {
            $this_user = User::findOrFail($id);
            $selected_role = $this_user->roles()->first()->id;
            return view('User::edit')->with(['user' => $this_user, 'all_roles' => $all_roles, 'selected_role' => $selected_role]);
        }
        else{
            abort(403);
        }


    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $user = Auth::user();

        if ($user->hasRole('admin') ) {

            $user_update = User::findOrFail($id);

            $this->validate($request, [
                'name' => 'required|min:3',
                'email' => 'required|email',
                'password' => 'required|confirmed|min:6',
                'roles_id' => 'required'
            ]);

            $user_input = $request->all();
            $user_input['password'] = bcrypt($user_input['password']);
            $user_update->fill($user_input)->save();

            $user_update->roles()->sync($request['roles_id']);
            return redirect('/user/');
        }

        elseif ($user->can('user_update') && $user->id == $id)
        {
            $user_update = User::findOrFail($id);

            $this->validate($request, [
                'name' => 'required|min:3',
                'email' => 'required|email',
                'password' => 'required|confirmed|min:6',
                'roles_id' => 'required'
            ]);

            $user_input = $request->all();
            $user_input['password'] = bcrypt($user_input['password']);
            $user_update->fill($user_input)->save();

            $user_update->roles()->sync($request['roles_id']);
            return redirect('/user/');
        }
        else{
            abort(403);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return Response
     */
    public function destroy($id)
    {
        $user=Auth::user();
        $user_delete = User::findOrFail($id);
        if ($user->hasRole('admin') ) {
            $user_delete->delete();
            return redirect('/user/');
        }
        elseif($user->can('user_destroy')&&$user->id==$user_delete->id){
            $user_delete->delete();
            return redirect('/user/');
        }
        else{
            abort(403);
        }
    }
}
