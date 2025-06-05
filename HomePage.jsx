import React from 'react';

export default function HomePage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-5xl font-bold text-gold mb-4">Welcome to Mega Bazaar</h1>
      <p className="text-xl mb-6 max-w-3xl mx-auto">
        The Indian Baarchi Inc. is your destination for authentic Indian, Pakistani, and Bangladeshi
        foods and products. Enjoy our retail store and dine-in/takeout restaurant with flavors from
        around the world.
      </p>
      <div className="space-y-4 text-lg max-w-xl mx-auto">
        <p><strong>Address:</strong> 205 Blackmarsh Road, St. John's, NL</p>
        <p><strong>Hours:</strong> Mon-Sun: 10am - 9pm</p>
        <p><strong>Contact:</strong> (123) 456-7890 | contact@megabazaar.ca</p>
      </div>
      <div className="mt-8">
        <button className="bg-gold text-black py-3 px-6 rounded-xl hover:bg-yellow-400 mr-4">Order Online</button>
        <button className="bg-black text-gold py-3 px-6 rounded-xl hover:bg-gray-800">Explore Menu</button>
      </div>
    </div>
  );
}