import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  CloudRain,
  Sun,
  Wind,
  Thermometer,
  Eye,
  Waves,
  Navigation,
  Sunrise,
  Sunset,
  Droplets,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  visibility: number;
  waveHeight: number;
  seaTemperature: number;
  sunrise: string;
  sunset: string;
  alerts: string[];
}

export function WeatherWidget() {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    location: "Mumbai Coast",
    temperature: 28,
    condition: "Partly Cloudy",
    humidity: 78,
    windSpeed: 15,
    windDirection: "SW",
    visibility: 8,
    waveHeight: 2.1,
    seaTemperature: 26,
    sunrise: "06:42",
    sunset: "18:35",
    alerts: ["Small Craft Advisory", "High Wave Warning"],
  });

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return Sun;
      case "cloudy":
      case "partly cloudy":
        return Cloud;
      case "rainy":
        return CloudRain;
      default:
        return Cloud;
    }
  };

  const WeatherIcon = getWeatherIcon(weatherData.condition);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Main Weather */}
      <Card className="glass-card-hover lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <WeatherIcon className="h-5 w-5 text-primary" />
            Current Weather - {weatherData.location}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{weatherData.temperature}°C</div>
              <div className="text-sm text-muted-foreground">{weatherData.condition}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Wind className="h-4 w-4 text-secondary" />
              </div>
              <div className="text-lg font-semibold">{weatherData.windSpeed} km/h</div>
              <div className="text-sm text-muted-foreground">{weatherData.windDirection}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Waves className="h-4 w-4 text-primary" />
              </div>
              <div className="text-lg font-semibold">{weatherData.waveHeight}m</div>
              <div className="text-sm text-muted-foreground">Wave Height</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Thermometer className="h-4 w-4 text-accent" />
              </div>
              <div className="text-lg font-semibold">{weatherData.seaTemperature}°C</div>
              <div className="text-sm text-muted-foreground">Sea Temp</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weather Details */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-blue-400" />
              <span className="text-sm">Humidity</span>
            </div>
            <span className="font-semibold">{weatherData.humidity}%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-green-400" />
              <span className="text-sm">Visibility</span>
            </div>
            <span className="font-semibold">{weatherData.visibility} km</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sunrise className="h-4 w-4 text-yellow-400" />
              <span className="text-sm">Sunrise</span>
            </div>
            <span className="font-semibold">{weatherData.sunrise}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sunset className="h-4 w-4 text-orange-400" />
              <span className="text-sm">Sunset</span>
            </div>
            <span className="font-semibold">{weatherData.sunset}</span>
          </div>
          
          {weatherData.alerts.length > 0 && (
            <div className="pt-3 border-t border-border">
              <h4 className="text-sm font-semibold mb-2">Active Alerts</h4>
              <div className="space-y-1">
                {weatherData.alerts.map((alert, index) => (
                  <Badge key={index} variant="destructive" className="text-xs">
                    {alert}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}