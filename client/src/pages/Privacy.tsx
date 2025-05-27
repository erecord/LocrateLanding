import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Card className="bg-white dark:bg-dark rounded-xl shadow-md">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                This privacy policy is applicable to the Locrate app (hereinafter referred to as "Application") for mobile devices, which was developed by Locrate (hereinafter referred to as "Service Provider") as a a Freemium service. This service is provided "AS IS".
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">What information does the Application obtain and how is it used?</h3>
              <h4 className="text-lg font-semibold mb-2">User Provided Information</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The Application acquires the information you supply when you download and register the Application. Registration with the Service Provider is not mandatory. However, bear in mind that you might not be able to utilise some of the features offered by the Application unless you register with them.
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The Service Provider may also use the information you provided them to contact you from time to time to provide you with important information, required notices and marketing promotions.
              </p>

              <h4 className="text-lg font-semibold mb-2">Automatically Collected Information</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, and information about the way you use the Application.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Does the Application collect precise real time location information of the device?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                This Application does not gather precise information about the location of your mobile device.
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                This Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:
              </p>

              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-4">
                <li>Geolocation Services: The Service Provider utilises location data to provide features such as personalised content, relevant recommendations, and location-based services.</li>
                <li>Analytics and Improvements: Aggregated and anonymised location data helps the Service Provider to analyse user behaviour, identify trends, and improve the overall performance and functionality of the Application.</li>
                <li>Third-Party Services: Periodically, the Service Provider may transmit anonymised location data to external services. These services assist them in enhancing the Application and optimising their offerings.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Do third parties see and/or have access to information obtained by the Application?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Only aggregated, anonymised data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Please note that the Application utilises third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
              </p>

              <ul className="text-gray-600 dark:text-gray-400 mb-4 list-disc pl-6">
                <li><a href="https://www.google.com/policies/privacy/" className="text-primary hover:underline">Google Play Services</a></li>
                <li><a href="https://supabase.com/privacy" className="text-primary hover:underline">Supabase</a></li>
                <li><a href="https://sentry.io/privacy/" className="text-primary hover:underline">Sentry</a></li>
              </ul>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The Service Provider may disclose User Provided and Automatically Collected Information:
              </p>

              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-4">
                <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">What are my opt-out rights?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You can halt all collection of information by the Application easily by uninstalling the Application. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Data Retention Policy, Managing Your Information</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. The Service Provider will retain Automatically Collected information for up to 24 months and thereafter may store it in aggregate. If you'd like the Service Provider to delete User Provided Data that you have provided via the Application, please contact them at <a href="mailto:contact@locrate.app" className="text-primary hover:underline">contact@locrate.app</a> and we will respond in a reasonable time. Please note that some or all of the User Provided Data may be required in order for the Application to function properly.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Children</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (<a href="mailto:contact@locrate.app" className="text-primary hover:underline">contact@locrate.app</a>) so that they will be able to take the necessary actions.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Security</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The Service Provider are concerned about safeguarding the confidentiality of your information. The Service Provider provide physical, electronic, and procedural safeguards to protect information we process and maintain. For example, we limit access to this information to authorised employees and contractors who need to know that information in order to operate, develop or improve their Application. Please be aware that, although we endeavour provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Changes</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                This privacy policy is effective as of 2025-03-01
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Your Consent</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                By using the Application, you are giving your consent to the Service Provider processing of your information as set forth in this Privacy Policy now and as amended by us. "Processing," means using cookies on a computer/hand held device or using or touching information in any way, including, but not limited to, collecting, storing, deleting, using, combining and disclosing information.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Contact us</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at <a href="mailto:contact@locrate.app" className="text-primary hover:underline">contact@locrate.app</a>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Privacy;
