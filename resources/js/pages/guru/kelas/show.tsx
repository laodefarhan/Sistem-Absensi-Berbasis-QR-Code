import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

type Props = {
    kelas: {
        id: number;
        kelas: string;
        jurusan: string;
        tahun_ajaran: string;
    };
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Kelas',
        href: '/guru/kelas',
    },
    {
        title: 'Detail Kelas',
        href: '#',
    },
];

export default function ShowKelas({ kelas }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Detail Kelas" />

            <div className="w-full p-6 space-y-6 bg-white dark:bg-neutral-900 rounded-lg shadow">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Detail Kelas</h1>

                <div className="text-gray-700 space-y-2">
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Kelas:</strong>
                        <span className="text-lg dark:text-white">{kelas.kelas}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Jurusan:</strong>
                        <span className="text-lg dark:text-white">{kelas.jurusan}</span>
                    </div>
                    <div>
                        <strong className="block text-sm text-gray-500 dark:text-white">Tahun Ajaran:</strong>
                        <span className="text-lg dark:text-white">{kelas.tahun_ajaran}</span>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
