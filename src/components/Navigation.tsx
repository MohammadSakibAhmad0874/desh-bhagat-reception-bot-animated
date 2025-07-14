import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Student Services", path: "/student-services" },
  { name: "Faculty", path: "/faculty-directory" },
  { name: "Departments", path: "/departments" },
  { name: "Library", path: "/library-services" },
  { name: "Hostel", path: "/hostel-information" },
  { name: "Facilities", path: "/campus-facilities" },
  { name: "Events", path: "/events-news" },
  { name: "Map", path: "/campus-map" },
  { name: "Emergency", path: "/emergency-contacts" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <GraduationCap className="w-8 h-8" />
            <span className="hidden sm:block">Desh Bhagat University</span>
            <span className="sm:hidden">DBU</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-slide-up">
            <div className="grid grid-cols-2 gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};