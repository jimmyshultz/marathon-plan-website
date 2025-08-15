import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Have questions about our training plans? Need help with your marathon preparation? We'd love to hear from you!
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Us</h3>
                    <p className="text-gray-600">info@marathontrainingplans.com</p>
                    <p className="text-sm text-gray-500 mt-1">We typically respond within 24-48 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Support</h3>
                    <p className="text-gray-600">Training plan questions and technical support</p>
                    <p className="text-sm text-gray-500 mt-1">Available Monday-Friday, 9 AM - 5 PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Resources</h3>
                    <p className="text-gray-600">Training guides, tips, and educational content</p>
                    <p className="text-sm text-gray-500 mt-1">Explore our comprehensive training library</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Professional Coaching</h4>
                <p className="text-blue-700 text-sm">
                  While our training plans provide excellent structure, consider working with a certified 
                  running coach for personalized guidance, especially if you're new to marathon training 
                  or have specific performance goals.
                </p>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Can I modify the training plans?</h3>
                  <p className="text-gray-600 text-sm">
                    Our plans are designed to be flexible. You can adjust easy run distances, swap workout days, 
                    or modify long runs based on your schedule and recovery needs.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">What if I miss workouts?</h3>
                  <p className="text-gray-600 text-sm">
                    Don't try to make up missed workouts. Instead, continue with the current week's plan 
                    or repeat the week if you missed multiple key sessions.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">How do I determine my current fitness level?</h3>
                  <p className="text-gray-600 text-sm">
                    Use a recent race time (5K, 10K, or half marathon) to estimate your VDOT and determine 
                    which plan is appropriate for your goals.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Should I run if I feel pain?</h3>
                  <p className="text-gray-600 text-sm">
                    No. Stop running if you experience pain and consult with a healthcare professional. 
                    It's better to take a few days off than to risk a serious injury.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">How important is cross-training?</h3>
                  <p className="text-gray-600 text-sm">
                    Cross-training can help prevent injury and maintain fitness. Swimming, cycling, 
                    and strength training are excellent supplements to your running.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Can beginners use these plans?</h3>
                  <p className="text-gray-600 text-sm">
                    These plans are designed for experienced runners. Beginners should build a base of 
                    30-40 miles per week before attempting marathon-specific training.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feedback Section */}
          <div className="mt-8 bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Share Your Experience</h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear about your marathon training journey! Your feedback helps us improve 
              our training plans and assists other runners in their preparation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Success Stories</h3>
                <p className="text-sm text-gray-600">
                  Share your marathon achievements and how our plans helped you reach your goals.
                </p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Plan Feedback</h3>
                <p className="text-sm text-gray-600">
                  Let us know what worked well and what could be improved in our training plans.
                </p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Content Requests</h3>
                <p className="text-sm text-gray-600">
                  Suggest topics for new training guides or additional resources you'd find helpful.
                </p>
              </div>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-semibold text-yellow-800 mb-2">Important Notice</h3>
            <p className="text-yellow-700 text-sm">
              This website provides general training information for educational purposes only. 
              Always consult with healthcare professionals before beginning any new exercise program. 
              We are not responsible for any injuries that may result from following our training plans.
            </p>
          </div>
          
          <div className="text-center mt-8">
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