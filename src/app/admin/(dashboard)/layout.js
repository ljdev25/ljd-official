import Link from "next/link";
import { logoutAction } from "@/app/admin/actions";

export default function AdminDashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <header className="bg-white border-b" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:h-16 sm:py-0 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <Link href="/admin" className="font-display text-base text-[var(--ink)] flex-shrink-0">
            LJD Admin
          </Link>
          <nav className="flex items-center gap-3 sm:gap-6 flex-wrap">
            <Link
              href="/admin"
              className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors whitespace-nowrap"
            >
              Articles
            </Link>
            <Link
              href="/admin/categories"
              className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors whitespace-nowrap"
            >
              Categories
            </Link>
            <form action={logoutAction}>
              <button
                type="submit"
                className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors whitespace-nowrap"
              >
                Logout
              </button>
            </form>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">{children}</main>
    </div>
  );
}
