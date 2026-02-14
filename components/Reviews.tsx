import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-center text-3xl md:text-5xl text-brand-900 mb-4">
          Loved by the Community
        </h2>
        <p className="text-center font-serif text-brand-600 mb-16">
          愛用者の声
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-brand-50 p-8 md:p-12 relative group hover:shadow-lg transition-shadow duration-300">
              {/* Quote Mark */}
              <div className="absolute top-6 left-6 text-6xl font-serif text-brand-200 opacity-50 group-hover:text-brand-300 transition-colors">"</div>
              
              <div className="relative z-10">
                <div className="flex mb-4 text-brand-500">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-brand-200'}`} 
                    />
                  ))}
                </div>
                <p className="font-serif text-lg text-brand-800 mb-8 leading-relaxed min-h-[5rem]">
                  {review.quote}
                </p>
                <div className="border-t border-brand-200 pt-4">
                  <p className="font-sans font-bold text-brand-900 text-sm tracking-wide">{review.name}</p>
                  <p className="font-sans text-xs text-brand-500 uppercase tracking-widest mt-1">
                    {review.age}歳 • {review.skinType}
                  </p>
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