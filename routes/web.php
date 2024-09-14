<?php

use App\Http\Controllers\PagesController;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UploadGalleryPhotoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [PagesController::class, 'home'])->name('home');
Route::get('/about', [PagesController::class, 'about'])->name('about');
Route::get('/flow', [PagesController::class, 'flow'])->name('flow');
Route::get('/gallery', [PagesController::class, 'gallery'])->name('gallery');

Route::get('/gallery/pleno1', [PagesController::class, 'pleno1'])->name('gallery.pleno1');
Route::get('/gallery/pleno2', [PagesController::class, 'pleno2'])->name('gallery.pleno2');
Route::get('/gallery/pleno3', [PagesController::class, 'pleno3'])->name('gallery.pleno3');
Route::get('/gallery/booth', [PagesController::class, 'booth'])->name('gallery.booth');
Route::get('/gallery/workshop', [PagesController::class, 'workshop'])->name('gallery.workshop');
Route::get('/gallery/talkshow', [PagesController::class, 'talkshow'])->name('gallery.talkshow');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');

    Route::controller(UploadGalleryPhotoController::class)->group(function () {
        Route::get('/upload', 'index')->name('upload');
        Route::post('/upload-foto', 'store')->name('upload.store');
    });
});

require __DIR__ . '/auth.php';
