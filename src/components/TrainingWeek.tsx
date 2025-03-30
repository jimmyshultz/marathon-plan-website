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
        {week.days.map((day, index) => {
          // Define workout type colors with proper precedence
          let workoutStyle = "bg-gray-50 border border-gray-200"; // Default: Easy runs
          
          if (day.description.includes("M pace")) {
            workoutStyle = "bg-green-50 border border-green-200"; // Marathon pace
          }
          
          if (day.description.includes("T pace")) {
            workoutStyle = "bg-yellow-50 border border-yellow-200"; // Threshold pace
          }
          
          if (day.description.includes("I pace")) {
            workoutStyle = "bg-red-50 border border-red-200"; // Interval pace
          }
          
          if (day.description.includes("R pace")) {
            workoutStyle = "bg-purple-50 border border-purple-200"; // Repetition pace (highest precedence)
          }
          
          return (
            <div 
              key={index} 
              className={`p-4 rounded-md flex flex-col min-h-[160px] ${workoutStyle}`}
            >
              <h4 className="font-semibold text-gray-800">{day.day}</h4>
              <p className="text-sm text-black mt-1">{day.description}</p>
              <p className="text-lg text-gray-700 font-semibold mt-auto">{day.distance} miles</p>
            </div>
          );
        })}
      </div>
    </div>
  );
} 