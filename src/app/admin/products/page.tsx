import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

async function addProduct(formData: FormData) {
  "use server";
  await prisma.featuredProduct.create({
    data: {
      title: String(formData.get("title")),
      subtitle: String(formData.get("subtitle") || ""),
      imageUrl: String(formData.get("imageUrl") || "product1"),
      sortOrder: Number(formData.get("sortOrder") || 0),
    },
  });
  revalidatePath("/", "layout");
  redirect("/admin/products");
}

async function deleteProduct(formData: FormData) {
  "use server";
  await prisma.featuredProduct.delete({ where: { id: String(formData.get("id")) } });
  revalidatePath("/", "layout");
  redirect("/admin/products");
}

export default async function AdminProductsPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  const products = await prisma.featuredProduct.findMany({ orderBy: [{ sortOrder: "asc" }, { title: "asc" }] });
  return (
    <div className="grid items-start gap-6 xl:grid-cols-[380px_minmax(0,1fr)]">
        <form action={addProduct} className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.03)]">
          <h2 className="mb-1 font-base text-base font-semibold">Add featured product</h2>
          <input name="title" required placeholder="Product title" className="rounded-xl border border-slate-300 px-3.5 py-3 text-sm outline-none focus:border-[#69010e] focus:ring-3 focus:ring-[#69010e]/10" />
          <input name="imageUrl" placeholder="Image key (for example product1)" className="rounded-xl border border-slate-300 px-3.5 py-3 text-sm outline-none focus:border-[#69010e] focus:ring-3 focus:ring-[#69010e]/10" />
          <input name="sortOrder" type="number" defaultValue="0" className="rounded-xl border border-slate-300 px-3.5 py-3 text-sm outline-none focus:border-[#69010e] focus:ring-3 focus:ring-[#69010e]/10" />
          <input name="subtitle" placeholder="Optional subtitle" className="rounded-xl border border-slate-300 px-3.5 py-3 text-sm outline-none focus:border-[#69010e] focus:ring-3 focus:ring-[#69010e]/10" />
          <button type="submit" className="mt-1 rounded-xl bg-[#69010e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#52010b]">Add product</button>
        </form>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,.03)]">
          {products.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4 last:border-0">
              <div><p className="font-semibold">{item.title}</p><p className="mt-1 text-xs text-slate-500">{item.imageUrl}</p></div>
              <form action={deleteProduct}><input type="hidden" name="id" value={item.id} /><button className="rounded-lg px-3 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-50">Delete</button></form>
            </div>
          ))}
        </div>
    </div>
  );
}
