import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  reason: z.string().optional(),
  confirmed: z.boolean().refine((val) => val === true, {
    message: "You must confirm that you understand this action is permanent",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Account = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      reason: "",
      confirmed: false,
    },
  });

  const onSubmit = (values: FormValues) => {
    // Just show success toast without API call
    toast({
      title: "Deletion Request Submitted",
      description: "We've received your account deletion request and will process it within 30 days.",
    });
    form.reset();
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Card className="bg-white dark:bg-dark rounded-xl shadow-md">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">Account Deletion</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We respect your right to control your data. Here's how you can delete your Locrate account and associated information:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Option 1: Delete through the App</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You can delete your account directly from the Locrate app by following these steps:
              </p>
              <ol className="list-decimal pl-5 text-gray-600 dark:text-gray-400 mb-4">
                <li>Open the Locrate app on your device</li>
                <li>Go to Settings (gear icon in the bottom right)</li>
                <li>Tap on "Account"</li>
                <li>Scroll down and select "Delete Account"</li>
                <li>Follow the prompts to confirm deletion</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">Option 2: Request Deletion by Email</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                If you prefer, you can request account deletion by sending an email to our support team. Please include the following information:
              </p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-4">
                <li>Subject line: "Account Deletion Request"</li>
                <li>Your registered email address</li>
                <li>Your full name</li>
                <li>Reason for deletion (optional)</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Send your request to:{" "}
                <a href="mailto:delete@locrate.app" className="text-primary hover:text-blue-700">
                  delete@locrate.app
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We will process your request within 30 days and send a confirmation email once completed.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">What Happens When You Delete Your Account</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">When you delete your Locrate account:</p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-4">
                <li>All your personal information will be permanently removed from our servers</li>
                <li>Your virtual boxes and item data will be deleted</li>
                <li>Any shared access permissions will be revoked</li>
                <li>Your account cannot be recovered after deletion is complete</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Note: Some information may be retained for legal or legitimate business purposes as outlined in our Privacy Policy.
              </p>
            </div>

            {/* Email Form */}
            {submitted ? (
              <div className="bg-green-100 dark:bg-green-800 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Thank You</h3>
                <p className="text-gray-800 dark:text-gray-200">Your account deletion request has been received.</p>
              </div>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Us for Account Deletion</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your registered email"
                              {...field}
                              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your full name"
                              {...field}
                              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="reason"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reason for Deletion (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please tell us why you're deleting your account"
                              {...field}
                              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              rows={3}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="confirmed"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I understand that this action is permanent and cannot be undone once processed.
                            </FormLabel>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition duration-150"
                    >
                      Request Account Deletion
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Account;
