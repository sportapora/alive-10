<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadGalleryPhotoController extends Controller
{
    public function index()
    {
        return inertia('Admin/UploadGalleryPhoto');
    }

    public function store(Request $request)
    {

    }
}
