import { TrainingWeek as TrainingWeekType } from "../data/trainingPlans";

interface TrainingWeekProps {
  week: TrainingWeekType;
}

export default function TrainingWeek({ week }: TrainingWeekProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">Week {week.week}</h3>
        <div className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full">
          {week.totalMileage} miles
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {week.days.map((day, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-md flex flex-col min-h-[160px] ${
              day.day.includes("Sunday") 
                ? "bg-amber-50 border border-amber-200" 
                : day.description.includes("@ M pace") || day.description.includes("@ T pace") || day.description.includes("@ I pace") || day.description.includes("@ R pace")
                  ? "bg-green-50 border border-green-200"
                  : "bg-gray-50 border border-gray-200"
            }`}
          >
            <h4 className="font-semibold text-gray-800">{day.day}</h4>
            <p className="text-sm text-gray-700 mt-1">{day.description}</p>
            <p className="text-lg text-gray-700 font-semibold mt-auto">{day.distance} miles</p>
          </div>
        ))}
      </div>
    </div>
  );
} 