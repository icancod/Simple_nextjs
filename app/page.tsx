
 import HeroImage from "@/public/bg_img.jpeg";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-6">
              BREAKING NEWS
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Your Daily Business New Partner
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Major stock indices hit record highs as employment data exceeds expectations and consumer confidence reaches a two-year peak. Analysts predict sustained growth through the quarter.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about/product"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
              >
                Market Analysis
              </Link>
            </div>

          </div>
          
          <div className="flex-1">
            <div className="relative">
              <img 
                src={HeroImage.src} 
                width={500} 
                className="rounded-xl shadow-xl" 
                alt="Stock market chart showing growth"
              />

            </div>
          </div>
        </div>
      </section>

     
      <section className="max-w-7xl mx-auto px-6 py-12 bg-white rounded-xl shadow-sm mt-10 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Trending Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">TECH</span>
            <h3 className="font-semibold text-lg mt-2 mb-1">Tech Giants Announce AI Partnership</h3>
            <p className="text-sm text-gray-600">Major players collaborate on ethical AI framework development.</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">ECONOMY</span>
            <h3 className="font-semibold text-lg mt-2 mb-1">Central Banks Hold Rates Steady</h3>
            <p className="text-sm text-gray-600">Policy makers signal cautious approach to inflation management.</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">INVESTING</span>
            <h3 className="font-semibold text-lg mt-2 mb-1">Sustainable Funds Outperform Market</h3>
            <p className="text-sm text-gray-600">ESG investments show strong returns amid shifting consumer preferences.</p>
          </div>
        </div>
      </section>

    </main>
  );
}