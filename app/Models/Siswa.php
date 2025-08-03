<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Siswa extends Model
{
    protected $fillable = [
        'nisn',
        'nama_lengkap',
        'jenis_kelamin',
        'ttl',
        'agama',
        'alamat',
        'nomor_telepon',
        'nama_orang_tua',
        'kelas',
        'jurusan',
        'tahun_ajaran',
    ];
}
