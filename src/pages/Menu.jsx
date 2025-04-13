import { useState, useEffect } from "react";
import { Coffee, Cake, Leaf, CupSoda, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { downloadMenuPDF } from "@/utils/pdfGenerator";
import { toast } from "@/components/ui/sonner";

const categories = [
  { id: "coffee", name: "Coffee & Chai", icon: Coffee },
  { id: "pastries", name: "Snacks", icon: Cake },
  { id: "specialty", name: "Specialty Drinks", icon: Leaf },
  { id: "cold-drinks", name: "Cold Beverages", icon: CupSoda },
];

export const menuItems = [
  // Coffee & Chai
  { id: 1, name: "Filter Kaapi", description: "Traditional South Indian coffee brewed with chicory", price: "₹120", category: "coffee", featured: true },
  { id: 2, name: "Masala Chai", description: "Black tea brewed with aromatic Indian spices", price: "₹80", category: "coffee" },
  { id: 3, name: "Madras Coffee", description: "Strong coffee with a hint of cardamom", price: "₹110", category: "coffee" },
  { id: 4, name: "Mysore Coffee", description: "Light coffee with a touch of jaggery", price: "₹100", category: "coffee" },
  { id: 5, name: "Adrak Chai", description: "Ginger-infused tea with milk", price: "₹90", category: "coffee" },
  { id: 6, name: "Elaichi Chai", description: "Cardamom tea with milk", price: "₹90", category: "coffee" },
  
  // Snacks
  { id: 7, name: "Samosa", description: "Crispy pastry filled with spiced potatoes and peas", price: "₹60", category: "pastries", featured: true },
  { id: 8, name: "Vada Pav", description: "Spicy potato fritter in a soft bun with chutneys", price: "₹70", category: "pastries" },
  { id: 9, name: "Onion Pakora", description: "Crispy onion fritters with chickpea flour", price: "₹80", category: "pastries" },
  { id: 10, name: "Bun Maska", description: "Soft bun with generous serving of butter", price: "₹60", category: "pastries" },
  { id: 11, name: "Kanda Poha", description: "Flattened rice with onions, coriander and spices", price: "₹90", category: "pastries" },
  { id: 12, name: "Upma", description: "Savory semolina porridge with vegetables", price: "₹100", category: "pastries" },
  
  // Specialty Drinks
  { id: 13, name: "Saffron Lassi", description: "Yogurt drink with saffron and cardamom", price: "₹140", category: "specialty", featured: true },
  { id: 14, name: "Rose Milk", description: "Chilled milk with rose syrup", price: "₹110", category: "specialty" },
  { id: 15, name: "Kesar Badam Milk", description: "Milk with saffron and almond", price: "₹130", category: "specialty" },
  { id: 16, name: "Kashmiri Kahwa", description: "Green tea with saffron, cinnamon and cardamom", price: "₹150", category: "specialty" },
  
  // Cold Drinks
  { id: 17, name: "Nimbu Pani", description: "Fresh lime water with salt and sugar", price: "₹70", category: "cold-drinks" },
  { id: 18, name: "Mango Lassi", description: "Yogurt drink with mango pulp", price: "₹120", category: "cold-drinks" },
  { id: 19, name: "Iced Chai", description: "Cold masala chai over ice", price: "₹100", category: "cold-drinks" },
  { id: 20, name: "Jal Jeera", description: "Spiced cumin water with mint", price: "₹80", category: "cold-drinks" },
  { id: 21, name: "Coconut Water", description: "Fresh tender coconut water", price: "₹90", category: "cold-drinks" },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [cart, setCart] = useState<{item: any, quantity: number}[]>([]);
  const [showCart, setShowCart] = useState(false);
  
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  const addToCart = (item: any) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.item.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem => 
          cartItem.item.id === item.id 
            ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem
        );
      } else {
        return [...prevCart, {item, quantity: 1}];
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart(prevCart => 
      prevCart.filter(cartItem => cartItem.item.id !== itemId)
    );
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(cartItem => 
        cartItem.item.id === itemId 
          ? {...cartItem, quantity} 
          : cartItem
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, cartItem) => {
      const price = parseFloat(cartItem.item.price.replace('₹', ''));
      return total + (price * cartItem.quantity);
    }, 0);
  };

  const placeOrder = () => {
    // In a real app, this would send the order to a backend
    alert("Your order has been placed! In a production app, this would connect to a backend API.");
    setCart([]);
    setShowCart(false);
  };
  
  const handleDownloadMenu = () => {
    try {
      downloadMenuPDF(menuItems);
      toast.success("Menu downloaded successfully!");
    } catch (error) {
      console.error("Download failed:", error);
      toast.error("Failed to download menu. Please try again.");
    }
  };
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-chai-800 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-chai-900/90 to-chai-800/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1590841609987-4ac211afdde1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Indian coffee and spices" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-20">
          <h1 className="section-title text-white text-center mb-4">Our Menu</h1>
          <p className="text-xl text-center text-cream-100 max-w-3xl mx-auto">
            Traditional Indian beverages and snacks, crafted with love and authentic spices
          </p>
          <div className="flex justify-center mt-8">
            <Button 
              onClick={handleDownloadMenu}
              className="bg-henna-500 hover:bg-henna-600 flex items-center gap-2"
            >
              <Download size={18} />
              Download Menu PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-white indian-pattern">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant={activeCategory === "all" ? "default" : "outline"}
              className={activeCategory === "all" ? "bg-chai-600 hover:bg-chai-700" : "text-chai-700 border-chai-300"}
              onClick={() => setActiveCategory("all")}
            >
              All Items
            </Button>
            
            {categories.map((category) => (
              <Button 
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  activeCategory === category.id ? "bg-chai-600 hover:bg-chai-700" : "text-chai-700 border-chai-300"
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
                    <h3 className="text-xl font-bold text-chai-700">{item.name}</h3>
                    {item.featured && (
                      <span className="bg-henna-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                    )}
                  </div>
                  <p className="text-chai-600 mt-1">{item.description}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-xl font-bold text-chai-800">{item.price}</p>
                  <Button 
                    onClick={() => addToCart(item)} 
                    variant="outline" 
                    size="sm"
                    className="border-henna-500 text-henna-500 hover:bg-henna-500 hover:text-white"
                  >
                    Add
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Notes */}
          <div className="mt-16 bg-cream-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-chai-700 mb-3">Good to Know</h3>
            <ul className="space-y-2 text-chai-600">
              <li>• All coffees and chai can be customized to your preferred sweetness level.</li>
              <li>• We use organic milk from local dairies.</li>
              <li>• Vegan alternatives are available upon request.</li>
              <li>• Please inform our staff of any allergies or dietary restrictions.</li>
              <li>• Seasonal specialties vary - ask our staff for the day's specials.</li>
            </ul>
          </div>
          
          {/* Cart Button */}
          <div className="mt-16 text-center">
            <Button 
              size="lg" 
              className="bg-henna-500 hover:bg-henna-600 relative"
              onClick={() => setShowCart(true)}
            >
              View Cart
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-henna-500 rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Shopping Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-chai-700">Your Order</h2>
                <Button variant="ghost" onClick={() => setShowCart(false)}>
                  Close
                </Button>
              </div>
              
              {cart.length === 0 ? (
                <p className="text-center py-8 text-chai-600">Your cart is empty.</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((cartItem) => (
                      <div key={cartItem.item.id} className="flex justify-between items-center border-b border-chai-200 pb-4">
                        <div>
                          <h3 className="font-bold text-chai-700">{cartItem.item.name}</h3>
                          <p className="text-sm text-chai-600">{cartItem.item.price} each</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-chai-300 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{cartItem.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-chai-300 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-chai-200 pt-4">
                    <div className="flex justify-between items-center mb-6">
                      <p className="font-bold text-lg text-chai-700">Total</p>
                      <p className="font-bold text-xl text-chai-800">₹{calculateTotal().toFixed(2)}</p>
                    </div>
                    
                    <Button 
                      className="w-full bg-henna-500 hover:bg-henna-600"
                      onClick={placeOrder}
                    >
                      Place Order
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
