
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coffee, Cake, Leaf } from "lucide-react";

const featuredItems = [
  {
    id: 1,
    name: "Filter Kaapi",
    description: "Traditional South Indian coffee brewed with chicory and served in a steel tumbler",
    price: "₹120",
    icon: Coffee,
    category: "Coffee"
  },
  {
    id: 2,
    name: "Masala Chai Scones",
    description: "Scones infused with our special chai masala blend",
    price: "₹95",
    icon: Cake,
    category: "Pastry"
  },
  {
    id: 3,
    name: "Cardamom Cold Brew",
    description: "Cold brew coffee with a hint of cardamom and condensed milk",
    price: "₹160",
    icon: Leaf,
    category: "Specialty"
  }
];

const FeaturedMenu = () => {
  return (
    <section className="py-24 bg-white mandala-bg overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title text-center mb-4">House Specialties</h2>
          <div className="w-24 h-1 bg-spice-500 mx-auto mb-8"></div>
          <p className="section-subtitle text-center max-w-2xl mx-auto text-lg">
            Our signature Indian offerings, blending tradition with innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {featuredItems.map((item) => (
            <div key={item.id} className="bg-cream-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-cream-200 hover:border-spice-300 transform hover:-translate-y-1 flex flex-col h-full">
              <div className="flex justify-between items-start mb-5">
                <span className="inline-block px-4 py-1.5 bg-spice-200 text-chai-700 rounded-full text-sm font-medium">
                  {item.category}
                </span>
                <div className="p-3 bg-henna-500/10 rounded-full">
                  <item.icon className="text-henna-500" size={26} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-chai-700 mb-3">{item.name}</h3>
              <p className="text-chai-600 mb-6 flex-grow">{item.description}</p>
              <p className="text-xl font-bold text-chai-800">{item.price}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button asChild className="bg-spice-500 hover:bg-spice-600 px-10 py-6 text-lg shadow-md">
            <Link to="/menu">
              View Full Menu
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
