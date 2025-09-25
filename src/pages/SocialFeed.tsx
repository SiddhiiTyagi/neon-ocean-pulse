import { motion } from "framer-motion";
import { MessageSquare, Heart, Share, Verified, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const socialPosts = [
  {
    id: 1,
    user: "CoastGuardIndia",
    verified: true,
    avatar: "/api/placeholder/40/40",
    content: "High wave alert issued for Mumbai coast. Fishermen advised to avoid deep sea fishing for next 24 hours.",
    timestamp: "2 hours ago",
    likes: 234,
    shares: 45,
    source: "Twitter",
  },
  {
    id: 2,
    user: "FishermanUnion",
    verified: false,
    avatar: "/api/placeholder/40/40",
    content: "Spotted unusual current patterns near Goa. Local boats staying close to shore. #OceanSafety",
    timestamp: "4 hours ago",
    likes: 89,
    shares: 12,
    source: "Twitter",
  },
];

export default function SocialFeed() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <MessageSquare className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-glow">Social Media Feed</h1>
            <p className="text-muted-foreground">
              Real-time social media monitoring for ocean hazard reports
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {socialPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={post.avatar} />
                      <AvatarFallback>{post.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">{post.user}</span>
                        {post.verified && (
                          <Verified className="h-4 w-4 text-primary fill-current" />
                        )}
                        <span className="text-sm text-muted-foreground">• {post.timestamp}</span>
                      </div>
                      <p className="mb-4">{post.content}</p>
                      <div className="flex items-center gap-6">
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Heart className="h-4 w-4" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Share className="h-4 w-4" />
                          {post.shares}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Trending Topics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {["#OceanSafety", "#HighWaves", "#CoastGuard", "#MarineSafety"].map((tag) => (
                  <div key={tag} className="p-2 bg-background/30 rounded">
                    <span className="text-accent font-medium">{tag}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}