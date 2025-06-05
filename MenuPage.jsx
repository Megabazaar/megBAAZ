import React from 'react';
import { Card, CardContent } from './ui/Card';

const menuItems = [
  {
    category: "Appetizers",
    items: ["Samosa Chaat", "Pani Puri", "Aloo Tikki Chaat", "Veg Samosa", "Chicken Samosa"]
  },
  {
    category: "Street Food",
    items: ["Vada Pav", "Dabeli", "Sandwiches", "Puffs"]
  },
  {
    category: "Main Course",
    items: ["Masala Dosa", "Paneer Dosa", "Mysore Dosa", "Momos", "Hakka Noodles"]
  },
  {
    category: "Desserts & Beverages",
    items: ["Shrikhand", "Indian Ice Creams", "Mango Lassi"]
  }
];

export default function MenuPage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-10">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuItems.map((section) => (
          <Card key={section.category}>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{section.category}</h2>
              <ul className="list-disc list-inside">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}