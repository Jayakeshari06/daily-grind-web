
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
      <div className="bg-cream-100 py-8 text-center shadow-inner">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 bg-white/80 p-6 rounded-lg shadow-sm border border-chai-100">
            <p className="text-chai-700 font-medium text-lg">Want to see our complete menu offerings?</p>
            <Button 
              onClick={handleDownloadMenu}
              className="bg-henna-500 hover:bg-henna-600 flex items-center gap-2 px-6"
            >
              <Download size={18} />
              Download Our Menu
            </Button>
          </div>
        </div>
      </div>
      <AboutPreview />
      <FeaturedMenu />
      <Testimonials />
      <LocationHours />
    </div>
  );
};

export default Index;
