import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function deletePost(formData: FormData) {
  "use server";
  await prisma.blogPost.delete({ where: { id: String(formData.get("id")) } });
  revalidatePath("/", "layout");
  redirect("/admin/blog");
}

export default async function AdminBlogPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  const posts = await prisma.blogPost.findMany({ orderBy: { publishedAt: "desc" } });

  return (
    <div className="max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,.03)]">
          {posts.map((post) => (
            <div key={post.id} className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4 last:border-0">
              <div><p className="font-semibold">{post.title}</p><p className="mt-1 text-xs text-slate-500">{post.category} · {post.published ? "Published" : "Draft"}</p></div>
              <form action={deletePost}><input type="hidden" name="id" value={post.id} /><button className="rounded-lg px-3 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-50">Delete</button></form>
            </div>
          ))}
        </div>
    </div>
  );
}
