import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ASYP 2027 — IEEE Africa Student & Young Professionals Congress',
  description:
    'IEEE Africa Student & Young Professionals Congress 2027. "Innovate. Connect. Lead." July 24–26, 2027 at Carnegie Mellon University Africa, Kigali, Rwanda.',
  keywords: ['IEEE', 'ASYP', 'Africa', 'Student', 'Young Professionals', 'Congress', 'Kigali', 'Rwanda', '2027'],
  openGraph: {
    title: 'ASYP 2027 — IEEE Africa Student & Young Professionals Congress',
    description: 'Innovate. Connect. Lead. — July 24–26, 2027 | CMU-Africa, Kigali, Rwanda',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
