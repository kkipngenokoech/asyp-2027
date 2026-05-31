const tiers = [
  {
    name: 'Platinum',
    amount: '$3,000+',
    class: 'border-yellow-400 bg-yellow-50',
    headerClass: 'bg-yellow-400 text-gray-900',
    benefits: [
      'Logo on all congress materials and website',
      '5-minute address in plenary session',
      'Exhibition table',
      '3 complimentary registrations',
      'Social media spotlight feature',
      'Speaking slot in one workshop track',
    ],
  },
  {
    name: 'Gold',
    amount: '$1,500 – $2,999',
    class: 'border-gray-300 bg-gray-50',
    headerClass: 'bg-gray-700 text-white',
    benefits: [
      'Logo placement on materials and website',
      'Exhibition table',
      '2 complimentary registrations',
      'Social media feature',
    ],
  },
  {
    name: 'Silver',
    amount: '$500 – $1,499',
    class: 'border-gray-200 bg-white',
    headerClass: 'bg-gray-400 text-white',
    benefits: [
      'Logo placement on materials and website',
      '1 complimentary registration',
      'Social media mention',
    ],
  },
]

const targetSponsors = [
  { name: 'MTN Rwanda', desc: 'Telecoms partner', icon: '📡' },
  { name: 'RwandAir', desc: 'In-kind flight support', icon: '✈️' },
  { name: 'Rwanda Development Board', desc: 'Government endorsement', icon: '🏛️' },
  { name: 'CMU-Africa', desc: 'Institutional venue partner', icon: '🎓' },
  { name: 'Norrsken House', desc: 'Tech ecosystem partner', icon: '💡' },
  { name: 'Ansys', desc: 'Technical sponsor', icon: '⚙️' },
  { name: 'IEEE WIE / YP / IAS', desc: 'Technical co-sponsors', icon: '🔬' },
]

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sponsorship</h2>
          <div className="w-20 h-1 bg-ieee-blue mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partner with ASYP 2027 to reach 200–300 emerging technology leaders from across Africa.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl border-2 ${tier.class} overflow-hidden`}>
              <div className={`${tier.headerClass} px-6 py-4 text-center`}>
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <p className="text-sm opacity-90 font-medium">{tier.amount}</p>
              </div>
              <ul className="p-5 space-y-2.5">
                {tier.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Target sponsors */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="font-bold text-gray-900 text-lg mb-2 text-center">Target Partners & Sponsors</h3>
          <p className="text-gray-500 text-sm text-center mb-6">Organisations already aligned with the IEEE and CMU-Africa ecosystem in Kigali.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {targetSponsors.map((s) => (
              <div key={s.name} className="bg-white rounded-xl p-4 text-center border border-gray-100 hover:border-ieee-blue/30 transition-colors">
                <span className="text-3xl mb-2 block">{s.icon}</span>
                <p className="font-semibold text-gray-900 text-sm">{s.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{s.desc}</p>
              </div>
            ))}
            <div className="bg-ieee-light rounded-xl p-4 text-center border-2 border-dashed border-ieee-blue/30 flex flex-col items-center justify-center">
              <span className="text-3xl mb-2">🤝</span>
              <p className="font-semibold text-ieee-blue text-sm">Your Organisation</p>
              <p className="text-gray-500 text-xs mt-0.5">Become a partner</p>
            </div>
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">
            In-kind and technical co-sponsors receive acknowledgement in the programme, on the website, and at the opening ceremony.
          </p>
        </div>
      </div>
    </section>
  )
}
