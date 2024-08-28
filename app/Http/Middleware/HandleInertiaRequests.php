<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
        ];
    }
    /**
     * Get a list of image URLs from the specified directory.
     *
     * @param string $path
     * @return array
     */

    // private function getImages(string $path): array
    // {
    //      $directory = public_path($path);
     
    //      if (!File::exists($directory)) {
    //          return [];
    //      }
     
    //      $files = File::files($directory);
     
    //      $images = array_filter($files, function ($file) {
    //          $allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif']; 
    //          return in_array($file->getExtension(), $allowedExtensions);
    //      });
     
    //      return array_map(function ($file) use ($path) {
    //          return asset($path . '/' . $file->getFilename());
    //      }, $images);
    // } (Untuk backup saja)
}
