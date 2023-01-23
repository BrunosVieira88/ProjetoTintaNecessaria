<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TintasController extends Controller
{
    public function retornaView(){

        $campos = ["parede"];
        $instalaveis = ["janela","porta"];
        $campos_json = json_encode($campos);
        $instalaveis_json = json_encode($instalaveis);

        return view('index',compact('campos','instalaveis','campos_json','instalaveis_json'));

    }
}
