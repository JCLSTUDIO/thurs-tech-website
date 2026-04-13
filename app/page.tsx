import React from "react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: "🏆",
      title: "15+ Years Experience",
      description: "Trusted expertise in HVAC solutions since 2011"
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Serving Nigeria and international markets"
    },
    {
      icon: "👥",
      title: "Expert Team",
      description: "Certified technicians and engineers"
    },
    {
      icon: "✓",
      title: "Quality Guaranteed",
      description: "Premium products with warranty support"
    }
  ];

  const services = [
    {
      icon: "🌡️",
      title: "AC Sales",
      description: "Wide range of residential and industrial air conditioning units from top brands.",
      link: "/products"
    },
    {
      icon: "🔧",
      title: "Installation",
      description: "Professional installation services with minimal disruption to your space.",
      link: "/installation"
    },
    {
      icon: "⚡",
      title: "Maintenance",
      description: "Regular maintenance contracts to keep your systems running efficiently.",
      link: "/services"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden blue-gradient-bg">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-800/95 to-transparent z-10" />
          <div className="w-full h-full bg-brand-700" />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-32 right-20 w-72 h-72 bg-cream-200/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl" />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-56 sm:pb-48 md:py-20">
          <div className="max-w-3xl animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cream-200/10 border border-cream-200/30 text-cream-200 text-sm font-semibold mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-cream-200 rounded-full mr-2 animate-pulse" />
              15+ Years of Excellence · RC: 1577031
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Premium Air Conditioning <span className="text-cream-200">Solutions</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              ThursTech Nigeria Ltd delivers world-class HVAC solutions for residential and industrial clients across Nigeria and beyond. Experience comfort engineered to perfection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/installation" className="bg-cream-200 hover:bg-cream-300 text-brand-700 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center text-lg" id="hero-book-installation">
                Book Installation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/products" className="border-2 border-cream-200/40 text-cream-100 hover:bg-cream-200 hover:text-brand-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center text-lg" id="hero-explore-products">
                Explore Products
              </Link>
            </div>
            
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-y-4 gap-x-6 text-blue-200">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-cream-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-cream-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-cream-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-sm">Warranty Included</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cream-200 font-heading">15+</div>
                <div className="text-blue-200 text-sm mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cream-200 font-heading">5000+</div>
                <div className="text-blue-200 text-sm mt-1">Installations</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cream-200 font-heading">50+</div>
                <div className="text-blue-200 text-sm mt-1">Corporate Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cream-200 font-heading">36</div>
                <div className="text-blue-200 text-sm mt-1">States Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding cream-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/80 hover:bg-white transition-all duration-300 group card-hover border border-cream-300/50"
              >
                <div className="w-16 h-16 rounded-xl bg-brand-50 flex items-center justify-center text-4xl mb-4 group-hover:bg-brand-500 group-hover:shadow-lg transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-800 mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive HVAC solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-slate-100 group"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-brand-500 font-semibold hover:text-brand-600 transition-colors group/link"
                >
                  Learn More 
                  <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-12 cream-section border-y border-cream-300/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-brand-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <p className="text-sm text-slate-500">Call us today</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                  <a href="tel:+2348034060091" className="text-lg font-bold text-brand-700 hover:text-brand-500 transition-colors">+234 803 406 0091</a>
                  <span className="hidden sm:inline text-slate-300">|</span>
                  <a href="tel:+2348175578322" className="text-lg font-bold text-brand-700 hover:text-brand-500 transition-colors">+234 817 557 8322</a>
                </div>
              </div>
            </div>
            <Link href="/contact" className="btn-primary px-8" id="contact-bar-cta">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 blue-gradient-bg overflow-hidden">
        <div className="absolute inset-0 engineering-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-cream-200/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Experience <span className="text-cream-200">Perfect Climate?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get a free consultation and quote for your air conditioning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-cream-200 hover:bg-cream-300 text-brand-700 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg" id="cta-free-quote">
              Get Free Quote
            </Link>
            <Link href="/about" className="border-2 border-cream-200/40 text-cream-100 hover:bg-cream-200 hover:text-brand-700 font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300" id="cta-learn-more">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}