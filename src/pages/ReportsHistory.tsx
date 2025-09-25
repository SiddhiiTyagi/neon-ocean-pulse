import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Calendar,
  MapPin,
  AlertTriangle,
  Clock,
  User,
  Download,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";

const mockReports = [
  {
    id: "RPT-001",
    type: "High Waves",
    location: "Mumbai Coast",
    coordinates: "19.0760, 72.8777",
    severity: "High",
    status: "Active",
    reporter: "Captain Sharma",
    timestamp: "2024-01-15T10:30:00Z",
    description: "Waves reaching 4-5 meters with strong westerly winds",
    verified: true,
  },
  {
    id: "RPT-002",
    type: "Oil Spill",
    location: "Chennai Harbor",
    coordinates: "13.0827, 80.2707",
    severity: "Critical",
    status: "Under Investigation",
    reporter: "Marine Patrol Unit",
    timestamp: "2024-01-15T09:15:00Z",
    description: "Large oil spill detected near major shipping lane",
    verified: true,
  },
  {
    id: "RPT-003",
    type: "Debris Field",
    location: "Kochi Port",
    coordinates: "9.9312, 76.2673",
    severity: "Medium",
    status: "Resolved",
    reporter: "Local Fisherman",
    timestamp: "2024-01-14T16:45:00Z",
    description: "Floating debris from recent storm activity",
    verified: false,
  },
];

export default function ReportsHistory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeverity, setSelectedSeverity] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedDate, setSelectedDate] = useState<Date>();

  const filteredReports = mockReports.filter((report) => {
    const matchesSearch = report.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         report.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         report.reporter.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSeverity = selectedSeverity === "all" || report.severity.toLowerCase() === selectedSeverity;
    const matchesStatus = selectedStatus === "all" || report.status.toLowerCase().replace(/\s+/g, '-') === selectedStatus;
    
    return matchesSearch && matchesSeverity && matchesStatus;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical": return "status-danger";
      case "high": return "status-warning";
      case "medium": return "bg-primary/20 text-primary";
      case "low": return "status-success";
      default: return "bg-muted";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active": return "status-danger";
      case "under investigation": return "status-warning";
      case "resolved": return "status-success";
      default: return "bg-muted";
    }
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
            <h1 className="text-3xl font-bold text-glow">Reports History</h1>
            <p className="text-muted-foreground">
              Browse and analyze historical hazard reports and incidents
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="glass-card-hover">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button className="btn-neon">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
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
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search reports..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
                <SelectTrigger>
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="under-investigation">Under Investigation</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>

              <DatePicker
                selected={selectedDate}
                onSelect={setSelectedDate}
                placeholder="Select date"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Reports", value: filteredReports.length, icon: AlertTriangle },
          { label: "Critical Issues", value: filteredReports.filter(r => r.severity === "Critical").length, icon: AlertTriangle },
          { label: "Verified Reports", value: filteredReports.filter(r => r.verified).length, icon: User },
          { label: "Resolved", value: filteredReports.filter(r => r.status === "Resolved").length, icon: Clock },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.05 }}
            >
              <Card className="glass-card-hover">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        {filteredReports.map((report, index) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.05 }}
          >
            <Card className="glass-card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{report.type}</h3>
                      <Badge className={getSeverityColor(report.severity)}>
                        {report.severity}
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                      {report.verified && (
                        <Badge variant="outline" className="border-success text-success">
                          Verified
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-3">{report.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{report.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-secondary" />
                        <span>{report.reporter}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-accent" />
                        <span>{new Date(report.timestamp).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm" className="glass-card-hover">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="glass-card-hover">
                      View on Map
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredReports.length === 0 && (
        <Card className="glass-card">
          <CardContent className="p-12 text-center">
            <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">No Reports Found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or filters to find more reports.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}