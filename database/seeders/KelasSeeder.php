<?php

namespace Database\Seeders;

use App\Models\Kelas;
use Illuminate\Database\Seeder;

class KelasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tingkat = ['X', 'XI', 'XII'];
        $jurusanList = ['IPA 1', 'IPA 2', 'IPS 1', 'IPS 2', 'Bahasa 1', 'Bahasa 2'];

        foreach ($tingkat as $kelas) {
            foreach ($jurusanList as $jurusan) {
                Kelas::create([
                    'kelas' => $kelas,
                    'jurusan' => $jurusan,
                    'tahun_ajaran' => '2025/2026',
                ]);
            }
        }
    }
}
