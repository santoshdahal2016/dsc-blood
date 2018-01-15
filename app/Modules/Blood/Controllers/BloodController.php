<?php

namespace App\Modules\Blood\Controllers;

use App\Modules\Blood\Models\Blood;
use App\Modules\Blood\Models\BloodEntry;
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
        return view("Blood::index")->with('bloods', $blood);
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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */

    public function import(Request $request)
    {
        if ($request->hasFile('file')) {
            $path = $request->file('file')->getRealPath();
            $data = Excel::load($path)->get();
            $user = Auth::user();
            $error_data = 0;
//            dd($data);
            if ($data->count()) {
                foreach ($data as $key => $value) {
                    $data1['name'] = $value->name;
                    $data1['phone'] = $value->phone;
                    $data2['blood_group'] = $value->blood_group;
                    $data1['blood_group'] = $value->blood_group;
                    $data2['parent_user_id'] = $user->id;


//                    dd($value);
                    $validator = Validator::make($data1, [
                        'name' => 'required|max:255',
                        'phone' => 'required|max:10',
                        'blood_group' => 'required|max:7',
                    ]);

//                    dd($validator);
                    if ($validator->fails()) {
                        ++$error_data;
                        continue;
                    }
                    $blood = Blood::where('phone', $value->phone)->first();

                    if (isset($blood)) {
                        $data2['phone_id'] = $blood->id;
                        $already = BloodEntry::where('phone_id', $blood->id)->where('parent_user_id', $user->id)->first();
                        if (isset($already)) {
                            $already->fill($data2)->save();
                        } else {
                            BloodEntry::create($data2);
                        }
                    } else {

                        $data2['parent_user_id'] = $user->id;
                        $blood = Blood::create($data1);
                        $data2['phone_id'] = $blood->id;

                        if ($blood) {

                            BloodEntry::create($data2);
                        }

                    }
                }
                if ($error_data != 0) {
                    return redirect()->back()->withErrors(['Error data = ' . $error_data]);
                }
                return redirect()->back();
            }
            return redirect()->back();
        }
    }

    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function search()
    {
        return view("Blood::frontend.result");

    }

    public function api(Request $request)
    {
        

        $name = $request->input('number');
       
        $pieces = explode(",", $name);
        
        $pieces = array_filter($pieces);
        $pieces = array_unique($pieces);
       
        $data = Blood::select('*')->whereIn('phone', $pieces)->with('entry')->orderByRaw(\DB::raw("FIELD(phone, ".implode(",",$pieces).")"))->get();
        foreach($data as $k => $item){
            $bloodgroup = " ";
            if(isset($bloodgroup)){
                $values = array_count_values($item->entry->pluck('blood_group')->toArray());
                arsort($values);
                $bloodgroup = array_slice(array_keys($values), 0, 1, true);
                $bloodgroup = $bloodgroup[0];
            }
            if ($item != null){
                $bloods[] =   ['id'=>$item->id, 'name'=>$item->name , 'phone'=>$item->phone,'blood'=>$bloodgroup];
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
