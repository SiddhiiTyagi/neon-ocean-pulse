import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bell, X, AlertTriangle, Info, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Notification {
  id: string;
  type: "error" | "warning" | "info" | "success";
  title: string;
  message: string;
  timestamp: Date;
  actions?: { label: string; action: () => void }[];
}

export function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "warning",
      title: "High Wave Alert",
      message: "Waves reaching 4-5 meters detected near Mumbai coast",
      timestamp: new Date(Date.now() - 120000), // 2 minutes ago
      actions: [
        { label: "View Details", action: () => console.log("View details") },
        { label: "Dismiss", action: () => removeNotification("1") },
      ],
    },
    {
      id: "2",
      type: "info",
      title: "System Update",
      message: "New weather data integration available",
      timestamp: new Date(Date.now() - 300000), // 5 minutes ago
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "error": return AlertTriangle;
      case "warning": return AlertTriangle;
      case "info": return Info;
      case "success": return CheckCircle;
      default: return Info;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "error": return "border-destructive bg-destructive/10";
      case "warning": return "border-warning bg-warning/10";
      case "info": return "border-primary bg-primary/10";
      case "success": return "border-success bg-success/10";
      default: return "border-muted bg-muted/10";
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="glass-card relative"
      >
        <Bell className="h-4 w-4" />
        {notifications.length > 0 && (
          <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
            {notifications.length}
          </Badge>
        )}
      </Button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="absolute right-0 top-12 w-80 z-50"
        >
          <Card className="glass-card border border-primary/20">
            <CardContent className="p-0">
              <div className="p-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Notifications</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-6 text-center text-muted-foreground">
                    No new notifications
                  </div>
                ) : (
                  <div className="space-y-1">
                    {notifications.map((notification) => {
                      const Icon = getIcon(notification.type);
                      return (
                        <div
                          key={notification.id}
                          className={`p-4 border-l-4 ${getTypeColor(notification.type)} hover:bg-background/50 transition-colors`}
                        >
                          <div className="flex items-start gap-3">
                            <Icon className={`h-5 w-5 mt-0.5 ${
                              notification.type === "error" || notification.type === "warning" 
                                ? "text-destructive" 
                                : notification.type === "success"
                                ? "text-success"
                                : "text-primary"
                            }`} />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm">{notification.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                {notification.message}
                              </p>
                              <p className="text-xs text-muted-foreground mt-2">
                                {formatTime(notification.timestamp)}
                              </p>
                              {notification.actions && (
                                <div className="flex gap-2 mt-3">
                                  {notification.actions.map((action, index) => (
                                    <Button
                                      key={index}
                                      variant="outline"
                                      size="sm"
                                      onClick={action.action}
                                      className="text-xs"
                                    >
                                      {action.label}
                                    </Button>
                                  ))}
                                </div>
                              )}
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeNotification(notification.id)}
                              className="p-1 h-auto"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              
              {notifications.length > 0 && (
                <div className="p-4 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setNotifications([])}
                    className="w-full"
                  >
                    Clear All
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}