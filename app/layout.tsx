import './globals.css';

export const metadata = {
  title: 'Las Aventuras de Pili',
  description: 'Juego educativo mobile/tablet para Pili',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icons/favicon.ico' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#6c3cff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>;
}
