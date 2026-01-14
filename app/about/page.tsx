import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#FAFAF7]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
          About Kauteka Foundation (KAFO)
        </h1>
        <p className="max-w-3xl text-lg text-gray-700 leading-relaxed">
          Kauteka Foundation (KAFO) is a non-governmental organisation established
          to ensure that all people have access to quality palliative care,
          environmental protection, and essential Water, Sanitation & Hygiene
          (WASH) services. We work closely with communities to promote dignity,
          sustainability, and improved quality of life.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-emerald-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            KAFO operates in Malawi, with active engagement in Enukweni and
            Mzuzu. Our organisation brings together professionals, volunteers,
            and community leaders committed to addressing health, environmental,
            and social challenges affecting vulnerable populations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through partnerships with hospitals, community structures, and
            development stakeholders, we deliver people-centred solutions that
            are sustainable and impactful.
          </p>
        </div>

        <div className="relative h-72 rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/about/about.jpg"
            alt="Community and environment work"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
          <div className="border-l-4 border-emerald-700 pl-6">
            <h3 className="text-xl font-semibold text-emerald-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
            To ensure that all people access to quality Palliative Care, 
            Environment, and Water Sanitation and Hygienic services.
            </p>
          </div>

          <div className="border-l-4 border-emerald-700 pl-6">
            <h3 className="text-xl font-semibold text-emerald-800 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Hygienic environment free from chronic illnesses.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold text-emerald-800 mb-8">
          Our Objectives
        </h2>
        <ol className="space-y-4 list-decimal list-inside text-gray-700 leading-relaxed">
          <li>
           To identify and link Palliative Care patients to Central Hospitals and 
           other Palliative Care organizations.
          </li>
          <li>
            To treat and provide patients Emotional and Social Needs.
          </li>
          <li>
            To engage communities in afforestation and environmental
            conservation initiatives.
          </li>
          <li>
            To provide counselling and psychosocial support to patients,
            families, and vulnerable groups.
          </li>
          <li>
            To advocate for policies that promote health, environmental
            protection, and human dignity.
          </li>
          <li>
            To build community capacity through education and awareness
            programmes.
          </li>
        </ol>
      </section>

      {/* Trust Strip */}
      <section className="bg-emerald-900">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <p className="text-sm text-emerald-100">
            Kauteka Foundation (KAFO) is a registered Non-Governmental
            Organisation operating in Malawi.
          </p>
        </div>
      </section>
    </main>
  );
}
