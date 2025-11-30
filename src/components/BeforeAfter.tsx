'use client';
import { useState } from 'react';
import Image from 'next/image';

const BeforeAfter = () => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');

  return (
    <section className="py-20 bg-brand-slate text-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Real Results, Real Smiles
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            See the difference our cosmetic treatments make. From whitening to
            full restorative work, we transform smiles.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('before')}
              className={`px-6 py-3 rounded-lg font-bold transition ${
                activeTab === 'before'
                  ? 'bg-brand-mint text-brand-forest'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`px-6 py-3 rounded-lg font-bold transition ${
                activeTab === 'after'
                  ? 'bg-brand-mint text-brand-forest'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              After
            </button>
          </div>
        </div>

        {/* Display Area */}
        <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
          {/* Placeholder images - TODO: Replace with real case studies */}
          {activeTab === 'before' ? (
            <Image
              src="https://placehold.co/800x600/333/white?text=Before:+Discolored+Teeth"
              alt="Teeth before treatment"
              fill
              className="object-cover animate-in fade-in duration-500"
            />
          ) : (
            <Image
              src="https://placehold.co/800x600/A5E6C6/145A32?text=After:+Bright+Smile"
              alt="Teeth after treatment"
              fill
              className="object-cover animate-in fade-in duration-500"
            />
          )}
          <div className="absolute bottom-4 right-4 bg-black/50 px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
            Case Study: Veneers
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
