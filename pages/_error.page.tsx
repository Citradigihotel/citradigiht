import React from 'react';
import { PageContextBuiltIn } from 'vite-plugin-ssr/types';

export { Page };

function Page(pageContext: PageContextBuiltIn) {
  const { is404 } = pageContext;
  if (is404) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-gray-600">The page you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">500 - Server Error</h1>
        <p className="text-gray-600">Something went wrong on our end.</p>
      </div>
    </div>
  );
}