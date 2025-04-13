
import { Coffee, Leaf, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-coffee-800 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/90 to-coffee-800/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1497935586047-9395ee1e9737?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Coffee beans" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-20">
          <h1 className="section-title text-white text-center mb-4">Our Story</h1>
          <p className="text-xl text-center text-cream-100 max-w-3xl mx-auto">
            Crafting exceptional coffee experiences since 2010, one cup at a time.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-left">Our Journey</h2>
              <p className="text-coffee-700 mb-6">
                Daily Grind began as a small kiosk in downtown Brew City, founded by two friends with a passion for great coffee and warm community spaces.
              </p>
              <p className="text-coffee-700 mb-6">
                What started as a humble venture has grown into a beloved local institution, serving thousands of customers each week while maintaining our commitment to quality and sustainability.
              </p>
              <p className="text-coffee-700">
                Over the years, we've expanded our menu and our space, but our core values remain unchanged: exceptional coffee, genuine hospitality, and positive impact in our community.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Coffee shop in the early days" 
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Daily Grind today" 
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Coffee preparation" 
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Barista at work" 
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream-100">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Values</h2>
          <p className="section-subtitle text-center">
            These principles guide everything we do at Daily Grind
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-coffee-100 p-4 rounded-full inline-flex mb-4">
                <Coffee className="text-coffee-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-coffee-700 mb-3">Quality</h3>
              <p className="text-coffee-600">
                We source the finest beans and ingredients, never compromising on the quality of what we serve.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-coffee-100 p-4 rounded-full inline-flex mb-4">
                <Leaf className="text-coffee-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-coffee-700 mb-3">Sustainability</h3>
              <p className="text-coffee-600">
                From bean to cup, we're committed to environmentally responsible practices throughout our business.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-coffee-100 p-4 rounded-full inline-flex mb-4">
                <Users className="text-coffee-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-coffee-700 mb-3">Community</h3>
              <p className="text-coffee-600">
                We believe in creating spaces where everyone feels welcome and building meaningful local connections.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-coffee-100 p-4 rounded-full inline-flex mb-4">
                <Award className="text-coffee-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-coffee-700 mb-3">Excellence</h3>
              <p className="text-coffee-600">
                We strive for excellence in every detail, from our coffee brewing to our customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Meet Our Team</h2>
          <p className="section-subtitle text-center">
            The passionate people behind your Daily Grind experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <img 
                src="https://randomuser.me/api/portraits/men/41.jpg" 
                alt="James Wilson" 
                className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-coffee-700">James Wilson</h3>
              <p className="text-coffee-500 mb-3">Founder & Head Roaster</p>
              <p className="text-coffee-600">
                James has been passionate about coffee since college and trained with master roasters across South America.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://randomuser.me/api/portraits/women/31.jpg" 
                alt="Sophia Martinez" 
                className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-coffee-700">Sophia Martinez</h3>
              <p className="text-coffee-500 mb-3">Co-Founder & Head Barista</p>
              <p className="text-coffee-600">
                Sophia is a certified Q-Grader with a background in hospitality management and a flair for latte art.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="David Chen" 
                className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-coffee-700">David Chen</h3>
              <p className="text-coffee-500 mb-3">Pastry Chef</p>
              <p className="text-coffee-600">
                David brings years of experience from top bakeries in Paris to create our delicious pastries and treats.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
