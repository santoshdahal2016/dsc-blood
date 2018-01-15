<?php
/**
 * Created by PhpStorm.
 * User: santosh dahal
 * Date: 12/27/17
 * Time: 2:10 PM
 */

namespace App\Http\Controllers;


use App\Modules\Blood\Models\Blood;
use App\Modules\Blood\Models\BloodEntry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;
use App\Modules\User\Models\User;
use Illuminate\Support\Facades\DB;
use App\Modules\User\Models\Permission;

use Validator;

class ApiController extends Controller
{
    /**
     * Return all prize of event
     * @param $event_id
     * @return mixed
     */
    public function blood(Request $request)
    {
        $user = Auth::user();
        $name = $request->input('phone');
        $pieces = explode(",", $name);
        $pieces = array_filter($pieces);
        $pieces = array_unique($pieces);

        $data = Blood::select('*')->whereIn('phone', $pieces)->with('entry')->orderByRaw(\DB::raw("FIELD(phone, ".implode(",",$pieces).")"))->get();
        foreach($data as $k => $item){
            $bloodgroup = $item->entry->where('parent_user_id',$user->id)->first()->blood_group;
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

    public function BloodEdit(Request $request){
        $user = Auth::user();
        $data1['name'] = $request->name;
        $data1['phone'] = $request->phone;
        $data2['blood_group'] = $request->blood;
        $data1['blood_group'] = $request->blood;
        $data2['parent_user_id'] = $user->id;
        $validator = Validator::make($data1, [
            'name' => 'required|max:255',
            'phone' => 'required|max:10',
            'blood_group' => 'required|max:7',
        ]);
        if ($validator->fails()) {
            $response =   ['status'=>"unsuccess"];
            return response()->json($response);
        }else{

            $blood = Blood::where('phone', $request->phone)->first();

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

                   $bloodentry =  BloodEntry::create($data2);

                   if($bloodentry){
                       $response =   ['status'=>"success", 'name'=>$blood->name , 'phone'=>$blood->phone,'blood'=>$bloodentry->blood_group];
                       return response()->json($response);
                   }
                }

            }
        }
        $response =   ['status'=>"unsuccess", 'name'=>$request->name , 'phone'=>$request->phone,'blood'=>$request->blood];
        return response()->json($response);
    }

}