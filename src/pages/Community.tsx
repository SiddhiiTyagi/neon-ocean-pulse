import { motion } from "framer-motion";
import { Users, Award, MessageCircle, Star, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const topContributors = [
  {
    id: 1,
    name: "Captain Sharma",
    reports: 87,
    accuracy: 96,
    avatar: "/api/placeholder/40/40",
    badge: "Expert Reporter",
    rank: 1,
  },
  {
    id: 2,
    name: "Marine Biologist Dr. Patel",
    reports: 65,
    accuracy: 98,
    avatar: "/api/placeholder/40/40",
    badge: "Scientific Advisor",
    rank: 2,
  },
];

export default function Community() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-secondary to-blue-600 rounded-lg flex items-center justify-center">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-glow">Community Hub</h1>
            <p className="text-muted-foreground">
              Connect with fellow ocean safety advocates and experts
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-warning" />
                Top Contributors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <motion.div
                    key={contributor.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-background/30 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={contributor.avatar} />
                          <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-warning rounded-full flex items-center justify-center text-xs font-bold">
                          {contributor.rank}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold">{contributor.name}</h3>
                        <Badge variant="secondary" className="mt-1">
                          {contributor.badge}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">
                        {contributor.reports} reports
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-warning fill-current" />
                        <span className="text-sm">{contributor.accuracy}% accuracy</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                Community Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Active Members", value: "5,632" },
                { label: "Total Reports", value: "12,456" },
                { label: "Verified Experts", value: "89" },
                { label: "Communities", value: "23" },
              ].map((stat) => (
                <div key={stat.label} className="flex justify-between">
                  <span className="text-muted-foreground">{stat.label}</span>
                  <span className="font-semibold">{stat.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}