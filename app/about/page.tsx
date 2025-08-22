import HeroImageSquare from "@/public/bg_img.jpeg"

export default function AboutPage(){
    return(
    <main className="bg-gray-50 min-h-screen">
       
        <section className="bg-white border-b border-gray-200">
            <div className="container max-w-5xl px-6 py-12 mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    About <span className="text-blue-600">BusinessDaily</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Delivering trusted business intelligence and financial insights since 1998
                </p>
            </div>
        </section>

       
        <section className="py-16">
            <div className="container max-w-6xl px-6 mx-auto">
                <div className="flex flex-col-reverse md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-gray-700 mb-4">
                                BusinessDaily provides accurate, timely, and actionable business information 
                                that empowers professionals and decision-makers worldwide to navigate the 
                                complexities of the global economy.
                            </p>
                            <p className="text-gray-700">
                                Founded in 1998, we've established ourselves as a leading source of financial news, 
                                market analysis, and economic insights for those who need to stay ahead of market trends.
                            </p>
                        </div>
                    </div>
                    
                    <div className="md:w-1/2">
                        <div className="relative">
                            <img
                                src={HeroImageSquare.src}
                                alt="BusinessDaily team"
                                className="rounded-xl shadow-lg"
                            />
        
                        </div>
                    </div>
                </div>
            </div>
        </section>

     

        <section className="py-16 bg-white">
            <div className="container max-w-5xl px-6 mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Editorial Values</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Integrity</h3>
                        </div>
                        <p className="text-gray-600">
                            We uphold the highest standards of journalistic integrity, ensuring accuracy and fairness in all our reporting.
                        </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Timeliness</h3>
                        </div>
                        <p className="text-gray-600">
                            We deliver breaking news and market updates as they happen, giving our readers a competitive edge.
                        </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Depth</h3>
                        </div>
                        <p className="text-gray-600">
                            Beyond headlines, we provide in-depth analysis and context to help readers understand the implications of business developments.
                        </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Global Perspective</h3>
                        </div>
                        <p className="text-gray-600">
                            With correspondents worldwide, we combine global context with local insights for comprehensive coverage.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    
    </main>
    )
}