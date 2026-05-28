import { WebListingShowcase } from "@/components/web-listing-showcase";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10 lg:px-12">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-white/50 bg-white/70 px-4 py-2 text-sm font-semibold tracking-[0.22em] text-teal-700 uppercase backdrop-blur">
            Shared React Surface
          </p>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Next.js and Expo now run side-by-side against one shared UI
              package.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              The web app uses Tailwind, the mobile app uses Nativewind, and
              both consume the same hook plus the same shared component API.
            </p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur">
          <dl className="grid gap-5 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Apps
              </dt>
              <dd className="mt-2 text-3xl font-semibold text-slate-900">2</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Shared
              </dt>
              <dd className="mt-2 text-3xl font-semibold text-slate-900">
                Hooks + UI
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Tests
              </dt>
              <dd className="mt-2 text-3xl font-semibold text-slate-900">
                Vitest + Jest
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <WebListingShowcase />
    </main>
  );
}
