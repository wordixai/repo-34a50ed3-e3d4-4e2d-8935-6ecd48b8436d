import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
  frameColor?: 'yellow' | 'pink' | 'blue';
}

const ProductCard = ({ 
  title, 
  price, 
  originalPrice, 
  image, 
  rating, 
  isNew, 
  isSale,
  frameColor = 'yellow'
}: ProductCardProps) => {
  const frameClass = frameColor === 'pink' ? 'comic-frame-pink' : frameColor === 'blue' ? 'comic-frame-blue' : '';
  
  return (
    <div className={`comic-frame ${frameClass} bg-white p-4 hover:scale-105 transition-transform duration-300 group`}>
      {/* Product Image */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-pop-red text-white font-comic font-bold border-2 border-foreground wiggle">
              NEW!
            </Badge>
          )}
          {isSale && (
            <Badge className="bg-pop-orange text-white font-comic font-bold border-2 border-foreground bounce-fun">
              SALE!
            </Badge>
          )}
        </div>
        
        {/* Wishlist Button */}
        <Button 
          size="icon"
          className="absolute top-2 right-2 bg-white text-foreground hover:bg-pop-pink hover:text-white border-2 border-foreground rounded-full"
        >
          <Heart className="h-4 w-4" />
        </Button>
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button className="btn-pop btn-pop-yellow">
            Quick View
          </Button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="space-y-3">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < rating ? 'fill-pop-yellow text-pop-yellow' : 'text-gray-300'}`} 
            />
          ))}
          <span className="font-comic text-sm text-muted-foreground ml-1">({rating})</span>
        </div>
        
        {/* Title */}
        <h3 className="font-comic font-bold text-lg text-foreground leading-tight">
          {title}
        </h3>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-fredoka text-pop-orange">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-lg font-comic text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <Button className="btn-pop btn-pop-pink w-full flex items-center justify-center gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;