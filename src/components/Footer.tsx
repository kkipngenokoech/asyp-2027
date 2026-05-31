const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Registration', href: '#registration' },
  { label: 'Organizers', href: '#organizers' },
  { label: 'Venue', href: '#venue' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ieee-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold text-center leading-tight">IEEE<br/>R8</span>
              </div>
              <div>
                <div className="text-lg font-bold">ASYP 2027</div>
                <div className="text-white/60 text-xs">Africa Congress · Kigali</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              IEEE Region 8 Africa Student & Young Professionals Congress.
              <br />
              <em className="text-white/80">&ldquo;Innovate. Connect. Lead.&rdquo;</em>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white/80 text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event details */}
          <div>
            <h4 className="font-semibold text-white/80 text-sm uppercase tracking-wider mb-4">Event Details</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-rwanda-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>July 24–26, 2027</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-rwanda-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Carnegie Mellon University Africa<br />Kigali, Rwanda</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-rwanda-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>200–300 participants<br />IEEE Region 8</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/50 text-xs">
            © 2027 IEEE Rwanda Subsection. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Organised by IEEE Rwanda Subsection · In partnership with CMU-Africa
          </p>
        </div>
      </div>
    </footer>
  )
}
