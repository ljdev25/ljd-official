"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createArticleAction, updateArticleAction } from "@/app/admin/actions";
import { slugify } from "@/lib/slugify";
import ImageUploader from "@/components/admin/ImageUploader";

const inputClass = "w-full px-4 py-3 border text-sm text-[var(--ink)] bg-white";
const inputStyle = { borderColor: "var(--line)" };

export default function ArticleEditor({ article, categories }) {
  const router = useRouter();
  const isEdit = Boolean(article);

  const [title, setTitle] = useState(article?.title || "");
  const [slug, setSlug] = useState(article?.slug || "");
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const [excerpt, setExcerpt] = useState(article?.excerpt || "");
  const [content, setContent] = useState(article?.content || "");
  const [categoryId, setCategoryId] = useState(article?.category_id || "");
  const [coverImageUrl, setCoverImageUrl] = useState(article?.cover_image_url || "");
  const [status, setStatus] = useState(article?.status || "draft");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  function handleTitleChange(value) {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  }

  function handleContentImages(urls) {
    const markdown = urls.map((url) => `![](${url})`).join("\n\n");
    setContent((prev) => (prev ? `${prev}\n\n${markdown}` : markdown));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    const data = {
      title,
      slug,
      excerpt,
      content,
      categoryId: categoryId || null,
      coverImageUrl: coverImageUrl || null,
      status,
    };

    startTransition(async () => {
      try {
        if (isEdit) {
          await updateArticleAction(article.id, data);
        } else {
          await createArticleAction(data);
        }
        router.push("/admin");
      } catch (err) {
        setError(err.message || "Failed to save article");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
      <div>
        <label className="eyebrow block mb-2" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          required
          className={inputClass}
          style={inputStyle}
        />
      </div>

      <div>
        <label className="eyebrow block mb-2" htmlFor="slug">
          Slug
        </label>
        <input
          id="slug"
          value={slug}
          onChange={(e) => {
            setSlug(e.target.value);
            setSlugTouched(true);
          }}
          required
          className={inputClass}
          style={inputStyle}
        />
      </div>

      <div>
        <label className="eyebrow block mb-2" htmlFor="excerpt">
          Excerpt
        </label>
        <textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={2}
          className={inputClass}
          style={inputStyle}
        />
      </div>

      <div>
        <label className="eyebrow block mb-2" htmlFor="category">
          Category
        </label>
        <select
          id="category"
          value={categoryId || ""}
          onChange={(e) => setCategoryId(e.target.value)}
          className={inputClass}
          style={inputStyle}
        >
          <option value="">— None —</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <ImageUploader label="Cover Image" onUploaded={(urls) => setCoverImageUrl(urls[0])} />
        {coverImageUrl && (
          <div className="mt-3">
            <Image
              src={coverImageUrl}
              alt=""
              width={240}
              height={135}
              style={{ width: "240px", height: "auto" }}
            />
          </div>
        )}
      </div>

      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
          <label className="eyebrow" htmlFor="content">
            Content (Markdown)
          </label>
          <ImageUploader multiple label={null} onUploaded={handleContentImages} />
        </div>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={16}
          className={`${inputClass} font-mono`}
          style={inputStyle}
        />
      </div>

      <div>
        <label className="eyebrow block mb-2">Status</label>
        <div className="flex flex-wrap gap-3">
          {["draft", "published"].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setStatus(option)}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-widest border"
              style={{
                borderColor: status === option ? "var(--ink)" : "var(--line)",
                background: status === option ? "var(--ink)" : "transparent",
                color: status === option ? "var(--white)" : "var(--ink-soft)",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <div className="flex items-center gap-4">
        <button type="submit" disabled={isPending} className="btn-solid disabled:opacity-60">
          {isPending ? "Saving…" : isEdit ? "Save Changes" : "Create Article"}
        </button>
        <button type="button" onClick={() => router.push("/admin")} className="btn-outline">
          Cancel
        </button>
      </div>
    </form>
  );
}
