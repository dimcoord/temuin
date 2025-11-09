import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
  <section className="w-full bg-gradient-to-b from-[#51b6ff] via-[#99d4ff] to-white p-6 relative dark:from-[#071032] dark:via-[#1e3258] dark:to-white">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <div className="rounded-full bg-white/80 px-4 py-3 max-w-md text-sm text-zinc-600">
            Lagi butuh apa hari ini?
          </div>
        </div>

  <h1 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white mb-2 max-w-lg">
          Panas banget nih, cocok minum yang dingin-dingin...
        </h1>
  <p className="text-sm text-zinc-700 dark:text-white/90 mb-6">Lihat rekomendasi yang lagi pas buat kamu</p>

        <div className="flex gap-4 mb-6 overflow-x-auto py-2">
          {/* carousel thumbnails from saved assets */}
          <div className="h-28 w-28 flex-shrink-0 rounded-md overflow-hidden">
            <Image src="/assets/group1.svg" alt="thumb" width={112} height={112} className="object-cover" unoptimized />
          </div>
          <div className="h-28 w-28 flex-shrink-0 rounded-md overflow-hidden">
            <Image src="/assets/ellipse4.svg" alt="thumb" width={112} height={112} className="object-cover" unoptimized />
          </div>
          <div className="h-28 w-28 flex-shrink-0 rounded-md overflow-hidden">
            <Image src="/assets/ellipse5.svg" alt="thumb" width={112} height={112} className="object-cover" unoptimized />
          </div>
        </div>

        <div className="flex justify-center mt-2">
          <div className="h-10 w-10 bg-white rounded-full border border-zinc-200 flex items-center justify-center shadow-sm">
            <Image
              src="/assets/up-arrow.svg"
              alt="up"
              width={16}
              height={16}
              unoptimized
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
