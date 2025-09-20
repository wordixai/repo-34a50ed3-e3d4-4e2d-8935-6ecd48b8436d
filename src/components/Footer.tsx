import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Decorative Dots */}
      <div className="absolute inset-0 dots-pattern opacity-10" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-pop-yellow rounded-full border-4 border-white flex items-center justify-center wiggle">
                <span className="text-2xl font-fredoka text-foreground">P</span>
              </div>
              <h3 className="text-3xl font-fredoka text-white">
                PopShop
              </h3>
            </div>
            <p className="font-comic text-white/80 mb-6">
              Your one-stop destination for trendy, fun, and affordable fashion that makes you shine! ✨
            </p>
            <div className="flex space-x-3">
              <Button size="icon" className="bg-pop-pink hover:bg-pop-orange border-2 border-white rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" className="bg-pop-blue hover:bg-pop-pink border-2 border-white rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" className="bg-pop-yellow text-foreground hover:bg-pop-blue hover:text-white border-2 border-white rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" className="bg-pop-red hover:bg-pop-yellow hover:text-foreground border-2 border-white rounded-full">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-fredoka text-pop-yellow mb-6">Quick Links</h4>
            <ul className="space-y-3 font-comic">
              <li><a href="#" className="text-white/80 hover:text-pop-pink transition-colors">Home</a></li>
              <li><a href="#" className="text-white/80 hover:text-pop-pink transition-colors">Shop All</a></li>
              <li><a href="#" className="text-white/80 hover:text-pop-pink transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-white/80 hover:text-pop-pink transition-colors">Sale</a></li>
              <li><a href="#" className="text-white/80 hover:text-pop-pink transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-pop-pink transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xl font-fredoka text-pop-orange mb-6">Categories</h4>
            <ul className="space-y-3 font-comic">
              <li><a href="#" className="text-white/80 hover:text-pop-orange transition-colors">T-Shirts</a></li>
              <li><a href="#" className="text-white/80 hover:text-pop-orange transition-colors">Sneakers</a></li>
              <li><a href="#" className="text-white/80 hover:text-pop-orange transition-colors">Jackets</a></li>
              <li><a href="#" className="text-white/80 hover:text-pop-orange transition-colors">Dresses</a></li>
              <li><a href="#" className="text-white/80 hover:text-pop-orange transition-colors">Accessories</a></li>
              <li><a href="#" className="text-white/80 hover:text-pop-orange transition-colors">Bags</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-fredoka text-pop-blue mb-6">Support</h4>
            <ul className="space-y-3 font-comic">
              <li><a href="#" className="text-white/80 hover:text-pop-blue transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-pop-blue transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-white/80 hover:text-pop-blue transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-white/80 hover:text-pop-blue transition-colors">Returns</a></li>
              <li><a href="#" className="text-white/80 hover:text-pop-blue transition-colors">Track Order</a></li>
              <li><a href="#" className="text-white/80 hover:text-pop-blue transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 font-comic text-white/80 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="h-5 w-5 text-pop-red bounce-fun" />
              <span>by the PopShop Team</span>
            </div>
            <div className="font-comic text-white/80">
              © 2024 PopShop. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;