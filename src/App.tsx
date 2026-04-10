import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Contact from "./pages/Contact.tsx";
import Resources from "./pages/Resources.tsx";
import AdaDemandLetter from "./pages/AdaDemandLetter.tsx";
import OverlaysDontWork from "./pages/OverlaysDontWork.tsx";
import AdaComplianceSmallBusiness from "./pages/AdaComplianceSmallBusiness.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/ada-demand-letter" element={<AdaDemandLetter />} />
          <Route path="/resources/overlays-dont-work" element={<OverlaysDontWork />} />
          <Route path="/resources/ada-compliance-small-business" element={<AdaComplianceSmallBusiness />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
