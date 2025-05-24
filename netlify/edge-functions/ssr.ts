import { Context } from "@netlify/edge-functions";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../../src/App';
import { HelmetProvider } from 'react-helmet-async';

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const helmetContext = {};

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url.pathname}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

  const response = new Response(html, {
    headers: { 'content-type': 'text/html' },
  });

  return response;
};

export const config = {
  path: "/*",
};