import React from 'react';
import { Button } from './components/ui/button';

export default function SmartCourierOnboarding() {
  return (
    <div className="min-h-screen p-10 text-center bg-gray-50 font-sans">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Smart Courier AI</h1>
      <p className="text-gray-600 text-lg mb-6">Self-learning courier optimization and fraud detection tool.</p>
      <Button className="bg-purple-600 text-white px-4 py-2 rounded">Get Started</Button>
    </div>
  );
}
