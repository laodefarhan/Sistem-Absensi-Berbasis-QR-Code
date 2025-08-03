import { Head, usePage, Link } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

interface Siswa {
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
}

interface PageProps {
    siswa: Siswa[];
    [key: string]: unknown;
    filters?: {
        search?: string;
    };
}

const breadcrumbs = [
    {
        title: 'Siswa',
        href: '/guru/siswa',
    },
];

export default function SiswaIndex() {
    const { siswa, filters } = usePage<PageProps>().props;
    const [search, setSearch] = useState(filters?.search || '');

    // Fungsi untuk trigger pencarian (saat input berubah)
    useEffect(() => {
        const timeout = setTimeout(() => {
            router.get('/guru/siswa', { search }, {
                preserveState: true,
                replace: true,
            });
        }, 500);

        return () => clearTimeout(timeout);
    }, [search]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data Siswa" />
            <div className="p-4">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">Data Siswa</h1>
                        <Input
                            type="text"
                            placeholder="Cari Siswa..."
                            className='w-[400px]'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <Link
                        href="/guru/siswa/create"
                        className="bg-blue-500 text-white px-4 py-2 h-fit rounded-md hover:bg-blue-600"
                    >
                        Tambah Siswa
                    </Link>
                </div>

                <div className="w-full overflow-x-auto">
                    <table className="table-auto border-collapse border border-gray-300 text-sm text-left w-full">
                        <thead className="bg-gray-100 dark:bg-neutral-900">
                            <tr>
                                <th className="border px-2 py-1 whitespace-nowrap">No.</th>
                                <th className="border px-2 py-1 whitespace-nowrap">NISN</th>
                                <th className="border px-2 py-1 whitespace-nowrap">Nama Lengkap</th>
                                <th className="border px-2 py-1 whitespace-nowrap">Jenis Kelamin</th>
                                <th className="border px-2 py-1 whitespace-nowrap">TTL</th>
                                <th className="border px-2 py-1 whitespace-nowrap">Agama</th>
                                <th className="border px-2 py-1 whitespace-nowrap">Alamat</th>
                                <th className="border px-2 py-1 whitespace-nowrap">No. Telepon</th>
                                <th className="border px-2 py-1 whitespace-nowrap">Nama Orang Tua</th>
                                <th className="border px-2 py-1 whitespace-nowrap">Kelas</th>
                                <th className="border px-2 py-1 whitespace-nowrap">Jurusan</th>
                                <th className="border px-2 py-1 whitespace-nowrap">Tahun Ajaran</th>
                                <th className="border px-2 py-1 whitespace-nowrap">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {siswa.length > 0 ? (
                                siswa.map((sis, index) => (
                                    <tr key={sis.id} className="hover:bg-gray-50 dark:hover:bg-neutral-900">
                                        <td className="border px-2 py-1">{index + 1}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{sis.nisn}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{sis.nama_lengkap}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{sis.jenis_kelamin}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{sis.ttl}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{sis.agama}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{sis.alamat}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{sis.nomor_telepon}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{sis.nama_orang_tua}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{sis.kelas}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{sis.jurusan}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{sis.tahun_ajaran}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap space-x-1">
                                            <Link
                                                href={`/guru/siswa/${sis.id}`}
                                                className="text-white bg-blue-500 border border-blue-400 px-3 py-1 rounded hover:bg-blue-600"
                                            >
                                                Lihat
                                            </Link>
                                            <Link
                                                href={`/guru/siswa/${sis.id}/edit`}
                                                className="text-white bg-yellow-500 border border-yellow-400 px-3 py-1 rounded hover:bg-yellow-600"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                as="button"
                                                method="delete"
                                                href={`/guru/siswa/${sis.id}`}
                                                className="text-white bg-red-500 border border-red-400 px-3 py-1 rounded hover:bg-red-600"
                                                onBefore={() =>
                                                    confirm('Yakin ingin menghapus data ini?')
                                                }
                                            >
                                                Hapus
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={13}
                                        className="border px-4 py-2 text-center text-gray-500"
                                    >
                                        Tidak ada data siswa.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
