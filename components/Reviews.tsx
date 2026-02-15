import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-water-600 font-sans text-xs tracking-[0.2em] uppercase block mb-4">Voice</span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-800">
            素肌が変わる、感動の声
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-white p-10 border border-brand-100 relative group hover:shadow-xl hover:shadow-water-100/30 transition-shadow duration-500 rounded-sm">
              {/* Quote Mark */}
              <div className="absolute top-4 left-6 text-6xl font-serif text-water-50 group-hover:text-water-100 transition-colors">"</div>

              <div className="relative z-10">
                <div className="flex mb-6 text-brand-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      fill={i < review.rating ? "#e5cfa8" : "none"}
                      stroke={i < review.rating ? "none" : "#cbd5e1"} // slate-300
                      className="w-4 h-4"
                    />
                  ))}
                </div>
                <p className="font-serif text-base text-brand-700 mb-8 leading-relaxed min-h-[4rem]">
                  {review.quote}
                </p>
                <div className="border-t border-brand-100 pt-6 flex items-center justify-between">
                  <div>
                    <p className="font-sans font-medium text-brand-800 text-sm tracking-wide">{review.name}</p>
                    <p className="font-sans text-xs text-brand-400 uppercase tracking-widest mt-1">
                      {review.age}歳 • {review.skinType}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;