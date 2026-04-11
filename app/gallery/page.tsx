import React from "react";
import Link from "next/link";

export default function GalleryPage() {
  const galleryItems = [
    { title: "Residential Installation", location: "Lagos, Nigeria", type: "Split AC", icon: "🏠" },
    { title: "Commercial Office Setup", location: "Abuja, Nigeria", type: "VRF System", icon: "🏢" },
    { title: "Industrial Cooling", location: "Port Harcourt", type: "Chiller System", icon: "🏭" },
    { title: "Hotel Installation", location: "Ibadan, Nigeria", type: "Multi-Split", icon: "🏨" },
    { title: "Server Room Cooling", location: "Lagos, Nigeria", type: "Precision AC", icon: "🖥️" },
    { title: "Shopping Mall HVAC", location: "Kano, Nigeria", type: "Package Units", icon: "🛍️" },
    { title: "Hospital Installation", location: "Enugu, Nigeria", type: "Medical Grade AC", icon: "🏥" },
    { title: "Factory Cooling", location: "Ogun State", type: "Industrial Vents", icon: "⚙️" },
    { title: "Residential Complex", location: "Lekki, Lagos", type: "Central AC", icon: "🏘️" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="blue-gradient-bg py-16 relative overflow-hidden">
        <div className="absolute inset-0 engineering-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Project <span className="text-cream-200">Gallery</span>
          </h1>
          <p className="text-xl text-blue-100">
            Showcasing our finest installations and projects
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer border border-cream-200">
                <div className="aspect-square bg-gradient-to-br from-cream-50 to-brand-50 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-cream-200 text-sm font-semibold mb-1">{item.type}</span>
                  <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-blue-200 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding cream-section">
        <div className="max-w-7xl mx-auto">
          <div className="blue-gradient-bg rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 engineering-pattern opacity-10" />
            <div className="relative z-10">
              <h2 className="text-3xl font-heading font-bold mb-4">Have a Project in Mind?</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Let us bring your HVAC vision to life. Our team is ready to handle projects of any scale, from residential installations to industrial complexes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-cream-200 text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cream-300 transition-colors shadow-lg"
                  id="gallery-start-project"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/installation" 
                  className="border-2 border-cream-200/40 text-cream-100 hover:bg-cream-200 hover:text-brand-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                  id="gallery-book-installation"
                >
                  Book Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}