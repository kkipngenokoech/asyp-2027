<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/about', function () {
//     return view('about');
// });

Route::fallback(function () {
    return redirect('/');
});


require __DIR__ . '/auth.php';
