<?php

use App\Http\Controllers\PagesController;

use Illuminate\Support\Facades\Route;

Route::get('/', [PagesController::class, 'home'])->name('home');
Route::get('/about', [PagesController::class, 'about'])->name('about');
Route::get('/flow', [PagesController::class, 'flow'])->name('flow');
Route::get('/gallery', [PagesController::class, 'gallery'])->name('gallery');

//Route::middleware(['auth', 'verified'])->group(function () {
//    Route::get('/dashboard', function () {
//        return Inertia::render('Dashboard');
//    })->middleware(['auth', 'verified'])->name('dashboard');
//
//    Route::controller(UploadGalleryPhotoController::class)->group(function () {
//        Route::get('/upload', 'index')->name('upload');
//        Route::post('/upload-foto', 'store')->name('upload.store');
//    });
//});

//require __DIR__ . '/auth.php';
