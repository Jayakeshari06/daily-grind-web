
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
    <section className="py-20 bg-white mandala-bg">
      <div className="container-custom">
        <h2 className="section-title text-center">House Specialties</h2>
        <p className="section-subtitle text-center">
          Our signature Indian offerings, blending tradition with innovation
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {featuredItems.map((item) => (
            <div key={item.id} className="bg-cream-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-spice-500">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 bg-spice-200 text-chai-700 rounded-full text-sm font-medium">
                  {item.category}
                </span>
                <item.icon className="text-henna-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-chai-700 mb-2">{item.name}</h3>
              <p className="text-chai-600 mb-4">{item.description}</p>
              <p className="text-lg font-bold text-chai-800">{item.price}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-spice-500 hover:bg-spice-600">
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
