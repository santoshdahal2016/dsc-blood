<?php

namespace App\Modules\Blood\Controllers;

use App\Modules\Blood\Models\Blood;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Validator;
class BloodController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $blood = Blood::all();
        return view("Blood::index")->with('bloods',$blood);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function import(Request $request)
    {
        if ($request->hasFile('file')) {
            $path = $request->file('file')->getRealPath();
            $data = Excel::load($path)->get();
            $user = Auth::user();
            $error_data = 0;
            if ($data->count()) {
                foreach ($data as $key => $value) {
                    $data1['name'] = $value->name;
                    $data1['phone'] = $value->phone;
                    $data1['blood_group'] = $value->blood_group;
                    $data1['parent_user_id'] = $user->id;
                    $validator = Validator::make($data1, [
                        'name' => 'required|max:255',
                        'phone' => 'required|max:10',
                        'blood_group' => 'required|max:7',
                        'parent_user_id' => 'required',
                    ]);
                    if ($validator->fails()) {
                        ++$error_data;
                        continue;
                    }

                    $already = Blood::where('phone',$value->phone)->where('parent_user_id',$user->id)->get();
                    if(isset($already) ){
                        Blood::where('phone',$value->phone)->where('parent_user_id',$user->id)->delete();
                        Blood::create($data1);
                    }
                    else{
                        Blood::create($data1);
                    }
//                    $arr[] = ['name' => $value->name, 'phone' => $value->phone
//                        ,'blood_group'=>$value->blood_group ,'parent_user_id'=>$user->id];
                }
//                if (!empty($arr)) {
//                    DB::table('bloods')->insert($arr);
//                    dd('Insert Record successfully.');
//                }
            }
            if ($error_data != 0){
                return redirect()->back()->withErrors(['Error data = '.$error_data]);
            }
            return redirect()->back();
        }
        return redirect()->back();
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

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function api(Request $request)
    {
        $name = $request->input('phone');
        $pieces = explode(",", $name);
        $pieces = array_filter($pieces);
        $pieces = array_unique($pieces);
        $data = Blood::select('*')->whereIn('phone', $pieces)->orderByRaw(\DB::raw("FIELD(phone, ".implode(",",$pieces).")"))->get();
        foreach($data as $k => $item){
            if ($item != null){
                $bloods[] =   ['id'=>$item->id, 'name'=>$item->name , 'phone'=>$item->phone,'blood'=>$item->blood_group];
            }
        }
        if(isset($bloods)){
            $blood["bloods"] =$bloods;

        }else{
            $blood["bloods"] =null;
        }
        return response()->json($blood);
    }

}
