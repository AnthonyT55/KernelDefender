import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Server, FileWarning, ShieldAlert, Database, Network } from "lucide-react";
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

        <div className="container px-4 relative z-20 max-w-5xl mx-auto">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="p-12 md:p-20 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] relative overflow-hidden group text-center"
          >
            {/* Blue Halo Light Effect */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-colors" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-colors" />

            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 relative z-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Serving Danville, VA Businesses
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-family-display font-bold leading-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-8 relative z-10">
              Secure Your Business <br /> Before The Breach
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 relative z-10">
              Professional IT Risk Assessment, Backup Validation, and Modern Security Audits.
              Enterprise-grade defense for Danville area businesses.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-4 relative z-10">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-10 text-lg font-medium shadow-xl shadow-primary/20">
                  Get your free consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-medium bg-transparent border-white/10 hover:bg-white/5">
                  View Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 mx-auto max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 rounded-3xl bg-white/[0.01] border border-white/10 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(239,68,68,0.1)] relative overflow-hidden"
          >
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-destructive/10 rounded-full blur-[120px]" />
            
            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-family-display font-bold text-white">
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
                  <div className="p-6 bg-destructive/10 border border-destructive/20 rounded-2xl mt-8">
                    <p className="text-destructive font-medium flex gap-3 items-start">
                      <FileWarning className="w-6 h-6 shrink-0 mt-0.5" />
                      Without proper backups and security hygiene, a single click can shut down your operations for days or weeks.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                     className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-all group backdrop-blur-md"
                   >
                     <item.icon className="w-10 h-10 text-muted-foreground mb-4 group-hover:text-primary transition-colors" />
                     <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                     <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                   </motion.div>
                 ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 relative">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-family-display font-bold mb-6">Our Core Defenses</h2>
            <p className="text-muted-foreground text-lg">
              We focus on the three pillars of fundamental IT security to keep your business operational and safe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldAlert, title: "IT Risk Assessment", desc: "A comprehensive health audit of your technology stack. We identify vulnerabilities before hackers do." },
              { icon: Database, title: "Backup Validation", desc: "Having backups isn't enough. We verify they actually work and can be restored when disaster strikes." },
              { icon: Network, title: "Network Cleanup", desc: "Organization is security. We map your network, remove clutter, and create clear documentation." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-primary/50 transition-all duration-300 shadow-[0_0_40px_-15px_rgba(59,130,246,0.1)] group text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-family-display font-bold text-white mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link href="/services">
                  <a className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-transform">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 mx-auto max-w-4xl relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] relative overflow-hidden"
          >
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
            
            <h2 className="text-3xl md:text-5xl font-family-display font-bold mb-8 relative z-10">Ready to secure your business?</h2>
            <p className="text-xl text-muted-foreground mb-10 relative z-10 max-w-2xl mx-auto">
              Don't wait for a breach to think about security. Let's start with a conversation about your current setup.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-lg font-medium shadow-xl shadow-primary/20 relative z-10">
                Get your free consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
