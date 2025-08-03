import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
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
        title: 'Detail Siswa',
        href: '#',
    },
];

export default function ShowSiswa({ siswa }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Detail Siswa" />

            <div className="w-full p-6 space-y-6 bg-white dark:bg-neutral-900 rounded-lg shadow">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Detail Siswa</h1>

                <div className="text-gray-700 space-y-4">
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">NISN:</strong>
                        <span className="text-lg dark:text-white">{siswa.nisn}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Nama Lengkap:</strong>
                        <span className="text-lg dark:text-white">{siswa.nama_lengkap}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Jenis Kelamin:</strong>
                        <span className="text-lg dark:text-white">{siswa.jenis_kelamin}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Tempat Tanggal Lahir:</strong>
                        <span className="text-lg dark:text-white">{siswa.ttl}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Agama:</strong>
                        <span className="text-lg dark:text-white">{siswa.agama}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Alamat:</strong>
                        <span className="text-lg dark:text-white">{siswa.alamat}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Nomor Telepon:</strong>
                        <span className="text-lg dark:text-white">{siswa.nomor_telepon}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Nama Orang Tua:</strong>
                        <span className="text-lg dark:text-white">{siswa.nama_orang_tua}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Kelas:</strong>
                        <span className="text-lg dark:text-white">{siswa.kelas}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Jurusan:</strong>
                        <span className="text-lg dark:text-white">{siswa.jurusan}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Tahun Ajaran:</strong>
                        <span className="text-lg dark:text-white">{siswa.tahun_ajaran}</span>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
