<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class GuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $gurus = Guru::latest()->get();
        return inertia('Guru/Index', ['gurus' => $gurus]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Guru/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'position' => ['required', 'string', 'max:255'],
            'gender' => ['required', 'string', 'max:20'],
            'number_phone' => ['required', 'string', 'max:20'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:gurus'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        Guru::create([
            'name' => $validated['name'],
            'position' => $validated['position'],
            'gender' => $validated['gender'],
            'number_phone' => $validated['number_phone'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        return redirect()->route('login')->with('status', 'Account created successfully! Please log in.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Guru $guru)
    {
        return inertia('Guru/Show', ['guru' => $guru]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Guru $guru)
    {
        return inertia('Guru/Edit', ['guru' => $guru]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Guru $guru)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'position' => ['required', 'string', 'max:255'],
            'gender' => ['required', 'string', 'max:20'],
            'number_phone' => ['required', 'string', 'max:20'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:gurus,email,' . $guru->id],
        ]);

        $guru->update($validated);

        return redirect()->route('gurus.index')->with('status', 'Guru updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Guru $guru)
    {
        $guru->delete();

        return redirect()->route('gurus.index')->with('status', 'Guru deleted successfully.');
    }
}
