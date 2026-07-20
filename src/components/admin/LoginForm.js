"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/admin/actions";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label className="eyebrow block mb-2" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          required
          autoComplete="username"
          className="w-full px-4 py-3 border text-sm text-[var(--ink)]"
          style={{ borderColor: "var(--line)" }}
        />
      </div>
      <div>
        <label className="eyebrow block mb-2" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="w-full px-4 py-3 border text-sm text-[var(--ink)]"
          style={{ borderColor: "var(--line)" }}
        />
      </div>
      {state?.error && (
        <p className="text-sm text-red-700" role="alert">
          {state.error}
        </p>
      )}
      <button type="submit" disabled={isPending} className="btn-solid w-full disabled:opacity-60">
        {isPending ? "Signing In…" : "Sign In"}
      </button>
    </form>
  );
}
