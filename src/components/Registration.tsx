const packages = [
  {
    name: 'Standard Package',
    price: '$300 – $325',
    badge: 'Most Popular',
    badgeClass: 'bg-ieee-blue text-white',
    cardClass: 'border-ieee-blue ring-2 ring-ieee-blue',
    includes: [
      'Congress access — all 3 days',
      'All meals during the programme',
      'Transport to all congress activities',
      'Congress materials & kit',
      '3 nights at Lebanon Hotel',
      'Airport transfers (via official block)',
    ],
    cta: 'Register — Full Package',
    ctaClass: 'bg-ieee-blue hover:bg-ieee-dark text-white',
    note: 'Book via official block for airport transfers',
  },
  {
    name: 'No Accommodation',
    price: '$80 – $100',
    badge: 'Flexible',
    badgeClass: 'bg-gray-600 text-white',
    cardClass: 'border-gray-200',
    includes: [
      'Congress access — all 3 days',
      'All meals during the programme',
      'Transport to all congress activities',
      'Congress materials & kit',
      'Arrange own accommodation',
    ],
    cta: 'Register — Day Pass',
    ctaClass: 'bg-gray-900 hover:bg-gray-700 text-white',
    note: 'Ideal for local & regional delegates',
  },
  {
    name: 'Travel Grant',
    price: '$0',
    badge: 'Funded',
    badgeClass: 'bg-rwanda-green text-white',
    cardClass: 'border-rwanda-green',
    includes: [
      'Full congress access — all 3 days',
      'All meals during the programme',
      'Transport to all congress activities',
      'Congress materials & kit',
      '3 nights at Lebanon Hotel',
      'Airport transfers',
      'Open to active IEEE members',
    ],
    cta: 'Apply for Grant',
    ctaClass: 'bg-rwanda-green hover:bg-green-800 text-white',
    note: 'Strong IEEE leadership involvement required',
  },
]

const timeline = [
  { date: 'Oct 2026', event: 'Early-bird registration opens' },
  { date: 'Jan–Mar 2027', event: 'Funded (travel grant) registration window' },
  { date: 'May 2027', event: 'Standard registration closes' },
  { date: 'Jun 2027', event: 'Full programme published' },
  { date: 'Jul 24–26, 2027', event: 'ASYP 2027 Congress' },
]

export default function Registration() {
  return (
    <section id="registration" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Registration</h2>
          <div className="w-20 h-1 bg-ieee-blue mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three registration pathways designed to ensure ASYP 2027 is accessible to every active IEEE
            member across Africa.
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-white rounded-2xl border-2 ${pkg.cardClass} p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="mb-4">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${pkg.badgeClass}`}>
                  {pkg.badge}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                <p className="text-3xl font-extrabold text-ieee-blue">{pkg.price}</p>
                <p className="text-xs text-gray-400 mt-1">{pkg.note}</p>
              </div>

              <ul className="space-y-2.5 flex-1 mb-6">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 px-4 rounded-xl font-semibold text-sm transition-colors ${pkg.ctaClass}`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
          <h3 className="font-bold text-gray-900 text-lg mb-6 text-center">Registration Timeline</h3>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-2">
            {timeline.map((item, i) => (
              <div key={i} className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2 flex-1">
                <div className="w-3 h-3 rounded-full bg-ieee-blue flex-shrink-0" />
                {i < timeline.length - 1 && (
                  <div className="sm:hidden w-6 h-0.5 bg-gray-200" />
                )}
                <div className="text-center">
                  <p className="text-xs font-bold text-ieee-blue">{item.date}</p>
                  <p className="text-xs text-gray-600 max-w-[100px]">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
