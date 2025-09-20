import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      title: "Retro Graphic Tee",
      price: 29.99,
      originalPrice: 49.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      rating: 5,
      isNew: true,
      isSale: true,
      frameColor: 'yellow' as const
    },
    {
      title: "Pop Art Sneakers",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      rating: 4,
      isNew: true,
      frameColor: 'pink' as const
    },
    {
      title: "Neon Jacket",
      price: 79.99,
      originalPrice: 120.00,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      rating: 5,
      isSale: true,
      frameColor: 'blue' as const
    },
    {
      title: "Comic Print Dress",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
      rating: 4,
      isNew: true,
      frameColor: 'yellow' as const
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pop-yellow/20 to-pop-pink/20 dots-pattern-orange">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block speech-bubble mb-6">
            <span className="font-comic font-bold text-lg text-foreground">
              ⭐ Staff Picks ⭐
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-fredoka text-foreground mb-6">
            <span className="text-pop-orange">TRENDING</span>{' '}
            <span className="text-pop-pink">PICKS!</span>
          </h2>
          
          <p className="text-xl font-comic text-muted-foreground max-w-2xl mx-auto">
            Check out our most <span className="handwritten text-pop-purple text-2xl">popular</span> items 
            that everyone is talking about! 🚀
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="bounce-fun" style={{ animationDelay: `${index * 0.2}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button className="btn-pop btn-pop-blue text-xl py-6 px-12">
            View All Products
            <ArrowRight className="ml-2 h-6 w-6 wiggle" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;