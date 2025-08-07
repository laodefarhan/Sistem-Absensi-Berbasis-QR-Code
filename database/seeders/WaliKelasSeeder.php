<?php

namespace Database\Seeders;

use App\Models\WaliKelas;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class WaliKelasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create('id_ID');

        $kelas = ['IPA 1', 'IPA 2', 'IPS 1', 'IPS 2', 'Bahasa 1', 'Bahasa 2'];
        $tingkat = ['X', 'XI', 'XII'];
        $gelar = ['S.Pd', 'M.Pd', 'S.Si', 'S.Hum', 'S.T', 'S.Kom'];
        $i = 1;

        foreach ($tingkat as $t) {
            foreach ($kelas as $k) {
                $jenis_kelamin = $i % 2 == 0 ? 'Perempuan' : 'Laki-Laki';
                $nama_dosen = $jenis_kelamin == 'Perempuan'
                    ? $faker->firstNameFemale . ' ' . $faker->lastName
                    : $faker->firstNameMale . ' ' . $faker->lastName;

                $nama = $nama_dosen . ', ' . $faker->randomElement($gelar);

                WaliKelas::create([
                    'nama' => $nama,
                    'nip' => '19830000' . str_pad($i, 6, '0', STR_PAD_LEFT),
                    'jenis_kelamin' => $jenis_kelamin,
                    'nomor_telepon' => $faker->numerify('08##########'),
                    'alamat' => $faker->address(),
                    'kelas_diwakili' => "$t $k",
                    'tahun_ajaran' => '2024/2025',
                ]);

                $i++;
            }
        }
    }
}
