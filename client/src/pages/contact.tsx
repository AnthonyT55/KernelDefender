import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-family-display font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Ready to secure your business? Reach out to schedule a consultation or ask a question.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card border-white/10">
              <CardContent className="p-6 flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-1">Location</h3>
                  <p className="text-muted-foreground">Danville, Virginia</p>
                  <p className="text-xs text-muted-foreground mt-1">Serving the greater Danville area</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-white/10">
              <CardContent className="p-6 flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-1">Email</h3>
                  <a href="mailto:contact@kerneldefender.com" className="text-muted-foreground hover:text-white transition-colors">
                    contact@kerneldefender.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">Service Areas</h3>
              <p className="text-sm text-muted-foreground">
                We primarily serve small to medium-sized businesses in Danville, VA and surrounding communities.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="bg-card border-white/10">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Name</label>
                      <Input placeholder="Your Name" className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Email</label>
                      <Input type="email" placeholder="john@company.com" className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Subject</label>
                    <Input placeholder="I'm interested in..." className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Message</label>
                    <Textarea 
                      placeholder="Tell us about your business and security needs..." 
                      className="min-h-[150px] bg-background/50 border-white/10 focus-visible:ring-primary" 
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
