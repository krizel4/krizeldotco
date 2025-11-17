import Link from 'next/link'

const categories = [
  {
    name: 'Workouts',
    icon: '💪',
    color: 'bg-primary',
    href: '/blog/category/workouts',
  },
  {
    name: 'Nutrition',
    icon: '🥗',
    color: 'bg-accent-green',
    href: '/blog/category/nutrition',
  },
  {
    name: 'Meal Plans',
    icon: '🍳',
    color: 'bg-accent-yellow',
    href: '/resources/meal-plans',
  },
  {
    name: 'Wellness',
    icon: '🧘',
    color: 'bg-secondary',
    href: '/blog/category/wellness',
  },
]

export function CategoryGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-secondary mb-4">Explore Topics</h2>
          <p className="text-lg text-gray-600">Find the perfect workout tips and meal plans for your fitness goals</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className={`${category.color} bg-opacity-10 hover:bg-opacity-20 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-display text-secondary">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

