import { Navigation } from "./Navigation";
import { ConnectionStatus } from "@/components/status/ConnectionStatus";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen animated-bg">
      <Navigation />
      <main className="md:ml-64 min-h-screen">
        <div className="p-4 md:p-6">
          {children}
        </div>
      </main>
      <ConnectionStatus />
    </div>
  );
}