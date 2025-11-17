import Link from 'next/link'
import { MainLayout } from '@/components/MainLayout'

export const metadata = {
  title: 'Affiliate Program - Partner With Us - Krizel',
  description: 'Join our affiliate program and earn commissions while promoting fitness and wellness.',
}

const affiliatePrograms = [
  {
    id: '1',
    name: 'Product Affiliates',
    description: 'Earn commissions by promoting our curated wellness products',
    commission: '15-20%',
    icon: '🛍️',
    features: [
      'Competitive commission rates',
      'Monthly payouts',
      'Exclusive product previews',
      'Marketing materials provided',
      'Dedicated affiliate support',
    ],
  },
  {
    id: '2',
    name: 'Content Partners',
    description: 'Share our mental health resources and blog content',
    commission: '10%',
    icon: '📝',
    features: [
      'Revenue share on referred traffic',
      'Custom tracking links',
      'Performance analytics dashboard',
      'Content collaboration opportunities',
      'Early access to new resources',
    ],
  },
  {
    id: '3',
    name: 'Wellness Professionals',
    description: 'Special program for therapists, counselors, and wellness coaches',
    commission: '20-25%',
    icon: '🧑‍⚕️',
    features: [
      'Higher commission tiers',
      'Professional resources library',
      'Co-branded materials',
      'Client referral bonuses',
      'Educational webinars',
    ],
  },
]

export default function AffiliatesPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-accent-green to-accent-lime text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-white mb-6">Partner With Us</h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-8">
            Join our mission to make mental health resources accessible to everyone. 
            Earn competitive commissions while supporting a meaningful cause.
          </p>
          <Link href="#apply" className="btn bg-white text-secondary hover:bg-opacity-90 text-lg">
            Join Our Program
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-secondary mb-4">Why Partner With Krizel?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We&apos;re more than just an affiliate program—we&apos;re a community committed to fitness and wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                💰
              </div>
              <h3 className="font-display text-xl text-secondary mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Earn up to 25% commission on every sale</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                📊
              </div>
              <h3 className="font-display text-xl text-secondary mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">Monitor your performance with detailed analytics</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                🤝
              </div>
              <h3 className="font-display text-xl text-secondary mb-2">Dedicated Support</h3>
              <p className="text-gray-600">Get help from our affiliate success team</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent-lime rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                🎯
              </div>
              <h3 className="font-display text-xl text-secondary mb-2">Marketing Tools</h3>
              <p className="text-gray-600">Access banners, graphics, and ready-made content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-accent-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-secondary mb-4">Choose Your Program</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the affiliate program that best fits your audience and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {affiliatePrograms.map((program) => (
              <div key={program.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="bg-gradient-to-br from-primary to-secondary p-8 text-center text-white">
                  <div className="text-6xl mb-4">{program.icon}</div>
                  <h3 className="text-2xl font-display mb-2">{program.name}</h3>
                  <p className="text-white opacity-90 mb-4">{program.description}</p>
                  <div className="inline-block bg-white text-primary px-6 py-2 rounded-full font-bold text-lg">
                    {program.commission}
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="#apply" className="btn btn-primary w-full">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-secondary mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get started in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Apply', desc: 'Fill out our simple application form' },
              { step: '2', title: 'Get Approved', desc: 'Receive your unique affiliate links' },
              { step: '3', title: 'Promote', desc: 'Share products and content with your audience' },
              { step: '4', title: 'Earn', desc: 'Get paid monthly for every sale' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-display text-xl text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-padding bg-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">Apply to Join</h2>
              <p className="text-xl text-white opacity-90">
                Start earning while making a difference in mental health awareness
              </p>
            </div>

            <form className="bg-white rounded-2xl p-8 text-gray-900">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Website or Social Media URL *</label>
                <input
                  type="url"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Program Selection *</label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a program</option>
                  <option value="product">Product Affiliates</option>
                  <option value="content">Content Partners</option>
                  <option value="professional">Wellness Professionals</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Tell us about your audience</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Describe your platform, audience size, and how you plan to promote our products..."
                />
              </div>

              <button type="submit" className="btn btn-primary w-full text-lg">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-accent-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-secondary mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: 'How much can I earn as an affiliate?',
                  a: 'Affiliates earn between 10-25% commission per sale, depending on the program. Top performers can earn thousands per month.',
                },
                {
                  q: 'When do I get paid?',
                  a: 'Commissions are paid monthly via PayPal or bank transfer. Minimum payout threshold is $50.',
                },
                {
                  q: 'What marketing materials do you provide?',
                  a: 'We provide banners, social media graphics, email templates, product descriptions, and sample content to help you succeed.',
                },
                {
                  q: 'Can I promote on social media?',
                  a: 'Absolutely! You can promote on Instagram, Facebook, TikTok, YouTube, and any other platform. We provide platform-specific content.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h3 className="font-display text-xl text-secondary mb-3">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

