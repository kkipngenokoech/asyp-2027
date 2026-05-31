export default function Speakers() {
  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Speakers</h2>
          <div className="w-20 h-1 bg-ieee-blue mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ASYP 2027 will feature keynote speakers, workshop facilitators, and panellists
            from industry, academia, and IEEE leadership across Africa.
          </p>
        </div>

        {/* TBA card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-dashed border-ieee-blue/30 p-12 text-center">
            <div className="w-20 h-20 bg-ieee-light rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-ieee-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Speakers to be announced</h3>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-md mx-auto">
              We are finalising our speaker lineup of industry leaders, researchers, and IEEE
              representatives. Check back soon for updates.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ieee-blue hover:bg-ieee-dark text-white font-semibold rounded-xl transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              Get notified when speakers are announced
            </a>
          </div>
        </div>

        {/* Session types preview */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { type: 'Keynotes', desc: '2 opening keynote addresses', icon: '🎤' },
            { type: 'Workshops', desc: '6 parallel workshop tracks', icon: '🔧' },
            { type: 'Panel', desc: 'Industry panel discussion', icon: '💬' },
          ].map((s) => (
            <div key={s.type} className="bg-white rounded-xl p-4 text-center border border-gray-100">
              <span className="text-2xl block mb-2">{s.icon}</span>
              <p className="font-semibold text-gray-800 text-sm">{s.type}</p>
              <p className="text-gray-500 text-xs mt-0.5">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
