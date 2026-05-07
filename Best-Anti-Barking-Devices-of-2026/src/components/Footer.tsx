import { ShieldCheck, X } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);

  return (
    <>
      <footer className="bg-slate-950 text-slate-300 py-16 mt-20 border-t border-slate-800 font-sans">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-10 border-b border-slate-800">
            <div className="flex items-center mb-6 md:mb-0">
              <ShieldCheck className="h-8 w-8 mr-3 text-blue-500" />
              <span className="font-bold text-2xl tracking-tight text-white">ConsumerSkills</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
              <a href="https://www.consumerskills.org/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="https://www.consumerskills.org/terms-and-conditions/" className="hover:text-blue-400 transition-colors">Terms & Conditions</a>
              <a href="https://www.consumerskills.org/#contact" className="hover:text-blue-400 transition-colors">Contact Us</a>
              <button onClick={() => setIsDisclosureOpen(true)} className="hover:text-blue-400 transition-colors focus:outline-none">Affiliate Disclosure</button>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-4 font-semibold tracking-wide">&copy; 2026 ConsumerSkills. All Rights Reserved.</p>
            <p className="text-slate-500 text-xs max-w-2xl mx-auto leading-relaxed">
              ConsumerSkills.org is a reader-supported site. We may earn a commission if you make a purchase through our links, at no extra cost to you. This helps us continue to test and review products honestly.
            </p>
          </div>
        </div>
      </footer>

      {isDisclosureOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 transition-opacity">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full overflow-hidden absolute">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="font-bold text-xl text-slate-900">Affiliate Disclosure</h3>
              <button 
                onClick={() => setIsDisclosureOpen(false)}
                className="text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 text-slate-700 leading-relaxed space-y-4">
              <p>
                ConsumerSkills.org is a participant in various independent affiliate programs. We may earn a commission from affiliate links on this site when you make a purchase, at absolutely no additional cost to you.
              </p>
              <p>
                Our recommendations are based on our own research and testing. We only recommend products or services that we believe will add value to our readers. 
              </p>
              <p>
                This compensation may impact how and where products appear on this site, including, for example, the order in which they may appear within listing categories.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
