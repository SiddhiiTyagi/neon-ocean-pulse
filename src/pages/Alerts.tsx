import { motion } from "framer-motion";
import { Bell, AlertTriangle, Clock, MapPin, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const alerts = [
  {
    id: 1,
    type: "High Waves",
    location: "Mumbai Coast",
    time: "2 minutes ago",
    severity: "High",
    status: "Active",
    description: "Wave heights reaching 4-5 meters with strong winds",
  },
  {
    id: 2,
    type: "Oil Spill",
    location: "Chennai Harbor",
    time: "15 minutes ago",
    severity: "Critical",
    status: "Emergency",
    description: "Large oil spill detected near major shipping lane",
  },
];

export default function Alerts() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-destructive to-red-600 rounded-lg flex items-center justify-center">
              <Bell className="h-6 w-6 text-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-glow">Alert Center</h1>
              <p className="text-muted-foreground">
                Real-time alerts and emergency notifications
              </p>
            </div>
          </div>
          <Button variant="outline" className="glass-card-hover">
            <Filter className="h-4 w-4 mr-2" />
            Filter Alerts
          </Button>
        </div>
      </motion.div>

      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`glass-card border-l-4 ${
              alert.severity === "Critical" 
                ? "border-l-destructive" 
                : "border-l-warning"
            }`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className={`h-6 w-6 mt-1 ${
                      alert.severity === "Critical" 
                        ? "text-destructive animate-pulse" 
                        : "text-warning"
                    }`} />
                    <div>
                      <h3 className="text-lg font-semibold">{alert.type}</h3>
                      <p className="text-muted-foreground mb-2">{alert.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {alert.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {alert.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <Badge variant={alert.severity === "Critical" ? "destructive" : "secondary"}>
                      {alert.severity}
                    </Badge>
                    <Badge variant="outline">{alert.status}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}