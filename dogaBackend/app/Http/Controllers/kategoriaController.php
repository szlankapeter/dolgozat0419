<?php

namespace App\Http\Controllers;

use App\Models\Kategoria;
use Illuminate\Http\Request;

class kategoriaController extends Controller
{
    function allKategoria(){
        return Kategoria::all();
    }
}
