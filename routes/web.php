<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KelasController;
use App\Http\Controllers\SiswaController;
use App\Http\Controllers\GuruAuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Di sini kamu bisa mendaftarkan semua rute web aplikasi kamu.
| Rute ini dimuat oleh RouteServiceProvider dan semuanya menggunakan group "web".
|
*/

Route::get('/', fn() => Inertia::render('welcome'))->name('home');

// Route untuk login dan register guru
Route::get('/guru/login', [GuruAuthController::class, 'showLoginForm'])->name('guru.login');
Route::post('/guru/login', [GuruAuthController::class, 'login']);
Route::get('/guru/register', [GuruAuthController::class, 'showRegisterForm'])->name('guru.register');
Route::post('/guru/register', [GuruAuthController::class, 'register']);

// Route yang hanya bisa diakses jika guru sudah login
Route::middleware(['auth:guru'])->group(function () {
    Route::get('/guru/dashboard', fn() => Inertia::render('dashboard-guru'))->name('guru.dashboard');

    Route::resource('/guru/kelas', KelasController::class)->names([
        'index' => 'kelas.index',
        'create' => 'kelas.create',
        'store' => 'kelas.store',
        'show' => 'kelas.show',
        'edit' => 'kelas.edit',
        'update' => 'kelas.update',
        'destroy' => 'kelas.destroy',
    ]);

    Route::get('/guru/siswa', [SiswaController::class, 'index'])->name('siswa.index');
    Route::resource('/guru/siswa', SiswaController::class)->names([
        'index' => 'siswa.index',
        'create' => 'siswa.create',
        'store' => 'siswa.store',
        'show' => 'siswa.show',
        'edit' => 'siswa.edit',
        'update' => 'siswa.update',
        'destroy' => 'siswa.destroy',
    ]);
});

// Route logout dari dashboard guru
Route::post('/guru/logout', [GuruAuthController::class, 'logout'])->name('guru.logout');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
