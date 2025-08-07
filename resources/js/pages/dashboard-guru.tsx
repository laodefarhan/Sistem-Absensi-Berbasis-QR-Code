import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Users } from 'lucide-react';

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
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                    {/* Kelas X IPA 1 */}
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-4">
                        <div className="flex flex-col h-full">
                            {/* Icon */}
                            <div className="p-2 rounded border border-gray-200 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800">
                                <Users className="w-6 h-6 text-black dark:text-white" />
                            </div>

                            {/* Info Kelas */}
                            <div className="mt-4 w-full">
                                <p className="text-sm text-black dark:text-white">Kelas X IPA 1</p>
                                <div className="mt-2 flex items-center justify-between">
                                    <p className="text-lg font-semibold text-black dark:text-white">0 Siswa</p>
                                    <div className="p-1.5 border rounded">
                                        <p className="text-sm text-red-600">0%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* === Kelas X IPA 2 === */}
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-4">
                        <div className="flex flex-col h-full">
                            {/* Icon */}
                            <div className="p-2 rounded border border-gray-200 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800">
                                <Users className="w-6 h-6 text-black dark:text-white" />
                            </div>

                            {/* Info Kelas */}
                            <div className="mt-4 w-full">
                                <p className="text-sm text-black dark:text-white">Kelas X IPA 2</p>
                                <div className="mt-2 flex items-center justify-between">
                                    <p className="text-lg font-semibold text-black dark:text-white">0 Siswa</p>
                                    <div className="p-1.5 border rounded">
                                        <p className="text-sm text-red-600">0%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* === Kelas X IPS 1 === */}
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-4">
                        <div className="flex flex-col h-full">
                            {/* Icon */}
                            <div className="p-2 rounded border border-gray-200 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800">
                                <Users className="w-6 h-6 text-black dark:text-white" />
                            </div>

                            {/* Info Kelas */}
                            <div className="mt-4 w-full">
                                <p className="text-sm text-black dark:text-white">Kelas X IPS 1</p>
                                <div className="mt-2 flex items-center justify-between">
                                    <p className="text-lg font-semibold text-black dark:text-white">0 Siswa</p>
                                    <div className="p-1.5 border rounded">
                                        <p className="text-sm text-red-600">0%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder 4 */}
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>

                    {/* Placeholder 5 */}
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
