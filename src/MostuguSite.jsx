import React, { useEffect } from "react";

/**
 * Mostugu Cabin – Hafjell, Norway
 *
 * Tech: React + TailwindCSS (single page)
 *
 * How to use:
 * 1) Create a Vite React + Tailwind project (or drop into any React app).
 * 2) Put your optimized images in /public/images with the filenames used below
 *    (or update the paths to match your setup). Suggested mapping:
 *      - /public/images/mostugu_hero_1920.jpg (hero desktop)
 *      - /public/images/mostugu_hero_1080.jpg (hero mobile)
 *      - /public/images/mostugu_door_1600.jpg
 *      - /public/images/mostugu_door_1200.jpg
 *      - /public/images/mostugu_view_1600.jpg
 *      - /public/images/mostugu_view_1200.jpg
 *    You can download these from the files I provided in chat.
 * 3) Replace `HAFJELL_RESORT_*.jpg` placeholders with your Hafjell resort photos.
 * 4) Update the BOOKING_URL, phone, and email below.
 */

const BOOKING_URL = "#contact"; // e.g., your Airbnb/Booking.com link
const PHONE = "+47 000 00 000"; // replace
const EMAIL = "host@mostugu.no"; // replace

const nav = [
  { label: "Home", href: "#home" },
  { label: "Cabin", href: "#cabin" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Getting Here", href: "#getting-here" },
  { label: "Contact", href: "#contact" },
];

const Feature = ({ icon, title, children }) => (
  <div className="bg-white/70 backdrop-blur rounded-2xl p-5 shadow-sm border border-slate-200">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 rounded-xl bg-slate-100">{icon}</div>
      <h4 className="text-lg font-semibold">{title}</h4>
    </div>
    <p className="text-slate-600 leading-relaxed">{children}</p>
  </div>
);

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-16 sm:py-20" aria-label={title}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-slate-600 max-w-2xl">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  </section>
);

