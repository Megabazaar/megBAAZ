import React from 'react';
import { Card, CardContent } from './ui/Card';

const grocerySections = [
  {
    title: "Frozen Foods",
    items: ["Ashoka Parathas", "Vadilal Kulchas", "South Indian Idli & Vada"]
  },
  {
    title: "Snacks & Ready-to-Eat",
    items: ["Haldiram’s Namkeen", "Ching’s Instant Noodles", "Frozen Puffs"]
  },
  {
    title: "Rice & Staples",
    items: ["Kali Jeera Rice", "Chinigura Rice", "Basmati Rice"]
  },
  {
    title: "Spices & Condiments",
    items: ["Shan Masalas", "Everest Spices", "Aachi Pickles"]
  }
];

export default function GroceryPage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-10">Grocery Essentials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {grocerySections.map((section) => (
          <Card key={section.title}>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
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