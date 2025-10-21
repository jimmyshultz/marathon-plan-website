"use client";

import { useState } from "react";
import { TrainingPlan, threeHourPlan } from "../data/trainingPlans";
import PlanSelector from "../components/PlanSelector";
import TrainingPlanDisplay from "../components/TrainingPlanDisplay";

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<TrainingPlan>(threeHourPlan);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Marathon Training Plans</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed">
            Structured 12-week marathon training plans based on Jack Daniels&apos; proven VDOT methodology. 
            Achieve your marathon goals with scientifically-backed training schedules for 3, 4, and 5-hour finish times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/custom-plan" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg transform hover:scale-105"
            >
              ✨ Create Custom Plan
            </a>
            <a 
              href="#training-plans" 
              className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Pre-Made Plans
            </a>
            <a 
              href="/training-guides" 
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors border border-blue-500"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our Training Plans?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Science-Based</h3>
              <p className="text-gray-600">
                Built on Dr. Jack Daniels&apos; VDOT system, used by elite athletes and coaches worldwide 
                for optimal training adaptation and performance.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Goal-Specific</h3>
              <p className="text-gray-600">
                Tailored training plans for 3:00, 4:00, and 5:00 marathon goals, with precise pace 
                zones calculated for your target performance.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Proven Results</h3>
              <p className="text-gray-600">
                Used by thousands of runners to achieve their marathon goals safely and effectively, 
                with progressive training that builds fitness systematically.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Plans Section */}
      <div id="training-plans" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Choose Your Training Plan
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Select a plan based on your marathon goal time. Each plan includes 12 weeks of structured training 
            with detailed daily workouts, pace zones, and weekly mileage progression.
          </p>
          
          <PlanSelector 
            onPlanSelect={setSelectedPlan} 
            selectedPlanGoalTime={selectedPlan.goalTime}
          />
          
          <TrainingPlanDisplay plan={selectedPlan} />
        </div>
      </div>

      {/* Educational Content Preview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Master Marathon Training
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Training Intensities</h3>
              <p className="text-blue-700 text-sm mb-4">
                Learn about easy runs, threshold training, intervals, and marathon pace work.
              </p>
              <a href="/training-guides#intensities" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Learn More →
              </a>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Nutrition Strategy</h3>
              <p className="text-green-700 text-sm mb-4">
                Optimize your fueling for training runs and race day performance.
              </p>
              <a href="/training-guides#nutrition" className="text-green-600 hover:text-green-800 font-medium text-sm">
                Learn More →
              </a>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Injury Prevention</h3>
              <p className="text-yellow-700 text-sm mb-4">
                Stay healthy with proper recovery, strength training, and warning signs to watch.
              </p>
              <a href="/training-guides#injury-prevention" className="text-yellow-600 hover:text-yellow-800 font-medium text-sm">
                Learn More →
              </a>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Race Day Strategy</h3>
              <p className="text-purple-700 text-sm mb-4">
                Execute your best marathon with proven pacing and mental strategies.
              </p>
              <a href="/training-guides#race-strategy" className="text-purple-600 hover:text-purple-800 font-medium text-sm">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Marathon Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of runners who have successfully used our training plans to achieve their marathon goals. 
            Get started today with our comprehensive guides and structured training approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/training-guides" 
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Read Training Guides
            </a>
            <a 
              href="/about" 
              className="inline-block px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn About Our Methodology
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
