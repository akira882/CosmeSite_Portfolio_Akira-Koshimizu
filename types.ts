import React from 'react';

export interface ProductShade {
  id: string;
  name: string;
  hex: string;
  description: string;
  tone: 'Fair' | 'Light' | 'Medium' | 'Deep';
}

export interface Testimonial {
  id: number;
  name: string;
  age: number;
  skinType: string;
  quote: string;
  rating: number;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}