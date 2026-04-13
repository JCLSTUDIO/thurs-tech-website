import React from "react";
import Link from "next/link";

export default function AboutPage() {
  const timeline = [
    { year: "2011", title: "Founded", description: "ThursTech established in Sagamu, Ogun State, Nigeria" },
    { year: "2014", title: "Expansion", description: "Extended services to 12 Nigerian states" },
    { year: "2017", title: "Industrial Division", description: "Launched specialized industrial HVAC solutions" },
    { year: "2019", title: "International", description: "Began operations in Ghana and Kenya" },
    { year: "2022", title: "Innovation Award", description: "Recognized as leading HVAC provider in West Africa" },
    { year: "2026", title: "15 Years", description: "Celebrating 15+ years of excellence" },
  ];

  const clients = [
    "Dangote Group", "Nestlé Nigeria", "Guaranty Trust Bank", "Shell Nigeria",
    "Olabisi Onabanjo Teaching Hospital", "Nigerian Breweries", "Julius Berger", "Lafarge Africa"
  ];

  const states = [
    "Lagos", "Abuja", "Kano", "Ibadan", "Port Harcourt", "Benin City",
    "Kaduna", "Enugu", "Owerri", "Aba", "Onitsha", "Warri"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="blue-gradient-bg py-20 relative overflow-hidden">
        <div className="absolute inset-0 engineering-pattern opacity-20" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-cream-200/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-cream-200/10 border border-cream-200/20 text-cream-200 text-xs font-medium mb-4">
            RC: 1577031
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            About <span className="text-cream-200">ThursTech</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            15+ years of delivering premium air conditioning solutions across Nigeria and international markets.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-brand-800 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                To provide innovative, energy-efficient, and reliable air conditioning solutions that enhance comfort and productivity for residential and industrial clients while maintaining the highest standards of professionalism and customer service.
              </p>
              
              <h2 className="text-3xl font-heading font-bold text-brand-800 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the leading HVAC solutions provider in Africa, recognized for technical excellence, sustainable practices, and unwavering commitment to customer satisfaction.
              </p>

              <div className="mt-8 p-4 bg-cream-50 rounded-xl border border-cream-300/50">
                <p className="text-sm text-slate-600">
                  <span className="font-bold text-brand-700">Head Office:</span> NO 50 Kajola Street, Ajaka Makun, Sagamu, Ogun State
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  <span className="font-bold text-brand-700">RC Number:</span> 1577031
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-cream-50 p-6 rounded-2xl border border-cream-200">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-bold text-brand-800 mb-2">Excellence</h3>
                <p className="text-sm text-slate-600">Committed to the highest standards</p>
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-bold text-brand-800 mb-2">Integrity</h3>
                <p className="text-sm text-slate-600">Honest and transparent service</p>
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="font-bold text-brand-800 mb-2">Reliability</h3>
                <p className="text-sm text-slate-600">On-time, every time</p>
              </div>
              <div className="bg-cream-50 p-6 rounded-2xl border border-cream-200">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-bold text-brand-800 mb-2">Quality</h3>
                <p className="text-sm text-slate-600">Premium products & service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding cream-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center text-brand-800 mb-16">
            Our <span className="text-gradient">Journey</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-brand-500 hover:shadow-xl transition-shadow">
                <span className="text-brand-500 font-bold text-lg">{item.year}</span>
                <h3 className="text-xl font-bold text-brand-800 mt-2">{item.title}</h3>
                <p className="text-slate-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-brand-800 mb-6">
                Service Coverage
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We operate across all 36 states in Nigeria and have expanded our services to international markets.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                {states.map((state) => (
                  <div key={state} className="flex items-center space-x-2 text-slate-700">
                    <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="text-sm font-medium">{state}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="blue-gradient-bg rounded-2xl p-8 text-white">
              <div className="text-4xl mb-6">🌍</div>
              <h3 className="text-2xl font-bold mb-4">International Operations</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-cream-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Ghana - Accra, Kumasi</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-cream-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Kenya - Nairobi, Mombasa</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-cream-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Expanding to Côte d&apos;Ivoire & Senegal</span>
                </li>
              </ul>
              <Link href="/contact" className="mt-6 inline-block bg-cream-200 text-brand-700 px-6 py-3 rounded-lg font-bold hover:bg-cream-300 transition-colors">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="section-padding cream-section">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-brand-800 mb-12">
            Trusted by Industry Leaders
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client) => (
              <div
                key={client}
                className="bg-white p-6 rounded-xl shadow-sm border border-cream-200 flex items-center justify-center h-24 hover:shadow-md hover:border-brand-200 transition-all"
              >
                <span className="font-bold text-brand-700">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}