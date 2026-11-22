import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

async function addPrincipal(formData: FormData) {
  "use server";
  await prisma.principal.create({
    data: {
      name: String(formData.get("name")),
      website: String(formData.get("website")),
      imageUrl: String(formData.get("imageUrl") || "principal1"),
      subtitle: String(formData.get("subtitle") || ""),
      sortOrder: Number(formData.get("sortOrder") || 0),
    },
  });
  revalidatePath("/", "layout");
  redirect("/admin/principals");
}

async function deletePrincipal(formData: FormData) {
  "use server";
  await prisma.principal.delete({ where: { id: String(formData.get("id")) } });
  revalidatePath("/", "layout");
  redirect("/admin/principals");
}

export default async function AdminPrincipalsPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  const principals = await prisma.principal.findMany({ orderBy: [{ sortOrder: "asc" }, { name: "asc" }] });

  return (
    <div className="grid items-start gap-6 xl:grid-cols-[380px_minmax(0,1fr)]">
        <form action={addPrincipal} className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.03)]">
          <h2 className="mb-1 font-base text-base font-semibold">Add principal</h2>
          <input name="name" required placeholder="Brand name" className="rounded-xl border border-slate-300 px-3.5 py-3 text-sm outline-none focus:border-[#69010e] focus:ring-3 focus:ring-[#69010e]/10" />
          <input name="website" required type="url" placeholder="https://example.com" className="rounded-xl border border-slate-300 px-3.5 py-3 text-sm outline-none focus:border-[#69010e] focus:ring-3 focus:ring-[#69010e]/10" />
          <input name="imageUrl" placeholder="Image key (for example principal1)" className="rounded-xl border border-slate-300 px-3.5 py-3 text-sm outline-none focus:border-[#69010e] focus:ring-3 focus:ring-[#69010e]/10" />
          <input name="sortOrder" type="number" defaultValue="0" className="rounded-xl border border-slate-300 px-3.5 py-3 text-sm outline-none focus:border-[#69010e] focus:ring-3 focus:ring-[#69010e]/10" />
          <input name="subtitle" placeholder="Optional subtitle" className="rounded-xl border border-slate-300 px-3.5 py-3 text-sm outline-none focus:border-[#69010e] focus:ring-3 focus:ring-[#69010e]/10" />
          <button type="submit" className="mt-1 rounded-xl bg-[#69010e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#52010b]">Add principal</button>
        </form>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,.03)]">
          {principals.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4 last:border-0">
              <div><p className="font-semibold">{item.name}</p><p className="mt-1 text-xs text-slate-500">{item.website}</p></div>
              <form action={deletePrincipal}><input type="hidden" name="id" value={item.id} /><button className="rounded-lg px-3 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-50">Delete</button></form>
            </div>
          ))}
        </div>
    </div>
  );
}
