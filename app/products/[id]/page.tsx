import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import data from "../../../data/places.json";

type Params = {
  // params is provided as a Promise in app-router route components — await it.
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Params) {
  const { id } = await params;

  // find item in any section
  let found: any = null;
  for (const s of data.sections) {
    const it = s.items.find((x: any) => x.id === id);
    if (it) {
      found = it;
      break;
    }
  }

  if (!found) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <header className="max-w-3xl mx-auto p-4 sm:p-6">
        <Link href="/" className="text-sm text-zinc-600 dark:text-zinc-300">
          ← Kembali
        </Link>
      </header>

      <main className="max-w-3xl mx-auto p-4 sm:p-6">
        <div className="rounded-lg overflow-hidden shadow-sm bg-white dark:bg-slate-800">
          {found.image ? (
            <div className="w-full h-48 sm:h-64 relative bg-zinc-100">
              <Image
                src={found.image}
                alt={found.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ) : null}

          <div className="p-4">
            <h1 className="text-2xl font-semibold mb-2">{found.title}</h1>
            <div className="text-sm text-zinc-500 mb-4">{found.address} • {found.distance}</div>

            <div className="flex gap-2 mb-4 flex-wrap">
              {found.badges?.map((b: any, i: number) => (
                <span key={i} className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-700 text-xs px-2 py-1 rounded-md">
                  {b.icon ? (
                    <Image src={b.icon} alt={b.text} width={14} height={14} unoptimized />
                  ) : null}
                  <span>{b.text}</span>
                </span>
              ))}
            </div>

            <section className="mt-6">
              <h2 className="text-sm font-medium mb-2">Tentang</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Ini halaman detail untuk <strong>{found.title}</strong>. Anda dapat menambahkan informasi detail, menu, jam buka, dan kontak di sini.</p>
            </section>

            <section className="mt-6">
              <h2 className="text-sm font-medium mb-2">Menu (contoh)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Render other items as a placeholder menu grid */}
                {data.sections[0].items.slice(0,4).map((m:any) => (
                  <div key={m.id} className="p-3 bg-zinc-50 dark:bg-slate-700 rounded-md">
                    <div className="flex items-start gap-3">
                      {m.image ? (
                        <div className="w-12 h-12 relative rounded-md overflow-hidden bg-white">
                          <Image src={m.image} alt={m.title} width={48} height={48} unoptimized className="object-cover" />
                        </div>
                      ) : null}
                      <div>
                        <div className="text-sm font-medium">{m.title}</div>
                        <div className="text-xs text-zinc-500">{m.distance}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
