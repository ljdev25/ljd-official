"use client";

import { useState, useTransition } from "react";
import {
  createCategoryAction,
  updateCategoryAction,
  deleteCategoryAction,
} from "@/app/admin/actions";
import { slugify } from "@/lib/slugify";

const inputClass = "w-full px-3 py-2 border text-sm text-[var(--ink)] bg-white";
const inputStyle = { borderColor: "var(--line)" };

function CategoryRow({ category, onSaved, onDeleted }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(category.name);
  const [description, setDescription] = useState(category.description || "");
  const [isPending, startTransition] = useTransition();

  function handleSave() {
    startTransition(async () => {
      const updated = await updateCategoryAction(category.id, { name, description });
      onSaved(updated);
      setEditing(false);
    });
  }

  function handleDelete() {
    if (!confirm(`Delete category "${category.name}"? Articles in it become uncategorized.`)) return;
    startTransition(async () => {
      await deleteCategoryAction(category.id);
      onDeleted(category.id);
    });
  }

  if (editing) {
    return (
      <tr className="border-b" style={{ borderColor: "var(--line)" }}>
        <td className="px-4 py-3">
          <input value={name} onChange={(e) => setName(e.target.value)} className={inputClass} style={inputStyle} />
        </td>
        <td className="px-4 py-3 text-[var(--muted)]">{slugify(name)}</td>
        <td className="px-4 py-3">
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={inputClass}
            style={inputStyle}
          />
        </td>
        <td className="px-4 py-3 text-right whitespace-nowrap">
          <button onClick={handleSave} disabled={isPending} className="link-underline mr-4">
            Save
          </button>
          <button
            onClick={() => setEditing(false)}
            disabled={isPending}
            className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]"
          >
            Cancel
          </button>
        </td>
      </tr>
    );
  }

  return (
    <tr className="border-b last:border-b-0" style={{ borderColor: "var(--line)" }}>
      <td className="px-4 py-3 text-[var(--ink)]">{category.name}</td>
      <td className="px-4 py-3 text-[var(--muted)]">{category.slug}</td>
      <td className="px-4 py-3 text-[var(--muted)]">{category.description || "—"}</td>
      <td className="px-4 py-3 text-right whitespace-nowrap">
        <button onClick={() => setEditing(true)} className="link-underline mr-4">
          Edit
        </button>
        <button
          onClick={handleDelete}
          disabled={isPending}
          className="text-xs font-semibold uppercase tracking-widest text-red-700 hover:opacity-70 disabled:opacity-60"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default function CategoryManager({ categories }) {
  const [items, setItems] = useState(categories);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  function handleAdd(e) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      try {
        const created = await createCategoryAction({ name, description });
        setItems((prev) => [...prev, created].sort((a, b) => a.name.localeCompare(b.name)));
        setName("");
        setDescription("");
      } catch (err) {
        setError(err.message || "Failed to create category");
      }
    });
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleAdd} className="bg-white border p-6 space-y-4 max-w-xl" style={{ borderColor: "var(--line)" }}>
        <div>
          <label className="eyebrow block mb-2" htmlFor="new-category-name">
            Name
          </label>
          <input
            id="new-category-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={inputClass}
            style={inputStyle}
          />
          {name && <p className="text-xs text-[var(--muted)] mt-1">Slug: {slugify(name)}</p>}
        </div>
        <div>
          <label className="eyebrow block mb-2" htmlFor="new-category-description">
            Description
          </label>
          <input
            id="new-category-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={inputClass}
            style={inputStyle}
          />
        </div>
        {error && <p className="text-sm text-red-700">{error}</p>}
        <button type="submit" disabled={isPending} className="btn-solid disabled:opacity-60">
          {isPending ? "Adding…" : "Add Category"}
        </button>
      </form>

      {items.length === 0 ? (
        <p className="text-sm text-[var(--muted)]">No categories yet.</p>
      ) : (
        <div className="bg-white border overflow-x-auto" style={{ borderColor: "var(--line)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left" style={{ borderColor: "var(--line)" }}>
                <th className="px-4 py-3 eyebrow font-semibold">Name</th>
                <th className="px-4 py-3 eyebrow font-semibold">Slug</th>
                <th className="px-4 py-3 eyebrow font-semibold">Description</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {items.map((category) => (
                <CategoryRow
                  key={category.id}
                  category={category}
                  onSaved={(updated) =>
                    setItems((prev) => prev.map((c) => (c.id === updated.id ? updated : c)))
                  }
                  onDeleted={(id) => setItems((prev) => prev.filter((c) => c.id !== id))}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
