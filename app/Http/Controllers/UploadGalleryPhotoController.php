<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;

class UploadGalleryPhotoController extends Controller
{
    public function index()
    {
        return inertia('Admin/UploadGalleryPhoto');
    }

    public function store(Request $request)
    {
        try {
            $data = $request->validate([
                'category' => 'required|string|max:30',
                'image' => 'required'
            ]);

            $storeImage = [];
            foreach ($data['image'] as $image) {
                $image->store('gallery');
                $storeImage[] = $image->hashName();
            }

            Gallery::create([
                'category' => $data['category'],
                'image' => $storeImage
            ]);

            return back()->with('message', 'Foto berhasil diupload!');
        } catch (\Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }
}
