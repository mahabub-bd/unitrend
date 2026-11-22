import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

async function markRead(formData: FormData) {
  "use server";
  await prisma.contactSubmission.update({
    where: { id: String(formData.get("id")) },
    data: { read: true },
  });
  revalidatePath("/admin/submissions");
}

export default async function AdminSubmissionsPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  const submissions = await prisma.contactSubmission.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="max-w-5xl">
        <div className="space-y-4">
          {submissions.map((item) => (
            <article key={item.id} className={`rounded-2xl border bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.03)] ${item.read ? "border-slate-200" : "border-[#69010e]/25"}`}>
              <div className="flex items-start justify-between gap-4">
                <div><p className="font-semibold">{item.name}</p><p className="text-sm text-slate-500">{item.email}{item.phone ? ` · ${item.phone}` : ""}</p></div>
                {!item.read && <form action={markRead}><input type="hidden" name="id" value={item.id} /><button className="shrink-0 rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">Mark read</button></form>}
              </div>
              {item.subject && <p className="mt-4 text-sm font-semibold">{item.subject}</p>}
              <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-600">{item.message}</p>
            </article>
          ))}
          {submissions.length === 0 && <p className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">No submissions yet.</p>}
        </div>
    </div>
  );
}