export default function MostuguSite() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest("a[href^='#']");
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight text-xl">Mostugu Cabin</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-slate-900 text-slate-600">
                {n.label}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              className="ml-2 inline-flex items-center rounded-2xl px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 shadow"
            >
              Book Your Stay
            </a>
          </nav>
          <a
            href={BOOKING_URL}
            className="md:hidden inline-flex items-center rounded-2xl px-4 py-2 bg-slate-900 text-white"
          >
            Book
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/mostugu_hero_1080.jpg" />
          <img
            src="/images/mostugu_hero_1920.jpg"
            alt="Mostugu cabin in snow at Hafjell"
            className="w-full h-[68vh] object-cover"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 md:p-8 w-full md:max-w-xl shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold">Mostugu – Hafjell, Norway</h1>
              <p className="mt-2 text-slate-700">
                Cozy, modern mountain cabin with ski‑in/ski‑out access to Hafjell’s alpine
                slopes and cross‑country trails. Sleeps 12 comfortably (up to 16) with
                panoramic views over the valley.
              </p>
              <div className="mt-4 flex gap-3">
                <a href={BOOKING_URL} className="inline-flex items-center rounded-2xl px-5 py-3 bg-slate-900 text-white hover:bg-slate-800 shadow">
                  Book Your Stay
                </a>
                <a href="#gallery" className="inline-flex items-center rounded-2xl px-5 py-3 bg-white border border-slate-300 hover:bg-slate-50">
                  View Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cabin section */}
      <Section
        id="cabin"
        title="The Cabin"
        subtitle="Five bedrooms • Two bathrooms • Sauna • Fireplace • Ski storage • Wi‑Fi • EV charger"
      >
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <p>
              Welcome to <strong>Mostugu</strong>, a warm and well‑equipped base for your Hafjell adventures. The open‑plan
              living room and kitchen create a social heart for slow breakfasts and post‑ski dinners, while an
              upstairs TV room gives kids their own place to relax.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Feature title="Ski‑in/Ski‑out" icon={<span>⛷️</span>}>
                Step straight onto Hafjell’s alpine slopes and nearby cross‑country tracks.
              </Feature>
              <Feature title="Sleeps 12–16" icon={<span>🛌</span>}>
                Five bedrooms and two bathrooms comfortably host larger families and groups.
              </Feature>
              <Feature title="Sauna & Fireplace" icon={<span>🔥</span>}>
                Unwind after skiing with a hot sauna and a cozy fire.
              </Feature>
              <Feature title="EV Charger & Wi‑Fi" icon={<span>⚡</span>}>
                Charge your car overnight and stay connected with fast internet.
              </Feature>
              <Feature title="Ski Storage Room" icon={<span>🎿</span>}>
                Dedicated space for gear keeps the living area clean and dry.
              </Feature>
              <Feature title="Valley Views" icon={<span>🌄</span>}>
                Wide views over the Gudbrandsdalen valley from the terrace.
              </Feature>
            </div>
          </div>
          <div className="grid gap-4">
            <img src="/images/mostugu_door_1200.jpg" alt="Mostugu front entrance with stacked firewood" className="rounded-2xl shadow border border-slate-200" />
            <img src="/images/mostugu_view_1200.jpg" alt="Winter valley view from Mostugu terrace" className="rounded-2xl shadow border border-slate-200" />
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section id="gallery" title="Photo Gallery" subtitle="A glimpse of Mostugu and the Hafjell area">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Cabin images */}
          <img src="/images/mostugu_hero_1080.jpg" alt="Mostugu cabin exterior" className="rounded-xl border border-slate-200" />
          <img src="/images/mostugu_door_1600.jpg" alt="Entrance details" className="rounded-xl border border-slate-200" />
          <img src="/images/mostugu_view_1600.jpg" alt="Valley view" className="rounded-xl border border-slate-200" />
          {/* Hafjell placeholders – replace with your resort photos */}
          <img src="/images/HAFJELL_RESORT_1.jpg" alt="Hafjell skiing" className="rounded-xl border border-slate-200" />
          <img src="/images/HAFJELL_RESORT_2.jpg" alt="Gondola or slopes" className="rounded-xl border border-slate-200" />
          <img src="/images/HAFJELL_RESORT_3.jpg" alt="Cross‑country tracks" className="rounded-xl border border-slate-200" />
        </div>
        <p className="text-xs text-slate-500 mt-2">Tip: Use WebP versions for faster loading. Keep images under ~250KB for best performance.</p>
      </Section>

      {/* Location */}
      <Section id="location" title="Location" subtitle="Storslåvegen 24, 2636 Øyer, Norway – in the Hafjell mountain area">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <p>
              Mostugu sits above the valley in the Hafjell area of Øyer municipality. From the door, you have
              direct access to alpine pistes and groomed cross‑country terrain. Lillehammer is a short drive away
              for restaurants, shopping, and Olympic sights.
            </p>
            <ul className="list-disc ml-5 text-slate-700">
              <li>Alpine lifts and ski school nearby</li>
              <li>Groomed XC tracks on the high plateau</li>
              <li>Summer: hiking & MTB trails, Hunderfossen Family Park</li>
            </ul>
          </div>
          <div className="w-full">
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 shadow">
              <iframe
                title="Map to Mostugu"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={
                  "https://www.google.com/maps?q=" + encodeURIComponent("Storslåvegen 24, Øyer") + "&output=embed"
                }
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Getting here */}
      <Section id="getting-here" title="Getting Here from Oslo" subtitle="Simple options by car or public transport">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature title="By Car" icon={<span>🚗</span>}>
            Follow the E6 north from Oslo towards Lillehammer/Øyer, then local signs to Hafjell. Typical drive time
            is around 2.5–3 hours depending on traffic and weather. Winter tires are required during the season.
          </Feature>
          <Feature title="Train + Bus" icon={<span>🚆</span>}>
            Take a train from Oslo S to Lillehammer, then a local bus/taxi to Hafjell/Øyer. Buses serve the resort
            area and taxis are available from Lillehammer station.
          </Feature>
          <Feature title="Parking & Access" icon={<span>🅿️</span>}>
            Private parking at the cabin with an EV charger. Ski straight out to the slopes and return via the
            marked run leading back to the neighborhood.
          </Feature>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact & Booking" subtitle="Send a request or book directly">
        <div className="grid lg:grid-cols-2 gap-8">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-2xl p-6 shadow border border-slate-200 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" type="email" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 min-h-[120px]" placeholder="Dates, group size, questions…" />
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-2xl px-5 py-2.5 bg-slate-900 text-white hover:bg-slate-800">Send</button>
              <a href={BOOKING_URL} className="rounded-2xl px-5 py-2.5 border border-slate-300 hover:bg-slate-50">Book Now</a>
            </div>
            <p className="text-xs text-slate-500">This is a demo form. Connect it to your email provider or booking system.</p>
          </form>
          <div className="space-y-4">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h4 className="font-semibold text-lg">Direct Contact</h4>
              <p className="mt-2">Phone: <a className="underline" href={`tel:${PHONE}`}>{PHONE}</a></p>
              <p>Email: <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
              <p className="mt-2 text-slate-600">We typically respond within a day.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h4 className="font-semibold text-lg">House Info</h4>
              <ul className="list-disc ml-5 text-slate-700 space-y-1">
                <li>5 bedrooms • 2 bathrooms</li>
                <li>Open kitchen/living • upstairs kids’ TV room</li>
                <li>Sauna • fireplace • ski storage room</li>
                <li>Wi‑Fi • EV charger • parking</li>
                <li>Ski‑in/ski‑out (alpine & cross‑country)</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Mostugu Cabin, Hafjell</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="underline">Back to top</a>
            <a href="#contact" className="underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
