import { motion } from "framer-motion";
import { Shield, AlertTriangle, Waves, Wind, Thermometer, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const safetyTips = [
  {
    category: "General Ocean Safety",
    icon: Shield,
    tips: [
      "Always inform someone about your ocean activities and expected return time",
      "Check weather conditions and forecasts before heading out",
      "Carry proper safety equipment including life jackets and communication devices",
      "Stay within designated safe zones and respect warning flags",
    ],
  },
  {
    category: "High Wave Conditions",
    icon: Waves,
    tips: [
      "Avoid rocky coastlines and jetties during high wave conditions",
      "Never turn your back on the ocean - waves can be unpredictable",
      "If caught in high waves, try to stay calm and swim parallel to shore",
      "Seek higher ground immediately if large waves are approaching",
    ],
  },
];

export default function SafetyGuide() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-success to-green-600 rounded-lg flex items-center justify-center">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-glow">Ocean Safety Guide</h1>
            <p className="text-muted-foreground">
              Essential safety information and emergency procedures for ocean activities
            </p>
          </div>
        </div>
      </motion.div>

      <Tabs defaultValue="safety" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="safety">Safety Tips</TabsTrigger>
          <TabsTrigger value="weather">Weather Guide</TabsTrigger>
          <TabsTrigger value="emergency">Emergency</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
        </TabsList>

        <TabsContent value="safety" className="space-y-6">
          {safetyTips.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </TabsContent>

        <TabsContent value="weather" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wind className="h-5 w-5 text-secondary" />
                Weather Conditions Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { condition: "Calm", color: "status-success", description: "Safe for all activities" },
                  { condition: "Moderate", color: "status-warning", description: "Exercise caution" },
                  { condition: "Rough", color: "status-danger", description: "Avoid ocean activities" },
                ].map((weather) => (
                  <div key={weather.condition} className={`p-4 rounded-lg ${weather.color}`}>
                    <h3 className="font-semibold">{weather.condition}</h3>
                    <p className="text-sm">{weather.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emergency" className="space-y-6">
          <Card className="glass-card border-destructive/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="h-5 w-5" />
                Emergency Procedures
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <h3 className="font-semibold text-destructive mb-2">Immediate Actions</h3>
                <ol className="space-y-2 text-sm">
                  <li>1. Call emergency services: Coast Guard (1554) or Police (100)</li>
                  <li>2. Ensure your own safety before helping others</li>
                  <li>3. Provide clear location information</li>
                  <li>4. Follow instructions from emergency responders</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="equipment" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Essential Safety Equipment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Must-Have Items</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      Life jacket or personal flotation device
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      Emergency whistle
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      Waterproof communication device
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Recommended Items</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      Emergency flares
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      First aid kit
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      GPS device or smartphone
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}