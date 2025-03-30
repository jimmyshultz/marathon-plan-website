import { useState } from "react";
import { TrainingPlan, trainingPlans } from "../data/trainingPlans";

interface PlanSelectorProps {
  onPlanSelect: (plan: TrainingPlan) => void;
  selectedPlanGoalTime: string;
}

export default function PlanSelector({ onPlanSelect, selectedPlanGoalTime }: PlanSelectorProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Marathon Goal Time</h2>
      
      <div className="flex flex-wrap gap-4">
        {trainingPlans.map((plan) => (
          <button
            key={plan.goalTime}
            onClick={() => onPlanSelect(plan)}
            className={`px-6 py-3 rounded-md text-lg font-semibold transition-colors ${
              selectedPlanGoalTime === plan.goalTime
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {plan.goalTime}
          </button>
        ))}
      </div>
    </div>
  );
} 