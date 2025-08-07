<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WaliKelas extends Model
{
    protected $fillable = [
        'nama',
        'nip',
        'jenis_kelamin',
        'nomor_telepon',
        'alamat',
        'kelas_diwakili',
        'tahun_ajaran',
    ];
}
