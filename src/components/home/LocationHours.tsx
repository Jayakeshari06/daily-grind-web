
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LocationHours = () => {
  return (
    <section className="py-20 bg-cream-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title text-left">Find Us</h2>
            <div className="flex items-start mb-6">
              <MapPin className="text-coffee-500 mt-1 mr-3" size={24} />
              <div>
                <h3 className="text-xl font-bold text-coffee-700 mb-2">Our Location</h3>
                <p className="text-coffee-600">
                  123 Coffee Street<br />
                  Brew City, BC 12345
                </p>
                <Button asChild className="mt-4 bg-coffee-500 hover:bg-coffee-600">
                  <a 
                    href="https://maps.google.com/?q=123+Coffee+Street+Brew+City" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <Clock className="text-coffee-500 mt-1 mr-3" size={24} />
              <div>
                <h3 className="text-xl font-bold text-coffee-700 mb-2">Hours of Operation</h3>
                <ul className="text-coffee-600">
                  <li className="flex justify-between mb-1">
                    <span>Monday - Friday</span>
                    <span>6:30 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between mb-1">
                    <span>Saturday</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="text-coffee-500 mt-1 mr-3" size={24} />
              <div>
                <h3 className="text-xl font-bold text-coffee-700 mb-2">Contact</h3>
                <p className="text-coffee-600 mb-1">Phone: (555) 123-4567</p>
                <p className="text-coffee-600">Email: hello@dailygrind.com</p>
                <Button asChild className="mt-4 bg-coffee-500 hover:bg-coffee-600">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-auto">
            <iframe 
              title="Daily Grind Coffee Shop Location" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.1980215679895!2d-79.38924308502541!3d43.6712124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e1c0d0a9639%3A0x3d9e501f6eb0e93e!2sYork%20University%20-%20Keele%20Campus!5e0!3m2!1sen!2sca!4v1648147795959!5m2!1sen!2sca" 
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
