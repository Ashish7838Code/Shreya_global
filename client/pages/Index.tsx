import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Truck, Clock } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Shreya Global <span className="text-primary">Enterprises</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Fast, reliable, and secure courier services for businesses
              worldwide. Experience seamless logistics with real-time tracking
              and dedicated support.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Start Booking
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-blue-50 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">
                98%
              </div>
              <p className="text-gray-600 mt-2">On-Time Delivery</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">
                50+
              </div>
              <p className="text-gray-600 mt-2">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">
                24/7
              </div>
              <p className="text-gray-600 mt-2">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Core Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for reliable logistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Package className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Courier Services
              </h3>
              <p className="text-gray-600">
                Professional package delivery with full tracking and insurance
                coverage for peace of mind.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-100">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Truck className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fleet Management
              </h3>
              <p className="text-gray-600">
                Modern vehicles maintained to the highest standards for reliable
                transportation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Real-Time Tracking
              </h3>
              <p className="text-gray-600">
                Monitor your shipments in real-time with detailed updates at
                every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Deploy Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Deploy?</h2>
            <p className="text-lg text-blue-100">
              Get started with Shreya Global Enterprises today and experience
              the difference in logistics excellence.
            </p>
          </div>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition"
          >
            Start Your First Booking
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
