import { motion } from "framer-motion";
import {
  AlertTriangle,
  Shield,
  TrendingUp,
  Users,
  Waves,
  MapPin,
  Clock,
  Activity,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  {
    title: "Active Alerts",
    value: "24",
    change: "+3",
    icon: AlertTriangle,
    color: "text-destructive",
    bgColor: "status-danger",
  },
  {
    title: "Total Reports",
    value: "1,247",
    change: "+89",
    icon: Waves,
    color: "text-primary",
    bgColor: "bg-primary/20",
  },
  {
    title: "Community Members",
    value: "5,632",
    change: "+156",
    icon: Users,
    color: "text-secondary",
    bgColor: "bg-secondary/20",
  },
  {
    title: "Response Rate",
    value: "94%",
    change: "+2%",
    icon: TrendingUp,
    color: "text-success",
    bgColor: "status-success",
  },
];

const recentAlerts = [
  {
    id: 1,
    type: "High Waves",
    location: "Mumbai Coast",
    time: "2 minutes ago",
    severity: "High",
    status: "Active",
  },
  {
    id: 2,
    type: "Oil Spill",
    location: "Chennai Harbor",
    time: "15 minutes ago",
    severity: "Critical",
    status: "Investigating",
  },
  {
    id: 3,
    type: "Rough Seas",
    location: "Goa Beaches",
    time: "1 hour ago",
    severity: "Medium",
    status: "Monitoring",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-glow mb-2">
              Ocean Hazard Command Center
            </h1>
            <p className="text-muted-foreground">
              Real-time monitoring and reporting dashboard for ocean safety
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild className="btn-neon">
              <Link to="/report">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Report Hazard
              </Link>
            </Button>
            <Button variant="outline" asChild className="glass-card-hover">
              <Link to="/map">
                <MapPin className="h-4 w-4 mr-2" />
                View Map
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
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
                      <p className="text-sm text-muted-foreground mb-1">
                        {stat.title}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">{stat.value}</span>
                        <span className="text-sm text-success font-medium">
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`p-3 rounded-lg ${stat.bgColor} ${stat.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Alerts */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Recent Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          alert.severity === "Critical"
                            ? "bg-destructive animate-pulse-glow"
                            : alert.severity === "High"
                            ? "bg-warning"
                            : "bg-success"
                        }`}
                      />
                      <div>
                        <h3 className="font-semibold">{alert.type}</h3>
                        <p className="text-sm text-muted-foreground">
                          {alert.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {alert.time}
                      </div>
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${
                          alert.status === "Active"
                            ? "status-danger"
                            : alert.status === "Investigating"
                            ? "status-warning"
                            : "status-success"
                        }`}
                      >
                        {alert.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link to="/alerts">View All Alerts</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild className="w-full btn-neon">
                <Link to="/report">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Emergency Report
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full glass-card-hover">
                <Link to="/map">
                  <MapPin className="h-4 w-4 mr-2" />
                  Live Ocean Map
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full glass-card-hover">
                <Link to="/social">
                  <Users className="h-4 w-4 mr-2" />
                  Community Feed
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full glass-card-hover">
                <Link to="/analytics">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Analytics
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}