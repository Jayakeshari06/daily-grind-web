
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LocationHours = () => {
  return (
    <section className="py-20 bg-cream-100 mandala-bg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title text-center mb-3">Visit Us</h2>
          <div className="w-24 h-1 bg-spice-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white/70 p-6 rounded-lg shadow-md border border-chai-100">
            <div className="flex items-start mb-8">
              <div className="p-3 bg-henna-500/10 rounded-full mr-4">
                <MapPin className="text-henna-500" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-chai-700 mb-3">Our Location</h3>
                <p className="text-chai-600 text-lg">
                  42 Gandhi Street<br />
                  Bangalore, Karnataka 560001
                </p>
                <Button asChild className="mt-4 bg-spice-500 hover:bg-spice-600">
                  <a 
                    href="https://maps.google.com/?q=Bangalore+Karnataka" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="flex items-start mb-8">
              <div className="p-3 bg-henna-500/10 rounded-full mr-4">
                <Clock className="text-henna-500" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-chai-700 mb-3">Hours of Operation</h3>
                <ul className="text-chai-600 text-lg space-y-2">
                  <li className="flex justify-between items-center pb-2 border-b border-chai-100">
                    <span>Monday - Friday</span>
                    <span className="font-medium">7:00 AM - 9:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-chai-100">
                    <span>Saturday</span>
                    <span className="font-medium">8:00 AM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center pt-2">
                    <span>Sunday</span>
                    <span className="font-medium">8:00 AM - 8:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-3 bg-henna-500/10 rounded-full mr-4">
                <Phone className="text-henna-500" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-chai-700 mb-3">Contact</h3>
                <p className="text-chai-600 mb-2 text-lg">Phone: +91 80 2345 6789</p>
                <p className="text-chai-600 text-lg">Email: namaste@chaichamandir.com</p>
                <Button asChild className="mt-4 bg-spice-500 hover:bg-spice-600">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-[450px] md:h-auto border-4 border-spice-200">
            <iframe 
              title="Chai Chamandir Location" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56659847957!2d77.46612535874034!3d12.954280204638822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1682343707840!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHours;
