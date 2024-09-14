<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class PagesController extends Controller
{
    public function home()
    {
        return Inertia::render('Posts/Home');
    }
    public function about()
    {
        return Inertia::render('Posts/About');
    }

    public function flow()
    {
        return Inertia::render('Posts/Flow');
    }

    public function gallery()
    {
        return Inertia::render('Posts/Gallery');
    }

    public function pleno1()
    {
        return Inertia::render('Posts/IsiGallery/Pleno1');
    }

    public function pleno2()
    {
        return Inertia::render('Posts/IsiGallery/Pleno2');
    }

    public function pleno3()
    {
        return Inertia::render('Posts/IsiGallery/Pleno3');
    }

    public function booth()
    {
        return Inertia::render('Posts/IsiGallery/Booth');
    }

    public function workshop()
    {
        return Inertia::render('Posts/IsiGallery/Workshop');
    }

    public function talkshow()
    {
        return Inertia::render('Posts/IsiGallery/Talkshow');
    }
}
