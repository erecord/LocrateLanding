import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState, useCallback } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Account from "@/pages/Account";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

type LocationTuple = [string, (to: string) => void];

// Custom hash location hook that only treats paths starting with #/ as routes
const useCustomHashLocation = () => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Only treat #/ paths as routes, otherwise return "/"
  const currentPath = hash.startsWith('#/') ? hash.slice(1) : '/';

  const navigate = useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return [currentPath, navigate] as LocationTuple;
};

function AppRoutes() {
  const [location] = useCustomHashLocation();

  // Scroll to top when location changes
  useEffect(() => {
    // Only scroll to top if it's a route change (#/ prefix)
    if (location !== '/' || window.location.hash.startsWith('#/')) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/account" component={Account} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter hook={useCustomHashLocation}>
            <Toaster />
            <AppRoutes />
          </WouterRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
