import Link from 'next/link'

export const metadata = {
  title: 'Fitness Resources - Krizel',
  description: 'Free fitness resources, workout plans, and meal prep guides.',
}

const resourceCategories = [
  {
    title: 'Crisis Support',
    icon: '🆘',
    color: 'bg-primary',
    resources: [
      { name: 'National Suicide Prevention Lifeline', contact: '988', description: '24/7 crisis support' },
      { name: 'Crisis Text Line', contact: 'Text HOME to 741741', description: 'Free 24/7 text support' },
      { name: 'SAMHSA Helpline', contact: '1-800-662-4357', description: 'Substance abuse and mental health' },
    ],
  },
  {
    title: 'Mental Health Apps',
    icon: '📱',
    color: 'bg-accent-green',
    resources: [
      { name: 'Headspace', description: 'Guided meditation and mindfulness' },
      { name: 'Calm', description: 'Sleep stories and meditation' },
      { name: 'Talkspace', description: 'Online therapy platform' },
    ],
  },
  {
    title: 'Educational Resources',
    icon: '📚',
    color: 'bg-accent-yellow',
    resources: [
      { name: 'Mental Health America', description: 'Education and advocacy' },
      { name: 'NAMI', description: 'National Alliance on Mental Illness' },
      { name: 'The Trevor Project', description: 'LGBTQ+ youth support' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-white mb-6">Mental Health Resources</h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Free resources, crisis support, and tools to help you on your wellness journey
          </p>
        </div>
      </section>

      {/* Crisis Banner */}
      <section className="bg-red-50 border-y border-red-200 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                !
              </div>
              <div>
                <h3 className="font-display text-lg text-red-900">In Crisis?</h3>
                <p className="text-red-800">If you&apos;re experiencing a mental health emergency, help is available now.</p>
              </div>
            </div>
            <a href="tel:988" className="btn bg-red-500 text-white hover:bg-red-600 whitespace-nowrap">
              Call 988 Now
            </a>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-padding bg-accent-cream">
        <div className="container-custom">
          <div className="space-y-12">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`${category.color} p-6 flex items-center gap-4`}>
                  <span className="text-5xl">{category.icon}</span>
                  <h2 className="text-3xl font-display text-white">{category.title}</h2>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.resources.map((resource, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
                        <h3 className="font-display text-xl text-secondary mb-2">{resource.name}</h3>
                        {'contact' in resource && (
                          <p className="text-2xl font-bold text-primary mb-2">{resource.contact}</p>
                        )}
                        <p className="text-gray-600">{resource.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Help Tools */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-secondary mb-4">Self-Help Tools & Guides</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Free downloadable resources to support your mental wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Anxiety Management Guide', downloads: '1.2K', icon: '📖' },
              { title: 'Daily Gratitude Journal Template', downloads: '980', icon: '✍️' },
              { title: 'Breathing Exercises PDF', downloads: '2.1K', icon: '🫁' },
              { title: 'Sleep Hygiene Checklist', downloads: '1.5K', icon: '😴' },
              { title: 'Mindfulness Activity Cards', downloads: '890', icon: '🧘' },
              { title: 'Self-Care Planning Worksheet', downloads: '1.8K', icon: '💆' },
            ].map((tool, index) => (
              <div key={index} className="card p-6">
                <div className="text-5xl mb-4">{tool.icon}</div>
                <h3 className="font-display text-xl text-secondary mb-2">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.downloads} downloads</p>
                <button className="btn btn-primary w-full">
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Professional Help */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Find Professional Help</h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Sometimes we need more than self-help. Connect with licensed mental health professionals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/find-therapist" className="btn bg-white text-secondary hover:bg-opacity-90">
                Find a Therapist
              </Link>
              <Link href="/blog" className="btn btn-outline border-white text-white hover:bg-white hover:text-secondary">
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

