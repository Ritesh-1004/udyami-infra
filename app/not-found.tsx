import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-dark)] flex flex-col items-center justify-center text-center px-6">
      <p className="font-display text-[var(--color-secondary)] text-8xl mb-4">404</p>
      <h1 className="font-display text-white text-3xl mb-3">Page Not Found</h1>
      <p className="text-white/60 mb-8 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  );
}
