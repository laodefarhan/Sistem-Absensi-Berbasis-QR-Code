import { NavFooter } from '@/components/guru/nav-footer';
import { NavMain } from '@/components/guru/nav-main';
import { NavUser } from '@/components/guru/nav-user';
import { NavKelas } from '@/components/guru/nav-kelas';
import { NavKehadiran } from '@/components/guru/nav-kehadiran';
import { NavLaporan } from '@/components/guru/nav-laporan';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Notebook, GraduationCap, UserCog, BookOpenCheck, CalendarDays } from 'lucide-react';
import AppLogo from '@/components/guru/app-logo';

// Platform
const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/guru/dashboard',
        icon: LayoutGrid,
    },
];

// Kelas
const kelasNavItems: NavItem[] = [
    {
        title: 'Kelas',
        href: '#',
        icon: Notebook,
    },
    {
        title: 'Siswa',
        href: '#',
        icon: GraduationCap,
    },
    {
        title: 'Wali Kelas',
        href: '#',
        icon: UserCog,
    },
];

// Kehadiran
const kehadiranNavItems: NavItem[] = [
    {
        title: 'Kehadiran Guru',
        href: '#',
        icon: BookOpenCheck,
    },
    {
        title: 'Kehadiran Petugas',
        href: '#',
        icon: BookOpenCheck,
    },
    {
        title: 'Kehadiran Siswa',
        href: '#',
        icon: BookOpenCheck,
    },
];

// Laporan
const laporanNavItems: NavItem[] = [
    {
        title: 'Laporan Kehadiran',
        href: '#',
        icon: BookOpenCheck,
    },
    {
        title: 'Rekap Absensi',
        href: '#',
        icon: Folder,
    },
    {
        title: 'Semester',
        href: '#',
        icon: CalendarDays,
    },
    {
        title: 'Tahun Ajaran',
        href: '#',
        icon: CalendarDays,
    },
];

// Footer
const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
                <NavKelas items={kelasNavItems} />
                <NavKehadiran items={kehadiranNavItems} />
                <NavLaporan items={laporanNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
