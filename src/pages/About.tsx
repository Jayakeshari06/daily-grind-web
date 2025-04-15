import { Coffee, Leaf, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-chai-800 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-chai-900/90 to-chai-800/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Indian coffee beans" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-20">
          <h1 className="section-title text-white text-center mb-4">Our Story</h1>
          <p className="text-xl text-center text-cream-100 max-w-3xl mx-auto">
            Our journey from a small chai stall to Bengaluru's favorite coffee house.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white indian-pattern">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-left">Our Journey</h2>
              <p className="text-chai-700 mb-6">
                Chai Chamandir began in 1982 as a humble roadside stall in the bustling streets of Bengaluru. Founded by Ramesh Iyer, our first patrons were local office workers seeking respite in a perfectly brewed cup of chai.
              </p>
              <p className="text-chai-700 mb-6">
                As word spread of our masala chai and authentic filter kaapi, we expanded to our current heritage building in Indiranagar. Today, we're proud to be a sanctuary of traditional South Indian coffee culture amidst the fast-paced city life.
              </p>
              <p className="text-chai-700">
                Through the decades, our recipes have remained unchanged, passed down through the Iyer family, preserving the authentic taste of India's diverse coffee heritage.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1589778655375-3e622c505dad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Traditional Indian coffee shop" 
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Chai Chamandir today" 
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Tea leaves preparation" 
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="South Indian filter coffee" 
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream-100 indian-pattern">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Values</h2>
          <p className="section-subtitle text-center">
            The principles that have guided us since 1982
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-chai-100 p-4 rounded-full inline-flex mb-4">
                <Coffee className="text-chai-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-chai-700 mb-3">Authenticity</h3>
              <p className="text-chai-600">
                We preserve traditional preparation methods passed down through generations of Indian coffee culture.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-chai-100 p-4 rounded-full inline-flex mb-4">
                <Leaf className="text-chai-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-chai-700 mb-3">Sustainability</h3>
              <p className="text-chai-600">
                We partner directly with farmers in Coorg and the Western Ghats, ensuring fair prices and sustainable practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-chai-100 p-4 rounded-full inline-flex mb-4">
                <Users className="text-chai-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-chai-700 mb-3">Community</h3>
              <p className="text-chai-600">
                Our café is a gathering place that celebrates the rich traditions of conversation and connection in Indian culture.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-chai-100 p-4 rounded-full inline-flex mb-4">
                <Award className="text-chai-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-chai-700 mb-3">Excellence</h3>
              <p className="text-chai-600">
                Every cup, every dish, and every interaction is crafted with attention to detail and dedication to quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Family</h2>
          <p className="section-subtitle text-center">
            The hearts and hands behind Chai Chamandir
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <img 
                src="https://randomuser.me/api/portraits/men/74.jpg" 
                alt="Vikram Iyer" 
                className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-chai-700">Vikram Iyer</h3>
              <p className="text-chai-500 mb-3">Founder's Son & Head Chai Master</p>
              <p className="text-chai-600">
                Trained in both traditional South Indian methods and modern brewing techniques, Vikram brings innovation while honoring tradition.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://randomuser.me/api/portraits/women/70.jpg" 
                alt="Priya Sharma" 
                className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-chai-700">Priya Sharma</h3>
              <p className="text-chai-500 mb-3">Master Barista & Operations Director</p>
              <p className="text-chai-600">
                With 15 years of experience, Priya ensures every cup meets our exacting standards while mentoring our growing team.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Arjun Patel" 
                className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-chai-700">Arjun Patel</h3>
              <p className="text-chai-500 mb-3">Head Chef</p>
              <p className="text-chai-600">
                Arjun crafts our menu of traditional South Indian snacks and innovations that perfectly complement our beverage offerings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
