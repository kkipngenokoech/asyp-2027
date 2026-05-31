const hotels = [
  { name: 'Lebanon Hotel', category: 'Standard', distance: '15 min', rate: '$65 – $85 / night', official: true },
  { name: 'Centric Hotel', category: 'Standard', distance: '15 min', rate: '$70 – $90 / night', official: false },
  { name: 'Highland Hotel', category: 'Standard / Premium', distance: '25 min', rate: '$85 – $110 / night', official: false },
  { name: 'Radisson Blu Hotel', category: 'Premium', distance: '27 min', rate: '$200 – $400 / night', official: false },
]

const practicalInfo = [
  { label: 'Airport', value: 'Kigali International Airport (KGL) — 10 km east of city centre, ~20 min by taxi' },
  { label: 'Visa', value: 'All nationalities: visa on arrival USD 50. AU citizens: free 90-day waiver. No embassy queues.' },
  { label: 'Currency', value: 'Rwandan Franc (RWF). USD & EUR widely accepted. Cards work at ATMs, hotels, restaurants.' },
  { label: 'Climate', value: 'Q3 2027: dry season, 24–27°C, reliable sunshine and minimal rain.' },
  { label: 'Internet', value: 'High-speed 4G LTE nationwide. Excellent campus WiFi at CMU-Africa.' },
  { label: 'Transport', value: 'Yego moto-taxi: dial 9191 | VW Move taxi: +250 783 118 818' },
  { label: 'Emergency', value: 'Police: 112 (toll-free) | Ambulance: 912 (SAMU, toll-free)' },
  { label: 'SIM Card', value: 'MTN or Airtel at the airport. Register with passport. Affordable data rates.' },
]

export default function Venue() {
  return (
    <section id="venue" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Venue & Kigali</h2>
          <div className="w-20 h-1 bg-ieee-blue mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All congress sessions are hosted at Carnegie Mellon University Africa, located within the
            Kigali Special Economic Zone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Venue card */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-br from-ieee-dark to-ieee-blue h-32 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-5xl font-black tracking-tighter mb-1">CMU</div>
                <div className="text-sm font-medium opacity-80">Carnegie Mellon University Africa</div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-ieee-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Kigali Special Economic Zone (KSEZ), Rwanda</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                The only US research university with a physical campus in sub-Saharan Africa. CMU-Africa
                hosts master&apos;s programmes in Information Technology, Electrical and Computer Engineering,
                and Engineering Artificial Intelligence.
              </p>
              <div className="space-y-2">
                {[
                  ['Main Auditorium', '150+ participants, professional AV & staging'],
                  ['IIL Hub Training Rooms', '30–50 per room, collaborative learning design'],
                  ['Outdoor Terrace', 'Multicultural Evening venue, on-campus'],
                  ['On-site Catering', 'Experienced in international events'],
                ].map(([name, desc]) => (
                  <div key={name} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700"><span className="font-medium">{name}</span> — {desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Kigali */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 text-lg mb-4">Why Kigali?</h3>
            <div className="space-y-4">
              {[
                { icon: '🛡️', title: '#1 Safest City in Africa', desc: 'Kigali is consistently ranked the safest city on the continent, ideal for international delegates.' },
                { icon: '✈️', title: '2nd Most Popular for Conferences', desc: 'Per 2023 ICCA rankings, Rwanda is the 2nd most popular African country for international conferences.' },
                { icon: '🌍', title: 'Visa-Free Access', desc: 'AU citizens: free 90-day waiver. All others: visa on arrival for USD 50. No embassy queues.' },
                { icon: '🔗', title: 'Direct Flights from Across Africa', desc: 'RwandAir, Ethiopian Airlines, Kenya Airways, KLM, Qatar Airways, Turkish Airways, SN Brussels Airlines.' },
                { icon: '💡', title: 'Innovation Hub', desc: 'Norrsken House Kigali — East Africa\'s largest tech innovation hub — is 10 minutes from CMU-Africa.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hotels */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-8">
          <h3 className="font-bold text-gray-900 text-lg mb-1">Accommodation Options</h3>
          <p className="text-gray-500 text-sm mb-5">The official congress hotel block is at Lebanon Hotel. Standard registration with accommodation includes 3 nights.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                  <th className="pb-2 pr-4 font-semibold">Hotel</th>
                  <th className="pb-2 pr-4 font-semibold">Category</th>
                  <th className="pb-2 pr-4 font-semibold">Distance</th>
                  <th className="pb-2 font-semibold">Approx. Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {hotels.map((h) => (
                  <tr key={h.name} className={h.official ? 'bg-ieee-light/50' : ''}>
                    <td className="py-2.5 pr-4 font-medium text-gray-900">
                      {h.name}
                      {h.official && (
                        <span className="ml-2 text-xs bg-ieee-blue text-white px-2 py-0.5 rounded-full">Official</span>
                      )}
                    </td>
                    <td className="py-2.5 pr-4 text-gray-600">{h.category}</td>
                    <td className="py-2.5 pr-4 text-gray-600">{h.distance}</td>
                    <td className="py-2.5 text-gray-700 font-medium">{h.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Practical info */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg mb-5">Practical Delegate Information</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {practicalInfo.map((item) => (
              <div key={item.label} className="flex gap-3">
                <span className="w-24 flex-shrink-0 text-xs font-semibold text-ieee-blue uppercase tracking-wider pt-0.5">{item.label}</span>
                <span className="text-sm text-gray-600 leading-relaxed">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
