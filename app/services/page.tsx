import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: "🔧",
      title: "AC Installation",
      description: "Professional installation of all types of air conditioning systems. Our certified technicians ensure optimal performance and longevity.",
      features: ["Residential & Commercial", "Industrial Systems", "Ductwork Installation", "System Testing & Balancing"],
      price: "From ₦25,000"
    },
    {
      icon: "🛠️",
      title: "Maintenance & Repair",
      description: "Regular maintenance and prompt repair services to keep your AC running efficiently year-round.",
      features: ["Scheduled Maintenance", "Emergency Repairs", "Parts Replacement", "System Diagnostics"],
      price: "From ₦15,000"
    },
    {
      icon: "📋",
      title: "Annual Contracts",
      description: "Comprehensive maintenance contracts for businesses and residential complexes.",
      features: ["Quarterly Inspections", "Priority Service", "Discounted Parts", "24/7 Support"],
      price: "From ₦50,000/year"
    },
    {
      icon: "🏭",
      title: "Industrial Solutions",
      description: "Large-scale HVAC solutions for factories, warehouses, and commercial buildings.",
      features: ["Chiller Systems", "VRF/VRV Systems", "Ventilation Design", "Energy Optimization"],
      price: "Custom Quote"
    },
    {
      icon: "💨",
      title: "Duct Cleaning",
      description: "Professional duct cleaning services to improve air quality and system efficiency.",
      features: ["Deep Cleaning", "Sanitization", "Filter Replacement", "Air Quality Testing"],
      price: "From ₦30,000"
    },
    {
      icon: "⚡",
      title: "Energy Audit",
      description: "Comprehensive energy assessments to optimize your cooling systems and reduce costs.",
      features: ["System Analysis", "Efficiency Reports", "Upgrade Recommendations", "Cost Savings Plan"],
      price: "From ₦20,000"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="blue-gradient-bg py-16 relative overflow-hidden">
        <div className="absolute inset-0 engineering-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Our <span className="text-cream-200">Services</span>
          </h1>
          <p className="text-xl text-blue-100">
            Comprehensive HVAC solutions for every need
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 card-hover group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-brand-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-slate-700">
                      <svg className="w-5 h-5 text-brand-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-brand-500">{service.price}</span>
                    <Link 
                      href="/installation" 
                      className="bg-brand-800 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors text-sm font-semibold"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="section-padding cream-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-brand-800 mb-6">
            Need Emergency Service?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Our emergency response team is available 24/7 for urgent AC repairs and maintenance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+2348034060091" className="btn-primary text-lg inline-flex items-center justify-center" id="services-emergency-call">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +234 803 406 0091
            </a>
            <Link href="/contact" className="btn-secondary text-lg inline-flex items-center justify-center" id="services-contact-link">
              Contact Us
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Or call our second line: <a href="tel:+2348175578322" className="text-brand-500 font-semibold hover:underline">+234 817 557 8322</a>
          </p>
        </div>
      </section>
    </div>
  );
}