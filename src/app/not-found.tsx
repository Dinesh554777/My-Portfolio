import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <div className="max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-xl">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">404</p>
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="mt-3 text-slate-300">The page you were looking for does not exist.</p>
        <Link href="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white">
          Go Home
        </Link>
      </div>
    </main>
  );
}
