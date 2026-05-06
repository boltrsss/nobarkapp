import { Star, ThumbsUp, ShoppingCart, ArrowRight, Check, X, CircleDollarSign, Truck } from 'lucide-react';
import React from 'react';

interface ProductCardProps {
  rank: number;
  badge?: string;
  score?: string;
  scoreLabel?: string;
  name: string;
  image: string;
  link: string;
  linkText: string;
  pros?: string[];
  cons?: string[];
  stars?: number;
  visitors?: number;
  callOut?: string;
  children?: React.ReactNode;
}

function renderStars(rating: number) {
  const starsArray = [];
  const fullStars = Math.floor(rating);
  const fractionalPart = rating % 1;
  const hasHalfStar = fractionalPart >= 0.3 && fractionalPart <= 0.7;
  const extraFullStar = fractionalPart > 0.7 ? 1 : 0;
  
  const totalFullStars = fullStars + extraFullStar;

  for (let i = 0; i < totalFullStars; i++) {
    starsArray.push(<Star key={`full-${i}`} fill="currentColor" stroke="none" className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-amber-500" />);
  }

  if (hasHalfStar && totalFullStars < 5) {
    starsArray.push(
      <div key="half" className="relative w-[18px] h-[18px] sm:w-5 sm:h-5">
        <Star className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-slate-200 absolute" fill="currentColor" stroke="none" />
        <div className="absolute overflow-hidden w-[50%] h-full">
          <Star className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-amber-500 absolute" fill="currentColor" stroke="none" />
        </div>
      </div>
    );
  }

  const emptyStars = 5 - totalFullStars - (hasHalfStar && totalFullStars < 5 ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    starsArray.push(<Star key={`empty-${i}`} fill="currentColor" stroke="none" className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-slate-200" />);
  }

  return starsArray;
}

export default function ProductCard({
  rank,
  badge,
  score,
  scoreLabel,
  name,
  image,
  link,
  linkText,
  pros,
  cons,
  stars,
  visitors,
  callOut,
  children
}: ProductCardProps) {
  return (
    <div className="w-full mb-12 flex flex-col group bg-white shadow py-2 sm:py-0 sm:shadow-sm border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform sm:hover:-translate-y-1 relative">
      {/* Top Banner */}
      <div className="flex flex-col">
        <div className={`flex items-stretch min-h-[52px] ${rank === 1 ? 'bg-[#f8cf5d]' : 'bg-slate-100'}`}>
          <div className="bg-[#333333] text-white font-black text-2xl px-6 sm:px-8 flex items-center justify-center">
            {rank}
          </div>
          {badge && (
            <div className={`text-white font-bold text-sm tracking-wider px-4 sm:px-6 flex items-center uppercase z-10 ${rank === 1 ? 'bg-[#cc2222] rounded-br-lg' : 'bg-[#cc0000] shadow-[2px_0_5px_rgba(0,0,0,0.1)]'}`}>
              {badge}
            </div>
          )}
          <div className="flex-1"></div>
          {score && (
            <div className="pr-16 md:pr-20 flex items-center justify-end relative ml-auto">
              <span className={`font-extrabold text-lg mr-2 hidden sm:inline tracking-tight ${rank === 1 ? 'text-white drop-shadow-md' : 'text-slate-500'}`}>
                {scoreLabel || 'Outstanding'}
              </span>
              <div className={`absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 flex items-center justify-center font-black text-2xl shadow border-white z-20 ${rank === 1 ? 'bg-white text-[#333333]' : 'bg-white text-slate-700'}`}>
                {score}
              </div>
            </div>
          )}
        </div>
        {visitors && (
          <div className="bg-[#333333] border-t border-[#444] text-white text-sm py-2 px-4 font-bold flex items-center justify-center gap-2">
            <ThumbsUp className="w-4 h-4 text-white" /> {visitors.toLocaleString()} people visited this week
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start text-slate-700">
        {/* Left: Image & Name */}
        <div className="w-full md:w-1/4 flex flex-col items-center">
          <h3 className="font-black text-2xl uppercase tracking-tight text-slate-900 mb-2 text-center">{name}</h3>
          
          <div className="flex flex-col items-center gap-1 mb-4">
            <div className="flex gap-0.5">
              {renderStars(stars || 5)}
            </div>
            {stars && <span className="font-bold text-slate-600 text-sm mt-0.5">{stars.toFixed(1)} / 5.0</span>}
          </div>

          <div className="w-48 h-48 flex items-center justify-center mb-4 relative cursor-pointer group-hover:scale-105 transition-transform duration-300">
            <img src={image} alt={name} className="max-w-full max-h-[160px] object-contain flex-shrink-0" />
          </div>
        </div>

        {/* Center: Details */}
        <div className="w-full md:w-1/2 pt-2 lg:pt-4 flex flex-col">
          <div className="mb-6">{children}</div>
          
          {(pros || cons) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
              {pros && pros.length > 0 && (
                <div className="bg-emerald-50/50 rounded-lg p-4 border border-emerald-100">
                  <h4 className="font-bold text-emerald-800 flex items-center mb-3 text-sm uppercase tracking-wider">
                    <Check className="w-4 h-4 mr-1.5 text-emerald-600" strokeWidth={3} /> Pros
                  </h4>
                  <ul className="space-y-2">
                    {pros.map((pro, i) => (
                      <li key={i} className="text-sm text-slate-700 flex items-start leading-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 mt-1.5 flex-shrink-0"></span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {cons && cons.length > 0 && (
                <div className="bg-rose-50/50 rounded-lg p-4 border border-rose-100">
                  <h4 className="font-bold text-rose-800 flex items-center mb-3 text-sm uppercase tracking-wider">
                    <X className="w-4 h-4 mr-1.5 text-rose-600" strokeWidth={3} /> Cons
                  </h4>
                  <ul className="space-y-2">
                    {cons.map((con, i) => (
                      <li key={i} className="text-sm text-slate-700 flex items-start leading-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mr-2 mt-1.5 flex-shrink-0"></span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right: CTA */}
        <div className="w-full md:w-1/4 flex flex-col items-center justify-center pt-2 lg:pt-4 space-y-4 md:space-y-5 border-t md:border-t-0 md:border-l border-slate-100 md:pl-6 xl:pl-8">
          <div className="text-center w-full">
            <a 
              href={link} 
              className={`group/btn relative w-full flex items-center justify-center gap-1.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold py-3.5 px-4 rounded-full text-sm md:text-sm lg:text-sm xl:text-base text-center transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(225,29,72,0.5)] hover:shadow-[0_12px_24px_-8px_rgba(225,29,72,0.6)] hover:-translate-y-1 overflow-hidden`}
            >
              {rank !== 1 && <ShoppingCart className="w-4 h-4 flex-shrink-0" />}
              <span className="relative z-10 leading-tight">{linkText}</span>
              {rank === 1 ? (
                <div className="bg-white text-red-600 rounded-full p-0.5 ml-1 flex-shrink-0 shadow-sm hidden sm:block">
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" strokeWidth={3} />
                </div>
              ) : (
                <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover/btn:translate-x-1 transition-transform" />
              )}
            </a>
          </div>
          {rank === 1 ? (
            <div className="flex flex-col items-center justify-center gap-1.5 w-full text-slate-900 font-bold text-[11px] xl:text-xs mt-3">
              <div className="flex items-center gap-1 whitespace-nowrap">
                <CircleDollarSign className="w-3.5 h-3.5 text-emerald-600" /> 90 Days Money Back
              </div>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <Truck className="w-3.5 h-3.5 text-blue-600" /> Free Shipping
              </div>
            </div>
          ) : (
            <div className="text-center bg-rose-50 border border-rose-100 rounded-lg py-2 px-3 xl:px-4 w-full">
              {callOut ? (
                <span className="block text-[#cc0000] font-extrabold text-sm xl:text-base uppercase tracking-wider">{callOut}</span>
              ) : (
                <>
                  <span className="block text-slate-900 font-extrabold text-xs xl:text-sm mb-0.5">Limited Time Offer!</span>
                  <span className="block text-[#cc0000] font-bold text-[10px] xl:text-xs uppercase tracking-wider">Buy 1 Get 1 Free</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
