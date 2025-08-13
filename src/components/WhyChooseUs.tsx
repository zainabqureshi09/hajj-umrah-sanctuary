import { Shield, Users, Award, Heart, Clock, Headphones } from "lucide-react";
import islamicPatterns from "@/assets/islamic-patterns.jpg";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Trusted",
      description: "Fully licensed tour operator with 20+ years of experience in organizing pilgrimages."
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our experienced guides ensure you perform your rituals correctly with spiritual insight."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Carefully selected accommodations and services to provide comfort throughout your journey."
    },
    {
      icon: Heart,
      title: "Spiritual Focus",
      description: "We prioritize your spiritual experience while handling all logistical arrangements."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance to ensure your peace of mind during the sacred journey."
    },
    {
      icon: Headphones,
      title: "Personalized Service",
      description: "Tailored packages and personal attention to meet your specific needs and preferences."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${islamicPatterns})` }}
      ></div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Sacred Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With two decades of experience serving pilgrims, we combine spiritual guidance 
            with premium comfort to make your sacred journey unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-lg bg-card border shadow-peaceful hover:shadow-gold transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">15,000+</div>
            <div className="text-muted-foreground">Pilgrims Served</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">20+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">50+</div>
            <div className="text-muted-foreground">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;