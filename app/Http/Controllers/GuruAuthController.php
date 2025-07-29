<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class GuruAuthController extends Controller
{
    public function showLoginForm()
    {
        return inertia('auth/guru/login', ['canResetPassword' => true]);
    }

    public function showRegisterForm()
    {
        return inertia('auth/guru/register');
    }

    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'position' => ['required', 'string', 'max:255'],
            'gender' => ['required', 'string', 'max:20'],
            'number_phone' => ['required', 'string', 'max:20'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:gurus'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $guru = Guru::create([
            'name' => $validated['name'],
            'position' => $validated['position'],
            'gender' => $validated['gender'],
            'number_phone' => $validated['number_phone'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        Auth::guard('guru')->login($guru);

        return redirect()->route('guru.dashboard');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::guard('guru')->attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();
            return redirect()->intended(route('guru.dashboard'));
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::guard('guru')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('guru.login');
    }
}
