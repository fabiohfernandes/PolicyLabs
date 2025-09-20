import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR" className="scroll-smooth">
      <Head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* OpenGraph meta tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PolicyLabs APSS" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@PolicyLabsAI" />

        {/* Additional meta tags for PWA */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PolicyLabs" />

        {/* Inter font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'PolicyLabs APSS',
              description: 'AI Policy Simulation System - Onde a Política Encontra a Precisão',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Any',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'BRL',
              },
              author: {
                '@type': 'Organization',
                name: 'PolicyLabs',
                url: 'https://policylabs.ai',
              },
            }),
          }}
        />
      </Head>
      <body className="font-sans antialiased">
        {/* Fallback for users with JavaScript disabled */}
        <noscript>
          <div className="flex min-h-screen items-center justify-center bg-red-50">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-800 mb-4">
                JavaScript Necessário
              </h1>
              <p className="text-red-600">
                Este aplicativo requer JavaScript para funcionar corretamente.
                <br />
                Por favor, habilite JavaScript em seu navegador.
              </p>
            </div>
          </div>
        </noscript>

        <Main />
        <NextScript />

        {/* Service Worker registration for PWA functionality */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </Html>
  );
}