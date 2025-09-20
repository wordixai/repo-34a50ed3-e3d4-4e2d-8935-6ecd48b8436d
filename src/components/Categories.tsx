import { Button } from '@/components/ui/button';

const Categories = () => {
  const categories = [
    {
      title: "T-Shirts",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      color: "pop-orange",
      items: "120+ items"
    },
    {
      title: "Sneakers",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
      color: "pop-pink",
      items: "85+ items"
    },
    {
      title: "Jackets",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
      color: "pop-blue",
      items: "65+ items"
    },
    {
      title: "Dresses",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop",
      color: "pop-yellow",
      items: "95+ items"
    },
    {
      title: "Accessories",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop",
      color: "pop-purple",
      items: "150+ items"
    },
    {
      title: "Bags",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      color: "pop-red",
      items: "75+ items"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-fredoka text-foreground mb-6">
            <span className="text-pop-pink">SHOP BY</span>{' '}
            <span className="text-pop-orange">CATEGORY</span>
          </h2>
          
          <p className="text-xl font-comic text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you're looking for in our <span className="handwritten text-pop-blue text-2xl">amazing</span> categories! 
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.title} 
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative overflow-hidden rounded-2xl border-4 border-foreground bg-${category.color} p-6 hover:scale-105 transition-all duration-300`}>
                {/* Background Dots */}
                <div className="absolute inset-0 dots-pattern-small opacity-30" />
                
                {/* Category Image */}
                <div className="relative z-10 mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full border-4 border-foreground overflow-hidden bg-white">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Category Info */}
                <div className="text-center relative z-10">
                  <h3 className="text-2xl font-fredoka text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="font-comic font-bold text-white/90 mb-4">
                    {category.items}
                  </p>
                  <Button className="bg-white text-foreground hover:bg-pop-yellow border-3 border-foreground font-comic font-bold px-6 py-2 rounded-full">
                    Explore
                  </Button>
                </div>
                
                {/* Fun Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full border-2 border-foreground opacity-60 bounce-fun" />
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white rounded-full border-2 border-foreground opacity-60 wiggle" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;