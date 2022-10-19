<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Website\HomeVisit;
use Laracasts\Flash\Flash;
use Yajra\DataTables\Facades\DataTables;

class HomeVisitController extends Controller
{
    public function index(Request $request)
    {
        // dd("s");
        if($request->ajax()) {
            $data = HomeVisit::with('areas')->orderBy('id', 'DESC');
            return DataTables::eloquent($data)
                ->addIndexColumn()   
                // ->addColumn('areaName', function($data){
                //     return $data->areas->area;
                // })         
                ->addColumn('action', function ($data) {
                    return button('delete',route('home_visit.delete', $data->id));
                })
                ->addColumn('created_at', function ($data) {
                    return date('d M Y', strtotime($data['created_at']));
                })
                ->addColumn('status', function($data) {
                   return toggleButton('status',route('home_visit.status', $data->id),$data);
                })
            ->rawColumns(['action','status'])
            ->make(true);
        }
        return view('admin.enquiry.home_visit.index');
    }
    public function delete($id = null)
    {
        $homevisit  = HomeVisit::find($id);
        $homevisit->delete();
        Flash::success( __('action.deleted', ['type' => 'Home Visit']));
        return redirect()->back();
    }
    public function status(Request $request)
    {
        $homevisit  = HomeVisit::find($request->id);
        if($request->val == 1)
        {
            $homevisit->status = 0;
            $homevisit->save();
        }
        else{
            $homevisit->status = 1;
            $homevisit->save();
        }
        Flash::success( __('action.status', ['type' => 'Home Visit']));

    }
}
