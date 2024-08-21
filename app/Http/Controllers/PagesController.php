<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class PagesController extends Controller
{
    public function home(){
        return Inertia::render('Posts/Home');
    }
    public function about(){
        return Inertia::render('Posts/About');
    }
}
