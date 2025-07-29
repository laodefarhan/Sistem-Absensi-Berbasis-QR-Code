import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/guru/input-error';
import TextLink from '@/components/guru/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { error } from 'console';

type RegisterForm = {
    name: string;
    position: string;
    gender: string;
    number_phone: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        position: '',
        gender: '',
        number_phone: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('guru.register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title="Create an account" description="Enter your details below to create your account">
            <Head title="Sistem Absensi" />
            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name */}
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                disabled={processing}
                                placeholder="Full name"
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        {/* Position */}
                        <div className="grid gap-2">
                            <Label htmlFor="position">Position</Label>
                            <select
                                id="position"
                                required
                                tabIndex={2}
                                autoComplete="position"
                                value={data.position}
                                onChange={(e) => setData('position', e.target.value)}
                                disabled={processing}
                                className="border rounded-md px-2 py-1.5 bg-white dark:bg-[#0a0a0a] dark:text-[#EDEDEC] text-sm
                                    focus:outline-none focus:border-gray-400 dark:focus:border-gray-500
                                    hover:shadow focus:shadow-md transition-shadow"
                            >
                                <option value="" disabled>-</option>
                                <option value="Kepala Sekolah">Kepala Sekolah</option>
                                <option value="Wakil Kepala Sekolah">Wakil Kepala Sekolah</option>
                                <option value="Guru Bahasa Indonesia">Guru Bahasa Indonesia</option>
                                <option value="Guru Bahasa Inggris">Guru Bahasa Inggris</option>
                                <option value="Guru Bahasa Matematika">Guru Matematika</option>
                                <option value="Guru Bahasa Fisika">Guru Fisika</option>
                                <option value="Guru Bahasa Kimia">Guru Kimia</option>
                                <option value="Guru Bahasa Biologi">Guru Biologi</option>
                                <option value="Guru Bahasa Ipa">Guru Ipa</option>
                                <option value="Guru Bahasa Ips">Guru Ips</option>
                            </select>
                            <InputError message={errors.position} className="mt-2" />
                        </div>
                        {/* Gender */}
                        <div className="grid gap-2">
                            <Label htmlFor="gender">Gender</Label>
                            <select
                                id="gender"
                                required
                                tabIndex={3}
                                autoComplete="gender"
                                value={data.gender}
                                onChange={(e) => setData('gender', e.target.value)}
                                disabled={processing}
                                className="border rounded-md px-3 py-1.5 bg-white dark:bg-[#0a0a0a] dark:text-[#EDEDEC] text-sm
                                    focus:outline-none focus:border-gray-400 dark:focus:border-gray-500
                                    hover:shadow-md focus:shadow-md transition-shadow"
                            >
                                <option value="" disabled>-</option>
                                <option value="Laki-Laki">Laki-Laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                            <InputError message={errors.position} className="mt-2" />
                        </div>
                        {/* Number Phone */}
                        <div className="grid gap-2">
                            <Label htmlFor="number_phone">Number Phone</Label>
                            <Input
                                id="number_phone"
                                type="text"
                                required
                                tabIndex={4}
                                autoComplete="telephone"
                                value={data.number_phone}
                                onChange={(e) => setData('number_phone', e.target.value)}
                                disabled={processing}
                                placeholder="+62 812-3456-7890"
                            />
                            <InputError message={errors.number_phone} className="mt-2" />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            tabIndex={4}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            disabled={processing}
                            placeholder="email@example.com"
                        />
                        <InputError message={errors.email} />
                    </div>

                    {/* Password */}
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={5}
                            autoComplete="new-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            disabled={processing}
                            placeholder="Password"
                        />
                        <InputError message={errors.password} />
                    </div>

                    {/* Confirm Password */}
                    <div className="grid gap-2">
                        <Label htmlFor="password_confirmation">Confirm password</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            required
                            tabIndex={6}
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            disabled={processing}
                            placeholder="Confirm password"
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>

                    <Button type="submit" className="mt-2 w-full" tabIndex={7} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Create account
                    </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <TextLink href="/guru/login" tabIndex={8}>
                        Log in
                    </TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}
