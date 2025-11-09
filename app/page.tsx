import Hero from "@/components/home/Hero";
import PlaceList from "@/components/home/PlaceList";
import placesData from "@/data/places.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <main className="pb-16">
        <Hero />

        <div className="max-w-3xl mx-auto px-4">
          {placesData.sections.map((section, idx) => (
            <PlaceList key={idx} title={section.title} items={section.items} />
          ))}
        </div>
      </main>
    </div>
  );
}
