import { TrainingPlan } from "../data/trainingPlans";
import PaceCard from "./PaceCard";
import TrainingWeek from "./TrainingWeek";

interface TrainingPlanDisplayProps {
  plan: TrainingPlan;
}

export default function TrainingPlanDisplay({ plan }: TrainingPlanDisplayProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-black text-center mb-8">
        {plan.goalTime} Marathon Training Plan
      </h1>
      
      <PaceCard plan={plan} />
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">12-Week Training Schedule</h2>
        
        {plan.weeks.map((week) => (
          <TrainingWeek key={week.week} week={week} />
        ))}
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Training Plan Notes</h2>
        <ul className="list-disc pl-6 space-y-2 text-black">
          <li>Strides: Add 4-6 strides (15-20 sec at R pace) after easy runs 2-3 times per week.</li>
          <li>Cross-training: Optional, but keep it light.</li>
          <li>Recovery: Take full recovery on easy days.</li>
          <li>Fueling: Practice race-day nutrition during long runs.</li>
          <li>Taper: Reduce volume but keep some intensity to stay sharp.</li>
        </ul>
      </div>
    </div>
  );
} 