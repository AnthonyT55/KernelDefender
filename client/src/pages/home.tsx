import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert, Database, Network, ArrowRight, Lock, Server, FileWarning } from "lucide-react";
import heroImage from "@assets/generated_images/abstract_cybersecurity_network_background_with_dark_blue_tones.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/90 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        </div>

        <div className="container px-4 relative z-20 text-center max-w-4xl mx-auto">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="space-y-6"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Serving Danville, VA Businesses
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-family-display font-bold leading-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              Secure Your Business <br /> Before The Breach
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Professional IT Risk Assessment, Backup Validation, and Modern Security Audits.
              Enterprise-grade defense for Danville area businesses.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8 text-base">
                  Get a Security Audit
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-transparent border-white/10 hover:bg-white/5">
                  View Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-card/50 border-y border-white/5 relative">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-family-display font-bold text-white">
                "We're too small to be a target." <br />
                <span className="text-destructive">That's a dangerous myth.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Cybercriminals aren't just looking for Fortune 500 companies. They use automated bots to scan the internet for vulnerabilities—any vulnerability.
                </p>
                <p>
                  If your network has an open door, they will walk through it. Ransomware doesn't discriminate by business size. In fact, small businesses are often preferred targets because they typically lack the defenses of larger corporations.
                </p>
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg mt-6">
                  <p className="text-destructive font-medium flex gap-2 items-start">
                    <FileWarning className="w-5 h-5 shrink-0 mt-0.5" />
                    Without proper backups and security hygiene, a single click can shut down your operations for days or weeks.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 { icon: Lock, title: "Ransomware", desc: "Data held hostage" },
                 { icon: Server, title: "Downtime", desc: "Lost revenue hours" },
                 { icon: FileWarning, title: "Data Loss", desc: "Permanent deletion" },
                 { icon: ShieldAlert, title: "Liability", desc: "Legal exposure" }
               ].map((item, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="bg-background border border-white/5 p-6 rounded-xl hover:border-primary/30 transition-colors group"
                 >
                   <item.icon className="w-8 h-8 text-muted-foreground mb-4 group-hover:text-primary transition-colors" />
                   <h3 className="font-bold text-white mb-1">{item.title}</h3>
                   <p className="text-sm text-muted-foreground">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 relative">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-family-display font-bold mb-4">Our Core Defenses</h2>
            <p className="text-muted-foreground text-lg">
              We focus on the three pillars of fundamental IT security to keep your business operational and safe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 group">
              <CardHeader>
                <ShieldAlert className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl font-family-display">IT Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A comprehensive health audit of your technology stack. We identify vulnerabilities before hackers do.
                </p>
                <Link href="/services">
                  <a className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 group">
              <CardHeader>
                <Database className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl font-family-display">Backup Validation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Having backups isn't enough. We verify they actually work and can be restored when disaster strikes.
                </p>
                <Link href="/services">
                  <a className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 group">
              <CardHeader>
                <Network className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl font-family-display">Network Cleanup</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Organization is security. We map your network, remove clutter, and create clear documentation.
                </p>
                <Link href="/services">
                  <a className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5 border-t border-white/5">
        <div className="container px-4 mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to secure your business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't wait for a breach to think about security. Let's start with a conversation about your current setup.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-8 text-lg font-medium shadow-xl shadow-primary/20">
              Schedule Your Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
