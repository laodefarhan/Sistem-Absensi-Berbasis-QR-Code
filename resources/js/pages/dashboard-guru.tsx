import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Users, ArrowUp } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard Guru',
        href: '/guru/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Sistem Absensi" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">

                {/* === Kelas X === */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">Kelas X <span className="text-error-500">*</span></h2>
                    <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                        <KelasCard title="Kelas X IPA 1" jumlah={0} persen={0} />
                        <KelasCard title="Kelas X IPA 2" jumlah={0} persen={0} />
                        <KelasCard title="Kelas X IPS 1" jumlah={0} persen={0} />
                        <KelasCard title="Kelas X IPS 2" jumlah={0} persen={0} />
                        <KelasCard title="Kelas X Bahasa 1" jumlah={0} persen={0} />
                        <KelasCard title="Kelas X Bahasa 2" jumlah={0} persen={0} />
                    </div>
                </div>

                {/* === Kelas XI === */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">Kelas XI <span className="text-error-500">*</span></h2>
                    <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                        <KelasCard title="Kelas XI IPA 1" jumlah={0} persen={0} />
                        <KelasCard title="Kelas XI IPA 2" jumlah={0} persen={0} />
                        <KelasCard title="Kelas XI IPS 1" jumlah={0} persen={0} />
                        <KelasCard title="Kelas XI IPS 2" jumlah={0} persen={0} />
                        <KelasCard title="Kelas XI Bahasa 1" jumlah={0} persen={0} />
                        <KelasCard title="Kelas XI Bahasa 2" jumlah={0} persen={0} />
                    </div>
                </div>

                {/* === Kelas XII === */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">Kelas XII <span className="text-error-500">*</span></h2>
                    <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                        <KelasCard title="Kelas XII IPA 1" jumlah={0} persen={0} />
                        <KelasCard title="Kelas XII IPA 2" jumlah={0} persen={0} />
                        <KelasCard title="Kelas XII IPS 1" jumlah={0} persen={0} />
                        <KelasCard title="Kelas XII IPS 2" jumlah={0} persen={0} />
                        <KelasCard title="Kelas XII Bahasa 1" jumlah={0} persen={0} />
                        <KelasCard title="Kelas XII Bahasa 2" jumlah={0} persen={0} />
                    </div>
                </div>

                {/* === Placeholder section === */}
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}

// Komponen kartu kelas
function KelasCard({ title, jumlah, persen }: { title: string; jumlah: number; persen: number }) {
    return (
        <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-4">
            <div className="flex flex-col h-full">
                <div className="flex h-12 w-12 items-center justify-center border rounded-xl bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800">
                    <Users className="w-6 h-6 text-black dark:text-white" />
                </div>
                <div className="mt-4 flex items-end justify-between">
                    <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{title}</span>
                        <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">{jumlah}</h4>
                    </div>
                    <span className="flex items-center gap-1 border rounded-full bg-success-50 py-0.5 pl-2 pr-2.5 text-sm font-medium text-red-600">
                        <ArrowUp className="w-4 h-4" />
                        {persen}%
                    </span>
                </div>
            </div>
        </div>
    );
}
