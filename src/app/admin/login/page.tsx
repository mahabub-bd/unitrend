import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { createAdminSession, isAdminAuthenticated } from "@/lib/admin-auth";

async function login(formData: FormData) {
  "use server";

  const password = String(formData.get("password") ?? "");
  const configured = process.env.ADMIN_PASSWORD;
  if (!configured) throw new Error("ADMIN_PASSWORD is not configured");

  const valid = configured.startsWith("$2")
    ? await bcrypt.compare(password, configured)
    : password === configured;

  if (!valid) throw new Error("Invalid password");
  await createAdminSession();
  redirect("/admin");
}

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) redirect("/admin");

  return (
    <main className="grid min-h-screen place-items-center bg-[#171719] px-5">
      <div className="w-full max-w-md">
        <div className="mb-6 flex items-center gap-3 text-white">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#69010e] font-base text-xl font-bold">U</span>
          <div><p className="font-base font-semibold">Unitrend CMS</p><p className="text-xs text-slate-400">Content administration</p></div>
        </div>
        <form action={login} className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl sm:p-8">
          <h1 className="font-base text-2xl font-semibold text-slate-950">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">Enter your administrator password to continue.</p>
          <label className="mt-7 block text-sm font-semibold text-slate-800" htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required autoComplete="current-password" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#69010e] focus:ring-3 focus:ring-[#69010e]/10" placeholder="Enter password" />
          <button type="submit" className="mt-5 w-full rounded-xl bg-[#69010e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#52010b] focus:outline-none focus:ring-3 focus:ring-[#69010e]/20">Sign in</button>
        </form>
      </div>
    </main>
  );
}
