
import { useState, useEffect } from "react";
import { Coffee, Cake, Leaf, CupSoda } from "lucide-react";
import { Button } from "@/components/ui/button";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  featured?: boolean;
};

type CategoryType = {
  id: string;
  name: string;
  icon: React.ElementType;
};

const categories: CategoryType[] = [
  { id: "coffee", name: "Coffee", icon: Coffee },
  { id: "pastries", name: "Pastries", icon: Cake },
  { id: "specialty", name: "Specialty Drinks", icon: Leaf },
  { id: "cold-drinks", name: "Cold Drinks", icon: CupSoda },
];

const menuItems: MenuItem[] = [
  // Coffee
  { id: 1, name: "Espresso", description: "Pure, intense coffee experience", price: "$3.50", category: "coffee", featured: true },
  { id: 2, name: "Americano", description: "Espresso diluted with hot water", price: "$4.00", category: "coffee" },
  { id: 3, name: "Cappuccino", description: "Equal parts espresso, steamed milk, and milk foam", price: "$4.75", category: "coffee" },
  { id: 4, name: "Latte", description: "Espresso with steamed milk and a light layer of foam", price: "$5.00", category: "coffee" },
  { id: 5, name: "Mocha", description: "Espresso with chocolate and steamed milk", price: "$5.25", category: "coffee" },
  { id: 6, name: "Flat White", description: "Espresso with velvety steamed milk", price: "$4.75", category: "coffee" },
  
  // Pastries
  { id: 7, name: "Butter Croissant", description: "Flaky, buttery French pastry", price: "$3.95", category: "pastries", featured: true },
  { id: 8, name: "Almond Croissant", description: "Butter croissant filled with almond cream", price: "$4.50", category: "pastries" },
  { id: 9, name: "Chocolate Chip Cookie", description: "Classic cookie with Belgian chocolate chunks", price: "$2.95", category: "pastries" },
  { id: 10, name: "Blueberry Muffin", description: "Moist muffin loaded with fresh blueberries", price: "$3.75", category: "pastries" },
  { id: 11, name: "Cinnamon Roll", description: "Warm, gooey roll with cream cheese frosting", price: "$4.25", category: "pastries" },
  { id: 12, name: "Banana Bread Slice", description: "Moist banana bread with walnuts", price: "$3.50", category: "pastries" },
  
  // Specialty Drinks
  { id: 13, name: "Matcha Latte", description: "Premium Japanese matcha with steamed milk", price: "$5.25", category: "specialty", featured: true },
  { id: 14, name: "Chai Latte", description: "Spiced tea with steamed milk", price: "$4.75", category: "specialty" },
  { id: 15, name: "Golden Milk", description: "Turmeric, cinnamon, and ginger with steamed milk", price: "$5.00", category: "specialty" },
  { id: 16, name: "Lavender Latte", description: "Espresso with house-made lavender syrup and milk", price: "$5.50", category: "specialty" },
  
  // Cold Drinks
  { id: 17, name: "Iced Coffee", description: "Our signature coffee blend over ice", price: "$4.25", category: "cold-drinks" },
  { id: 18, name: "Cold Brew", description: "Slow-steeped for 18 hours", price: "$4.75", category: "cold-drinks" },
  { id: 19, name: "Iced Matcha Latte", description: "Matcha with cold milk over ice", price: "$5.25", category: "cold-drinks" },
  { id: 20, name: "Fresh Lemonade", description: "Housemade with real lemons", price: "$3.95", category: "cold-drinks" },
  { id: 21, name: "Sparkling Water", description: "Still or sparkling", price: "$2.50", category: "cold-drinks" },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems);
  
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-coffee-800 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/90 to-coffee-800/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Coffee preparation" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-20">
          <h1 className="section-title text-white text-center mb-4">Our Menu</h1>
          <p className="text-xl text-center text-cream-100 max-w-3xl mx-auto">
            Handcrafted beverages and delicious treats, made with passion and the finest ingredients
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant={activeCategory === "all" ? "default" : "outline"}
              className={activeCategory === "all" ? "bg-coffee-600 hover:bg-coffee-700" : "text-coffee-700 border-coffee-300"}
              onClick={() => setActiveCategory("all")}
            >
              All Items
            </Button>
            
            {categories.map((category) => (
              <Button 
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  activeCategory === category.id ? "bg-coffee-600 hover:bg-coffee-700" : "text-coffee-700 border-coffee-300"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <category.icon size={18} />
                {category.name}
              </Button>
            ))}
          </div>
          
          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className={`menu-item flex justify-between ${item.featured ? 'bg-cream-100 -mx-4 px-4 py-6 rounded-lg' : ''}`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-coffee-700">{item.name}</h3>
                    {item.featured && (
                      <span className="bg-coffee-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                    )}
                  </div>
                  <p className="text-coffee-600 mt-1">{item.description}</p>
                </div>
                <p className="text-xl font-bold text-coffee-800 ml-4">{item.price}</p>
              </div>
            ))}
          </div>
          
          {/* Notes */}
          <div className="mt-16 bg-cream-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-coffee-700 mb-3">Good to Know</h3>
            <ul className="space-y-2 text-coffee-600">
              <li>• All coffees are available with your choice of whole, skim, oat, almond, or soy milk.</li>
              <li>• We can adjust the caffeine level in most drinks upon request.</li>
              <li>• All our pastries are baked fresh every morning.</li>
              <li>• Please inform our staff of any allergies or dietary restrictions.</li>
              <li>• Seasonal specials are available, just ask our baristas!</li>
            </ul>
          </div>
          
          {/* Call To Action */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-coffee-700 mb-4">Ready to place an order?</h3>
            <p className="text-coffee-600 mb-6">Skip the line and order ahead for pickup!</p>
            <Button asChild size="lg" className="bg-coffee-500 hover:bg-coffee-600">
              <a href="https://order.dailygrind.com" target="_blank" rel="noopener noreferrer">
                Order Online
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
