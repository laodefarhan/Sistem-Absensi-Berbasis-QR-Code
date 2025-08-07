<?php

namespace App\Http\Controllers;

use App\Models\Siswa;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiswaController extends Controller
{
    // Menampilkan daftar semua data siswa
    public function index(Request $request)
    {
        // Ambil input pencarian dari query string (?search=...)
        $search = $request->query('search');

        // Ambil data siswa dan filter berdasarkan nama lengkap atau nisn jika ada input pencarian
        $siswa = Siswa::query()
            ->when($search, function ($query, $search) {
                $query->where('nama_lengkap', 'like', '%' . $search . '%')
                    ->orWhere('nisn', 'like', '%' . $search . '%');
            })
            ->orderBy('nama_lengkap')
            ->get();

        // Kirim data siswa dan nilai pencarian ke halaman frontend (React)
        return Inertia::render('guru/siswa/siswa', [
            'siswa' => $siswa,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    // Menampilkan halaman form untuk membuat data siswa baru
    public function create()
    {
        return Inertia::render('guru/siswa/create');
    }

    // Menyimpan data siswa baru ke dalam database
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nisn' => 'required|string|unique:siswas,nisn',
            'nama_lengkap' => 'required|string|max:255',
            'jenis_kelamin' => 'required|in:Laki-Laki,Perempuan',
            'ttl' => 'required|string|max:255',
            'agama' => 'required|string|max:100',
            'alamat' => 'required|string',
            'nomor_telepon' => 'nullable|string|max:20',
            'nama_orang_tua' => 'required|string|max:255',
            'kelas' => 'required|string|max:50',
            'jurusan' => 'required|string|max:100',
            'tahun_ajaran' => 'required|string|max:20',
        ]);

        Siswa::create($validated);

        return redirect()->route('siswa.index')->with('success', 'Data siswa berhasil ditambahkan.');
    }

    // Menampilkan detail dari data siswa berdasarkan ID
    public function show($id)
    {
        $siswa = Siswa::findOrFail($id);

        return Inertia::render('guru/siswa/show', [
            'siswa' => $siswa,
        ]);
    }

    // Menampilkan form edit data siswa berdasarkan ID
    public function edit($id)
    {
        $siswa = Siswa::findOrFail($id);

        return Inertia::render('guru/siswa/edit', [
            'siswa' => $siswa,
        ]);
    }

    // Memperbarui data siswa berdasarkan ID
    public function update(Request $request, $id)
    {
        $siswa = Siswa::findOrFail($id);

        $validated = $request->validate([
            'nisn' => 'required|string|unique:siswas,nisn,' . $siswa->id,
            'nama_lengkap' => 'required|string|max:255',
            'jenis_kelamin' => 'required|in:Laki-Laki,Perempuan',
            'ttl' => 'required|string|max:255',
            'agama' => 'required|string|max:100',
            'alamat' => 'required|string',
            'nomor_telepon' => 'nullable|string|max:20',
            'nama_orang_tua' => 'required|string|max:255',
            'kelas' => 'required|string|max:50',
            'jurusan' => 'required|string|max:100',
            'tahun_ajaran' => 'required|string|max:20',
        ]);

        $siswa->update($validated);

        return redirect()->route('siswa.index')->with('success', 'Data siswa berhasil diperbarui.');
    }

    // Menghapus data siswa berdasarkan ID
    public function destroy($id)
    {
        $siswa = Siswa::findOrFail($id);
        $siswa->delete();

        return redirect()->route('siswa.index')->with('success', 'Data siswa berhasil dihapus.');
    }
}
