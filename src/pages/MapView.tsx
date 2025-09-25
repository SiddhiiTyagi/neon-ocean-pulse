import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  AlertTriangle,
  Filter,
  Layers,
  Satellite,
  Navigation,
  Search,
  Target,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Mock data for hazard markers
const hazardData = [
  {
    id: 1,
    type: "High Waves",
    lat: 19.0760,
    lng: 72.8777,
    severity: "High",
    timestamp: "2024-01-15T10:30:00Z",
    description: "Waves reaching 4-5 meters height",
  },
  {
    id: 2,
    type: "Oil Spill",
    lat: 13.0827,
    lng: 80.2707,
    severity: "Critical",
    timestamp: "2024-01-15T09:15:00Z",
    description: "Large oil spill detected near shipping lane",
  },
  {
    id: 3,
    type: "Strong Currents",
    lat: 15.2993,
    lng: 74.1240,
    severity: "Medium",
    timestamp: "2024-01-15T08:45:00Z",
    description: "Unusual current patterns observed",
  },
];

const filterOptions = [
  { label: "All Hazards", value: "all", active: true },
  { label: "High Waves", value: "waves", active: false },
  { label: "Oil Spills", value: "oil", active: false },
  { label: "Storms", value: "storms", active: false },
  { label: "Currents", value: "currents", active: false },
];

export default function MapView() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedHazard, setSelectedHazard] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState(filterOptions);

  // Placeholder for map initialization
  useEffect(() => {
    // In a real implementation, this would initialize Leaflet map
    console.log("Map would be initialized here with Leaflet");
  }, []);

  const handleFilterChange = (value: string) => {
    setFilters((prev) =>
      prev.map((filter) => ({
        ...filter,
        active: filter.value === value,
      }))
    );
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
            <h1 className="text-3xl font-bold text-glow mb-2">
              Real-Time Ocean Map
            </h1>
            <p className="text-muted-foreground">
              Interactive map showing live hazards, social media reports, and ocean data
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="glass-card-hover">
              <Satellite className="h-4 w-4 mr-2" />
              Satellite View
            </Button>
            <Button variant="outline" className="glass-card-hover">
              <Layers className="h-4 w-4 mr-2" />
              Layers
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map Controls Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Search */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Search Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search coordinates, city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button className="w-full mt-3 btn-neon">
                <Target className="h-4 w-4 mr-2" />
                Go to Location
              </Button>
            </CardContent>
          </Card>

          {/* Filters */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Hazard Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {filters.map((filter) => (
                  <Button
                    key={filter.value}
                    variant={filter.active ? "default" : "outline"}
                    size="sm"
                    className={`w-full justify-start ${
                      filter.active ? "btn-neon" : "glass-card-hover"
                    }`}
                    onClick={() => handleFilterChange(filter.value)}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {filter.label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Legend */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Map Legend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-destructive rounded-full animate-pulse-glow" />
                <span className="text-sm">Critical Hazards</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-warning rounded-full" />
                <span className="text-sm">High Risk Areas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-success rounded-full" />
                <span className="text-sm">Safe Zones</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-primary rounded-full" />
                <span className="text-sm">Social Media Reports</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-3"
        >
          <Card className="glass-card">
            <CardContent className="p-0">
              <div
                ref={mapRef}
                className="map-container h-[600px] bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex items-center justify-center relative"
              >
                {/* Placeholder map content */}
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-pulse-glow">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-glow">
                      Interactive Ocean Map
                    </h3>
                    <p className="text-muted-foreground">
                      Leaflet map integration coming soon
                    </p>
                  </div>
                </div>

                {/* Simulated hazard markers */}
                <div className="absolute inset-0">
                  {hazardData.map((hazard, index) => (
                    <motion.div
                      key={hazard.id}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className={`absolute w-6 h-6 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                        hazard.severity === "Critical"
                          ? "bg-destructive animate-pulse-glow"
                          : hazard.severity === "High"
                          ? "bg-warning"
                          : "bg-success"
                      }`}
                      style={{
                        left: `${20 + index * 25}%`,
                        top: `${30 + index * 15}%`,
                      }}
                      onClick={() => setSelectedHazard(hazard.id)}
                    />
                  ))}
                </div>

                {/* Map controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button size="icon" variant="outline" className="glass-card">
                    <Navigation className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="glass-card">
                    <Target className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Selected Hazard Details */}
          {selectedHazard && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4"
            >
              {hazardData
                .filter((h) => h.id === selectedHazard)
                .map((hazard) => (
                  <Card key={hazard.id} className="glass-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-destructive" />
                          {hazard.type}
                        </CardTitle>
                        <Badge
                          variant={
                            hazard.severity === "Critical"
                              ? "destructive"
                              : hazard.severity === "High"
                              ? "secondary"
                              : "default"
                          }
                        >
                          {hazard.severity}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-2">
                        {hazard.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span>
                          <strong>Location:</strong> {hazard.lat.toFixed(4)}, {hazard.lng.toFixed(4)}
                        </span>
                        <span>
                          <strong>Reported:</strong> {new Date(hazard.timestamp).toLocaleString()}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}