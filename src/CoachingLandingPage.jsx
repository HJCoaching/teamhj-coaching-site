import React from "react";

const packages = [
  {
    name: "Basic",
    price: "£129/mo",
    description: "For self-starters who want direction without ongoing contact.",
    features: [
      "Nutrition or Training Only",
      "Monthly Check-ins",
      "Email Support",
      "Limited app tracking"
    ]
  },
  {
    name: "General",
    price: "£199/mo",
    description: "For professionals looking for structure, accountability and results.",
    features: [
      "Weekly check-ins",
      "Custom training & nutrition (monthly updates)",
      "WhatsApp support",
      "Techincal analysis"
    ]
  },
  {
    name: "Elite",
    price: "£299/mo",
    description: "For high-performers seeking full optimisation and premium results.",
    features: [
      "Unlimited feedback & communication",
      "Real-time plan updates",
      "Weekly Zoom calls",
      "Full training, nutrition, mindset, and event prep support"
    ]
  }
];

const transformationProgram = {
  name: "12-Week Photoshoot Transformation",
  price: "£999",
  description:
    "A results-focused, high-touch coaching experience. Optimised to show you off as your best self.",
  features: [
    "Custom training + nutrition",
    "Weekly check-ins, form reviews, Zoom access",
    "Supplement + recovery stack guidance",
    "Mindset + community support",
    "Photographers fee included in the price (T&C's apply)"
  ]
};

const transformations = [
  { image: "/30.png", caption: "From dad-bod to oh-god." },
  { image: "/31.png", caption: "Strong, lean, bad-ass. A total mindset and body shift." },
  { image: "/34.png", caption: "The results of going all in on yourself." },
  { image: "/50.png", caption: "From high performer to high performance." },
  { image: "/54.png", caption: "More muscle, more energy, more unstoppable." },
  { image: "/61.png", caption: "Reclaimed energy, shape, and confidence." }
];

export default function CoachingLandingPage() {
  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-16">
      <header className="text-center">
        <img src="/logo.png" alt="Team HJ Coaching" className="mx-auto w-120 mb-4" />
        <h1 className="text-4xl font-bold">Find the Coaching Path That Fits You Best</h1>
        <p className="text-lg mt-2">Flexible, high performance plans built around your lifestyle goals.</p>
      </header>

      <section>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.name} className="border rounded-2xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-1">{pkg.name}</h2>
              <p className="text-xl font-semibold text-green-600">{pkg.price}</p>
              <p className="text-sm text-gray-600 my-2">{pkg.description}</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a
                href={
                  pkg.name === "Basic"
                    ? "https://buy.stripe.com/8wM5mO1XFaIL316dRe"
                    : pkg.name === "General"
                    ? "https://buy.stripe.com/14kcPggSz3gjcBGcN9"
                    : "https://buy.stripe.com/fZe2aC0TB7wzgRW9AZ"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-[#FF9900] text-white px-4 py-2 rounded-xl hover:bg-orange-600"
              >
                Sign Up Now
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-xl shadow-inner">
        <h2 className="text-3xl font-bold text-center mb-4">{transformationProgram.name}</h2>
        <p className="text-center text-lg text-gray-700 mb-2">{transformationProgram.description}</p>
        <p className="text-center font-semibold text-green-700 mb-4">{transformationProgram.price}</p>
        <div className="max-w-2xl mx-auto">
          <ul className="list-disc list-inside space-y-1 text-sm">
            {transformationProgram.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="text-center mt-6">
          <a
            href="https://calendly.com/hj_coaching/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF9900] text-white px-6 py-2 rounded-xl hover:bg-orange-600"
          >
            Join the Next Round
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Client Transformations</h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-6 w-max">
            {transformations.map((t, idx) => (
              <div key={idx} className="min-w-[220px] max-w-[220px] text-center">
                <img src={t.image} alt={`Transformation ${idx + 1}`} className="rounded-xl shadow-lg w-full h-auto mb-2" />
                <p className="text-sm text-gray-600 italic">{t.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center space-y-4 bg-orange-50 rounded-xl p-8 shadow-md">
        <p className="text-md text-gray-700 max-w-xl mx-auto">
          If you need help choosing the perfect coaching package for your needs, book a free 30-minute consultation call.
        </p>
        <a
          href="https://calendly.com/hj_coaching/catch-up-call"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#FF9900] text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
        >
          Book a Free Consultation
        </a>
      </section>
    </div>
  );
}