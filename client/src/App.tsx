import { Router, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import Home from "@/pages/Home";
import Experience from "@/pages/Experience";
import Portfolio from "@/pages/Portfolio";
import Learning from "@/pages/Learning";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import EpisodeDetail from "@/pages/EpisodeDetail";
import LearningDetail from "@/pages/LearningDetail";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <div className="min-h-screen bg-background">
            <Navigation />
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/experience" component={Experience} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/learning" component={Learning} />
              <Route path="/learning/:topicId" component={LearningDetail} />
              <Route path="/contact" component={Contact} />
              <Route path="/learning/:topicId/episode/:episodeId" component={EpisodeDetail} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
