import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
      <div className="space-y-6 text-lg">
        <p className="flex items-center gap-3"><MapPin /> 205 Blackmarsh Road, St. John's, NL</p>
        <p className="flex items-center gap-3"><Phone /> (123) 456-7890</p>
        <p className="flex items-center gap-3"><Mail /> contact@megabazaar.ca</p>
      </div>
      <form className="mt-10 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-xl" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-xl" />
        <textarea placeholder="Your Message" rows="5" className="w-full p-3 border rounded-xl" />
        <button type="submit" className="bg-gold text-black py-3 px-6 rounded-xl hover:bg-yellow-400">Send Message</button>
      </form>
    </div>
  );
}