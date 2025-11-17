'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const form = e.currentTarget
      const formDataToSend = new FormData(form)

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString(),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ firstName: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Load Google reCAPTCHA */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Have questions about fitness, nutrition, or our products? We&apos;d love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-accent-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-secondary mb-4">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-recaptcha="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="space-y-6">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  {/* reCAPTCHA */}
                  <div className="flex justify-center">
                    <div data-netlify-recaptcha="true"></div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="bg-accent-green bg-opacity-20 border border-accent-green rounded-lg p-4 text-center">
                      <p className="text-secondary font-medium">
                        ✓ Thanks for reaching out! We&apos;ll get back to you soon.
                      </p>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-300 rounded-lg p-4 text-center">
                      <p className="text-red-800 font-medium">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Additional Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg text-secondary mb-1">Email</h3>
                <p className="text-gray-600">hello@krizel.com</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg text-secondary mb-1">Response Time</h3>
                <p className="text-gray-600">Within 24-48 hours</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg text-secondary mb-1">Social Media</h3>
                <p className="text-gray-600">@krizelfit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-secondary mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Quick answers to common questions</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: 'Do you offer personalized fitness plans?',
                  a: 'Yes! We offer customized workout and meal plans tailored to your specific goals, fitness level, and dietary preferences.',
                },
                {
                  q: 'How long does shipping take?',
                  a: 'Most orders ship within 2-3 business days. You&apos;ll receive tracking information via email once your order ships.',
                },
                {
                  q: 'Can I return products?',
                  a: 'Absolutely! We offer a 30-day money-back guarantee on all products. Contact us if you&apos;re not satisfied with your purchase.',
                },
                {
                  q: 'Do you provide nutrition coaching?',
                  a: 'We offer nutrition guidance through our blog posts and meal plans. For personalized coaching, please inquire through the contact form above.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-accent-cream rounded-xl p-6">
                  <h3 className="font-display text-xl text-secondary mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

