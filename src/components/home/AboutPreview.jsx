
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section id="about-preview" className="py-20 bg-cream-100 indian-pattern">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-spice-500 opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Indian coffee preparation" 
              className="rounded-lg shadow-lg w-full h-auto relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 bg-chai-600 text-white p-6 rounded-lg hidden md:block shadow-lg">
              <p className="text-2xl font-playfair">Est. 1982</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-henna-500 opacity-50"></div>
          </div>
          
          <div>
            <h2 className="section-title text-left mb-2">Our Indian Coffee Story</h2>
            <div className="w-24 h-1 bg-spice-500 mb-6"></div>
            <p className="text-chai-700 mb-6 text-lg">
              Chai Chamandir began with our family's passion for authentic South Indian filter coffee. For generations, we've been sourcing the finest coffee beans from the hills of Karnataka and Tamil Nadu.
            </p>
            <p className="text-chai-700 mb-6">
              Our recipes blend traditional Indian brewing methods with modern techniques, creating a unique experience that honors our heritage while welcoming coffee lovers from all cultures.
            </p>
            <Button asChild className="mt-4 bg-chai-600 hover:bg-chai-700 shadow-md">
              <Link to="/about">
                Discover Our Heritage
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
