import { GeneratedPlan } from "@/utils/marathonPlanGenerator";

interface CustomPlanDisplayProps {
  plan: GeneratedPlan;
  marathonDate: string;
  planText: string;
}

export default function CustomPlanDisplay({
  plan,
  marathonDate,
  planText,
}: CustomPlanDisplayProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(planText);
    alert("Training plan copied to clipboard!");
  };

  const downloadAsTxt = () => {
    const blob = new Blob([planText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `marathon-training-plan-${plan.goalTime.replace(/:/g, "-")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-lg">
        <h2 className="text-3xl font-bold mb-2">Your Custom Training Plan</h2>
        <p className="text-lg">
          Goal Time: {plan.goalTime} | Race Date:{" "}
          {new Date(marathonDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })} | VDOT: {plan.vdot}
        </p>
      </div>

      {/* Pace Card */}
      <div className="bg-white shadow-md border-x border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Training Paces (Based on Jack Daniels&apos; VDOT)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="text-sm font-semibold text-green-800 mb-1">Easy (E)</div>
            <div className="text-lg font-bold text-green-900">{plan.paces.easy}</div>
            <div className="text-xs text-green-700 mt-1">Recovery & base building</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="text-sm font-semibold text-blue-800 mb-1">Marathon (M)</div>
            <div className="text-lg font-bold text-blue-900">{plan.paces.marathon}</div>
            <div className="text-xs text-blue-700 mt-1">Goal race pace</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="text-sm font-semibold text-yellow-800 mb-1">Threshold (T)</div>
            <div className="text-lg font-bold text-yellow-900">{plan.paces.threshold}</div>
            <div className="text-xs text-yellow-700 mt-1">Tempo runs</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <div className="text-sm font-semibold text-orange-800 mb-1">Interval (I)</div>
            <div className="text-lg font-bold text-orange-900">{plan.paces.interval}</div>
            <div className="text-xs text-orange-700 mt-1">VO2max work</div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="text-sm font-semibold text-red-800 mb-1">Repetition (R)</div>
            <div className="text-lg font-bold text-red-900">{plan.paces.repetition}</div>
            <div className="text-xs text-red-700 mt-1">Speed & form</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white p-4 border-x border-gray-200 flex flex-wrap gap-3">
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          Copy to Clipboard
        </button>
        <button
          onClick={downloadAsTxt}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download as Text
        </button>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
          Print
        </button>
      </div>

      {/* Weekly Plan Display */}
      <div className="bg-white shadow-lg rounded-b-lg border border-gray-200">
        {plan.weeks.map((weekPlan) => (
          <div
            key={weekPlan.week}
            className="border-b border-gray-200 last:border-b-0"
          >
            {/* Week Header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">
                Week {weekPlan.week}
                <span className="ml-4 text-blue-600">
                  {weekPlan.totalMileage} miles total
                </span>
              </h3>
            </div>

            {/* Days Grid */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Day
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Miles
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Workout Type
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {weekPlan.days.map((day, idx) => (
                    <tr
                      key={idx}
                      className={`${
                        day.miles === 0
                          ? "bg-gray-50"
                          : day.workoutType === "RACE DAY 🏁"
                          ? "bg-yellow-50"
                          : day.workoutType.includes("Interval") ||
                            day.workoutType.includes("Tempo")
                          ? "bg-blue-50"
                          : day.workoutType === "Long Run" ||
                            day.workoutType.includes("Marathon Pace")
                          ? "bg-purple-50"
                          : "bg-white"
                      } hover:bg-gray-100 transition-colors`}
                    >
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {day.day}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {day.miles > 0 ? day.miles : "REST"}
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                        {day.workoutType}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {day.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* Legend */}
        <div className="bg-gray-50 px-6 py-4 rounded-b-lg">
          <h4 className="font-semibold text-gray-800 mb-2">Pace Key:</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-sm text-gray-700">
            <div>
              <strong>E:</strong> Easy pace
            </div>
            <div>
              <strong>T:</strong> Tempo/Threshold
            </div>
            <div>
              <strong>I:</strong> Interval pace
            </div>
            <div>
              <strong>M:</strong> Marathon pace
            </div>
            <div>
              <strong>WU:</strong> Warmup
            </div>
            <div>
              <strong>CD:</strong> Cooldown
            </div>
          </div>
        </div>
      </div>

      {/* Training Tips */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-blue-900 mb-4">
          Important Training Notes
        </h3>
        <ul className="space-y-2 text-blue-900">
          <li className="flex items-start">
            <span className="mr-2">📌</span>
            <span>
              <strong>Easy Runs:</strong> Should feel comfortable. You should be
              able to hold a conversation.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">📌</span>
            <span>
              <strong>Long Runs:</strong> Critical for building endurance. Start
              slow and maintain a steady effort.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">📌</span>
            <span>
              <strong>Interval & Tempo Workouts:</strong> These improve your
              speed and lactate threshold. Follow the prescribed paces.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">📌</span>
            <span>
              <strong>Rest Days:</strong> Essential for recovery and adaptation.
              Don&apos;t skip them!
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">📌</span>
            <span>
              <strong>Listen to Your Body:</strong> If you&apos;re overly fatigued
              or injured, adjust the plan accordingly.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">📌</span>
            <span>
              <strong>Nutrition:</strong> Practice your race-day nutrition during
              long runs.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
