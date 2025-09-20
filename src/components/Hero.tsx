import { Button } from '@/components/ui/button';
import { Sparkles, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen gradient-pop-reverse dots-pattern relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-pop-yellow rounded-full border-4 border-foreground bounce-fun opacity-80" />
      <div className="absolute top-40 right-20 w-12 h-12 bg-pop-blue rounded-full border-4 border-foreground wiggle opacity-80" />
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-pop-red rounded-full border-4 border-foreground bounce-fun opacity-80" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="speech-bubble mb-8 inline-block">
              <p className="font-comic font-bold text-lg text-foreground">
                🎉 MEGA SALE! Up to 70% OFF!
              </p>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-fredoka text-white mb-6 leading-tight">
              <span className="inline-block wiggle">POP</span>{' '}
              <span className="text-pop-yellow inline-block bounce-fun">ART</span>
              <br />
              <span className="text-pop-blue">FASHION!</span>
            </h1>
            
            <p className="text-xl font-comic text-white mb-8 max-w-lg">
              Discover the most <span className="handwritten text-pop-yellow text-2xl">amazing</span> collection 
              of trendy clothes and accessories that'll make you shine like a star! ✨
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-pop btn-pop-yellow text-xl py-6 px-8 bounce-fun">
                <Sparkles className="mr-2 h-6 w-6" />
                Shop Now!
              </Button>
              <Button className="btn-pop btn-pop-pink text-xl py-6 px-8">
                <Star className="mr-2 h-6 w-6" />
                View Collection
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="comic-frame bg-white p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop" 
                alt="Fashion Collection" 
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute -top-4 -right-4 bg-pop-red text-white px-4 py-2 rounded-full font-comic font-bold border-3 border-foreground wiggle">
                HOT! 🔥
              </div>
            </div>
            
            {/* Floating comic elements */}
            <div className="absolute -bottom-6 -left-6 bg-pop-blue text-white px-6 py-3 rounded-full font-comic font-bold border-3 border-foreground speech-bubble">
              WOW!
            </div>
            <div className="absolute -top-6 left-1/2 bg-pop-yellow text-foreground px-4 py-2 rounded-full font-comic font-bold border-3 border-foreground bounce-fun">
              NEW!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;