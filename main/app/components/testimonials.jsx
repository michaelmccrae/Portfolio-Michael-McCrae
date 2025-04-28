'use client';
import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    text: "At MINING.com, Michael has built one of the most impressive natural resources websites in just a few years. The man works tirelessly to grow his publication, sets high standards for his writers, and motivates them to create their best work.",
    author: "Tommy Humphries",
    title: "Retired CEO",
  },
  {
    text: "Michael is a master at taking complex information and putting it into words that engage the reader and make them care. He's passionate about his craft and drills deep to get to the heart of things.",
    author: "Chris Bryan",
    title: "Public Affairs Manager, City of Burnaby",
  },
];

function RandomTestimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * testimonialsData.length);
    setCurrentTestimonial(testimonialsData[randomIndex]);
  }, []);

  if (!currentTestimonial) {
    return <div>Loading testimonial...</div>;
  }

  return (
    <div>
      <blockquote className="blockquote-leftbar">
        <p>{currentTestimonial.text}</p>
        <cite>
          {currentTestimonial.author}, <span>{currentTestimonial.title}</span>
        </cite>
      </blockquote>
    </div>
  );
}

export default RandomTestimonial;