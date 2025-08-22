import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
import Link from "next/link";
const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})
const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>     
      <nav className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
           <Link href="/" className="flex items-center space-x-2"> 
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
            <span className="ml-2 font-bold text-xl text-gray-800">BusinessDaily</span>
           </Link> 
          </div>
        <div className="flex items-center space-x-3"> 
          <div className="hidden md:flex space-x-8 ">
            <Link href="/about/product" className="text-gray-600 hover:text-blue-600 transition-colors">LATEST BUSINESS NEWS</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">ABOUT</Link>
            {/* <Link href="/tech" className="text-gray-600 hover:text-blue-600 transition-colors">Tech</Link>
            <Link href="/economy" className="text-gray-600 hover:text-blue-600 transition-colors">Economy</Link> */}
          </div>
          <div className="flex items-center space-x-4">
            
          </div>
        </div>
      </div>   
      </nav>
        {children}
      </body>
    </html>
  );
}
