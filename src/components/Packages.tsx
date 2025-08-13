import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Users, Plane, Star, Check } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      type: "Umrah",
      title: "Premium Umrah Package",
      duration: "10 Days",
      price: "From $2,499",
      rating: 4.9,
      location: "Makkah & Madinah",
      groupSize: "20-25 people",
      features: [
        "5* Hotel near Haram",
        "VIP Ground Transportation",
        "Experienced Guide",
        "All Meals Included",
        "Visa Processing",
        "24/7 Support"
      ],
      popular: false
    },
    {
      type: "Hajj",
      title: "Complete Hajj Package",
      duration: "15 Days",
      price: "From $4,999",
      rating: 4.8,
      location: "Makkah, Madinah & Mina",
      groupSize: "15-20 people",
      features: [
        "4-5* Hotels throughout",
        "Private Air-conditioned Bus",
        "Expert Hajj Guide",
        "All Meals & Refreshments",
        "Complete Visa Service",
        "Medical Support",
        "Ihram & Gift Package"
      ],
      popular: true
    },
    {
      type: "Umrah",
      title: "Economy Umrah Package",
      duration: "7 Days",
      price: "From $1,799",
      rating: 4.7,
      location: "Makkah & Madinah",
      groupSize: "25-30 people",
      features: [
        "3-4* Hotel Walking Distance",
        "Shared Transportation",
        "Group Guide",
        "Breakfast Included",
        "Visa Processing",
        "Group Support"
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 gradient-peaceful">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Sacred Journey Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully crafted packages designed to provide you with 
            a spiritually enriching and comfortable pilgrimage experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-gold ${
                pkg.popular ? 'border-primary border-2' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                    {pkg.type}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {pkg.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground">
                  Experience the spiritual journey with premium comfort and guidance
                </CardDescription>

                <div className="text-3xl font-bold text-primary mt-4">
                  {pkg.price}
                  <span className="text-sm font-normal text-muted-foreground">
                    /person
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground">{pkg.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground">{pkg.groupSize}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground mb-3">Package Includes:</h4>
                  <div className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  variant={pkg.popular ? "sacred" : "default"} 
                  className="w-full mt-6"
                >
                  Book This Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;