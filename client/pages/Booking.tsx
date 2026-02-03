import { Navigation } from "@/components/Navigation";
import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@shared/supabase";
import { useToast } from "@/hooks/use-toast";

export default function Booking() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    pickupAddress: user?.address || "",
    pickupCity: "",
    pickupPostal: "",
    deliveryAddress: "",
    deliveryCity: "",
    deliveryPostal: "",
    packageWeight: "",
    packageDimensions: "",
    serviceType: "standard",
    additionalNotes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        pickupAddress: "",
        pickupCity: "",
        pickupPostal: "",
        deliveryAddress: "",
        deliveryCity: "",
        deliveryPostal: "",
        packageWeight: "",
        packageDimensions: "",
        serviceType: "standard",
        additionalNotes: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <CheckCircle2 className="text-green-500 mx-auto" size={64} />
            <h1 className="text-4xl font-bold text-gray-900">
              Booking Confirmed!
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your shipment request has been successfully submitted. Our team
              will contact you shortly to confirm the details and arrange
              pickup.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto text-left">
              <h3 className="font-semibold text-green-900 mb-3">
                What happens next?
              </h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li>
                  ✓ You'll receive a confirmation email with your booking
                  details
                </li>
                <li>✓ Our logistics team will verify your shipment</li>
                <li>✓ You'll get a pickup schedule within 24 hours</li>
                <li>✓ Real-time tracking will be available immediately</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Booking <span className="text-primary">Interface</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Initiate your delivery request through our advanced booking system
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Personal Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    PHONE *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pickup Details */}
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Pickup Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  PICKUP ADDRESS *
                </label>
                <input
                  type="text"
                  name="pickupAddress"
                  value={formData.pickupAddress}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Street address for pickup"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    CITY *
                  </label>
                  <input
                    type="text"
                    name="pickupCity"
                    value={formData.pickupCity}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    POSTAL CODE *
                  </label>
                  <input
                    type="text"
                    name="pickupPostal"
                    value={formData.pickupPostal}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter postal code"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Delivery Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  DELIVERY ADDRESS *
                </label>
                <input
                  type="text"
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Street address for delivery"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    CITY *
                  </label>
                  <input
                    type="text"
                    name="deliveryCity"
                    value={formData.deliveryCity}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    POSTAL CODE *
                  </label>
                  <input
                    type="text"
                    name="deliveryPostal"
                    value={formData.deliveryPostal}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter postal code"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Package Information */}
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Package Information
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    PACKAGE WEIGHT *
                  </label>
                  <input
                    type="text"
                    name="packageWeight"
                    value={formData.packageWeight}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., 5 kg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    DIMENSIONS *
                  </label>
                  <input
                    type="text"
                    name="packageDimensions"
                    value={formData.packageDimensions}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., 30x20x15 cm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  SERVICE TYPE *
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="standard">Standard Service Type</option>
                  <option value="express">Express Delivery</option>
                  <option value="international">International Shipping</option>
                  <option value="bulk">Bulk Shipment</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ADDITIONAL NOTES
                </label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Any special instructions or requests"
                  rows={4}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-4 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg transition text-lg"
            >
              SUBMIT BOOKING REQUEST
            </button>
          </div>
        </form>
      </section>

      {/* Booking Protocol */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Booking Protocol
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Submit Request</h3>
                <p className="text-gray-600 text-sm">
                  Complete the booking form with shipment details and submit
                  your request
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Confirmation</h3>
                <p className="text-gray-600 text-sm">
                  Receive email confirmation and booking confirmation with
                  unique reference ID
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">
                  Pickup Coordination
                </h3>
                <p className="text-gray-600 text-sm">
                  Our team coordinates pickup schedule based on your convenience
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">
                  Real-Time Tracking
                </h3>
                <p className="text-gray-600 text-sm">
                  Monitor your shipment status in real-time from pickup to
                  delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channel */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Support Channel</h2>
          <p className="text-lg text-gray-600">
            Need help with your booking? Get in touch with our support team
          </p>
          <div className="bg-white rounded-lg p-8 space-y-4 inline-block">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">📧</span>
              <a
                href="mailto:operations@global.com"
                className="text-primary font-semibold hover:underline"
              >
                operations@global.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">📞</span>
              <a
                href="tel:+919560310284"
                className="text-primary font-semibold hover:underline"
              >
                +91 95603 10284
              </a>
            </div>
          </div>
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
                  <a href="/" className="hover:text-primary transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-primary transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/booking" className="hover:text-primary transition">
                    Booking
                  </a>
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
                    href="tel:+919560310284"
                    className="hover:text-primary transition"
                  >
                    +91 95603 10284
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
