import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About Marathon Training Plans</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Marathon Training Plans is dedicated to providing runners with scientifically-backed, 
              structured training programs that help achieve personal marathon goals. Our plans are based 
              on the proven methodologies of renowned exercise physiologist Dr. Jack Daniels, whose research 
              has shaped modern distance running training for decades.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Science Behind Our Plans</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Dr. Jack Daniels' VDOT (VO2 max) system is the foundation of our training plans. This system:
            </p>
            <ul className="list-disc ml-6 mb-6 text-gray-700">
              <li>Uses your current fitness level to determine optimal training paces</li>
              <li>Ensures each workout has a specific physiological purpose</li>
              <li>Prevents overtraining while maximizing adaptation</li>
              <li>Adapts to your individual capabilities and goals</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Training Plan Philosophy</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our 12-week marathon training plans are designed around five key training intensities:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Easy Runs</h3>
                <p className="text-blue-700 text-sm">Build aerobic capacity and promote recovery</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Marathon Pace</h3>
                <p className="text-green-700 text-sm">Practice race pace and build specific endurance</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Threshold Runs</h3>
                <p className="text-yellow-700 text-sm">Improve lactate clearance and running economy</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Interval Training</h3>
                <p className="text-red-700 text-sm">Boost VO2 max and running speed</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Who Are These Plans For?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our training plans cater to experienced runners with specific marathon time goals:
            </p>
            <ul className="list-disc ml-6 mb-6 text-gray-700">
              <li><strong>3-Hour Marathon:</strong> For advanced runners with substantial training background</li>
              <li><strong>4-Hour Marathon:</strong> For intermediate to advanced runners seeking improvement</li>
              <li><strong>5-Hour Marathon:</strong> For recreational runners aiming to finish strong</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Important Disclaimer</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800 font-medium mb-2">Medical and Training Advice</p>
              <p className="text-yellow-700 text-sm">
                These training plans are for educational purposes only. Always consult with a healthcare 
                provider before beginning any new exercise program. Consider working with a qualified 
                running coach for personalized guidance, especially if you're new to marathon training 
                or have a history of injuries.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Getting Started</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Before beginning any of our marathon training plans, we recommend:
            </p>
            <ul className="list-disc ml-6 mb-6 text-gray-700">
              <li>Having a solid running base of 30-40 miles per week</li>
              <li>Being injury-free for at least 2-3 months</li>
              <li>Having completed at least one half marathon</li>
              <li>Understanding your current fitness level and realistic goals</li>
            </ul>
          </div>
          
          <div className="text-center">
            <Link href="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mr-4">
              View Training Plans
            </Link>
            <Link href="/training-guides" className="inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              Training Guides
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}