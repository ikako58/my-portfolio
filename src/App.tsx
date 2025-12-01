import { Toaster } from "./components/UI/toaster";
import { Toaster as Sonner } from "./components/UI/sonner";
import { TooltipProvider } from "./components/UI/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <Routes>
        <Route path="/my-portfolio" element={<Navigate to="/" replace />} />

        <Route path="/" element={<Index />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
