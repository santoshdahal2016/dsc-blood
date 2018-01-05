<?php namespace App\Modules\Apisettings\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Apisettings\Models\Passport;
use App\Modules\User\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\ClientRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


class ApisettingsController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
    public function __construct()
    {
        $this->middleware('auth');
    }

	public function index()
    {

        $user = Auth::user();
        if ($user->hasRole('admin') || $user->can('api_settings_index')) {
        $passports = Passport::where('password_client', 1)
            ->orderBy('updated_at', 'desc')
            ->paginate(5);
        return view("Apisettings::apisettings.index")->with('passports',$passports);
	    }
	    else{
            abort(403);
        }
    }

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create(Request $request)
	{
        $user = Auth::user();
        if ($user->hasRole('admin') || $user->can('api_settings_create')) {
            $this->validate($request, [
                'create-client-name' => 'required|min:3|max:160',

            ]);
            $name = $request['create-client-name'];
            $redirectUrl = "http://localhost";
            $clients = new ClientRepository();
            $clients->createPasswordGrantClient(
                null, $name, $redirectUrl
            );

            return redirect('/apisettings');
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
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
      //
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(Request $request)
    {
        $user = Auth::user();
        if ($user->hasRole('admin') || $user->can('api_settings_update')) {
            $id = $request['update-client-id'];
            $name_update = Passport::findOrFail($id);
            $name = $request['update-client-name'];
            $name_update->update(['name' => $name]);
            $name_update->save();

            return redirect('/apisettings/');
        }
        else{
            abort(403);
        }
    }

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
    {
        $user = Auth::user();
        if ($user->hasRole('admin') || $user->can('api_settings_destroy')) {
            $passport_delete = Passport::findOrFail($id);
            $passport_delete->delete();

            return redirect('/apisettings/');
        }
        else{
            abort(403);
        }
    }

}
