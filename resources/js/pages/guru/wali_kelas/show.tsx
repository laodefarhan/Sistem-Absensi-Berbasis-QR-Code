import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

type Props = {
    wali_kelas: {
        id: number;
        nama: string;
        nip: string;
        jenis_kelamin: string;
        nomor_telepon: string;
        alamat: string;
        kelas_diwakili: string;
        tahun_ajaran: string;
    };
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Wali Kelas',
        href: '/guru/wali_kelas',
    },
    {
        title: 'Detail Wali Kelas',
        href: '#',
    },
];

export default function ShowWaliKelas({ wali_kelas }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Detail Wali Kelas" />

            <div className="w-full p-6 space-y-6 bg-white dark:bg-neutral-900 rounded-lg shadow">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Detail Wali Kelas</h1>

                <div className="text-gray-700 space-y-4">
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Nama:</strong>
                        <span className="text-lg dark:text-white">{wali_kelas.nama}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">NIP:</strong>
                        <span className="text-lg dark:text-white">{wali_kelas.nip}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Jenis Kelamin:</strong>
                        <span className="text-lg dark:text-white">{wali_kelas.jenis_kelamin}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">No. Telepon:</strong>
                        <span className="text-lg dark:text-white">{wali_kelas.nomor_telepon}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Alamat:</strong>
                        <span className="text-lg dark:text-white">{wali_kelas.alamat}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Kelas Diwakili:</strong>
                        <span className="text-lg dark:text-white">{wali_kelas.kelas_diwakili}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Tahun Ajaran:</strong>
                        <span className="text-lg dark:text-white">{wali_kelas.tahun_ajaran}</span>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
