export function BrandLogos() {
  const brands = [
    { name: "Google", logo: "G" },
    { name: "facebook", logo: "f" },
    { name: "YouTube", logo: "▶" },
    { name: "Pinterest", logo: "P" },
    { name: "Twitch", logo: "T" },
  ];

  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center gap-2 text-muted-foreground opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-xl font-bold">{brand.logo}</span>
              <span className="font-semibold">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
