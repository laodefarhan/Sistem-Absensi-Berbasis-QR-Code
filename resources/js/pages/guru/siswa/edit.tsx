import { useForm, Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/guru/input-error';
import { FormEventHandler } from 'react';
import HeadingSmall from '@/components/guru/heading-small';
import { type BreadcrumbItem } from '@/types';

type Props = {
    siswa: {
        id: number;
        nisn: string;
        nama_lengkap: string;
        jenis_kelamin: string;
        ttl: string;
        agama: string;
        alamat: string;
        nomor_telepon: string;
        nama_orang_tua: string;
        kelas: string;
        jurusan: string;
        tahun_ajaran: string;
    };
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Siswa',
        href: '/guru/siswa',
    },
    {
        title: 'Edit Siswa',
        href: '#',
    },
];

export default function EditSiswa({ siswa }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        nisn: siswa.nisn,
        nama_lengkap: siswa.nama_lengkap,
        jenis_kelamin: siswa.jenis_kelamin,
        ttl: siswa.ttl,
        agama: siswa.agama,
        alamat: siswa.alamat,
        nomor_telepon: siswa.nomor_telepon,
        nama_orang_tua: siswa.nama_orang_tua,
        kelas: siswa.kelas,
        jurusan: siswa.jurusan,
        tahun_ajaran: siswa.tahun_ajaran,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('siswa.update', siswa.id));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Siswa" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="space-y-6">
                    <HeadingSmall
                        title="Edit Data Siswa"
                        description="Perbarui informasi siswa sesuai kebutuhan."
                    />

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="nisn">
                                NISN <span className='text-error-500'>*</span>
                            </Label>
                            <Input
                                id="nisn"
                                value={data.nisn}
                                onChange={(e) => setData('nisn', e.target.value)}
                                required
                            />
                            <InputError className="mt-2" message={errors.nisn} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="nama_lengkap">
                                Nama Lengkap <span className='text-error-500'>*</span>
                            </Label>
                            <Input
                                id="nama_lengkap"
                                value={data.nama_lengkap}
                                onChange={(e) => setData('nama_lengkap', e.target.value)}
                                required
                            />
                            <InputError className="mt-2" message={errors.nama_lengkap} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="jenis_kelamin">
                                Jenis Kelamin <span className='text-error-500'>*</span>
                            </Label>
                            <select
                                id="jenis_kelamin"
                                className="mt-1 block w-full border rounded-md px-3 py-2 bg-white dark:bg-[#0a0a0a] dark:text-[#EDEDEC] text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500"
                                value={data.jenis_kelamin}
                                onChange={(e) => setData('jenis_kelamin', e.target.value)}
                                required
                            >
                                <option value="" disabled>-</option>
                                <option value="Laki-Laki">Laki-Laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                            <InputError className="mt-2" message={errors.jenis_kelamin} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="ttl">
                                Tempat Tanggal Lahir <span className='text-error-500'>*</span>
                            </Label>
                            <Input
                                id="ttl"
                                value={data.ttl}
                                onChange={(e) => setData('ttl', e.target.value)}
                                required
                                placeholder="Contoh: Pangkalpinang, 21-01-2008"
                            />
                            <InputError className="mt-2" message={errors.ttl} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="agama">
                                Agama <span className='text-error-500'>*</span>
                            </Label>
                            <select
                                id="agama"
                                className="mt-1 block w-full border rounded-md px-3 py-2 bg-white dark:bg-[#0a0a0a] dark:text-[#EDEDEC] text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500"
                                value={data.agama}
                                onChange={(e) => setData('agama', e.target.value)}
                                required
                            >
                                <option value="" disabled>-</option>
                                <option value="Islam">Islam</option>
                                <option value="Kristen">Kristen</option>
                                <option value="Katolik">Katolik</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Budha">Budha</option>
                                <option value="Konghucu">Konghucu</option>
                            </select>
                            <InputError className="mt-2" message={errors.agama} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="alamat">
                                Alamat <span className='text-error-500'>*</span>
                            </Label>
                            <Input
                                id="alamat"
                                value={data.alamat}
                                onChange={(e) => setData('alamat', e.target.value)}
                                required
                            />
                            <InputError className="mt-2" message={errors.alamat} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="nomor_telepon">
                                Nomor Telepon <span className='text-error-500'>*</span>
                            </Label>
                            <Input
                                id="nomor_telepon"
                                value={data.nomor_telepon}
                                onChange={(e) => setData('nomor_telepon', e.target.value)}
                                required
                            />
                            <InputError className="mt-2" message={errors.nomor_telepon} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="nama_orang_tua">
                                Nama Orang Tua <span className='text-error-500'>*</span>
                            </Label>
                            <Input
                                id="nama_orang_tua"
                                value={data.nama_orang_tua}
                                onChange={(e) => setData('nama_orang_tua', e.target.value)}
                                required
                            />
                            <InputError className="mt-2" message={errors.nama_orang_tua} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="kelas">
                                Kelas <span className='text-error-500'>*</span>
                            </Label>
                            <select
                                id="kelas"
                                className="mt-1 block w-full border rounded-md px-3 py-2 bg-white dark:bg-[#0a0a0a] dark:text-[#EDEDEC] text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500"
                                value={data.kelas}
                                onChange={(e) => setData('kelas', e.target.value)}
                                required
                            >
                                <option value="" disabled>-</option>
                                <option value="X">X</option>
                                <option value="XI">XI</option>
                                <option value="XII">XII</option>
                            </select>
                            <InputError className="mt-2" message={errors.kelas} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="jurusan">
                                Jurusan <span className='text-error-500'>*</span>
                            </Label>
                            <select
                                id="jurusan"
                                className="mt-1 block w-full border rounded-md px-3 py-2 bg-white dark:bg-[#0a0a0a] dark:text-[#EDEDEC] text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500"
                                value={data.jurusan}
                                onChange={(e) => setData('jurusan', e.target.value)}
                                required
                            >
                                <option value="" disabled>-</option>
                                <option value="IPA 1">IPA 1</option>
                                <option value="IPA 2">IPA 2</option>
                                <option value="IPS 1">IPS 1</option>
                                <option value="IPS 2">IPS 2</option>
                                <option value="Bahasa 1">Bahasa 1</option>
                                <option value="Bahasa 2">Bahasa 2</option>
                            </select>
                            <InputError className="mt-2" message={errors.jurusan} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="tahun_ajaran">
                                Tahun Ajaran <span className='text-error-500'>*</span>
                            </Label>
                            <Input
                                id="tahun_ajaran"
                                value={data.tahun_ajaran}
                                onChange={(e) => setData('tahun_ajaran', e.target.value)}
                                required
                                placeholder="Contoh: 2025/2026"
                            />
                            <InputError className="mt-2" message={errors.tahun_ajaran} />
                        </div>

                        <Button type="submit" className="mt-4 w-full" disabled={processing}>
                            Simpan Perubahan
                        </Button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
