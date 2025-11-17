import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="card group">
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.badge && (
            <span className="absolute top-4 right-4 bg-accent-yellow text-gray-900 px-3 py-1 rounded-full text-sm font-medium shadow">
              {product.badge}
            </span>
          )}
          {product.isAffiliate && (
            <span className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
              Partner Product
            </span>
          )}
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <Link href={`/shop/${product.slug}`}>
            <h3 className="text-xl font-display text-secondary group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">${product.price}</div>
            {product.originalPrice && (
              <div className="text-sm text-gray-400 line-through">${product.originalPrice}</div>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <span className="text-accent-yellow">★</span>
            <span className="font-medium">{product.rating}</span>
            <span className="text-gray-400">({product.reviews})</span>
          </div>
          
          <Link 
            href={`/shop/${product.slug}`}
            className="btn btn-primary text-sm py-2 px-4"
          >
            {product.isAffiliate ? 'View Product' : 'Add to Cart'}
          </Link>
        </div>
      </div>
    </article>
  )
}

