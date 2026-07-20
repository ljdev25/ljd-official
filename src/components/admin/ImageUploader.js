"use client";

import { useRef, useState, useTransition } from "react";
import { uploadImageAction } from "@/app/admin/actions";

export default function ImageUploader({ multiple = false, label, onUploaded }) {
  const inputRef = useRef(null);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(null);

  function handleChange(e) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const formData = new FormData();
    for (const file of files) formData.append("files", file);
    setError(null);

    startTransition(async () => {
      try {
        const urls = await uploadImageAction(formData);
        onUploaded(urls);
      } catch (err) {
        setError(err.message || "Upload failed");
      } finally {
        if (inputRef.current) inputRef.current.value = "";
      }
    });
  }

  return (
    <div>
      {label && <label className="eyebrow block mb-2">{label}</label>}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple={multiple}
        onChange={handleChange}
        disabled={isPending}
        className="w-full max-w-full text-xs sm:text-sm text-[var(--ink-soft)]"
      />
      {isPending && <p className="text-xs text-[var(--muted)] mt-1">Uploading…</p>}
      {error && <p className="text-xs text-red-700 mt-1">{error}</p>}
    </div>
  );
}
