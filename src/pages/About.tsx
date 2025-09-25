import { motion } from "framer-motion";
import { Waves, Target, Users, Award, Shield, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Waves,
    title: "Real-time Monitoring",
    description: "Continuous monitoring of ocean conditions using multiple data sources including citizen reports, social media, and scientific instruments.",
  },
  {
    icon: Target,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms analyze patterns, predict hazards, and provide intelligent alerts to relevant authorities.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "Crowdsourced reporting system that leverages the collective knowledge of fishermen, coast guards, and ocean enthusiasts.",
  },
  {
    icon: Shield,
    title: "Emergency Response",
    description: "Integrated emergency response system that automatically notifies relevant authorities and provides real-time coordination tools.",
  },
];

const stats = [
  { label: "Reports Processed", value: "50,000+" },
  { label: "Lives Protected", value: "10,000+" },
  { label: "Response Time", value: "< 10 min" },
  { label: "Coverage Area", value: "15,000 km²" },
];

export default function About() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Waves className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-glow">About OceanGuard</h1>
            <p className="text-muted-foreground">
              Protecting lives through intelligent ocean hazard monitoring
            </p>
          </div>
        </div>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass-card">
          <CardContent className="p-8">
            <div className="text-center max-w-4xl mx-auto">
              <Globe className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h2 className="text-2xl font-bold mb-4 text-glow">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                OceanGuard is an integrated platform that revolutionizes ocean safety through 
                the fusion of citizen reports, social media intelligence, and open ocean data. 
                Our AI-powered system delivers real-time hazard detection, verification, and 
                alerts through advanced analytics and an intuitive geospatial dashboard, 
                protecting communities and marine ecosystems across India's vast coastline.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Card className="glass-card-hover h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Impact Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Technology Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl">Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Frontend</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>React.js</li>
                  <li>Tailwind CSS</li>
                  <li>Leaflet Maps</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-secondary mb-2">Backend</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Python (Django)</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Solidity</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-accent mb-2">AI/ML</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>TensorFlow</li>
                  <li>Natural Language Processing</li>
                  <li>Classification Models</li>
                  <li>Sentiment Analysis</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-success mb-2">Data Sources</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Twitter API</li>
                  <li>INCOIS Ocean Data</li>
                  <li>Social Media APIs</li>
                  <li>Citizen Reports</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}