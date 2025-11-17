import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  imageSrc: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export function Hero({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  imageSrc,
  secondaryCtaText,
  secondaryCtaLink 
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-accent-cream via-white to-accent-green min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-secondary leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-700 max-w-xl">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={ctaLink} className="btn btn-primary text-lg">
                {ctaText}
              </Link>
              {secondaryCtaText && secondaryCtaLink && (
                <Link href={secondaryCtaLink} className="btn btn-outline text-lg">
                  {secondaryCtaText}
                </Link>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-display text-primary font-bold">15K+</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display text-primary font-bold">300+</div>
                <div className="text-sm text-gray-600">Workouts & Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display text-primary font-bold">4.9★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={imageSrc}
              alt="Hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

