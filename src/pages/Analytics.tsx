import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Activity,
  AlertTriangle,
  Users,
  MapPin,
  Clock,
  Globe,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Analytics() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-accent to-purple-600 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-glow">Ocean Analytics Dashboard</h1>
            <p className="text-muted-foreground">
              AI-powered insights and trend analysis for ocean hazard data
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Reports", value: "2,456", icon: Activity, color: "text-primary" },
          { title: "Active Hazards", value: "87", icon: AlertTriangle, color: "text-destructive" },
          { title: "Response Time", value: "8.2m", icon: Clock, color: "text-success" },
          { title: "Coverage Area", value: "12.5k km²", icon: Globe, color: "text-secondary" },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <span className="text-2xl font-bold">{stat.value}</span>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Hazard Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Chart visualization coming soon</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Regional Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Regional data visualization</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}