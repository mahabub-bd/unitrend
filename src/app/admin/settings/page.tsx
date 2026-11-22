import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

async function saveSettings(formData: FormData) {
  "use server";
  const keys = ["contact_phone", "contact_email", "contact_email_secondary", "contact_address"];
  await Promise.all(keys.map((key) =>
    prisma.siteSetting.upsert({
      where: { key },
      update: { value: String(formData.get(key) ?? "") },
      create: { key, value: String(formData.get(key) ?? "") },
    })
  ));
  revalidatePath("/", "layout");
  redirect("/admin/settings");
}

export default async function AdminSettingsPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  const settings = await prisma.siteSetting.findMany();
  const value = (key: string) => settings.find((item) => item.key === key)?.value ?? "";

  return (
    <div className="max-w-3xl">
        <form action={saveSettings} className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.03)] sm:p-6">
          {[
            ["contact_phone", "Phone"],
            ["contact_email", "Primary email"],
            ["contact_email_secondary", "Secondary email"],
            ["contact_address", "Address"],
          ].map(([key, label]) => (
            <label key={key} className="block text-sm font-semibold text-slate-800">
              {label}
              {key === "contact_address"
                ? <textarea name={key} defaultValue={value(key)} className="mt-2 min-h-24 w-full rounded-xl border border-slate-300 px-3.5 py-3 text-sm font-normal outline-none focus:border-[#69010e] focus:ring-3 focus:ring-[#69010e]/10" />
                : <input name={key} defaultValue={value(key)} className="mt-2 w-full rounded-xl border border-slate-300 px-3.5 py-3 text-sm font-normal outline-none focus:border-[#69010e] focus:ring-3 focus:ring-[#69010e]/10" />}
            </label>
          ))}
          <button type="submit" className="rounded-xl bg-[#69010e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#52010b]">Save settings</button>
        </form>
    </div>
  );
}
