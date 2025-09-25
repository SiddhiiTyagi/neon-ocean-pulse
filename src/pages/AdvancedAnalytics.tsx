import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Calendar,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  Download,
  RefreshCw,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const chartData = {
  hazardTrends: [
    { month: "Jan", highWaves: 12, oilSpills: 3, debris: 8, storms: 15 },
    { month: "Feb", highWaves: 8, oilSpills: 2, debris: 12, storms: 10 },
    { month: "Mar", highWaves: 15, oilSpills: 5, debris: 6, storms: 20 },
    { month: "Apr", highWaves: 20, oilSpills: 1, debris: 10, storms: 8 },
    { month: "May", highWaves: 25, oilSpills: 4, debris: 15, storms: 12 },
  ],
  regionalData: [
    { region: "Mumbai", incidents: 45, resolved: 42 },
    { region: "Chennai", incidents: 32, resolved: 28 },
    { region: "Kolkata", incidents: 28, resolved: 26 },
    { region: "Kochi", incidents: 22, resolved: 21 },
    { region: "Visakhapatnam", incidents: 18, resolved: 17 },
  ],
};

export default function AdvancedAnalytics() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    // Simulate data refresh
    await new Promise(resolve => setTimeout(resolve, 2000));
    setRefreshing(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-glow">Advanced Analytics</h1>
            <p className="text-muted-foreground">
              Deep insights and predictive analytics for ocean hazard patterns
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleRefresh}
              disabled={refreshing}
              className="glass-card-hover"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
              {refreshing ? "Refreshing..." : "Refresh Data"}
            </Button>
            <Button variant="outline" className="glass-card-hover">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger>
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 3 months</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                  <SelectItem value="kolkata">Kolkata</SelectItem>
                  <SelectItem value="kochi">Kochi</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="glass-card-hover">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filters
              </Button>

              <Button className="btn-neon">
                <Activity className="h-4 w-4 mr-2" />
                Real-time View
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="trends" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
          <TabsTrigger value="predictive">Predictive Models</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
        </TabsList>

        {/* Trend Analysis */}
        <TabsContent value="trends" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Hazard Trends Over Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 mx-auto mb-4 text-primary/50" />
                      <p className="text-muted-foreground">Interactive chart showing hazard trends</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Data visualization coming soon
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-accent" />
                    Regional Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {chartData.regionalData.map((region, index) => (
                      <div key={region.region} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{region.region}</span>
                          <span>{region.incidents} incidents</span>
                        </div>
                        <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(region.resolved / region.incidents) * 100}%` }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="h-full bg-gradient-to-r from-primary to-secondary"
                          />
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {region.resolved} resolved ({Math.round((region.resolved / region.incidents) * 100)}%)
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: "Total Incidents", value: "245", change: "+12%", positive: false },
              { label: "Response Time", value: "8.2m", change: "-15%", positive: true },
              { label: "Resolution Rate", value: "94%", change: "+3%", positive: true },
              { label: "Accuracy Score", value: "96.5%", change: "+1%", positive: true },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                <Card className="glass-card-hover">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                      <div className="text-2xl font-bold mb-1">{metric.value}</div>
                      <div className={`text-sm flex items-center justify-center gap-1 ${
                        metric.positive ? "text-success" : "text-destructive"
                      }`}>
                        <TrendingUp className="h-3 w-3" />
                        {metric.change}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Predictive Models */}
        <TabsContent value="predictive" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>AI-Powered Predictions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-primary">Next 7 Days Forecast</h3>
                  <div className="space-y-3">
                    {[
                      { date: "Tomorrow", risk: "Low", confidence: 92 },
                      { date: "Day 2", risk: "Medium", confidence: 88 },
                      { date: "Day 3", risk: "High", confidence: 85 },
                      { date: "Day 4", risk: "Medium", confidence: 90 },
                    ].map((forecast) => (
                      <div key={forecast.date} className="flex items-center justify-between p-3 bg-background/30 rounded-lg">
                        <span>{forecast.date}</span>
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            forecast.risk === "High" ? "status-danger" :
                            forecast.risk === "Medium" ? "status-warning" : "status-success"
                          }`}>
                            {forecast.risk} Risk
                          </span>
                          <span className="text-sm text-muted-foreground">{forecast.confidence}% confidence</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-64 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Predictive model visualization</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Performance */}
        <TabsContent value="performance" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>System Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Data Processing", value: "99.8%", status: "Optimal" },
                  { title: "API Response Time", value: "45ms", status: "Excellent" },
                  { title: "ML Model Accuracy", value: "96.5%", status: "High" },
                ].map((metric) => (
                  <div key={metric.title} className="text-center p-4 bg-background/30 rounded-lg">
                    <h3 className="font-semibold mb-2">{metric.title}</h3>
                    <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                    <span className="text-sm text-success">{metric.status}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI Insights */}
        <TabsContent value="ai-insights" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>AI-Generated Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Seasonal Pattern Detected",
                    description: "High wave incidents increase by 40% during monsoon season (June-September)",
                    confidence: "High",
                    action: "Increase monitoring during these periods",
                  },
                  {
                    title: "Regional Correlation",
                    description: "Oil spill incidents in Chennai correlate with increased shipping traffic",
                    confidence: "Medium",
                    action: "Enhanced surveillance recommended",
                  },
                  {
                    title: "Response Time Optimization",
                    description: "Current response times can be improved by 25% with better resource allocation",
                    confidence: "High",
                    action: "Review resource deployment strategy",
                  },
                ].map((insight, index) => (
                  <motion.div
                    key={insight.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-background/30 rounded-lg border border-primary/20"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{insight.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        insight.confidence === "High" ? "status-success" : "status-warning"
                      }`}>
                        {insight.confidence} Confidence
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{insight.description}</p>
                    <div className="text-sm text-primary font-medium">
                      Recommended Action: {insight.action}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}