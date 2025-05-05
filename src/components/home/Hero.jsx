
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about-preview');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-chai-800/90 to-chai-700/75 mix-blend-multiply z-10" />
        <img 
          src="https://images.unsplash.com/photo-1589476993333-f55b84301219?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Indian coffee shop interior" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-20 text-center text-white px-4 sm:px-6">
        <div className="mt-32 mb-4 md:mb-6">
          <img 
            src="https://www.freepnglogos.com/uploads/om-symbol-png/om-symbol-hinduism-hindu-dharma-symbol-meaning-history-8.png" 
            alt="Om symbol" 
            className="h-16 md:h-20 mx-auto mb-2 opacity-90"
          />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight text-shadow">
          Experience Authentic <br className="hidden md:block" />
          <span className="text-spice-300">Indian Coffee</span>
        </h1>
        <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto text-cream-100/95 drop-shadow-md">
          From traditional Filter Kaapi to exotic Masala brews, <br className="hidden md:block" />
          we bring you the rich flavors of India.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-henna-500 hover:bg-henna-600 text-white px-8 py-6 shadow-lg">
            <Link to="/menu">
              Explore Our Menu
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-6">
            <a href="https://order.dailygrind.com" target="_blank" rel="noopener noreferrer">
              Order Online
            </a>
          </Button>
        </div>
        
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
