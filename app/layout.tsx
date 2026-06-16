import './globals.css';
export const metadata = { title: 'Las Aventuras de Pili', description: 'Juego educativo mobile/tablet para Pili' };
export const viewport = { width: 'device-width', initialScale: 1, maximumScale: 1, userScalable: false, themeColor: '#1b8cff' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="es"><body>{children}</body></html>; }
