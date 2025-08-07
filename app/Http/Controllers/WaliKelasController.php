<?php

namespace App\Http\Controllers;

use App\Models\WaliKelas;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WaliKelasController extends Controller
{
    // Menampilkan daftar semua data wali kelas
    public function index(Request $request)
    {
        // Ambil input pencarian dari query string (?search=...)
        $search = $request->query('search');

        // Ambil data wali kelas dan filter berdasarkan nama atau NIP jika ada input pencarian
        $waliKelas = WaliKelas::query()
            ->when($search, function ($query, $search) {
                $query->where('nama', 'like', '%' . $search . '%')
                    ->orWhere('nip', 'like', '%' . $search . '%');
            })
            ->orderBy('nama')
            ->get();

        // Kirim data wali kelas dan nilai pencarian ke halaman frontend (React)
        return Inertia::render('guru/wali_kelas/wali_kelas', [
            'wali_kelas' => $waliKelas,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    // Menampilkan halaman form untuk membuat data wali kelas baru
    public function create()
    {
        return Inertia::render('guru/wali_kelas/create');
    }

    // Menyimpan data wali kelas baru ke dalam database
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'nip' => 'required|string|unique:wali_kelas,nip',
            'jenis_kelamin' => 'required|in:Laki-Laki,Perempuan',
            'nomor_telepon' => 'nullable|string|max:20',
            'alamat' => 'required|string',
            'kelas_diwakili' => 'required|string|max:100',
            'tahun_ajaran' => 'required|string|max:20',
        ]);

        WaliKelas::create($validated);

        return redirect()->route('wali_kelas.index')->with('success', 'Data wali kelas berhasil ditambahkan.');
    }

    // Menampilkan detail dari data wali kelas berdasarkan ID
    public function show($id)
    {
        $data = WaliKelas::findOrFail($id);

        return Inertia::render('guru/wali_kelas/show', [
            'wali_kelas' => $data,
        ]);
    }

    // Menampilkan form edit data wali kelas berdasarkan ID
    public function edit($id)
    {
        $data = WaliKelas::findOrFail($id);

        return Inertia::render('guru/wali_kelas/edit', [
            'wali_kelas' => $data,
        ]);
    }

    // Memperbarui data wali kelas berdasarkan ID
    public function update(Request $request, $id)
    {
        $data = WaliKelas::findOrFail($id);

        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'nip' => 'required|string|unique:wali_kelas,nip,' . $data->id,
            'jenis_kelamin' => 'required|in:Laki-Laki,Perempuan',
            'nomor_telepon' => 'nullable|string|max:20',
            'alamat' => 'required|string',
            'kelas_diwakili' => 'required|string|max:100',
            'tahun_ajaran' => 'required|string|max:20',
        ]);

        $data->update($validated);

        return redirect()->route('wali_kelas.index')->with('success', 'Data wali kelas berhasil diperbarui.');
    }

    // Menghapus data wali kelas berdasarkan ID
    public function destroy($id)
    {
        $data = WaliKelas::findOrFail($id);
        $data->delete();

        return redirect()->route('wali_kelas.index')->with('success', 'Data wali kelas berhasil dihapus.');
    }
}
