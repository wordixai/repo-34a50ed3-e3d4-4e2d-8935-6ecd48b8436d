import { ShoppingCart, Heart, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="gradient-pop dots-pattern-small sticky top-0 z-50 border-b-4 border-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-pop-yellow rounded-full border-4 border-foreground flex items-center justify-center wiggle">
              <span className="text-2xl font-fredoka text-foreground">P</span>
            </div>
            <h1 className="text-3xl font-fredoka text-white handwritten">
              PopShop
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white font-comic font-bold hover:text-pop-yellow transition-colors">
              Home
            </a>
            <a href="#" className="text-white font-comic font-bold hover:text-pop-yellow transition-colors">
              Shop
            </a>
            <a href="#" className="text-white font-comic font-bold hover:text-pop-yellow transition-colors">
              About
            </a>
            <a href="#" className="text-white font-comic font-bold hover:text-pop-yellow transition-colors">
              Contact
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-2 bg-white rounded-full p-2 border-3 border-foreground">
            <Input 
              placeholder="Search awesome stuff..." 
              className="border-0 bg-transparent font-comic focus-visible:ring-0"
            />
            <Button size="icon" className="rounded-full bg-pop-yellow text-foreground hover:bg-pop-orange">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button 
              size="icon" 
              className="bg-white text-foreground hover:bg-pop-yellow border-3 border-foreground rounded-full bounce-fun"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              className="bg-white text-foreground hover:bg-pop-pink border-3 border-foreground rounded-full relative bounce-fun"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-pop-red text-white rounded-full w-6 h-6 text-xs flex items-center justify-center font-comic font-bold border-2 border-foreground">
                3
              </span>
            </Button>
            <Button size="icon" className="md:hidden bg-white text-foreground hover:bg-pop-blue border-3 border-foreground rounded-full">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;