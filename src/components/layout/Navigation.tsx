import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Waves,
  MapPin,
  AlertTriangle,
  BarChart3,
  Bell,
  MessageSquare,
  Info,
  Mail,
  Menu,
  X,
  Shield,
  Users,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NotificationCenter } from "@/components/notifications/NotificationCenter";

const navigationItems = [
  { href: "/", label: "Dashboard", icon: Waves },
  { href: "/map", label: "Ocean Map", icon: MapPin },
  { href: "/report", label: "Report Hazard", icon: AlertTriangle },
  { href: "/reports", label: "Reports History", icon: BarChart3 },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/alerts", label: "Alerts", icon: Bell },
  { href: "/social", label: "Social Feed", icon: MessageSquare },
  { href: "/community", label: "Community", icon: Users },
  { href: "/safety", label: "Safety Guide", icon: Shield },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="glass-card"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation sidebar */}
      <motion.nav
        initial={{ x: -300 }}
        animate={{ x: isOpen || window.innerWidth >= 768 ? 0 : -300 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 glass-card border-r border-primary/20",
          "flex flex-col py-6 px-4 space-y-2",
          "md:translate-x-0"
        )}
      >
        {/* Logo and Notifications */}
        <div className="flex items-center justify-between mb-8 px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Waves className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-glow">OceanGuard</h1>
              <p className="text-sm text-muted-foreground">Hazard Platform</p>
            </div>
          </div>
          <div className="hidden md:block">
            <NotificationCenter />
          </div>
        </div>

        {/* Navigation items */}
        <div className="flex-1 space-y-1">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                  "hover:bg-primary/10 hover:scale-105",
                  isActive && "nav-active"
                )}
              >
                <Icon className={cn("h-5 w-5", isActive && "text-primary")} />
                <span className={cn("font-medium", isActive && "text-primary")}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            Ocean Hazard Reporting Platform
          </p>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </>
  );
}