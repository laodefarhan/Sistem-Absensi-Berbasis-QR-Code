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
        title: 'Wali Kelas',
        href: '/guru/wali_kelas',
    },
    {
        title: 'Tambah Wali Kelas',
        href: '/guru/wali_kelas/create',
    },
];

type WaliKelasForm = {
    nama: string;
    nip: string;
    jenis_kelamin: string;
    nomor_telepon: string;
    alamat: string;
    kelas_diwakili: string;
    tahun_ajaran: string;
};

export default function AddWaliKelas() {
    const { data, setData, post, errors, reset, processing, recentlySuccessful } = useForm<Required<WaliKelasForm>>({
        nama: '',
        nip: '',
        jenis_kelamin: '',
        nomor_telepon: '',
        alamat: '',
        kelas_diwakili: '',
        tahun_ajaran: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('wali_kelas.store'), {
            onFinish: () => reset(),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Wali Kelas" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="space-y-6">
                    <HeadingSmall title="Form Wali Kelas" description="Input Data Wali Kelas Baru" />

                    {recentlySuccessful && (
                        <div className="rounded-md bg-green-100 border border-green-300 text-green-800 px-4 py-3">
                            Data wali kelas berhasil disimpan.
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="nama">
                                Nama <span className='text-error-500'>*</span>
                            </Label>
                            <Input id="nama" value={data.nama} onChange={e => setData('nama', e.target.value)} required />
                            <InputError className="mt-2" message={errors.nama} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="nip">
                                NIP <span className='text-error-500'>*</span>
                            </Label>
                            <Input id="nip" value={data.nip} onChange={e => setData('nip', e.target.value)} required />
                            <InputError className="mt-2" message={errors.nip} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="jenis_kelamin">
                                Jenis Kelamin <span className='text-error-500'>*</span>
                            </Label>
                            <select
                                id="jenis_kelamin"
                                className="mt-1 block w-full border rounded-md px-3 py-2 bg-white dark:bg-[#0a0a0a] dark:text-[#EDEDEC] text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500"
                                value={data.jenis_kelamin}
                                onChange={e => setData('jenis_kelamin', e.target.value)}
                                required
                            >
                                <option value="" disabled>-</option>
                                <option value="Laki-Laki">Laki-laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                            <InputError className="mt-2" message={errors.jenis_kelamin} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="nomor_telepon">
                                No. Telepon <span className='text-error-500'>*</span>
                            </Label>
                            <Input id="nomor_telepon" value={data.nomor_telepon} onChange={e => setData('nomor_telepon', e.target.value)} required />
                            <InputError className="mt-2" message={errors.nomor_telepon} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="alamat">
                                Alamat <span className='text-error-500'>*</span>
                            </Label>
                            <Input id="alamat" value={data.alamat} onChange={e => setData('alamat', e.target.value)} required />
                            <InputError className="mt-2" message={errors.alamat} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="kelas_diwakili">
                                Kelas Diwakili <span className='text-error-500'>*</span>
                            </Label>
                            <select
                                id="kelas_diwakili"
                                className="mt-1 block w-full border rounded-md px-3 py-2 bg-white dark:bg-[#0a0a0a] dark:text-[#EDEDEC] text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500"
                                value={data.kelas_diwakili}
                                onChange={e => setData('kelas_diwakili', e.target.value)}
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
                            <InputError className="mt-2" message={errors.kelas_diwakili} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="tahun_ajaran">
                                Tahun Ajaran <span className='text-error-500'>*</span>
                            </Label>
                            <Input
                                id="tahun_ajaran"
                                className="mt-1 block w-full"
                                value={data.tahun_ajaran}
                                onChange={e => setData('tahun_ajaran', e.target.value)}
                                required
                                autoComplete="off"
                                placeholder="Contoh: 2025/2026"
                            />
                            <InputError className="mt-2" message={errors.tahun_ajaran} />
                        </div>

                        <Button type="submit" className="mt-2 w-full" disabled={processing}>
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Simpan Wali Kelas
                        </Button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
