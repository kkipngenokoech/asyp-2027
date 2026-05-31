'use client'

import { useState } from 'react'
import { agenda, type AgendaItem } from '@/data/agenda'

const typeConfig: Record<AgendaItem['type'], { dot: string; bg: string; icon: string }> = {
  ceremony: { dot: 'bg-yellow-500', bg: 'bg-yellow-50 border-yellow-200', icon: '🏛️' },
  keynote:  { dot: 'bg-red-500',    bg: 'bg-red-50 border-red-200',       icon: '🎤' },
  workshop: { dot: 'bg-green-500',  bg: 'bg-green-50 border-green-200',   icon: '🔧' },
  panel:    { dot: 'bg-purple-500', bg: 'bg-purple-50 border-purple-200', icon: '💬' },
  plenary:  { dot: 'bg-blue-500',   bg: 'bg-blue-50 border-blue-200',     icon: '📢' },
  social:   { dot: 'bg-pink-500',   bg: 'bg-pink-50 border-pink-200',     icon: '🎉' },
  tour:     { dot: 'bg-teal-500',   bg: 'bg-teal-50 border-teal-200',     icon: '🗺️' },
  session:  { dot: 'bg-indigo-500', bg: 'bg-indigo-50 border-indigo-200', icon: '📋' },
  break:    { dot: 'bg-gray-300',   bg: 'bg-gray-50 border-gray-200',     icon: '☕' },
  logistics:{ dot: 'bg-orange-400', bg: 'bg-orange-50 border-orange-200', icon: '🚌' },
}

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(0)
  const day = agenda[activeDay]

  return (
    <section id="agenda" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Congress Programme</h2>
          <div className="w-20 h-1 bg-ieee-blue mx-auto mb-6" />
          <p className="text-lg text-gray-600">Three packed days of keynotes, workshops, networking, and cultural experiences.</p>
        </div>

        {/* Day tabs */}
        <div className="flex gap-2 justify-center mb-10">
          {agenda.map((d, i) => (
            <button
              key={d.day}
              onClick={() => setActiveDay(i)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeDay === i
                  ? 'bg-ieee-blue text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className="block text-xs opacity-75 mb-0.5">Day {d.day}</span>
              {d.title}
            </button>
          ))}
        </div>

        {/* Date label */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-ieee-light text-ieee-blue text-sm font-semibold px-4 py-2 rounded-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {day.date}
          </span>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5.5rem] top-0 bottom-0 w-0.5 bg-gray-100" />

          <div className="space-y-4">
            {day.items.map((item, i) => {
              const cfg = typeConfig[item.type]
              const isBreak = item.type === 'break' || item.type === 'logistics'
              return (
                <div key={i} className="flex gap-4">
                  {/* Time */}
                  <div className="w-20 flex-shrink-0 text-right">
                    <span className="text-xs font-semibold text-gray-500 leading-6">{item.time}</span>
                  </div>

                  {/* Dot */}
                  <div className="relative flex-shrink-0 flex items-start pt-1.5">
                    <div className={`w-3 h-3 rounded-full ${cfg.dot} ring-2 ring-white z-10`} />
                  </div>

                  {/* Card */}
                  {isBreak ? (
                    <div className="flex-1 pb-1">
                      {item.title && (
                        <p className="text-sm text-gray-400 font-medium italic flex items-center gap-1.5">
                          <span>{cfg.icon}</span> {item.title}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className={`flex-1 rounded-xl border p-4 mb-1 ${cfg.bg}`}>
                      <div className="flex items-start gap-2 mb-1">
                        <span className="text-base leading-none mt-0.5">{cfg.icon}</span>
                        <h4 className="font-semibold text-gray-900 text-sm leading-snug">{item.title}</h4>
                      </div>
                      {item.description && (
                        <p className="text-xs text-gray-600 leading-relaxed ml-6">{item.description}</p>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Workshop tracks legend */}
        {activeDay === 1 && (
          <div className="mt-10 bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">Workshop Track Details</h4>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              {[
                { track: 'Track A — IEEE Governance', b1: 'Effective SB Management (mandatory SB officers)', b2: 'From Idea to Venture (CMU-Africa)' },
                { track: 'Track B — Technical / Academic', b1: 'The IEEE YP Journey (mandatory YP officers)', b2: 'Data-Driven Solutions for Africa (University of Rwanda)' },
                { track: 'Track C — Applied Skills', b1: 'Applied AI for African Engineering (IBM Research Africa)', b2: 'Women in Engineering — Visibility, Voice, and Venture (IEEE R8 WIE)' },
              ].map((t) => (
                <div key={t.track} className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="font-semibold text-ieee-blue text-xs mb-2">{t.track}</div>
                  <p className="text-gray-600 text-xs mb-1"><span className="font-medium">Block I:</span> {t.b1}</p>
                  <p className="text-gray-600 text-xs"><span className="font-medium">Block II:</span> {t.b2}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
