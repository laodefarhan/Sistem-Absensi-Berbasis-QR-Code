<?php

namespace Database\Seeders;

use App\Models\Siswa;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class SiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create('id_ID'); // lokal Indonesia

        $kelasList = ['X', 'XI', 'XII'];
        $jurusanList = ['IPA 1', 'IPA 2', 'IPS 1', 'IPS 2', 'Bahasa 1', 'Bahasa 2'];
        $agamaList = ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu'];

        for ($i = 1; $i <= 100; $i++) {
            // Tentukan jenis kelamin dan nama yang sesuai
            $isLaki = (bool)rand(0, 1);
            if ($isLaki) {
                $jenis_kelamin = 'Laki-Laki';
                $nama_lengkap = $faker->firstNameMale . ' ' . $faker->lastName;
            } else {
                $jenis_kelamin = 'Perempuan';
                $nama_lengkap = $faker->firstNameFemale . ' ' . $faker->lastName;
            }

            // Pilih tahun ajaran, misal: 2025/2026
            $tahun_awal = $faker->numberBetween(2020, 2025);
            $tahun_ajaran = $tahun_awal . '/' . ($tahun_awal + 1);

            // Buat tanggal lahir antara 15-18 tahun sebelum tahun ajaran awal
            $tahun_lahir = $tahun_awal - $faker->numberBetween(15, 18);
            $tanggal_lahir = $faker->dateTimeBetween("$tahun_lahir-01-01", "$tahun_lahir-12-31")->format('d-m-Y');
            $ttl = $faker->city . ', ' . $tanggal_lahir;

            Siswa::create([
                'nisn' => $faker->unique()->numerify('00########'), // 10 digit
                'nama_lengkap' => $nama_lengkap,
                'jenis_kelamin' => $jenis_kelamin,
                'ttl' => $ttl, // Tempat, tanggal lahir sesuai tahun ajaran
                'agama' => $faker->randomElement($agamaList),
                'alamat' => $faker->address(),
                'nomor_telepon' => $faker->numerify('08##########'), // format Indonesia
                'nama_orang_tua' => $faker->name(),
                'kelas' => $faker->randomElement($kelasList),
                'jurusan' => $faker->randomElement($jurusanList),
                'tahun_ajaran' => $tahun_ajaran,
            ]);
        }
    }
}
