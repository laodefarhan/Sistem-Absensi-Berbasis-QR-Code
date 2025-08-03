import HeadingSmall from '@/components/guru/heading-small';
import InputError from '@/components/guru/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Kelas',
        href: '/guru/kelas',
    },
    {
        title: 'Tambah Kelas',
        href: '/guru/kelas/create',
    },
];

type KelasForm = {
    kelas: string,
    jurusan: string,
    tahun_ajaran: string
};

export default function AddKelas() {
    const { data, setData, post, errors, reset, processing, recentlySuccessful } = useForm<Required<KelasForm>>({
        kelas: '',
        jurusan: '',
        tahun_ajaran: ''
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('kelas.store'), {
            onFinish: () => reset('kelas', 'jurusan', 'tahun_ajaran'),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Kelas" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="space-y-6">
                    <HeadingSmall title="Form Kelas" description="Input Data Kelas Baru" />

                    {/* ALERT BERHASIL */}
                    {recentlySuccessful && (
                        <div className="rounded-md bg-green-100 border border-green-300 text-green-800 px-4 py-3">
                            Data kelas berhasil disimpan.
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="kelas">Kelas <span className='text-error-500'>*</span></Label>
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
                            <Label htmlFor="jurusan">Jurusan <span className='text-error-500'>*</span></Label>
                            <select
                                id="jurusan"
                                className="mt-1 block w-full border rounded-md px-3 py-2 bg-white dark:bg-[#0a0a0a] dark:text-[#EDEDEC] text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500"
                                value={data.jurusan}
                                onChange={(e) => setData('jurusan', e.target.value)}
                                required
                            >
                                <option value="" disabled>-</option>
                                <option value="IPA">IPA 1</option>
                                <option value="IPA">IPA 2</option>
                                <option value="IPS">IPS 1</option>
                                <option value="IPS">IPS 2</option>
                                <option value="Bahasa Indonesia">Bahasa 1</option>
                                <option value="Bahasa Indonesia">Bahasa 2</option>
                            </select>
                            <InputError className="mt-2" message={errors.jurusan} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="tahun_ajaran">Tahun Ajaran <span className='text-error-500'>*</span></Label>
                            <Input
                                id="tahun_ajaran"
                                className="mt-1 block w-full"
                                value={data.tahun_ajaran}
                                onChange={(e) => setData('tahun_ajaran', e.target.value)}
                                required
                                autoComplete="off"
                                placeholder="Contoh: 2024/2025"
                            />
                            <InputError className="mt-2" message={errors.tahun_ajaran} />
                        </div>

                        <Button type="submit" className="mt-2 w-full" tabIndex={5} disabled={processing}>
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Simpan Kelas
                        </Button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
