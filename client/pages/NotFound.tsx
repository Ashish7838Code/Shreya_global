import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="text-6xl font-bold text-primary">404</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Page Not Found
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sorry, the page you're looking for doesn't exist or hasn't been built yet.
              Head back home or explore our services.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              <Home className="mr-2" size={20} />
              Back to Home
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-blue-50 transition"
            >
              View Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
