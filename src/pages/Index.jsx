
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import Testimonials from "@/components/home/Testimonials";
import LocationHours from "@/components/home/LocationHours";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { downloadMenuPDF } from "@/utils/pdfGenerator";
import { toast } from "@/components/ui/sonner";
import { menuItems } from "./Menu";

const Index = () => {
  const handleDownloadMenu = () => {
    try {
      downloadMenuPDF(menuItems);
      toast.success("Menu downloaded successfully!");
    } catch (error) {
      console.error("Download failed:", error);
      toast.error("Failed to download menu. Please try again.");
    }
  };

  return (
    <div>
      <Hero />
      <div className="bg-cream-100 py-6 text-center">
        <Button 
          onClick={handleDownloadMenu}
          className="bg-henna-500 hover:bg-henna-600 flex items-center gap-2"
        >
          <Download size={18} />
          Download Our Menu
        </Button>
      </div>
      <AboutPreview />
      <FeaturedMenu />
      <Testimonials />
      <LocationHours />
    </div>
  );
};

export default Index;
