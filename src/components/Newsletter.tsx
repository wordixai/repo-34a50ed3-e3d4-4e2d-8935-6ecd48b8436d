import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Gift } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-20 gradient-pop halftone relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pop-yellow rounded-full border-4 border-foreground bounce-fun opacity-60" />
      <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full border-4 border-foreground wiggle opacity-60" />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pop-blue rounded-full border-4 border-foreground bounce-fun opacity-60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-block speech-bubble mb-6 bg-pop-yellow">
              <span className="font-comic font-bold text-lg text-foreground flex items-center gap-2">
                <Gift className="h-5 w-5" />
                Exclusive Offers!
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-fredoka text-white mb-6 leading-tight">
              <span className="inline-block wiggle">JOIN THE</span>{' '}
              <span className="text-pop-yellow inline-block bounce-fun">POP</span>{' '}
              <span className="text-pop-blue">SQUAD!</span>
            </h2>
            
            <p className="text-xl font-comic text-white max-w-2xl mx-auto">
              Get the latest updates on new arrivals, exclusive sales, and 
              <span className="handwritten text-pop-yellow text-2xl"> awesome </span>
              deals delivered straight to your inbox! 📧✨
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white rounded-3xl border-4 border-foreground p-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Enter your email address..." 
                  className="pl-12 h-14 border-3 border-foreground rounded-xl font-comic text-lg focus-visible:ring-pop-orange"
                />
              </div>
              <Button className="btn-pop btn-pop-pink text-xl px-8 py-4 h-14 bounce-fun">
                Subscribe Now!
              </Button>
            </div>
            
            <p className="font-comic text-sm text-muted-foreground mt-4">
              🎁 Get 20% off your first order when you subscribe!
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-pop-yellow rounded-full border-4 border-foreground flex items-center justify-center mx-auto mb-4 wiggle">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="font-comic font-bold text-white text-lg mb-2">Exclusive Sales</h3>
              <p className="font-comic text-white/80">Be the first to know about our amazing deals!</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pop-blue rounded-full border-4 border-foreground flex items-center justify-center mx-auto mb-4 bounce-fun">
                <span className="text-2xl">👕</span>
              </div>
              <h3 className="font-comic font-bold text-white text-lg mb-2">New Arrivals</h3>
              <p className="font-comic text-white/80">Get updates on the latest fashion trends!</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pop-red rounded-full border-4 border-foreground flex items-center justify-center mx-auto mb-4 wiggle">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="font-comic font-bold text-white text-lg mb-2">Special Rewards</h3>
              <p className="font-comic text-white/80">Earn points and unlock exclusive perks!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;