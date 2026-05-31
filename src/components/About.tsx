const objectives = [
  'Provide hands-on technical workshops relevant to Africa\'s engineering landscape.',
  'Strengthen cross-section relationships across the ASYP geographic distribution.',
  'Accelerate volunteers\' knowledge of IEEE\'s organisation, products, services, and resources.',
  'Help volunteers understand their roles within their local units and the entire organisation.',
  'Expose delegates to Rwanda\'s technology and innovation ecosystem through industry engagement.',
  'Provide a funded pathway for active IEEE members who cannot otherwise afford to attend.',
]

const stats = [
  { value: '200+', label: 'Delegates' },
  { value: '15', label: 'African Sections' },
  { value: '3', label: 'Days' },
  { value: '8+', label: 'Speakers' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About ASYP 2027</h2>
          <div className="w-20 h-1 bg-ieee-blue mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The IEEE Region 8 Africa Student and Young Professionals Congress brings together the best minds
            across Africa to innovate, connect, and lead.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center bg-ieee-light rounded-xl p-6">
              <div className="text-4xl font-extrabold text-ieee-blue mb-1">{s.value}</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Vision + Objectives */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Vision */}
          <div>
            <div className="inline-flex items-center gap-2 text-ieee-blue font-semibold text-sm mb-4 uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-ieee-blue" />
              Our Vision
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Empowering Africa&apos;s Next Generation of Technology Leaders
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              To deliver an inclusive and impactful congress that empowers emerging technology leaders to
              innovate, collaborate, and drive sustainable development across Africa.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hosted by the IEEE Rwanda Subsection at Carnegie Mellon University Africa, ASYP 2027 is
              designed to be accessible for every delegate across the continent. Rwanda&apos;s visa-free
              policy for African Union citizens and world-class conference infrastructure makes Kigali the
              ideal location for this milestone congress.
            </p>
            {/* Theme badge */}
            <div className="bg-ieee-dark text-white rounded-xl px-6 py-4 inline-block">
              <div className="text-xs text-white/60 mb-1 uppercase tracking-widest font-medium">Congress Theme</div>
              <div className="text-xl font-bold italic">&ldquo;Innovate. Connect. Lead.&rdquo;</div>
            </div>
          </div>

          {/* Objectives */}
          <div>
            <div className="inline-flex items-center gap-2 text-ieee-blue font-semibold text-sm mb-4 uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-ieee-blue" />
              Congress Objectives
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Aim to Achieve</h3>
            <ul className="space-y-4">
              {objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ieee-blue text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Organiser banner */}
        <div className="mt-16 bg-gradient-to-r from-ieee-dark to-ieee-blue rounded-2xl p-8 text-white text-center">
          <p className="text-white/80 text-sm uppercase tracking-widest font-medium mb-2">Organised by</p>
          <h3 className="text-2xl font-bold mb-1">IEEE Rwanda Subsection</h3>
          <p className="text-white/70">In partnership with Carnegie Mellon University Africa</p>
        </div>
      </div>
    </section>
  )
}
