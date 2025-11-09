import React from "react";
import PlaceCard from "./PlaceCard";

type PlaceItem = {
  title: string;
  distance: string;
  address: string;
  image?: string;
  badges?: { text: string; icon?: string }[];
};

export default function PlaceList({
  title,
  items = [],
}: {
  title: string;
  items?: PlaceItem[];
}) {
  return (
    <section className="max-w-3xl mx-auto py-6 px-4 sm:px-0">
      <h2 className="text-sm text-black font-medium mb-4">{title}</h2>
      <div className="bg-white text-black rounded-md p-2 sm:p-4 shadow-sm">
        {items.map((it, idx) => (
          <div key={idx} className="border-b last:border-b-0 border-zinc-100 py-2">
            <PlaceCard
              title={it.title}
              distance={it.distance}
              address={it.address}
              badges={it.badges}
              image={it.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
