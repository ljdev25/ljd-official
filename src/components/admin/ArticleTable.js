"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { toggleStatusAction, deleteArticleAction } from "@/app/admin/actions";

export default function ArticleTable({ articles }) {
  const [items, setItems] = useState(articles);
  const [isPending, startTransition] = useTransition();

  function handleToggle(article) {
    const nextStatus = article.status === "published" ? "draft" : "published";
    setItems((prev) =>
      prev.map((a) => (a.id === article.id ? { ...a, status: nextStatus } : a))
    );
    startTransition(async () => {
      await toggleStatusAction(article.id, nextStatus);
    });
  }

  function handleDelete(article) {
    if (!confirm(`Delete "${article.title}"? This cannot be undone.`)) return;
    setItems((prev) => prev.filter((a) => a.id !== article.id));
    startTransition(async () => {
      await deleteArticleAction(article.id);
    });
  }

  if (items.length === 0) {
    return <p className="text-sm text-[var(--muted)]">No articles yet.</p>;
  }

  return (
    <div className="bg-white border overflow-x-auto" style={{ borderColor: "var(--line)" }}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-left" style={{ borderColor: "var(--line)" }}>
            <th className="px-4 py-3 eyebrow font-semibold">Title</th>
            <th className="px-4 py-3 eyebrow font-semibold">Category</th>
            <th className="px-4 py-3 eyebrow font-semibold">Status</th>
            <th className="px-4 py-3 eyebrow font-semibold">Updated</th>
            <th className="px-4 py-3" />
          </tr>
        </thead>
        <tbody>
          {items.map((article) => (
            <tr key={article.id} className="border-b last:border-b-0" style={{ borderColor: "var(--line)" }}>
              <td className="px-4 py-3 text-[var(--ink)]">{article.title}</td>
              <td className="px-4 py-3 text-[var(--muted)]">{article.categories?.name || "—"}</td>
              <td className="px-4 py-3">
                <button
                  onClick={() => handleToggle(article)}
                  disabled={isPending}
                  className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 border disabled:opacity-60"
                  style={{
                    borderColor: article.status === "published" ? "var(--accent)" : "var(--faint)",
                    color: article.status === "published" ? "var(--accent)" : "var(--muted)",
                  }}
                >
                  {article.status}
                </button>
              </td>
              <td className="px-4 py-3 text-[var(--muted)]">
                {new Date(article.updated_at).toLocaleDateString()}
              </td>
              <td className="px-4 py-3 text-right whitespace-nowrap">
                <Link href={`/admin/articles/${article.id}`} className="link-underline mr-4">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(article)}
                  disabled={isPending}
                  className="text-xs font-semibold uppercase tracking-widest text-red-700 hover:opacity-70 disabled:opacity-60"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
