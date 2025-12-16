import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Home/Index";
import NotFound from "./pages/NotFound/NotFound";

import StashHubCaseStudy from "./pages/Cases/stashhub-case-study";
// import JarvisCaseStudy from "./pages/cases/JarvisCaseStudy";
// import FlowFiscalCaseStudy from "./pages/cases/FlowFiscalCaseStudy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Case Studies */}
          <Route path="/cases/stashhub" element={<StashHubCaseStudy />} />
          {/* <Route path="/cases/jarvis" element={<JarvisCaseStudy />} />
          <Route path="/cases/flowfiscal" element={<FlowFiscalCaseStudy />} /> */}

          {/* Catch All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
