import Link from 'next/link';

export default function TrainingGuides() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Marathon Training Guides</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Comprehensive guides to help you understand and optimize your marathon training journey
        </p>
        
        <div className="max-w-6xl mx-auto">
          {/* Training Intensity Guide */}
          <div className="bg-white shadow-md rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Understanding Training Intensities</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Easy Runs (E)</h3>
                <p className="text-gray-700 mb-3">70-80% of total weekly mileage</p>
                <ul className="text-sm text-gray-600 list-disc ml-4">
                  <li>Build aerobic capacity</li>
                  <li>Promote recovery</li>
                  <li>Develop capillary density</li>
                  <li>Should feel conversational</li>
                </ul>
              </div>
              
              <div className="border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Marathon Pace (M)</h3>
                <p className="text-gray-700 mb-3">Your goal race pace</p>
                <ul className="text-sm text-gray-600 list-disc ml-4">
                  <li>Practice race rhythm</li>
                  <li>Build race-specific endurance</li>
                  <li>Mental preparation</li>
                  <li>Fuel strategy practice</li>
                </ul>
              </div>
              
              <div className="border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">Threshold (T)</h3>
                <p className="text-gray-700 mb-3">Comfortably hard effort</p>
                <ul className="text-sm text-gray-600 list-disc ml-4">
                  <li>Improve lactate clearance</li>
                  <li>Enhance running economy</li>
                  <li>15-20 second/mile faster than M pace</li>
                  <li>Sustainable for 15-60 minutes</li>
                </ul>
              </div>
              
              <div className="border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Interval (I)</h3>
                <p className="text-gray-700 mb-3">VO2 max development</p>
                <ul className="text-sm text-gray-600 list-disc ml-4">
                  <li>Improve maximum oxygen uptake</li>
                  <li>Boost running speed</li>
                  <li>3-8 minute repetitions</li>
                  <li>Equal recovery time</li>
                </ul>
              </div>
              
              <div className="border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Repetition (R)</h3>
                <p className="text-gray-700 mb-3">Speed and running form</p>
                <ul className="text-sm text-gray-600 list-disc ml-4">
                  <li>Improve neuromuscular power</li>
                  <li>Enhance running economy</li>
                  <li>30 seconds to 2 minutes</li>
                  <li>Long recovery intervals</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Weekly Structure Guide */}
          <div className="bg-white shadow-md rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Weekly Training Structure</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Typical Week Layout</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span className="font-medium">Monday</span>
                    <span className="text-sm text-gray-600">Easy run or rest</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                    <span className="font-medium">Tuesday</span>
                    <span className="text-sm text-gray-600">Quality workout (T/I/R)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span className="font-medium">Wednesday</span>
                    <span className="text-sm text-gray-600">Easy run</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span className="font-medium">Thursday</span>
                    <span className="text-sm text-gray-600">Easy run</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span className="font-medium">Friday</span>
                    <span className="text-sm text-gray-600">Easy run or rest</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span className="font-medium">Saturday</span>
                    <span className="text-sm text-gray-600">Easy run</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span className="font-medium">Sunday</span>
                    <span className="text-sm text-gray-600">Long run (with M pace)</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Principles</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Hard/Easy Pattern:</strong> Alternate challenging workouts with recovery runs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Progressive Overload:</strong> Gradually increase training stress over time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Specificity:</strong> Training becomes more race-specific as you progress</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Recovery:</strong> Adaptation happens during rest, not during work</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Nutrition and Hydration */}
          <div className="bg-white shadow-md rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Nutrition and Hydration Strategy</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Daily Nutrition</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 55-65% carbohydrates</li>
                  <li>• 15-20% protein</li>
                  <li>• 20-30% healthy fats</li>
                  <li>• Eat within 30 min post-workout</li>
                  <li>• Prioritize whole foods</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Race Day Fueling</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 30-60g carbs per hour after mile 8</li>
                  <li>• Practice fueling strategy in training</li>
                  <li>• Avoid trying new foods on race day</li>
                  <li>• Start fueling early, before you feel you need it</li>
                  <li>• Consider both liquid and solid options</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Hydration Guidelines</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 16-24 oz fluid per lb of weight lost</li>
                  <li>• Include electrolytes in longer runs</li>
                  <li>• Monitor urine color</li>
                  <li>• Pre-hydrate 2-3 hours before long runs</li>
                  <li>• Don&apos;t over-hydrate on race day</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Injury Prevention */}
          <div className="bg-white shadow-md rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Injury Prevention and Recovery</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Essential Recovery Practices</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Sleep</h4>
                    <p className="text-sm text-gray-600">7-9 hours per night for optimal recovery and adaptation</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Cross Training</h4>
                    <p className="text-sm text-gray-600">Swimming, cycling, or elliptical 1-2x per week</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Strength Training</h4>
                    <p className="text-sm text-gray-600">2-3x per week focusing on running-specific movements</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Mobility Work</h4>
                    <p className="text-sm text-gray-600">Daily dynamic warm-up and post-run stretching</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Warning Signs to Watch</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <ul className="text-sm text-red-800 space-y-2">
                    <li>• Persistent pain that doesn&apos;t improve with rest</li>
                    <li>• Pain that worsens during a run</li>
                    <li>• Significant changes in running form</li>
                    <li>• Unusually elevated resting heart rate</li>
                    <li>• Persistent fatigue or mood changes</li>
                    <li>• Pain that affects daily activities</li>
                  </ul>
                  <p className="text-xs text-red-700 mt-3 font-medium">
                    When in doubt, consult with a healthcare professional or sports medicine specialist.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Race Day Strategy */}
          <div className="bg-white shadow-md rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Race Day Strategy</h2>
            
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Miles 1-6</h4>
                <p className="text-sm text-blue-700">Start conservatively, 10-15 seconds slower than goal pace</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Miles 7-18</h4>
                <p className="text-sm text-green-700">Settle into goal marathon pace, stay relaxed</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Miles 19-24</h4>
                <p className="text-sm text-yellow-700">Focus on form, mental strength, and fueling</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Miles 25-26.2</h4>
                <p className="text-sm text-red-700">Give everything you have left, push to the finish</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">Pre-Race Checklist</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <h5 className="font-medium mb-2">Week Before:</h5>
                  <ul className="space-y-1">
                    <li>• Reduce training volume (taper)</li>
                    <li>• Increase carbohydrate intake</li>
                    <li>• Finalize race strategy</li>
                    <li>• Prepare all gear</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Race Morning:</h5>
                  <ul className="space-y-1">
                    <li>• Wake up 3-4 hours before start</li>
                    <li>• Eat familiar breakfast</li>
                    <li>• Arrive early for warm-up</li>
                    <li>• Stay calm and confident</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mr-4">
              View Training Plans
            </Link>
            <Link href="/about" className="inline-block px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}