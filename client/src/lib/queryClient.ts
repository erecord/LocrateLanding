import { QueryClient } from "@tanstack/react-query";

// Mock API request function that returns success without contacting a server
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Create a mock response
  const mockResponse = new Response(
    JSON.stringify({ success: true, message: "Operation successful" }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );

  // Add a small delay to simulate network request
  await new Promise(resolve => setTimeout(resolve, 500));

  return mockResponse;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
