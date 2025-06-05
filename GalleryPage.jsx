import React from 'react';

const photos = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
  '/images/photo5.jpg',
  '/images/photo6.jpg',
  '/images/photo7.jpg',
  '/images/photo8.jpg'
];

export default function GalleryPage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-10">Gallery</h1>
      <p className="text-center mb-6">Our food, our people, our store – captured in moments</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((src, index) => (
          <div key={index} className="bg-gray-300 h-40 rounded-xl overflow-hidden">
            <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}