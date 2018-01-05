<?php
/**
 * Created by PhpStorm.
 * User: santosh dahal
 * Date: 12/27/17
 * Time: 2:10 PM
 */

namespace App\Http\Controllers;


use App\Modules\Blood\Models\Blood;
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