import Image from 'next/image'
import { organizers } from '@/data/organizers'

export default function Organizers() {
  return (
    <section id="organizers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Organising Committee</h2>
          <div className="w-20 h-1 bg-ieee-blue mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A dedicated team of IEEE volunteers, university stakeholders, and industry professionals
            committed to making ASYP 2027 an exceptional congress.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {organizers.map((org) => (
            <div
              key={org.name}
              className="bg-gray-50 rounded-2xl p-5 text-center hover:bg-ieee-light hover:shadow-sm transition-all duration-200 border border-transparent hover:border-ieee-blue/20"
            >
              {/* Avatar */}
              <div className="mx-auto mb-4 w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-ieee-blue to-ieee-dark flex items-center justify-center">
                {org.image ? (
                  <Image
                    src={`/${org.image}`}
                    alt={org.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white text-2xl font-bold">{org.initials}</span>
                )}
              </div>

              <h3 className="font-bold text-gray-900 mb-0.5">{org.name}</h3>
              <p className="text-ieee-blue text-sm font-semibold mb-1">{org.role}</p>
              <p className="text-gray-500 text-xs">{org.responsibility}</p>

              {org.linkedin && (
                <a
                  href={org.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-ieee-blue hover:underline"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>

        {/* IEEE Rwanda Subsection note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Organised under the{' '}
            <span className="font-semibold text-gray-700">IEEE Rwanda Subsection</span>{' '}
            — formally approved in 2025 under IEEE Region 8.
          </p>
        </div>
      </div>
    </section>
  )
}
