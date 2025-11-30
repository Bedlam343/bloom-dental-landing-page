import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah J.',
    text: 'Best dentist in San Jose! The staff is so welcoming and Dr. Bloom explained everything clearly.',
    date: '2 weeks ago',
  },
  {
    name: 'Mike T.',
    text: 'I was terrified of the dentist until I came here. The sedation options made my root canal a breeze.',
    date: '1 month ago',
  },
  {
    name: 'Elena R.',
    text: 'My Invisalign results are amazing. Highly recommend their cosmetic team!',
    date: '3 months ago',
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-brand-gray/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-brand-slate mb-12">
          What Our Patients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={18} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">&quot;{r.text}&quot;</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-brand-slate">{r.name}</span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <span className="w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-[10px]">
                    G
                  </span>
                  Verified Review
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="text-brand-forest font-semibold hover:underline"
          >
            Read more reviews on Google Maps &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
