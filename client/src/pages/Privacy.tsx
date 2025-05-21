import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Card className="bg-white dark:bg-dark rounded-xl shadow-md">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-4">Last updated: August 1, 2023</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">1. Introduction</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                This Privacy Policy describes how Locrate ("we", "our", or "us") collects, uses, and discloses your information when you use our mobile application ("App").
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">2. Information We Collect</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We collect information that you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include:
              </p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-4">
                <li>Account information (e.g., name, email address, password)</li>
                <li>Profile information (e.g., profile picture)</li>
                <li>Information about your items and virtual boxes</li>
                <li>Communications you send to us</li>
              </ul>

              <p className="text-gray-600 dark:text-gray-400 mb-4">We also automatically collect certain information when you use the App, including:</p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-4">
                <li>Device information (e.g., hardware model, operating system)</li>
                <li>Log information (e.g., time and duration of use, features used)</li>
                <li>Location information (if you grant permission)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">3. How We Use Your Information</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-4">
                <li>Provide, maintain, and improve the App</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Personalize and improve the App</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">4. Sharing of Information</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-4">
                <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
                <li>In response to a request for information if we believe disclosure is in accordance with applicable law</li>
                <li>If we believe your actions are inconsistent with our user agreements or policies</li>
                <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
                <li>With your consent or at your direction</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">5. Data Security</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">6. Your Choices</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You can access and update certain information about you from within the App. You can also opt out of receiving promotional communications from us by following the instructions in those communications.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">7. Changes to this Policy</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, provide you with additional notice.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">8. Contact Us</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                If you have any questions about this Privacy Policy, please contact us at privacy@locrate.app.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Privacy;
