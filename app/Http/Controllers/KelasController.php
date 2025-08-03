<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Kelas;
use Illuminate\Http\Request;

class KelasController extends Controller
{
    // Menampilkan daftar semua data kelas
    public function index()
    {
        $kelas = Kelas::all();
        return Inertia::render('guru/kelas/kelas', ['kelas' => $kelas]);
    }

    // Menampilkan halaman form untuk membuat data kelas baru
    public function create()
    {
        return Inertia::render('guru/kelas/create');
    }

    // Menyimpan data kelas baru ke dalam database
    public function store(Request $request)
    {
        $validated = $request->validate([
            'kelas' => 'required|string',
            'jurusan' => 'required|string',
            'tahun_ajaran' => 'required|string',
        ]);

        Kelas::create($validated);

        return redirect()->route('kelas.index')->with('success', 'Data kelas berhasil ditambahkan.');
    }

    // Menampilkan detail dari data kelas berdasarkan ID
    public function show($id)
    {
        $kelas = Kelas::findOrFail($id);
        return Inertia::render('guru/kelas/show', compact('kelas'));
    }

    // Menampilkan form edit data kelas berdasarkan ID
    public function edit($id)
    {
        $kelas = Kelas::findOrFail($id);
        return Inertia::render('guru/kelas/edit', compact('kelas'));
    }

    // Memperbarui data kelas berdasarkan ID
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'kelas' => 'required|string',
            'jurusan' => 'required|string',
            'tahun_ajaran' => 'required|string',
        ]);

        $kelas = Kelas::findOrFail($id);
        $kelas->update($validated);

        return redirect()->route('kelas.index')->with('success', 'Data kelas berhasil diperbarui.');
    }

    // Menghapus data kelas berdasarkan ID
    public function destroy($id)
    {
        $kelas = Kelas::findOrFail($id);
        $kelas->delete();

        return redirect()->route('kelas.index')->with('success', 'Data kelas berhasil dihapus.');
    }
}
