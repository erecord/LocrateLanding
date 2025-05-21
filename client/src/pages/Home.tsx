import { useEffect } from "react";
import { useLocation } from "wouter";
import { Box, QrCode, Search, Cloud, Share, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Handle hash navigation on load
    if (location.includes("#")) {
      const id = location.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Never lose track of your items again</h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Locrate helps you organize your belongings with virtual boxes and QR codes, making finding them as simple as scanning with your phone.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium"
                >
                  <i className="fab fa-apple mr-2"></i> App Store
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium"
                >
                  <i className="fab fa-google-play mr-2"></i> Google Play
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=700&q=80"
                alt="Locrate app on smartphone"
                className="rounded-xl shadow-lg w-3/4 h-auto max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Features that simplify your life</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how Locrate makes organizing and finding your items easier than ever before.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-dark rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <Box className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Virtual Boxes</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create digital containers for your physical items. Organize and categorize your belongings into intuitive virtual boxes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-dark rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <QrCode className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">QR Code Tracking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Generate unique QR codes for your boxes and items. Simply scan them with your phone to instantly locate and identify.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-dark rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Search</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quickly find any item with our powerful search function. Filter by categories, locations, or custom tags.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-dark rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <Cloud className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud Sync</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access your inventory from any device. Your data is securely stored in the cloud and synced across all your devices.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white dark:bg-dark rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <Share className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Shared Access</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Share specific boxes with family or roommates. Perfect for household items, shared collections, and more.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white dark:bg-dark rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <Bell className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reminders</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Set reminders for borrowed items or things you need to return. Never miss a deadline again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Locrate Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Three simple steps to organize your life with Locrate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white dark:bg-dark rounded-full w-16 h-16 flex items-center justify-center text-primary text-2xl mb-4 shadow-md">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Virtual Boxes</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Set up digital containers that match your physical storage. Name them, add descriptions, and organize them by location or purpose.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white dark:bg-dark rounded-full w-16 h-16 flex items-center justify-center text-primary text-2xl mb-4 shadow-md">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Apply QR Stickers</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Print out the generated QR code stickers and attach them to your physical boxes or containers.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white dark:bg-dark rounded-full w-16 h-16 flex items-center justify-center text-primary text-2xl mb-4 shadow-md">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Scan & Find</h3>
              <p className="text-gray-600 dark:text-gray-400">
                When you need to find something, simply scan the QR code with your phone's camera to see what's inside or use the search feature.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-r from-accent to-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Locrate Today</h2>
              <p className="text-lg mb-8">
                Available for iOS and Android devices. Start organizing your life with just a few taps.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center"
                >
                  <i className="fab fa-apple text-2xl mr-3"></i>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center"
                >
                  <i className="fab fa-google-play text-2xl mr-3"></i>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=700&q=80"
                alt="Locrate app scanning QR code"
                className="rounded-xl shadow-lg w-3/4 h-auto max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
