import { Head, usePage, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { Input } from '@/components/ui/input';

interface Kelas {
    id: number;
    kelas: string;
    jurusan: string;
    tahun_ajaran: string;
}

interface PageProps {
    kelas: Kelas[];
    [key: string]: unknown;
    filters?: {
        search?: string;
    };
}

const breadcrumbs = [
    {
        title: 'Kelas',
        href: '/guru/kelas',
    },
];

export default function KelasIndex() {
    const { kelas, filters } = usePage<PageProps>().props;
    const [search, setSearch] = useState(filters?.search || '');

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.get('/guru/kelas', { search }, {
                preserveState: true,
                replace: true,
            });
        }, 500);

        return () => clearTimeout(timeout);
    }, [search]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data Kelas" />
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-2xl font-bold">Data Kelas</h1>
                        <Input
                            type="text"
                            placeholder="Cari Kelas..."
                            className='w-[400px]'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <Link
                        href="/guru/kelas/create"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Tambah Kelas
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300 text-sm text-left">
                        <thead className="bg-gray-100 dark:bg-neutral-900">
                            <tr>
                                <th className="border p-2">No.</th>
                                <th className="border p-2">Kelas</th>
                                <th className="border p-2">Jurusan</th>
                                <th className="border p-2">Tahun Ajaran</th>
                                <th className="border p-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {kelas.length > 0 ? (
                                kelas.map((kls, index) => (
                                    <tr key={kls.id} className="hover:bg-gray-50 dark:hover:bg-neutral-900">
                                        <td className="border p-2">{index + 1}</td>
                                        <td className="border p-2">{kls.kelas}</td>
                                        <td className="border p-2">{kls.jurusan}</td>
                                        <td className="border p-2">{kls.tahun_ajaran}</td>
                                        <td className="border p-2 space-x-2">
                                            <Link
                                                href={`/guru/kelas/${kls.id}`}
                                                className="text-white rounded bg-blue-500 border border-blue-400 px-4 py-1 hover:bg-blue-600"
                                            >
                                                Lihat
                                            </Link>
                                            <Link
                                                href={`/guru/kelas/${kls.id}/edit`}
                                                className="text-white rounded bg-yellow-500 border border-yellow-400 px-4 py-1 hover:bg-yellow-600"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                as="button"
                                                method="delete"
                                                href={`/guru/kelas/${kls.id}`}
                                                className="text-white rounded bg-red-500 border border-red-400 px-4 py-1 hover:bg-red-600"
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
                                    <td colSpan={5} className="border p-4 text-center text-gray-500">
                                        Tidak ada data kelas.
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
