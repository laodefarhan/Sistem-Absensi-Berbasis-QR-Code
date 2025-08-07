import { Head, usePage, Link } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

interface WaliKelas {
    id: number;
    nama: string;
    nip: string;
    jenis_kelamin: string;
    nomor_telepon: string;
    alamat: string;
    kelas_diwakili: string;
    tahun_ajaran: string;
}

interface PageProps {
    wali_kelas: WaliKelas[];
    [key: string]: unknown;
    filters?: {
        search?: string;
    };
}

const breadcrumbs = [
    {
        title: 'Wali Kelas',
        href: '/guru/wali_kelas',
    },
];

export default function WaliKelasIndex() {
    const { wali_kelas, filters } = usePage<PageProps>().props;
    const [search, setSearch] = useState(filters?.search || '');

    // Fungsi untuk trigger pencarian (saat input berubah)
    useEffect(() => {
        const timeout = setTimeout(() => {
            router.get('/guru/wali_kelas', { search }, {
                preserveState: true,
                replace: true,
            });
        }, 500);

        return () => clearTimeout(timeout);
    }, [search]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data Wali Kelas" />
            <div className="p-4">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">Data Wali Kelas</h1>
                        <Input
                            type="text"
                            placeholder="Cari Wali Kelas..."
                            className='w-[400px]'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <Link
                        href="/guru/wali_kelas/create"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Tambah Wali Kelas
                    </Link>
                </div>

                <div className="w-full overflow-x-auto">
                    <table className="table-auto border-collapse border border-gray-300 text-sm text-left w-full min-w-[900px]">
                        <thead className="bg-gray-100 dark:bg-neutral-900">
                            <tr>
                                <th className="border px-2 py-1 whitespace-nowrap">No.</th>
                                <th className="border px-2 py-1 whitespace-nowrap">Nama</th>
                                <th className="border px-2 py-1 whitespace-nowrap">NIP</th>
                                <th className="border px-2 py-1 whitespace-nowrap">Jenis Kelamin</th>
                                <th className="border px-2 py-1 whitespace-nowrap">No. Telepon</th>
                                <th className="border px-2 py-1 whitespace-nowrap">Alamat</th>
                                <th className="border px-2 py-1 whitespace-nowrap">Kelas Diwakili</th>
                                <th className="border px-2 py-1 whitespace-nowrap">Tahun Ajaran</th>
                                <th className="border px-2 py-1 whitespace-nowrap">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wali_kelas.length > 0 ? (
                                wali_kelas.map((wali, index) => (
                                    <tr key={wali.id} className="hover:bg-gray-50 dark:hover:bg-neutral-900">
                                        <td className="border px-2 py-1">{index + 1}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{wali.nama}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{wali.nip}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{wali.jenis_kelamin}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{wali.nomor_telepon}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{wali.alamat}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{wali.kelas_diwakili}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap">{wali.tahun_ajaran}</td>
                                        <td className="border px-2 py-1 whitespace-nowrap space-x-1">
                                            <Link
                                                href={`/guru/wali_kelas/${wali.id}`}
                                                className="text-white bg-blue-500 border border-blue-400 px-3 py-1 rounded hover:bg-blue-600"
                                            >
                                                Lihat
                                            </Link>
                                            <Link
                                                href={`/guru/wali_kelas/${wali.id}/edit`}
                                                className="text-white bg-yellow-500 border border-yellow-400 px-3 py-1 rounded hover:bg-yellow-600"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                as="button"
                                                method="delete"
                                                href={`/guru/wali_kelas/${wali.id}`}
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
                                        colSpan={9}
                                        className="border px-4 py-2 text-center text-gray-500"
                                    >
                                        Tidak ada data wali kelas.
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
