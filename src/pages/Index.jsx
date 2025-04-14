
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
    <div className="overflow-x-hidden">
      <Hero />
      <div className="bg-cream-100 py-10 text-center shadow-inner">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 bg-white/90 p-8 rounded-lg shadow-md border border-chai-100">
            <p className="text-chai-700 font-medium text-lg md:text-xl">Want to see our complete menu offerings?</p>
            <Button 
              onClick={handleDownloadMenu}
              className="bg-henna-500 hover:bg-henna-600 flex items-center gap-3 px-8 py-6 text-lg"
            >
              <Download size={20} />
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
