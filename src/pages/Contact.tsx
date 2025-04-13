
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-coffee-800 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/90 to-coffee-800/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1461988625982-7e46a099bf4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Coffee shop interior" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-20">
          <h1 className="section-title text-white text-center mb-4">Contact Us</h1>
          <p className="text-xl text-center text-cream-100 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have a question about our products, 
            catering options, or just want to say hello.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="section-title text-left">Get In Touch</h2>
              <p className="text-coffee-700 mb-8">
                Have questions, feedback, or want to place a special order? Reach out to us through any 
                of the methods below, or fill out the contact form, and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="text-coffee-500 mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-coffee-700 mb-2">Our Location</h3>
                    <p className="text-coffee-600">
                      123 Coffee Street<br />
                      Brew City, BC 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-coffee-500 mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-coffee-700 mb-2">Phone</h3>
                    <p className="text-coffee-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-coffee-500 mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-coffee-700 mb-2">Email</h3>
                    <p className="text-coffee-600">hello@dailygrind.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-coffee-500 mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-coffee-700 mb-2">Hours</h3>
                    <ul className="text-coffee-600">
                      <li className="mb-1">Monday - Friday: 6:30 AM - 8:00 PM</li>
                      <li className="mb-1">Saturday: 7:00 AM - 9:00 PM</li>
                      <li>Sunday: 8:00 AM - 6:00 PM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-cream-100 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-coffee-700 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-coffee-700 mb-2 font-medium">Name</label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-coffee-700 mb-2 font-medium">Email</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-coffee-700 mb-2 font-medium">Subject</label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-coffee-700 mb-2 font-medium">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px]"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-coffee-600 hover:bg-coffee-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-white border-t border-coffee-100">
        <div className="container-custom">
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
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
      </section>
    </div>
  );
};

export default Contact;
