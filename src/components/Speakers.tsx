import { speakers, type Speaker } from '@/data/speakers'

const typeBadge: Record<Speaker['sessionType'], { label: string; class: string }> = {
  keynote:  { label: 'Keynote',  class: 'bg-yellow-100 text-yellow-800 border border-yellow-200' },
  plenary:  { label: 'Plenary',  class: 'bg-blue-100 text-blue-800 border border-blue-200' },
  workshop: { label: 'Workshop', class: 'bg-green-100 text-green-800 border border-green-200' },
  panel:    { label: 'Panel',    class: 'bg-purple-100 text-purple-800 border border-purple-200' },
}

function AvatarPlaceholder({ initials, large }: { initials: string; large?: boolean }) {
  const size = large ? 'w-24 h-24 text-3xl' : 'w-20 h-20 text-2xl'
  return (
    <div className={`${size} rounded-full bg-gradient-to-br from-ieee-blue to-ieee-dark flex items-center justify-center text-white font-bold flex-shrink-0`}>
      {initials}
    </div>
  )
}

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Speakers</h2>
          <div className="w-20 h-1 bg-ieee-blue mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry experts, researchers, and IEEE leaders sharing insights across keynotes,
            workshops, and panel discussions.
          </p>
        </div>

        {/* Keynote speakers — larger cards */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 text-center">Keynote Speakers</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {speakers
              .filter((s) => s.sessionType === 'keynote')
              .map((speaker) => (
                <div
                  key={speaker.name}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex gap-5 hover:shadow-md transition-shadow"
                >
                  <AvatarPlaceholder initials={speaker.initials} large />
                  <div className="flex-1 min-w-0">
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${typeBadge[speaker.sessionType].class}`}>
                      {typeBadge[speaker.sessionType].label}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 leading-tight">{speaker.name}</h4>
                    <p className="text-ieee-blue text-sm font-medium mb-0.5">{speaker.title}</p>
                    <p className="text-gray-500 text-sm mb-3">{speaker.organization}</p>
                    <p className="text-gray-600 text-sm italic leading-relaxed">&ldquo;{speaker.session}&rdquo;</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Other speakers — grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {speakers
            .filter((s) => s.sessionType !== 'keynote')
            .map((speaker) => (
              <div
                key={speaker.name}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-3">
                  <AvatarPlaceholder initials={speaker.initials} />
                  <div className="flex-1 min-w-0">
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-1.5 ${typeBadge[speaker.sessionType].class}`}>
                      {typeBadge[speaker.sessionType].label}
                    </span>
                    <h4 className="font-bold text-gray-900 leading-tight text-sm">{speaker.name}</h4>
                  </div>
                </div>
                <p className="text-ieee-blue text-xs font-medium mb-0.5">{speaker.title}</p>
                <p className="text-gray-500 text-xs mb-2">{speaker.organization}</p>
                <p className="text-gray-600 text-xs italic leading-relaxed">&ldquo;{speaker.session}&rdquo;</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
