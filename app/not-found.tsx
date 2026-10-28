import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24">
      <p className="font-mono text-[12px] text-gray-500">
        <span className="text-accent">~/ivor</span> $ cd this-page
      </p>
      <h1 className="mt-3 font-mono text-3xl font-bold">404: no such page</h1>
      <p className="mt-3 text-[15px] text-gray-600">That page doesn't exist, or it moved.</p>
      <Link
        href="/"
        className="inline-flex items-center px-4 mt-6 h-11 text-sm font-medium rounded-lg bg-ink text-surface hover:opacity-85"
      >
        cd ~
      </Link>
    </section>
  );
}
