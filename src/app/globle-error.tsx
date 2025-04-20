'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an error reporting service if needed
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body className="flex flex-col items-center justify-center h-screen text-center bg-red-50 text-red-800">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="mb-6">{error.message}</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Refresh
        </button>
      </body>
    </html>
  );
}
