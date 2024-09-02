<?php

use App\Http\Controllers\PagesController;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UploadGalleryPhotoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [PagesController::class, 'home'])->name('home');
Route::get('/about', [PagesController::class, 'about'])->name('about');

 Route::get('/dashboard', function () {
     return Inertia::render('Dashboard');
 })->middleware(['auth', 'verified'])->name('dashboard');

Route::controller(UploadGalleryPhotoController::class)->group(function () {
   Route::get('/upload', 'index')->name('upload');
   Route::post('/upload', 'store')->name('upload.store');
});

require __DIR__.'/auth.php';
