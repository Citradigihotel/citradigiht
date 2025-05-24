import React from 'react';
import { renderToString } from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import { PageContextBuiltIn } from 'vite-plugin-ssr/types';
import App from '../src/App';

export { render };

async function render(pageContext: PageContextBuiltIn) {
  const { Page } = pageContext;
  
  const pageHtml = renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Solusi website profesional untuk penginapan Anda dengan harga terjangkau" />
        <title>Citra Digital Hotel</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}