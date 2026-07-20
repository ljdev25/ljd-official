import LoginForm from "@/components/admin/LoginForm";

export const metadata = { title: "Admin Login — LJD Corporation" };

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--cream)] px-4">
      <div className="w-full max-w-sm bg-white border p-8" style={{ borderColor: "var(--line)" }}>
        <div className="mb-8 text-center">
          <div className="font-display text-xl text-[var(--ink)]">LJD Admin</div>
          <div className="eyebrow mt-1">Blog Management</div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
