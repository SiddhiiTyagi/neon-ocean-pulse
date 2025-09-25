import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: Phone,
    title: "Emergency Hotline",
    value: "1554 (Coast Guard)",
    description: "24/7 Emergency Response",
  },
  {
    icon: Mail,
    title: "General Inquiries",
    value: "info@oceanguard.gov.in",
    description: "Response within 24 hours",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "New Delhi, India",
    description: "Ministry of Earth Sciences",
  },
];

export default function Contact() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-accent to-purple-600 rounded-lg flex items-center justify-center">
            <MessageSquare className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-glow">Contact Us</h1>
            <p className="text-muted-foreground">
              Get in touch with our team for support, partnerships, or emergency assistance
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={info.title} className="glass-card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-primary font-medium">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Quick Links */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start glass-card-hover">
                <Globe className="h-4 w-4 mr-2" />
                Official Website
              </Button>
              <Button variant="outline" className="w-full justify-start glass-card-hover">
                <Phone className="h-4 w-4 mr-2" />
                Emergency Services
              </Button>
              <Button variant="outline" className="w-full justify-start glass-card-hover">
                <Mail className="h-4 w-4 mr-2" />
                Support Portal
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" placeholder="What is your message about?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={6}
                  />
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h3 className="font-semibold text-primary mb-2">For Emergency Situations:</h3>
                    <p className="text-sm text-muted-foreground">
                      If this is an emergency, please call the Coast Guard hotline at <strong>1554</strong> immediately. 
                      This form is not monitored 24/7 and should not be used for urgent matters.
                    </p>
                  </div>

                  <Button type="submit" className="w-full btn-neon">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}