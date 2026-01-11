import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="bg-[#F6EACB] min-h-screen">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-6">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Kauteka Foundation (KAFO) delivers integrated services focused on
              health, environmental sustainability, and community wellbeing.
              Our work is grounded in compassion, professionalism, and impact.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <ServiceCard
            title="Palliative Care"
            description="We identify, support, and link palliative care patients to central hospitals and specialized organizations, ensuring dignity, comfort, and emotional support."
          />

          <ServiceCard
            title="Environmental Management"
            description="We provide environmental management services, impact assessments, and contribute to the development of sustainable environmental tools."
          />

          <ServiceCard
            title="Water, Sanitation & Hygiene (WASH)"
            description="We promote access to clean water, proper sanitation, and hygienic practices to improve public health in underserved communities."
          />

          <ServiceCard
            title="Afforestation"
            description="We engage communities in tree planting initiatives to restore ecosystems, combat climate change, and protect natural resources."
          />

          <ServiceCard
            title="Counselling"
            description="We offer emotional, social, and psychological counselling to patients, families, and vulnerable groups."
          />

          <ServiceCard
            title="Advocacy"
            description="We advocate for policies and practices that promote health, environmental protection, and human dignity."
          />

        </div>
      </section>

    </main>
  );
}

/* Reusable Card */
function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-emerald-700 mb-4">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
