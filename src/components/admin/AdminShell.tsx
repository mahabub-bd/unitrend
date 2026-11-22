"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiBarChart2,
  FiBox,
  FiFileText,
  FiGlobe,
  FiInbox,
  FiLogOut,
  FiSettings,
  FiUsers,
} from "react-icons/fi";

const navigation = [
  { label: "Overview", href: "/admin", icon: FiBarChart2 },
  { label: "Site settings", href: "/admin/settings", icon: FiSettings },
  { label: "Principals", href: "/admin/principals", icon: FiUsers },
  { label: "Products", href: "/admin/products", icon: FiBox },
  { label: "Blog posts", href: "/admin/blog", icon: FiFileText },
  { label: "Inquiries", href: "/admin/submissions", icon: FiInbox },
];

const titles: Record<string, { title: string; description: string }> = {
  "/admin": { title: "Overview", description: "Monitor and manage your website content." },
  "/admin/settings": { title: "Site settings", description: "Manage public contact details and business information." },
  "/admin/principals": { title: "Principals", description: "Manage the brands represented by Unitrend." },
  "/admin/products": { title: "Featured products", description: "Curate products shown on the homepage." },
  "/admin/blog": { title: "Blog posts", description: "Review and manage published website articles." },
  "/admin/submissions": { title: "Inquiries", description: "Review messages submitted through the website." },
};

export default function AdminShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  if (pathname === "/admin/login") return children;

  const page = titles[pathname] ?? { title: "Administration", description: "Manage your website." };

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-950">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-slate-200 bg-[#171719] lg:block">
        <div className="flex h-full flex-col">
          <Link href="/admin" className="flex h-20 items-center gap-3 border-b border-white/10 px-6">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#69010e] font-base text-lg font-bold text-white">U</span>
            <div>
              <p className="font-base text-sm font-semibold text-white">Unitrend</p>
              <p className="mt-0.5 text-[11px] text-slate-400">Content management</p>
            </div>
          </Link>
          <nav className="flex-1 space-y-1 px-3 py-5" aria-label="Admin navigation">
            {navigation.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                    active ? "bg-white text-slate-950 shadow-sm" : "text-slate-300 hover:bg-white/7 hover:text-white"
                  }`}
                >
                  <Icon aria-hidden="true" className="text-lg" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-white/10 p-3">
            <Link href="/" target="_blank" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-300 hover:bg-white/7 hover:text-white">
              <FiGlobe aria-hidden="true" className="text-lg" /> View website
            </Link>
            <Link href="/admin/logout" className="mt-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-300 hover:bg-white/7 hover:text-white">
              <FiLogOut aria-hidden="true" className="text-lg" /> Sign out
            </Link>
          </div>
        </div>
      </aside>

      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
        <nav className="flex items-center gap-2 overflow-x-auto" aria-label="Mobile admin navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={`shrink-0 rounded-lg px-3 py-2 text-xs font-semibold ${pathname === item.href ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-600"}`}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="lg:ml-64">
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
            <div>
              <h1 className="font-base text-xl font-semibold text-slate-950 sm:text-2xl">{page.title}</h1>
              <p className="mt-1 hidden text-sm text-slate-500 sm:block">{page.description}</p>
            </div>
            <Link href="/" target="_blank" className="hidden items-center gap-2 rounded-lg border border-slate-200 px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:flex">
              <FiGlobe aria-hidden="true" /> View site
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 sm:py-8">{children}</div>
      </main>
    </div>
  );
}
