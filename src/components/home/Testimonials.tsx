
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Coffee Enthusiast",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    quote: "Daily Grind has become my second home. The atmosphere is perfect for working, and their cappuccino is the best in town!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Local Foodie",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "I can't say enough good things about this place. The pastries are always fresh, and the staff remembers my usual order.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Freelance Writer",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    quote: "As someone who works remotely, I appreciate the comfortable seating and reliable WiFi. And the coffee is excellent too!",
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
    <section className="py-20 bg-coffee-800 text-white">
      <div className="container-custom">
        <h2 className="section-title text-center text-cream-100">What Our Customers Say</h2>
        
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
                  <div className="bg-coffee-700/50 rounded-lg p-8 text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={20} 
                          className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"} 
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-coffee-600 hover:bg-coffee-500 rounded-full p-2 shadow-lg hidden md:block" 
            onClick={() => { prev(); setAutoplay(false); }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-coffee-600 hover:bg-coffee-500 rounded-full p-2 shadow-lg hidden md:block" 
            onClick={() => { next(); setAutoplay(false); }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === current ? 'bg-white' : 'bg-white/30'}`}
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
