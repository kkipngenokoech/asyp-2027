export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background inspired by Rwanda flag colors + IEEE blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-ieee-dark via-[#004d8c] to-[#0a3d62]" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-rwanda-yellow/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ieee-blue/20 blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-rwanda-yellow rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium">IEEE Region 8 · Africa</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight">
          ASYP{' '}
          <span className="text-rwanda-yellow">2027</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-white/80 mb-4 uppercase tracking-widest">
          Africa Student &amp; Young Professionals Congress
        </h2>

        {/* Theme */}
        <p className="text-2xl md:text-3xl font-bold text-white/95 italic mb-10">
          &ldquo;Innovate. Connect. Lead.&rdquo;
        </p>

        {/* Event details */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3 border border-white/15">
            <svg className="w-5 h-5 text-rwanda-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-white font-semibold text-sm">July 24–26, 2027</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3 border border-white/15">
            <svg className="w-5 h-5 text-rwanda-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-white font-semibold text-sm">CMU-Africa, Kigali, Rwanda</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3 border border-white/15">
            <svg className="w-5 h-5 text-rwanda-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-white font-semibold text-sm">200–300 Participants</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#registration"
            className="px-8 py-4 bg-rwanda-yellow hover:bg-yellow-400 text-gray-900 font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            Register Now
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/25 transition-all duration-200 text-base"
          >
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a href="#about" className="text-white/40 hover:text-white/70 transition-colors animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
