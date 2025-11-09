import React from "react";
import Image from "next/image";

type Badge = { text: string; icon?: string };

export default function PlaceCard({
  title,
  distance,
  address,
  badges = [],
  image,
}: {
  title: string;
  distance: string;
  address: string;
  badges?: Badge[];
  image?: string;
}) {
  return (
    <div className="flex gap-4 items-start py-3">
      <div className="h-16 w-16 rounded-md bg-zinc-200 flex-shrink-0 overflow-hidden">
        {image ? (
          <Image
            src={image?.replace('.png', '.svg')}
            alt={title}
            width={64}
            height={64}
            className="object-cover"
            unoptimized
            style={{ width: "auto", height: "auto" }}
          />
        ) : null}
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between">
          <h3 className="text-sm font-semibold">{title}</h3>
          <div className="text-xs text-zinc-500 ml-2">{distance}</div>
        </div>
        <div className="text-xs text-zinc-500 mb-2">{address}</div>

        <div className="flex gap-2 flex-wrap">
          {badges.map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 bg-zinc-100 text-xs px-2 py-1 rounded-md"
            >
              {b.icon ? (
                <Image
                  src={b.icon?.replace('.png', '.svg')}
                  alt={b.text}
                  width={12}
                  height={12}
                  className="object-contain"
                  unoptimized
                  style={{ width: "auto", height: "auto" }}
                />
              ) : null}
              <span>{b.text}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
