<?php

namespace App\Http\Controllers;

use App\Models\Teszt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class tesztController extends Controller
{
    function allTeszt()
    {
        return Teszt::all();
    }


    function tesztKat($id)
    {
        $teszt = DB::table('teszts')
            ->select('kerdes', "v1", "v2", "v3", "v4", "helyes", "kategorianev")
            ->join('kategorias', 'kategorias.id', '=', 'teszts.kategoriaId')
            ->where('teszts.kategoriaId', $id)
            ->get();
        return $teszt;
    }
}
