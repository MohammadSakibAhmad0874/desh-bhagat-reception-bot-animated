import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StudentServices from "./pages/StudentServices";
import FacultyDirectory from "./pages/FacultyDirectory";
import Departments from "./pages/Departments";
import LibraryServices from "./pages/LibraryServices";
import HostelInformation from "./pages/HostelInformation";
import CampusFacilities from "./pages/CampusFacilities";
import EventsNews from "./pages/EventsNews";
import CampusMap from "./pages/CampusMap";
import EmergencyContacts from "./pages/EmergencyContacts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/student-services" element={<StudentServices />} />
          <Route path="/faculty-directory" element={<FacultyDirectory />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/library-services" element={<LibraryServices />} />
          <Route path="/hostel-information" element={<HostelInformation />} />
          <Route path="/campus-facilities" element={<CampusFacilities />} />
          <Route path="/events-news" element={<EventsNews />} />
          <Route path="/campus-map" element={<CampusMap />} />
          <Route path="/emergency-contacts" element={<EmergencyContacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
