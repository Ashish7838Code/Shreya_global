import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, MapPin, Phone, Mail } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Standard Courier",
      description: "Regular delivery within 3-5 business days",
      icon: "📦",
    },
    {
      id: 2,
      name: "Express Delivery",
      description: "Next-day delivery for urgent shipments",
      icon: "🚀",
    },
    {
      id: 3,
      name: "International Shipping",
      description: "Worldwide delivery with customs handling",
      icon: "🌍",
    },
    {
      id: 4,
      name: "Bulk Shipment",
      description: "Cost-effective solutions for large volumes",
      icon: "📊",
    },
    {
      id: 5,
      name: "Temperature Controlled",
      description: "Specialized handling for sensitive items",
      icon: "❄️",
    },
    {
      id: 6,
      name: "Fragile Items",
      description: "Premium packaging and handling care",
      icon: "⚠️",
    },
  ];

  const deliveryAreas = [
    "Metropolitan Cities",
    "Tier 1 Towns",
    "Tier 2 Towns",
    "Rural Areas",
    "International Destinations",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Service <span className="text-primary">Catalog</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions engineered for speed, security,
              and global reach. Choose the service that fits your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Courier Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
              <span className="text-2xl">📦</span>
              <span className="font-semibold text-primary">
                Courier Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Flexible Shipping Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional delivery solutions tailored to your logistics
              requirements
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Delivery Areas
              </h2>
              <p className="text-lg text-gray-600">
                We serve businesses across all regions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {deliveryAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg text-center border border-blue-100 hover:shadow-md transition"
                >
                  <MapPin className="text-primary mx-auto mb-3" size={28} />
                  <p className="font-semibold text-gray-900">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Ship?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Start booking your shipments today with Shreya Global Enterprises
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition"
          >
            Book Now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SG</span>
                </div>
                <span className="font-bold text-white">Shreya Global</span>
              </div>
              <p className="text-sm">
                Global logistics solutions for businesses worldwide.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-primary transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-primary transition"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/booking" className="hover:text-primary transition">
                    Booking
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Courier Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Delivery Areas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Tracking
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:operations@global.com"
                    className="hover:text-primary transition"
                  >
                    operations@global.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919764534234"
                    className="hover:text-primary transition"
                  >
                    +91 9764534234
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-center sm:text-left">
              © 2024 Shreya Global Enterprises. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0 text-sm">
              <a href="#" className="hover:text-primary transition">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
