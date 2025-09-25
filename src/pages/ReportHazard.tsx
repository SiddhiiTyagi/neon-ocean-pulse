import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  MapPin,
  Camera,
  Upload,
  Send,
  Clock,
  Users,
  Phone,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const hazardTypes = [
  "High Waves",
  "Oil Spill",
  "Debris",
  "Strong Currents",
  "Rough Weather",
  "Marine Accident",
  "Coastal Erosion",
  "Pollution",
  "Other",
];

const severityLevels = [
  { value: "low", label: "Low - Minor concern", color: "text-success" },
  { value: "medium", label: "Medium - Requires attention", color: "text-warning" },
  { value: "high", label: "High - Urgent response needed", color: "text-destructive" },
  { value: "critical", label: "Critical - Emergency situation", color: "text-destructive animate-pulse" },
];

export default function ReportHazard() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    hazardType: "",
    severity: "",
    location: "",
    coordinates: "",
    description: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Report Submitted Successfully",
      description: "Your hazard report has been received and is being processed. Emergency services will be notified if required.",
    });

    setIsSubmitting(false);
    setFormData({
      hazardType: "",
      severity: "",
      location: "",
      coordinates: "",
      description: "",
      contactName: "",
      contactPhone: "",
      contactEmail: "",
    });
  };

  const handleLocationDetect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = `${position.coords.latitude.toFixed(6)}, ${position.coords.longitude.toFixed(6)}`;
          setFormData(prev => ({ ...prev, coordinates: coords }));
          toast({
            title: "Location Detected",
            description: "Your current coordinates have been captured.",
          });
        },
        () => {
          toast({
            title: "Location Error",
            description: "Unable to detect your location. Please enter coordinates manually.",
            variant: "destructive",
          });
        }
      );
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
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-destructive to-red-600 rounded-lg flex items-center justify-center">
            <AlertTriangle className="h-6 w-6 text-white animate-pulse" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-glow">Report Ocean Hazard</h1>
            <p className="text-muted-foreground">
              Help keep our oceans safe by reporting hazards in real-time
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Hazard Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hazard Type */}
                <div className="space-y-2">
                  <Label htmlFor="hazardType">Type of Hazard *</Label>
                  <Select
                    value={formData.hazardType}
                    onValueChange={(value) =>
                      setFormData(prev => ({ ...prev, hazardType: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select hazard type" />
                    </SelectTrigger>
                    <SelectContent>
                      {hazardTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Severity */}
                <div className="space-y-2">
                  <Label htmlFor="severity">Severity Level *</Label>
                  <Select
                    value={formData.severity}
                    onValueChange={(value) =>
                      setFormData(prev => ({ ...prev, severity: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity level" />
                    </SelectTrigger>
                    <SelectContent>
                      {severityLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          <span className={level.color}>{level.label}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location Name</Label>
                    <Input
                      id="location"
                      placeholder="e.g., Mumbai Harbor, Goa Beach"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData(prev => ({ ...prev, location: e.target.value }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="coordinates">Coordinates *</Label>
                    <div className="flex gap-2">
                      <Input
                        id="coordinates"
                        placeholder="Lat, Lng"
                        value={formData.coordinates}
                        onChange={(e) =>
                          setFormData(prev => ({ ...prev, coordinates: e.target.value }))
                        }
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleLocationDetect}
                        className="px-3"
                      >
                        <MapPin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the hazard in detail - what you observed, conditions, potential risks..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData(prev => ({ ...prev, description: e.target.value }))
                    }
                  />
                </div>

                {/* Media Upload */}
                <div className="space-y-2">
                  <Label>Photo/Video Evidence</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <div className="space-y-2">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Drag and drop files here, or click to browse
                      </p>
                      <div className="flex justify-center gap-2">
                        <Button type="button" variant="outline" size="sm">
                          <Camera className="h-4 w-4 mr-2" />
                          Take Photo
                        </Button>
                        <Button type="button" variant="outline" size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload File
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4 p-4 bg-background/30 rounded-lg border border-border/50">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Contact Information (Optional)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Name</Label>
                      <Input
                        id="contactName"
                        placeholder="Your name"
                        value={formData.contactName}
                        onChange={(e) =>
                          setFormData(prev => ({ ...prev, contactName: e.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPhone">Phone</Label>
                      <Input
                        id="contactPhone"
                        placeholder="Your phone number"
                        value={formData.contactPhone}
                        onChange={(e) =>
                          setFormData(prev => ({ ...prev, contactPhone: e.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Email</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        placeholder="Your email"
                        value={formData.contactEmail}
                        onChange={(e) =>
                          setFormData(prev => ({ ...prev, contactEmail: e.target.value }))
                        }
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full btn-neon"
                  disabled={isSubmitting || !formData.hazardType || !formData.severity || !formData.coordinates || !formData.description}
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="h-4 w-4 mr-2 animate-spin" />
                      Submitting Report...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Hazard Report
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Emergency Contacts & Guidelines */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          {/* Emergency Contacts */}
          <Card className="glass-card border-destructive/50">
            <CardHeader>
              <CardTitle className="text-destructive flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                <h4 className="font-semibold text-destructive">Coast Guard</h4>
                <p className="text-sm">Emergency: 1554</p>
                <p className="text-sm">Operations: +91-11-2309-2011</p>
              </div>
              <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                <h4 className="font-semibold text-warning">Marine Police</h4>
                <p className="text-sm">Emergency: 100</p>
                <p className="text-sm">Marine Dept: +91-22-2202-4444</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-primary">Disaster Management</h4>
                <p className="text-sm">Control Room: 1070</p>
                <p className="text-sm">NDMA: +91-11-2674-5600</p>
              </div>
            </CardContent>
          </Card>

          {/* Reporting Guidelines */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Reporting Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <h4 className="font-semibold">Before Reporting:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Ensure your own safety first</li>
                  <li>• Take photos/videos if safe to do so</li>
                  <li>• Note exact location and time</li>
                  <li>• Observe weather conditions</li>
                </ul>
              </div>
              <div className="space-y-2 text-sm">
                <h4 className="font-semibold">Critical Situations:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Call emergency services immediately</li>
                  <li>• Provide clear, accurate information</li>
                  <li>• Stay on line with dispatchers</li>
                  <li>• Report through our platform as backup</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}