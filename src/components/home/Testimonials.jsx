
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Coffee Enthusiast",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    quote: "The Filter Kaapi here reminds me of my grandmother's coffee in Chennai. Absolutely authentic and delicious!",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Food Blogger",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Their cardamom cold brew is the perfect blend of traditional flavors with modern brewing techniques. A must-try!",
    rating: 5
  },
  {
    id: 3,
    name: "Anjali Desai",
    role: "Digital Nomad",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "I love working from this café. The masala chai keeps me going, and the atmosphere is so welcoming.",
    rating: 4
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, autoplay]);
  
  return (
    <section className="py-20 bg-chai-800 text-white indian-pattern">
      <div className="container-custom">
        <h2 className="section-title text-center text-cream-100">What Our Guests Say</h2>
        
        <div className="relative mt-12 max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-chai-700/50 rounded-lg p-8 text-center border border-spice-500/30">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={20} 
                          className={i < testimonial.rating ? "text-spice-400 fill-spice-400" : "text-gray-400"} 
                        />
                      ))}
                    </div>
                    <p className="text-lg mb-6 italic text-cream-100">"{testimonial.quote}"</p>
                    <div className="flex items-center justify-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div className="text-left">
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-cream-200">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-henna-600 hover:bg-henna-500 rounded-full p-2 shadow-lg hidden md:block" 
            onClick={() => { prev(); setAutoplay(false); }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-henna-600 hover:bg-henna-500 rounded-full p-2 shadow-lg hidden md:block" 
            onClick={() => { next(); setAutoplay(false); }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === current ? 'bg-spice-400' : 'bg-white/30'}`}
                onClick={() => { setCurrent(index); setAutoplay(false); }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
