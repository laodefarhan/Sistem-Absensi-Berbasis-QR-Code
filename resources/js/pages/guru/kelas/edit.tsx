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
        title: 'Edit Kelas',
        href: '#',
    },
];

export default function EditKelas({ kelas }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        kelas: kelas.kelas,
        jurusan: kelas.jurusan,
        tahun_ajaran: kelas.tahun_ajaran,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('kelas.update', kelas.id));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Kelas" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="space-y-6">
                    <HeadingSmall
                        title="Edit Data Kelas"
                        description="Perbarui informasi kelas sesuai kebutuhan."
                    />

                    <form onSubmit={submit} className="space-y-6">
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
                                className="mt-1 block w-full"
                                value={data.tahun_ajaran}
                                onChange={(e) => setData('tahun_ajaran', e.target.value)}
                                required
                                autoComplete="off"
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
