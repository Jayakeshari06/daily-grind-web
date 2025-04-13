
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coffee, Cake, Leaf } from "lucide-react";

const featuredItems = [
  {
    id: 1,
    name: "Signature Espresso",
    description: "Our award-winning house blend with notes of chocolate and caramel",
    price: "$4.50",
    icon: Coffee,
    category: "Coffee"
  },
  {
    id: 2,
    name: "Artisan Croissant",
    description: "Flaky, buttery croissant made fresh daily",
    price: "$3.95",
    icon: Cake,
    category: "Pastry"
  },
  {
    id: 3,
    name: "Matcha Latte",
    description: "Premium Japanese matcha with steamed milk",
    price: "$5.25",
    icon: Leaf,
    category: "Specialty"
  }
];

const FeaturedMenu = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Crowd Favorites</h2>
        <p className="section-subtitle text-center">
          Discover our most beloved offerings, crafted with care and served with a smile
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {featuredItems.map((item) => (
            <div key={item.id} className="bg-cream-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 bg-coffee-200 text-coffee-700 rounded-full text-sm font-medium">
                  {item.category}
                </span>
                <item.icon className="text-coffee-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-coffee-700 mb-2">{item.name}</h3>
              <p className="text-coffee-600 mb-4">{item.description}</p>
              <p className="text-lg font-bold text-coffee-800">{item.price}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-coffee-500 hover:bg-coffee-600">
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
