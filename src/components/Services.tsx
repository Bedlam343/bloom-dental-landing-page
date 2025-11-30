import {
  Heart,
  Sparkles,
  Smile,
  ShieldCheck,
  Activity,
  Baby,
} from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'General Dentistry',
    desc: 'Routine checkups, cleanings, and preventative care.',
  },
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    desc: 'Professional whitening for a brighter smile in one visit.',
  },
  {
    icon: Smile,
    title: 'Veneers',
    desc: 'Custom-made shells to improve the appearance of teeth.',
  },
  {
    icon: ShieldCheck,
    title: 'Invisalign',
    desc: 'Clear aligners for discreet straightening.',
  },
  {
    icon: Activity,
    title: 'Implants',
    desc: 'Permanent, natural-looking tooth replacement.',
  },
  {
    icon: Baby,
    title: 'Children’s Dentistry',
    desc: "Gentle care for your little one's developing smile.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-slate mb-4">
            Comprehensive Care
          </h2>
          <p className="text-gray-600">
            We offer a full range of dental services in a comfortable, modern
            setting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-brand-gray/50 hover:bg-brand-mint/20 transition duration-300 border border-transparent hover:border-brand-mint/50"
            >
              <s.icon className="w-12 h-12 text-brand-forest mb-4" />
              <h3 className="text-xl font-bold text-brand-slate mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
