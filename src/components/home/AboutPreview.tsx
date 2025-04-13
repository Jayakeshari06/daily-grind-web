
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section id="about-preview" className="py-20 bg-cream-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Coffee preparation" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-coffee-600 text-white p-6 rounded-lg hidden md:block">
              <p className="text-2xl font-playfair">Est. 2010</p>
            </div>
          </div>
          
          <div>
            <h2 className="section-title text-left">Our Coffee Story</h2>
            <p className="text-coffee-700 mb-6">
              Daily Grind began with a simple mission: to serve exceptional coffee in a space that feels like home. For over a decade, we've been sourcing the finest beans from sustainable farms around the world.
            </p>
            <p className="text-coffee-700 mb-6">
              Our passion for the perfect cup extends beyond just brewing - it's about creating a community where everyone feels welcome, whether you're a coffee connoisseur or just looking for a comfortable place to work or meet friends.
            </p>
            <Button asChild className="mt-4 bg-coffee-600 hover:bg-coffee-700">
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
