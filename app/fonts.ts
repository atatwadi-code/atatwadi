import { Inter, Space_Mono } from 'next/font/google';

// Using Space Mono as a substitute for Bitcount Grid Double (monospace font)
export const bitcountGridDouble = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-bitcount-grid-double',
});

// Using Inter as a substitute for Helvetica (clean sans-serif)
export const helvetica = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-helvetica',
}); 