import React from 'react';
import { PageContextBuiltIn } from 'vite-plugin-ssr/types';
import App from '../src/App';

export { Page };

function Page(pageContext: PageContextBuiltIn) {
  return <App />;
}