
import { jsPDF } from 'jspdf';

export const generateMenuPDF = (menuItems) => {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(22);
  doc.setTextColor(120, 60, 30); // Brown color
  doc.text('Daily Grind Menu', 105, 20, { align: 'center' });
  
  // Add subtitle
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text('Traditional Indian beverages and snacks', 105, 30, { align: 'center' });
  
  let yPos = 50;
  let currentCategory = '';
  
  // Sort items by category
  const sortedItems = [...menuItems].sort((a, b) => 
    a.category.localeCompare(b.category)
  );
  
  // Add menu items
  sortedItems.forEach(item => {
    // Add category headers
    if (item.category !== currentCategory) {
      currentCategory = item.category;
      
      // Format category name
      let categoryName;
      switch(currentCategory) {
        case 'coffee': categoryName = 'Coffee & Chai'; break;
        case 'pastries': categoryName = 'Snacks'; break;
        case 'specialty': categoryName = 'Specialty Drinks'; break;
        case 'cold-drinks': categoryName = 'Cold Beverages'; break;
        default: categoryName = currentCategory;
      }
      
      doc.setFontSize(14);
      doc.setTextColor(180, 90, 40); // Orange-brown
      doc.text(categoryName, 20, yPos);
      yPos += 10;
    }
    
    // Check if we need to add a new page
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    
    // Add item details
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(item.name, 20, yPos);
    
    // Add price aligned to the right
    doc.text(item.price, 190, yPos, { align: 'right' });
    
    // Add description
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(item.description, 20, yPos + 6);
    
    yPos += 16;
  });
  
  // Footer
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text('www.dailygrind.com', 105, 285, { align: 'center' });
  }
  
  return doc;
};

export const downloadMenuPDF = (menuItems) => {
  const doc = generateMenuPDF(menuItems);
  doc.save('daily-grind-menu.pdf');
};
