import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-kaaba.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl text-background">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-shadow-sm">
            Your Sacred Journey
            <span className="block text-primary-light">Awaits</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-background/90 leading-relaxed">
            Experience the spiritual journey of a lifetime with our expertly guided 
            Hajj and Umrah packages. Let us handle the details while you focus on your faith.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="sacred" size="lg" className="text-lg px-8 py-6">
              Book Hajj Package
            </Button>
            <Button variant="outline-light" size="lg" className="text-lg px-8 py-6">
              Explore Umrah
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-background/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-light" />
              </div>
              <div>
                <p className="font-semibold text-background">15,000+</p>
                <p className="text-sm text-background/80">Pilgrims Served</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-light" />
              </div>
              <div>
                <p className="font-semibold text-background">20+ Years</p>
                <p className="text-sm text-background/80">Experience</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-light" />
              </div>
              <div>
                <p className="font-semibold text-background">Licensed</p>
                <p className="text-sm text-background/80">Tour Operator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;