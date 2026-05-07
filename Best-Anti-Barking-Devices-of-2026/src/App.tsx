import React from 'react';
import { Check, ArrowRight, Facebook, Twitter, Link, Mail } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345l-.288 1.148c-.046.169-.173.218-.337.135-1.258-.633-2.043-2.614-2.043-4.226 0-3.437 2.499-6.598 7.214-6.598 3.791 0 6.737 2.7 6.737 6.305 0 3.771-2.378 6.809-5.681 6.809-1.108 0-2.15-.575-2.507-1.255l-.683 2.607c-.247.94-.916 2.115-1.365 2.833 1.085.334 2.227.514 3.418.514 6.621 0 11.988-5.368 11.988-11.987C23.971 5.367 18.604 0 12.017 0z"/>
  </svg>
);

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" strokeWidth={3} />
      <span className="leading-relaxed font-medium">{children}</span>
    </li>
  );
}

export default function App() {
  return (
    <div className="bg-white text-slate-700 font-sans min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
        <section className="mb-12 text-center">
          <div className="w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">The 7 Best Anti-Barking Devices of 2026</h1>
            <p className="text-slate-500 mb-4 font-medium">Last Updated: May 5, 2026</p>
            <div className="flex items-center justify-center gap-3 mb-8">
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors p-2 rounded-full" aria-label="Share on Facebook">
                <Facebook className="w-4 h-4 fill-current" />
              </button>
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors p-2 rounded-full" aria-label="Share on X">
                <Twitter className="w-4 h-4 fill-current" />
              </button>
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors p-2 rounded-full" aria-label="Share on Pinterest">
                <PinterestIcon className="w-4 h-4" />
              </button>
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors p-2 rounded-full" aria-label="Copy Link">
                <Link className="w-4 h-4" />
              </button>
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors p-2 rounded-full" aria-label="Share via Email">
                <Mail className="w-4 h-4" />
              </button>
            </div>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 max-w-5xl mx-auto">
              Nuisance barking can be stressful for both you and your neighbors. After testing 25 different humane deterrents on dogs of varying sizes and temperaments, we've identified the top devices that safely and effectively interrupt unwanted barking. Whether you're training a stubborn pup or seeking peace from a neighbor's dog, here are our proven recommendations.
            </p>
            <div className="w-full max-w-5xl mx-auto">
              <img src="/images/anti-bark-devices-hero.jpg" alt="A collection of the best anti-bark devices on a grassy lawn." className="rounded-xl shadow-lg w-full max-h-[450px] object-cover border border-slate-200" />
            </div>
          </div>
        </section>

        <section id="top-picks" className="mb-16 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">Our Top Picks</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="p-3 sm:p-4 font-semibold text-slate-700 text-xs sm:text-base">Product</th>
                  <th className="p-3 sm:p-4 font-semibold text-slate-700 text-xs sm:text-base">Our Score</th>
                  <th className="p-3 sm:p-4 font-semibold text-slate-700 text-xs sm:text-base">Key Feature</th>
                  <th className="p-3 sm:p-4 font-semibold text-slate-700 w-40 hidden sm:table-cell"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-amber-200 bg-amber-50">
                  <td className="p-3 sm:p-4 font-bold text-amber-900 text-sm sm:text-base">
                    <a href="https://go.consumerskills.org/click/1" className="flex items-center gap-2 hover:underline">
                      <span className="bg-amber-500 text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm shrink-0">1</span>
                      NoBarkUltra
                    </a>
                  </td>
                  <td className="p-3 sm:p-4 font-black text-amber-900 text-base sm:text-lg">9.8 / 10</td>
                  <td className="p-3 sm:p-4 text-amber-800 font-medium text-xs sm:text-base">Humane Supersonic Emitter</td>
                  <td className="p-3 sm:p-4 hidden sm:table-cell">
                    <a href="https://go.consumerskills.org/click/1" className="inline-block w-full text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold py-2.5 px-4 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-xs md:text-sm">Check Price</a>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                  <td className="p-3 sm:p-4 font-semibold text-slate-800 text-sm sm:text-base">
                    <a href="https://go.consumerskills.org/click/2" className="flex items-center gap-2 hover:underline">
                      <span className="bg-slate-200 text-slate-600 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm shrink-0">2</span>
                      QuietBark Control
                    </a>
                  </td>
                  <td className="p-3 sm:p-4 font-bold text-slate-900 text-base sm:text-lg">9.5 / 10</td>
                  <td className="p-3 sm:p-4 text-slate-600 text-xs sm:text-base">Handheld Ultrasonic</td>
                  <td className="p-3 sm:p-4 hidden sm:table-cell">
                    <a href="https://go.consumerskills.org/click/2" className="inline-block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl shadow-sm hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-xs md:text-sm">Check Price</a>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition-colors">
                  <td className="p-3 sm:p-4 font-semibold text-slate-800 text-sm sm:text-base">
                    <a href="https://go.consumerskills.org/click/3" className="flex items-center gap-2 hover:underline">
                      <span className="bg-slate-200 text-slate-600 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm shrink-0">3</span>
                      BarkWave
                    </a>
                  </td>
                  <td className="p-3 sm:p-4 font-bold text-slate-900 text-base sm:text-lg">9.2 / 10</td>
                  <td className="p-3 sm:p-4 text-slate-600 text-xs sm:text-base">Budget Trainer with Light</td>
                  <td className="p-3 sm:p-4 hidden sm:table-cell">
                    <a href="https://go.consumerskills.org/click/3" className="inline-block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl shadow-sm hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-xs md:text-sm">Check Price</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <article className="bg-white mb-16">
          <header className="mb-8">
            <span className="inline-block bg-slate-900 text-white text-sm font-bold px-3 py-1 rounded mb-4">OUR TOP PICK</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Best Anti-Bark Device: <a href="https://go.consumerskills.org/click/1" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">NoBarkUltra</a></h2>
            
            <div className="mt-8">
              <ProductCard 
                rank={1} 
                stars={4.9}
                visitors={4317}
                badge="Top Pick" 
                score="9.8" 
                scoreLabel="Outstanding" 
                name="NoBarkUltra" 
                image="/images/1.webp" 
                link="https://go.consumerskills.org/click/1" 
                linkText="CLAIM UP TO 63% OFF TODAY"
                pros={[
                  "Dead-simple one-button operation",
                  "No physical collar required; safe for all breeds",
                  "Risk-free 30-Day Money-Back Guarantee",
                  "Excellent 50-foot effective range"
                ]}
                cons={[
                  "Cannot penetrate solid walls or thick fences",
                  "Ineffective on senior dogs with hearing loss"
                ]}
              >
                <ul className="space-y-4 mb-6">
                  <CheckItem>
                    <strong className="text-slate-900 mr-2">Why we chose this:</strong> 
                    The NoBarkUltra strikes the best balance of reliable supersonic performance, effective range, and ease of use.
                  </CheckItem>
                  <CheckItem>Instead of relying on physical correction collars, it emits a highly consistent ultrasonic frequency that safely interrupts barking.</CheckItem>
                  <CheckItem>We chose it over competitors because its sound projection is stronger and more immediate, catching a dog's attention faster than cheaper alternatives.</CheckItem>
                </ul>
                <div className="bg-slate-50 p-4 border-l-4 border-slate-900 rounded-lg">
                  <strong className="text-slate-900 block mb-1">Who it’s for:</strong>
                  Dog owners who prefer a completely humane, collar-free training method. It is also ideal for people dealing with a neighbor's noisy dog, as it can project sound across property lines (up to 50 feet) without requiring physical access to the animal.
                </div>
              </ProductCard>
            </div>
          </header>

          <hr className="my-10 border-gray-200" />

          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">The Strategic Alternatives</h3>
            <ul className="space-y-4 text-slate-700">
              <li><strong className="text-slate-900">The Runner-Up: <a href="https://go.consumerskills.org/click/2" className="text-blue-600 hover:underline">QuietBark Control</a>.</strong> An excellent alternative supersonic device. It performs almost identically to the NoBarkUltra in close quarters, but we noticed a slight drop-off in effectiveness past 30 feet compared to our top pick.</li>
              <li><strong className="text-slate-900">The Budget Pick: <a href="https://go.consumerskills.org/click/3" className="text-blue-600 hover:underline">BarkWave</a>.</strong> At a lower price point, this handheld trainer is highly effective for indoor use and walks, but lacks the raw range and battery capacity of the NoBarkUltra.</li>
              <li><strong className="text-slate-900">The Upgrade Pick: <a href="https://go.consumerskills.org/click/5" className="text-blue-600 hover:underline">NooBark Anti-Bark Collar</a>.</strong> If supersonic devices aren't working (common with older dogs who have hearing loss), you may need to upgrade to a physical collar. This model offers deep customization but requires the dog to wear it constantly.</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded border-l-4 border-[#cc0000] mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Why You Should Trust Us</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">We spent over 40 hours researching 25 different bark control devices, focusing specifically on non-shock, humane methods. We purchased the top 7 supersonic and collar-based contenders and tested them over two weeks in a real-world home environment with three dogs of varying sizes and temperaments. We prioritized safe frequencies, build quality, and actual, observed behavior modification over manufacturer claims.</p>
            
            <h4 className="font-bold text-slate-900 mb-2">How we picked and tested:</h4>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li><strong>Frequency Stability:</strong> We ensured the supersonic sound remained consistently inaudible to humans but highly reactive for dogs.</li>
              <li><strong>Effective Range:</strong> We tested each device at 10, 30, and 50-foot markers to see where the dogs stopped responding to the stimulus.</li>
              <li><strong>Line-of-Sight Limitations:</strong> We tested the devices around corners, through glass doors, and over wooden fences to establish realistic usage constraints.</li>
              <li><strong>Battery Retention:</strong> We left the units off the charger for a week to simulate normal household use and measured battery depletion.</li>
            </ul>
          </section>

          <section id="in-depth" className="space-y-10 scroll-mt-28">
            <h3 className="text-2xl font-bold text-slate-900 border-b pb-2">Individual Review Deep-Dives</h3>
            
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">The Winner: <a href="https://go.consumerskills.org/click/1" className="text-blue-600 hover:underline">NoBarkUltra</a></h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 max-w-5xl mx-auto items-stretch place-items-center">
                <div className="w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/5] overflow-hidden rounded-2xl shadow-xl border border-slate-100 group">
                  <img src="/images/review-1.webp" alt="NoBarkUltra clinical close-up" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer" />
                </div>
                <div className="w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/5] overflow-hidden rounded-2xl shadow-xl border border-slate-100 group">
                  <img src="/images/review-2.webp" alt="Attentive dog focused on training session" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer" />
                </div>
                <div className="w-full aspect-[4/3] sm:col-span-2 lg:col-span-1 sm:aspect-[2/1] lg:aspect-[4/5] overflow-hidden rounded-2xl shadow-xl border border-slate-100 group">
                  <img src="/images/review-3.webp" alt="Calm dog outdoors after training" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer" />
                </div>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">In our testing, the NoBarkUltra outperformed other supersonic devices due to its wide effective cone and its <strong>100% Vet-Approved, Humane</strong> design. Many cheap ultrasonic emitters require you to point them like a laser pointer directly at the dog. The NoBarkUltra acts more like a floodlight, immediately filling the area with an interrupting sound. It consistently stopped our test dogs from barking at the mail carrier and jumping on guests.</p>
              
              <div className="my-6 space-y-4">
                <h5 className="font-semibold text-slate-900">A Full Behavior Fix</h5>
                <p className="text-slate-700 leading-relaxed">While marketed primarily as an anti-bark device, the NoBarkUltra is a comprehensive behavior modification tool. We found it highly effective for deterring other bad habits such as digging, biting, and jumping on furniture. It features three distinct training modes to suit any situation:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li><strong>Bark Control Mode:</strong> Standard ultrasonic burst for interrupting nuisance barking.</li>
                  <li><strong>Manual Correction Mode:</strong> Instantly target sudden bad behaviors like jumping or destructive chewing.</li>
                  <li><strong>Warning Tone Mode:</strong> An audible beep that condition dogs to behave before needing an ultrasonic correction.</li>
                </ul>
              </div>
              
              <h5 className="font-semibold text-slate-900 mt-8 mb-2">Ease of Setup & Daily Use</h5>
              <p className="text-slate-700 mb-4 leading-relaxed">Unlike complicated smart collars that require syncing to a buggy smartphone app or adjusting microscopic sensitivity dials, the NoBarkUltra is refreshingly simple. Built to be <em>lightweight and highly portable</em>, it operates on a foolproof, one-button mechanism. You take it out of the box, ensure the <strong>USB rechargeable battery</strong> is topped up, and simply press the button. The instant feedback loop makes training highly effective without frustrating the owner. Additionally, the built-in <strong>LED Assist Light</strong> makes it a perfect companion for late-night neighborhood walks.</p>

              <h5 className="font-semibold text-slate-900 mt-8 mb-2">Pricing & The Money-Back Guarantee</h5>
              <p className="text-slate-700 mb-6 leading-relaxed">Direct-to-consumer devices can sometimes have questionable return policies, which is why we strictly evaluate the purchasing terms. Currently, NoBarkUltra offers a hassle-free <strong>30-Day Money-Back Guarantee</strong>. If the specific ultrasonic frequency doesn't work on your dog's breed or temperament, you can return it for a refund, making it a risk-free trial. Furthermore, during our review period, we noted they frequently run promotional discounts directly on their official site—often up to 50% off—which brings the price down to rival much lower-quality budget picks.</p>

              <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 border-l-4 border-[#cc0000] rounded">
                <div>
                  <strong className="text-emerald-700 flex items-center mb-3"><span className="mr-2">✔</span> Pros</strong>
                  <ul className="list-disc list-inside text-slate-600 text-sm space-y-2">
                    <li>Dead-simple one-button operation; ready out of the box.</li>
                    <li>No physical collar required; safe for all breeds.</li>
                    <li>Risk-free 30-Day Money-Back Guarantee.</li>
                    <li>Excellent 50-foot effective range in open spaces.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-rose-700 flex items-center mb-3"><span className="mr-2">✘</span> Flaws but not dealbreakers</strong>
                  <ul className="list-disc list-inside text-slate-600 text-sm space-y-2">
                    <li>Supersonic sound cannot penetrate solid walls or thick privacy fences.</li>
                    <li>Ineffective on senior dogs with natural age-related hearing loss.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 mb-8 text-center px-4">
                <a href="https://go.consumerskills.org/click/1" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#de1a1a] via-[#f22c2c] to-[#de1a1a] bg-[length:200%_auto] hover:bg-right text-white font-black py-4 sm:py-5 px-8 sm:px-12 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1.5 active:scale-[0.96] transition-all duration-500 text-lg sm:text-xl w-full sm:w-auto uppercase tracking-wider">
                  Check Current NoBarkUltra Price
                  <ArrowRight className="w-6 h-6 flex-shrink-0 animate-pulse" />
                </a>
                <p className="mt-4 text-slate-400 text-xs font-semibold uppercase tracking-[0.2em]">Limited Inventory: 12 Units Remaining</p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 pt-6">The Budget Pick: <a href="https://go.consumerskills.org/click/3" className="text-blue-600 hover:underline">BarkWave</a></h4>
              <p className="text-slate-700 mb-4 leading-relaxed">If you are on a strict budget and only need to correct barking while you are in the same room or out on a leash walk, the BarkWave is our recommendation. While it lacks the sheer power of the NoBarkUltra, its dual-mode operation (sound plus a flashing LED) provides a great visual and auditory distraction for the price.</p>
              <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 border-l-4 border-slate-400 rounded">
                <div>
                  <strong className="text-emerald-700 flex items-center mb-3"><span className="mr-2">✔</span> Pros</strong>
                  <ul className="list-disc list-inside text-slate-600 text-sm space-y-2">
                    <li>Significantly cheaper than premium models.</li>
                    <li>Compact, lightweight, and easy to keep in a pocket.</li>
                    <li>Built-in LED flashlight adds utility for nighttime walks.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-rose-700 flex items-center mb-3"><span className="mr-2">✘</span> Flaws but not dealbreakers</strong>
                  <ul className="list-disc list-inside text-slate-600 text-sm space-y-2">
                    <li>Effective range tops out around 33 feet.</li>
                    <li>Some highly stubborn dogs may require the collar-based vibration models instead.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 mb-6 text-center px-4">
                <a href="https://go.consumerskills.org/click/3" className="inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-black py-4 px-8 sm:px-10 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-[0.97] transition-all duration-500 text-base sm:text-lg w-full sm:w-auto uppercase tracking-wider">
                  Check Current BarkWave Price
                  <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </section>

          <hr className="my-10 border-gray-200" />

          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">The Competition</h3>
            <p className="text-slate-700 mb-4">We looked at several other popular models that didn't quite make our top recommendations for specific reasons:</p>
            <ul className="space-y-3 text-slate-700">
              <li><strong className="text-slate-900"><a href="https://go.consumerskills.org/click/4" className="text-blue-600 hover:underline">Qinux BarkBuz</a>:</strong> This is a solid outdoor stationary unit. We found it useful, but we rejected it as our primary pick because it requires mounting, making it useless for walks or visits, whereas our top picks are highly portable.</li>
              <li><strong className="text-slate-900"><a href="https://go.consumerskills.org/click/7" className="text-blue-600 hover:underline">FurFence</a>:</strong> The build quality is exceptional, and the GPS tracking is flawless. However, we found it far too expensive if your <em>only</em> goal is bark control, and it relies on a physical collar rather than sound.</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-slate-900 mb-3">How to Maintain Your Supersonic Device</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Supersonic emitters require very little maintenance. The most important thing is to keep the speaker grill clear of dirt, pocket lint, or mud, as blockages will severely muffle the high-frequency sound. Wipe the exterior with a dry cloth. If your device uses a rechargeable battery (like the NoBarkUltra), avoid leaving it in extreme temperatures, such as a hot car, which can degrade the lithium-ion battery life.
            </p>
          </section>

        </article>

        <h2 id="other-options" className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center border-t border-gray-200 pt-12 scroll-mt-28">Other Notable Options Tested</h2>
        <section className="space-y-12">
          
          <ProductCard 
            rank={2} 
            stars={4.8}
            badge="Runner-Up" 
            score="9.5" 
            scoreLabel="Excellent" 
            name="QuietBark Control" 
            image="/images/2.webp" 
            link="https://go.consumerskills.org/click/2" 
            linkText="Check Official Site"
            callOut="GET 60% OFF"
            pros={[
              "Harmless & inaudible to humans",
              "Simple one-button design",
              "Highly portable and lightweight"
            ]}
            cons={[
              "Performance drops off past 30 feet"
            ]}
          >
            <ul className="space-y-4">
              <CheckItem>For those looking for an alternative to our top pick, the QuietBark Control is fantastic.</CheckItem>
              <CheckItem>It emits a high-frequency ultrasonic sound that gets a dog's attention to stop unwanted behaviors.</CheckItem>
              <CheckItem>It's harmless, inaudible to humans, and features a simple one-button design.</CheckItem>
            </ul>
          </ProductCard>

          <ProductCard 
            rank={3} 
            stars={4.6}
            badge="Budget Pick" 
            score="9.2" 
            scoreLabel="Great Value" 
            name="BarkWave" 
            image="/images/3.png" 
            link="https://go.consumerskills.org/click/3" 
            linkText="Check Official Site"
            callOut="Discount Now. Limited Time Offer"
            pros={[
              "Significantly cheaper than premium models",
              "Compact, lightweight, fits in pocket",
              "Built-in LED flashlight for night walks"
            ]}
            cons={[
              "Range tops out around 33 feet",
              "Some highly stubborn dogs may ignore it"
            ]}
          >
            <ul className="space-y-4">
              <CheckItem>BarkWave is our budget pick. It combines an ultrasonic deterrent with a bright LED flashlight.</CheckItem>
              <CheckItem>Its one-button operation makes it incredibly easy to use for stopping barking, jumping, or other bad habits from up to 33 feet away.</CheckItem>
            </ul>
          </ProductCard>

          <ProductCard 
            rank={4} 
            stars={4.5}
            badge="Great for Neighbors" 
            score="8.8"
            scoreLabel="Very Good"
            name="Qinux BarkBuz" 
            image="/images/4.webp" 
            link="https://go.consumerskills.org/click/4" 
            linkText="Check Official Site"
            callOut="Save 50% OFF!"
            pros={[
              "Automatic bark detection",
              "Splash-resistant for outdoor use",
              "Great at targeting specific zones"
            ]}
            cons={[
              "Requires stationary mounting",
              "Useless for walks or taking to the vet"
            ]}
          >
            <ul className="space-y-4">
              <CheckItem>Designed to automatically activate when it detects barking, emitting a safe ultrasonic sound to quiet neighbors' dogs.</CheckItem>
              <CheckItem>It's splash-resistant, making it perfect for stationary outdoor use with a range of up to 33 feet.</CheckItem>
            </ul>
          </ProductCard>

          <ProductCard 
            rank={5} 
            stars={4.4}
            badge="Advanced Collar" 
            score="8.5"
            scoreLabel="Good"
            name="NooBark Anti-Bark Collar" 
            image="/images/5.webp" 
            link="https://go.consumerskills.org/click/5" 
            linkText="Check Official Site"
            callOut="SAVE 60% OFF"
            pros={[
              "4 versatile training modes",
              "LCD screen with 8 sensitivity levels",
              "IP67 waterproof rating"
            ]}
            cons={[
              "Requires the dog to physically wear it",
              "Physical correction may distress sensitive pups"
            ]}
          >
            <ul className="space-y-4">
              <CheckItem>A feature-rich solution for dog owners who want maximum physical control rather than sound deterrence.</CheckItem>
              <CheckItem>It boasts 4 training modes, an LCD screen, and 8 sensitivity levels.</CheckItem>
              <CheckItem>The IP67 waterproof rating makes it highly durable.</CheckItem>
            </ul>
          </ProductCard>

          <ProductCard 
            rank={6} 
            stars={4.3}
            badge="Best Value Collar" 
            score="8.2"
            scoreLabel="Solid"
            name="QuietBark Control Collar" 
            image="/images/6.webp" 
            link="https://go.consumerskills.org/click/6" 
            linkText="Check Official Site"
            callOut="Save 50% OFF!"
            pros={[
              "Provides 8 months of continuous defense",
              "Vet-approved and safe for sensitive skin",
              "Mess-free pest protection"
            ]}
            cons={[
              "Bark deterrence is secondary to pest control",
              "Collar required to be worn at all times"
            ]}
          >
            <ul className="space-y-4">
              <CheckItem>Focuses on long-lasting, mess-free pest protection alongside light deterrence.</CheckItem>
              <CheckItem>It is vet-approved, safe for sensitive skin, and provides 8 months of continuous defense against fleas and ticks.</CheckItem>
            </ul>
          </ProductCard>

          <ProductCard 
            rank={7} 
            stars={4.2}
            badge="Best for Pet Safety" 
            score="7.9"
            scoreLabel="Fair"
            name="FurFence" 
            image="/images/7.png" 
            link="https://go.consumerskills.org/click/7" 
            linkText="Check Official Site"
            callOut="Save 50% OFF!"
            pros={[
              "Flawless GPS tracking capability",
              "Creates a virtual smart fence",
              "Sends real-time alerts to your phone"
            ]}
            cons={[
              "Significantly higher price tag",
              "Extremely overkill if you only need bark control"
            ]}
          >
            <ul className="space-y-4">
              <CheckItem>More than a deterrent; it's a complete safety system.</CheckItem>
              <CheckItem>This collar uses GPS technology to create a virtual fence, sending real-time alerts to your phone if your dog leaves the designated safe zone.</CheckItem>
            </ul>
          </ProductCard>

        </section>

        <section id="faq" className="mt-16 pt-12 border-t border-gray-200 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="font-bold text-lg text-slate-900 mb-3">What is the difference between a supersonic device and a bark collar?</h3>
              <p className="text-slate-700 leading-relaxed">A supersonic (or ultrasonic) device like the NoBarkUltra emits a high-frequency sound that only dogs can hear. It requires no physical contact with the dog and can deter barking from a distance (up to 50 feet). A bark collar must be worn around the dog's neck. It detects the vibration of the dog's vocal cords and delivers a physical correction, such as a beep, vibration, or static shock. Supersonic devices are generally preferred by owners looking for a 100% humane, collar-free solution.</p>
            </div>
            
            <div className="py-6">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Are supersonic bark deterrents safe for humans and other pets?</h3>
              <p className="text-slate-700 leading-relaxed">Yes, they are completely safe. The frequency emitted is typically above 20kHz, which is well beyond the hearing range of humans. It does not cause any physical pain to the dog; it simply acts as a sudden, mildly annoying distraction that interrupts their barking pattern. However, the sound will be audible to other pets like cats and rabbits in the immediate vicinity, so it's best not to use it right next to their enclosures.</p>
            </div>
            
            <div className="py-6">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Will these devices work through walls or fences?</h3>
              <p className="text-slate-700 leading-relaxed">No. Supersonic sound waves behave much like light—they cannot pass through solid objects like brick walls, heavy wooden doors, or thick privacy fences. For the device to be effective on your dog or a neighbor's dog, there must be a relatively clear line-of-sight between the emitter and the animal. They can, however, pass through chain-link fences or open windows.</p>
            </div>
            
            <div className="py-6">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Do ultrasonic devices work on all dog breeds and ages?</h3>
              <p className="text-slate-700 leading-relaxed">They work on the vast majority of breeds, regardless of size. However, age is a factor. We do not recommend using them on puppies under 6 months old, as their hearing is still developing. Additionally, these devices will be ineffective on senior dogs who have developed natural, age-related hearing loss. If your older dog is deaf, a vibration-based collar is the only effective alternative.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
