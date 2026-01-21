import { Link, useLocation } from "wouter";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20">
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <Shield className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
              <span className="font-display font-bold text-xl tracking-tight">
                Kernel<span className="text-primary">Defender</span>
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm" className="font-medium">
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-l border-white/10">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        location === link.href ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
                <Link href="/contact">
                  <a onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Contact Us</Button>
                  </a>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {children}
      </main>

      <footer className="border-t border-white/10 bg-card py-12 mt-20">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-display font-bold text-lg">KernelDefender</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Professional IT security services for businesses in Danville, VA. 
              We protect your digital assets so you can focus on growth.
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>IT Risk Assessment</li>
              <li>Backup Validation</li>
              <li>Network Cleanup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Danville, VA</li>
              <li>
                <Link href="/contact"><a className="hover:text-primary transition-colors">Get in touch</a></Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} KernelDefender. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
