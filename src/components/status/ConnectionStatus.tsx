import { useState, useEffect } from "react";
import { Wifi, WifiOff, RefreshCw, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export function ConnectionStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isReconnecting, setIsReconnecting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setIsReconnecting(false);
      toast({
        title: "Connection Restored",
        description: "You're back online. Syncing data...",
        duration: 3000,
      });
    };

    const handleOffline = () => {
      setIsOnline(false);
      toast({
        title: "Connection Lost",
        description: "Working in offline mode. Data will sync when connection is restored.",
        variant: "destructive",
        duration: 5000,
      });
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [toast]);

  const handleReconnect = async () => {
    setIsReconnecting(true);
    // Simulate reconnection attempt
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsReconnecting(false);
    
    if (navigator.onLine) {
      setIsOnline(true);
      toast({
        title: "Connection Restored",
        description: "Successfully reconnected to the internet.",
      });
    } else {
      toast({
        title: "Connection Failed",
        description: "Unable to establish internet connection.",
        variant: "destructive",
      });
    }
  };

  if (isOnline) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Badge variant="outline" className="bg-success/20 text-success border-success/50">
          <Wifi className="h-3 w-3 mr-1" />
          Online
        </Badge>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="glass-card p-3 border border-destructive/50">
        <div className="flex items-center gap-2 mb-2">
          <WifiOff className="h-4 w-4 text-destructive" />
          <span className="text-sm font-medium">Offline Mode</span>
        </div>
        <p className="text-xs text-muted-foreground mb-3">
          Limited functionality available
        </p>
        <Button
          size="sm"
          variant="outline"
          onClick={handleReconnect}
          disabled={isReconnecting}
          className="w-full"
        >
          {isReconnecting ? (
            <>
              <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
              Reconnecting...
            </>
          ) : (
            <>
              <RefreshCw className="h-3 w-3 mr-1" />
              Retry Connection
            </>
          )}
        </Button>
      </div>
    </div>
  );
}