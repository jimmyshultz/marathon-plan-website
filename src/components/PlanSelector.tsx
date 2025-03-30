import { TrainingPlan, trainingPlans } from "../data/trainingPlans";

interface PlanSelectorProps {
  onPlanSelect: (plan: TrainingPlan) => void;
  selectedPlanGoalTime: string;
}

export default function PlanSelector({ onPlanSelect, selectedPlanGoalTime }: PlanSelectorProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 md:p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Select Marathon Goal Time</h2>
      
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        {trainingPlans.map((plan) => (
          <button
            key={plan.goalTime}
            onClick={() => onPlanSelect(plan)}
            className={`px-6 py-3 rounded-md text-lg font-semibold transition-colors min-w-[140px] md:min-w-[160px] ${
              selectedPlanGoalTime === plan.goalTime
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow"
            }`}
          >
            {plan.goalTime}
          </button>
        ))}
      </div>
    </div>
  );
} 