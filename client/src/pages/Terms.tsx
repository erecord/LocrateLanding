import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Card className="bg-white dark:bg-dark rounded-xl shadow-md">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">Terms and Conditions</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-4">Last updated: August 1, 2023</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                By downloading, installing, or using the Locrate application ("App"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">2. Description of Service</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Locrate is a personal inventory management application that allows users to create virtual representations of their physical items, organize them into virtual boxes, and locate them using QR code technology.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">3. User Accounts</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                To use certain features of the App, you must register for an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4. Privacy</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and disclose information about you.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">5. User Content</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You retain ownership of any content you upload to the App. By uploading content, you grant us a non-exclusive, worldwide, royalty-free license to use, copy, modify, and display the content in connection with the App.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">6. Prohibited Uses</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You agree not to use the App for any illegal purpose or in any manner that could damage, disable, or impair the App or interfere with any other party's use of the App.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">7. Termination</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We reserve the right to terminate or suspend your account and access to the App at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the App, us, or third parties, or for any other reason.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">8. Disclaimer of Warranties</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The App is provided "as is" and "as available" without any warranties of any kind, either express or implied.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">9. Limitation of Liability</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                In no event shall Locrate, its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">10. Changes to Terms</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We may modify these Terms at any time. Your continued use of the App after any such changes constitutes your acceptance of the new Terms.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">11. Governing Law</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the App is operated, without regard to its conflict of law provisions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Terms;
