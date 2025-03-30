import { TrainingPlan } from "../data/trainingPlans";

interface PaceCardProps {
  plan: TrainingPlan;
}

export default function PaceCard({ plan }: PaceCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Training Paces (VDOT {plan.vdot})</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-blue-800">Easy (E)</h3>
          <p className="text-blue-700 font-mono">{plan.paces.easy}</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-green-800">Marathon (M)</h3>
          <p className="text-green-700 font-mono">{plan.paces.marathon}</p>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-yellow-800">Threshold (T)</h3>
          <p className="text-yellow-700 font-mono">{plan.paces.threshold}</p>
        </div>
        
        <div className="bg-red-50 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-red-800">Interval (I)</h3>
          <p className="text-red-700 font-mono">{plan.paces.interval}</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-purple-800">Repetition (R)</h3>
          <p className="text-purple-700 font-mono">{plan.paces.repetition}</p>
        </div>
      </div>
    </div>
  );
} 