import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";


export default async function AdminDashboard() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");

  const [principals, products, blogPosts, submissions] = await Promise.all([
    prisma.principal.count(),
    prisma.featuredProduct.count(),
    prisma.blogPost.count(),
    prisma.contactSubmission.count(),
  ]);

  const cards = [
    ["Principals", principals, "/admin/principals"],
    ["Featured products", products, "/admin/products"],
    ["Blog posts", blogPosts, "/admin/blog"],
    ["Contact submissions", submissions, "/admin/submissions"],
  ] as const;

  return (
    <div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map(([label, count, href]) => (
            <Link key={label} href={href} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.03)] transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">{label}</p>
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#69010e]/7 text-[#69010e] transition group-hover:bg-[#69010e] group-hover:text-white">→</span>
              </div>
              <p className="mt-5 text-4xl font-bold tracking-tight">{count}</p>
            </Link>
          ))}
        </div>
    </div>
  );
}
