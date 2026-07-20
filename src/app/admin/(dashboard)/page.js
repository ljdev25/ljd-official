import Link from "next/link";
import { getAllArticlesAdmin } from "@/lib/articles";
import ArticleTable from "@/components/admin/ArticleTable";

export const metadata = { title: "Articles — LJD Admin" };
export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const articles = await getAllArticlesAdmin();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-2xl text-[var(--ink)]">Articles</h1>
        <Link href="/admin/articles/new" className="btn-solid">
          New Article
        </Link>
      </div>
      <ArticleTable articles={articles} />
    </div>
  );
}
