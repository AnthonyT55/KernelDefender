import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Network, Server, Shield, Users } from "lucide-react";
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
  const services = [
    {
      icon: Network,
      title: "Network Audit + Diagram Deliverable",
      price: "$300 - $500",
      desc: "A comprehensive review of your current network infrastructure, identifying bottlenecks and security gaps, delivered with a professional network diagram."
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      price: "$800 - $2500 depending on the job",
      desc: "Seamless transition of your on-premise systems to secure cloud environments, ensuring zero data loss and minimal downtime."
    },
    {
      icon: Server,
      title: "Server Setup + Management Retainer",
      price: "$500 - $1,000 / month",
      desc: "End-to-end server configuration, patching, monitoring, and ongoing maintenance to keep your core infrastructure running flawlessly."
    },
    {
      icon: Users,
      title: "AD + Group Policy + RBAC Setup/Fix",
      price: "$400 - $800",
      desc: "Secure user identity management, role-based access control, and group policy enforcement to protect your sensitive company data."
    },
    {
      icon: Shield,
      title: "Firewall + Infrastructure Setup",
      price: "$600 - $1,500",
      desc: "Deployment of enterprise-grade firewalls and network defenses to keep bad actors out of your business."
    }
  ];

  return (
    <div className="overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-multiply"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        </div>

        <div className="container px-4 relative z-20 max-w-5xl mx-auto">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="p-10 md:p-20 rounded-3xl bg-card border border-border backdrop-blur-xl shadow-xl relative overflow-hidden group text-center"
          >
            {/* Blue Halo Light Effect */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-[120px] group-hover:bg-primary/20 transition-colors" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-[120px] group-hover:bg-primary/20 transition-colors" />

            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-10 relative z-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Professional IT & Infrastructure
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-family-display font-bold leading-tight text-foreground mb-8 relative z-10">
              We Build, Secure, and Manage Your Business IT. <br/>
              <span className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground font-normal mt-4 block">
                So You Can Focus On Running Your Business.
              </span>
            </motion.h1>
            
            <motion.div variants={fadeIn} className="flex flex-col items-center gap-4 justify-center pt-8 relative z-10">
              <Link href="/contact">
                <Button size="lg" className="h-16 px-12 text-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300">
                  Book Your Free 30-Minute Strategy Call
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground max-w-sm mt-2">
                This strategy call acts as your initial consultation and provides you with a custom quote.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30 relative" id="services">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-family-display font-bold mb-6 text-foreground">Our Services</h2>
            <p className="text-muted-foreground text-lg">
              Clear pricing. Professional execution. We provide enterprise-grade infrastructure and networking solutions tailored to your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-xl group flex flex-col"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-family-display font-bold text-foreground mb-3">{service.title}</h3>
                <div className="text-primary font-mono font-medium mb-6 bg-primary/5 border border-primary/10 inline-block px-3 py-1 rounded-md w-fit">
                  {service.price}
                </div>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {service.desc}
                </p>
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
            className="p-16 rounded-3xl bg-card border border-border shadow-xl relative overflow-hidden"
          >
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
            
            <h2 className="text-3xl md:text-5xl font-family-display font-bold mb-6 text-foreground relative z-10">Ready to secure your business?</h2>
            <p className="text-xl text-muted-foreground mb-10 relative z-10 max-w-2xl mx-auto">
              Get an expert assessment of your IT needs and let us build the reliable infrastructure your business deserves.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-lg font-medium shadow-lg shadow-primary/20 relative z-10">
                Book Your Strategy Call
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}