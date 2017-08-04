<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\event;

class EventController extends Controller
{
    function getEvent(){
        
        $event = event::get();
        return response()->json($event, 200);
    }

    function addEvent(Request $request){
        
        DB::beginTransaction();
        
        try {
            $evt = new event;
            $evt->name=$request->input('name');
            $evt->date=$request->input('date');
            $evt->venue=$request->input('venue');
            $evt->ticket_price=$request->input('ticket_price');
            $evt->ticket_qty=$request->input('qty');
            $evt->save();

            $event = event::get();

            DB::commit();
            
            return response()->json($event, 200);
        }
        catch(\Exception $e) {

            DB::rollBack();

            return response()->json(["message"=>$e->getMessage()], 500);
        }

    }

    function deleteEvent(Request $request){

        DB::beginTransaction();

        try {
            $this->validate($request, [
                'id' => 'required'
            ]);

            $id = (integer)$request->input('id');
            $evt = event::find($id);
            $evt->delete();

            if(empty($evt)) {
                return response()->json(["message"=>"user not found"], 404);
            }

            DB::commit();
            $event = event::get();

            return response()->json($event, 200);
        }
        catch(\Exception $e) {

            DB::rollBack();

            return response()->json(["message"=>$e->getMessage()], 500);
        }

    }
}
