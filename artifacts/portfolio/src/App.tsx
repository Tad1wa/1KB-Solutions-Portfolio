import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import SkillsPage from "@/pages/SkillsPage";
import JourneyPage from "@/pages/JourneyPage";
import ContactPage from "@/pages/ContactPage";
import PageTransitionOverlay from "@/components/PageTransitionOverlay";
import CustomCursor from "@/components/CustomCursor";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <PageTransitionOverlay />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/journey" component={JourneyPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CustomCursor />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;