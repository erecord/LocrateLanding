import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { scrollToId } from "@/lib/utils";

const Header = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/terms", label: "Terms" },
    { href: "/privacy", label: "Privacy" },
    { href: "/account", label: "Account" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location === "/") {
      e.preventDefault();
      scrollToId(id);
      closeMenu();
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex items-center text-primary font-bold text-2xl">
                <img src="/svgs/Locrate_Logo_Blue.svg" alt="Locrate" className="h-12" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isHash = link.href.includes("#");
              const id = isHash ? link.href.split("#")[1] : "";

              if (isHash && location === "/") {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:text-primary text-sm font-medium transition duration-150"
                    onClick={(e) => scrollToSection(e, id)}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-primary text-sm font-medium transition duration-150"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Download Button */}
          <div className="hidden md:flex">
            <a
              href="/#download"
              className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-150"
              onClick={(e) => {
                if (location === "/") {
                  e.preventDefault();
                  scrollToId("download");
                }
              }}
            >
              Download App
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-4">
                  {navLinks.map((link) => {
                    const isHash = link.href.includes("#");
                    const id = isHash ? link.href.split("#")[1] : "";

                    if (isHash && location === "/") {
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          className="text-gray-600 hover:text-primary text-sm font-medium transition duration-150"
                          onClick={(e) => {
                            scrollToSection(e, id);
                            setIsOpen(false);
                          }}
                        >
                          {link.label}
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-gray-600 hover:text-primary text-sm font-medium transition duration-150"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                  <a
                    href="/#download"
                    className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-150 inline-block text-center mt-4"
                    onClick={() => {
                      if (location === "/") {
                        scrollToId("download");
                      }
                      setIsOpen(false);
                    }}
                  >
                    Download App
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
