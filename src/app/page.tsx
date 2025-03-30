"use client";

import { useState } from "react";
import { TrainingPlan, threeHourPlan } from "../data/trainingPlans";
import PlanSelector from "../components/PlanSelector";
import TrainingPlanDisplay from "../components/TrainingPlanDisplay";

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<TrainingPlan>(threeHourPlan);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Marathon Training Plans</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Structured 12-week marathon training plans based on Jack Daniels&apos; VDOT methodology
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <PlanSelector 
          onPlanSelect={setSelectedPlan} 
          selectedPlanGoalTime={selectedPlan.goalTime}
        />
        
        <TrainingPlanDisplay plan={selectedPlan} />
      </div>
    </main>
  );
}
