'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-ieee-blue mx-auto mb-6" />
          <p className="text-lg text-gray-600">
            Questions about registration, travel grants, or sponsorship? Reach out to the organising team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">IEEE Rwanda Subsection</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-ieee-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Carnegie Mellon University Africa<br />Kigali Special Economic Zone<br />Kigali, Rwanda</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-ieee-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>asyp2027@ieee-rwanda.org</span>
                </div>
              </div>
            </div>

            {/* Key contacts */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Key Contacts</h3>
              <div className="space-y-3 text-sm">
                {[
                  { role: 'General Enquiries', name: 'Cyiza Augustin (Congress Chair)' },
                  { role: 'Sponsorship', name: 'Simenya Enoch (Marketing Lead)' },
                  { role: 'Travel Grants', name: 'Kipngeno Koech (Treasurer)' },
                  { role: 'Programme', name: 'Stella Kaniaru (Program Lead)' },
                  { role: 'Logistics', name: 'Samantha Niyoyita (Operations Lead)' },
                ].map((c) => (
                  <div key={c.role} className="flex justify-between items-baseline gap-4">
                    <span className="text-gray-500 flex-shrink-0">{c.role}</span>
                    <span className="font-medium text-gray-900 text-right">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-5">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ieee-blue/20 focus:border-ieee-blue transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ieee-blue/20 focus:border-ieee-blue transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ieee-blue/20 focus:border-ieee-blue transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Subject</label>
                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ieee-blue/20 focus:border-ieee-blue transition-colors bg-white">
                  <option value="">Select a topic</option>
                  <option>Registration enquiry</option>
                  <option>Travel grant application</option>
                  <option>Sponsorship opportunity</option>
                  <option>Programme / speakers</option>
                  <option>General question</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ieee-blue/20 focus:border-ieee-blue transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-ieee-blue hover:bg-ieee-dark text-white font-semibold rounded-lg text-sm transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
