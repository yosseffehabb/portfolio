import { Button } from "../components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
      <nav className="fixed z-50 w-full border-b border-wine bg-charcoal backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-wine">yosseffehabb</span>
            </div>
            <div className="ml-10 hidden flex-1 items-center justify-between md:flex">
              <div className="flex items-baseline space-x-4">
                <a
                  href="#about"
                  className="px-3 py-2 text-silver hover:text-forestgreen"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="px-3 py-2 text-silver hover:text-forestgreen"
                >
                  Projects
                </a>
                <a
                  href="#tech"
                  className="px-3 py-2 text-silver hover:text-forestgreen"
                >
                  Tech
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Button className="bg-wine text-silver transition-all duration-300 hover:bg-forestgreen">
                  contact now{" "}
                </Button>
              </div>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="rounded-md p-2 text-silver hover:bg-gray-100 hover:text-wine md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed bottom-0 left-0 right-0 top-16 z-40 bg-slategray md:hidden"
          >
            <div className="flex flex-col space-y-4 p-4">
              <a
                href="#features"
                className="px-3 py-2 text-silver hover:text-primary"
                onClick={toggleMobileMenu}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="px-3 py-2 text-silver hover:text-primary"
                onClick={toggleMobileMenu}
              >
                How it Works
              </a>
              <a
                href="#about"
                className="px-3 py-2 text-silver hover:text-primary"
                onClick={toggleMobileMenu}
              >
                About
              </a>

              <div className="space-y-2 pt-4">
                <Button
                  className="foucs:outline-none mb-3 w-full bg-wine text-silver transition-all duration-300 hover:bg-forestgreen focus:ring-2 focus:ring-silver focus:ring-offset-2 sm:w-auto"
                  onClick={toggleMobileMenu}
                >
                  contact now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
