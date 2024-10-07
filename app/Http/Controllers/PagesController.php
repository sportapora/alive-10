<?php

namespace App\Http\Controllers;

// use App\Http\Resources\GalleryResource;
// use App\Models\Gallery;
// use Illuminate\Http\Request;
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
        // $photos = GalleryResource::collection(Gallery::filter(request('filter'))->get());
        $path = asset('/Assets/Images/gallery');

        return Inertia::render('Posts/Gallery', compact('path'));
    }
}
