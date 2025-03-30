import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Introduction</h2>
            <p className="mb-4">
              Welcome to Marathon Training Plans. We respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data when you visit our website and
              tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">The Data We Collect</h2>
            <p className="mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Identity Data: includes first name, last name, username or similar identifier.</li>
              <li>Contact Data: includes email address.</li>
              <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li>Usage Data: includes information about how you use our website and services.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Your Data</h2>
            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>To provide and improve our services to you.</li>
              <li>To personalize your experience.</li>
              <li>To communicate with you.</li>
              <li>To comply with a legal or regulatory obligation.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Cookies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
              Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <p className="mb-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Third-Party Advertising</h2>
            <p className="mb-4">
              This website contains advertisements from third-party advertising companies, which may use cookies and web beacons to track information such as: your IP address, browser type, time and date, subject of advertisements clicked or scrolled over.
            </p>
            <p className="mb-4">
              We use Google AdSense Advertising on our website. Google, as a third-party vendor, uses cookies to serve ads on our site. Google&apos;s use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Your Data Protection Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have the following data protection rights:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>The right to access, update or to delete the information we have on you.</li>
              <li>The right of rectification - the right to have your information corrected if that information is inaccurate or incomplete.</li>
              <li>The right to object to our processing of your personal data.</li>
              <li>The right of restriction - the right to request that we restrict the processing of your personal information.</li>
              <li>The right to data portability - the right to be provided with a copy of your personal data in a structured, machine-readable and commonly used format.</li>
              <li>The right to withdraw consent at any time where we relied on your consent to process your personal information.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
} 