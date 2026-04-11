import React from "react";
import Link from "next/link";

export default function ProductsPage() {
  const residentialProducts = [
    {
      name: "Split Unit 1HP",
      type: "Residential",
      specs: "Cooling Capacity: 9,000 BTU",
      features: ["Inverter Technology", "Sleep Mode", "Auto Restart"],
      price: "₦180,000"
    },
    {
      name: "Split Unit 1.5HP",
      type: "Residential",
      specs: "Cooling Capacity: 12,000 BTU",
      features: ["WiFi Enabled", "Turbo Cooling", "Anti-bacterial Filter"],
      price: "₦240,000"
    },
    {
      name: "Split Unit 2HP",
      type: "Residential",
      specs: "Cooling Capacity: 18,000 BTU",
      features: ["Smart Sensor", "Energy Star Rated", "Low Noise"],
      price: "₦350,000"
    },
    {
      name: "Floor Standing 3HP",
      type: "Residential/Commercial",
      specs: "Cooling Capacity: 36,000 BTU",
      features: ["Wide Air Flow", "Self Cleaning", "Remote Control"],
      price: "₦550,000"
    },
    {
      name: "Cassette Type 5HP",
      type: "Commercial",
      specs: "Cooling Capacity: 60,000 BTU",
      features: ["360° Air Flow", "Ceiling Mount", "Multiple Zones"],
      price: "₦850,000"
    },
    {
      name: "Portable AC 1HP",
      type: "Residential",
      specs: "Cooling Capacity: 9,000 BTU",
      features: ["Mobile Design", "No Installation", "Dehumidifier"],
      price: "₦150,000"
    }
  ];

  const industrialProducts = [
    {
      name: "Chiller System 10HP",
      type: "Industrial",
      specs: "Cooling Capacity: 120,000 BTU",
      features: ["Centralized Cooling", "Building Management", "High Efficiency"]
    },
    {
      name: "VRF System 20HP",
      type: "Industrial",
      specs: "Variable Refrigerant Flow",
      features: ["Multi-zone Control", "Heat Recovery", "Scalable"]
    },
    {
      name: "Package Unit 15HP",
      type: "Industrial",
      specs: "Rooftop Installation",
      features: ["Weather Resistant", "High Capacity", "Duct Ready"]
    },
    {
      name: "Precision AC 5HP",
      type: "Server Room",
      specs: "Temperature ±1°C Control",
      features: ["Humidity Control", "24/7 Operation", "Remote Monitoring"]
    }
  ];

  const accessories = [
    { name: "Copper Pipe (per meter)", price: "₦2,500" },
    { name: "Insulation Tube", price: "₦800" },
    { name: "AC Bracket (Heavy Duty)", price: "₦5,000" },
    { name: "Remote Control (Universal)", price: "₦3,500" },
    { name: "AC Capacitor", price: "₦4,000" },
    { name: "Compressor (1HP)", price: "₦45,000" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="blue-gradient-bg py-16 relative overflow-hidden">
        <div className="absolute inset-0 engineering-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Product <span className="text-cream-200">Catalog</span>
          </h1>
          <p className="text-xl text-blue-100">
            Premium air conditioning units and accessories for every need
          </p>
        </div>
      </section>

      {/* Residential */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center text-2xl shadow-md">
              🏠
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-brand-800">Residential AC Units</h2>
              <p className="text-slate-600">Perfect for homes and small offices</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 card-hover group">
                <div className="relative h-48 bg-gradient-to-br from-cream-50 to-brand-50 flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">❄️</span>
                  <div className="absolute top-4 right-4 bg-brand-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-800 mb-2">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{product.specs}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-2xl font-bold text-brand-500">{product.price}</span>
                    <Link href="/contact" className="flex items-center space-x-2 bg-brand-800 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      <span>Inquire</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial */}
      <section className="section-padding cream-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 bg-brand-800 rounded-xl flex items-center justify-center text-2xl shadow-md">
              🏭
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-brand-800">Industrial & Commercial Systems</h2>
              <p className="text-slate-600">Heavy-duty solutions for large spaces</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrialProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-cream-200 card-hover flex flex-col md:flex-row">
                <div className="relative w-full md:w-2/5 h-48 md:h-auto bg-gradient-to-br from-brand-50 to-cream-50 flex items-center justify-center">
                  <span className="text-6xl">🏢</span>
                </div>
                <div className="p-6 flex-1">
                  <div className="inline-block bg-brand-800 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                    {product.type}
                  </div>
                  <h3 className="text-xl font-bold text-brand-800 mb-2">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{product.specs}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact" className="block w-full bg-brand-500 text-white font-bold py-3 rounded-lg hover:bg-brand-600 transition-colors text-center">
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-brand-800 mb-8 text-center">
            AC Parts & Accessories
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {accessories.map((item, index) => (
              <div key={index} className="bg-cream-50 rounded-xl p-4 text-center border border-cream-200 hover:border-brand-400 hover:shadow-md transition-all">
                <div className="text-4xl mb-2">🔧</div>
                <h4 className="font-bold text-sm text-brand-800 mb-1">{item.name}</h4>
                <p className="text-brand-500 font-bold text-sm">{item.price}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Need help choosing the right product? Our experts are here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary" id="products-contact-cta">Contact Us</Link>
              <Link href="/installation" className="btn-secondary" id="products-install-cta">Book Installation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}