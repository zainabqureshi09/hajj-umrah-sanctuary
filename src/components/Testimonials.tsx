import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      location: "Dubai, UAE",
      rating: 5,
      text: "Sacred Journey made our Hajj experience truly memorable. The guidance was exceptional, and every detail was perfectly organized. May Allah bless their efforts.",
      package: "Complete Hajj Package"
    },
    {
      name: "Fatima Ibrahim",
      location: "London, UK",
      rating: 5,
      text: "The Umrah package exceeded our expectations. The hotels were excellent, and our guide was very knowledgeable about the rituals. Highly recommended!",
      package: "Premium Umrah Package"
    },
    {
      name: "Mohammad Hassan",
      location: "New York, USA",
      rating: 5,
      text: "Professional service from start to finish. They took care of everything - visas, accommodation, transportation. We could focus entirely on our spiritual journey.",
      package: "Complete Hajj Package"
    },
    {
      name: "Aisha Rahman",
      location: "Toronto, Canada",
      rating: 5,
      text: "The 24/7 support was invaluable. When my elderly mother needed medical assistance, they were there immediately. Truly caring and professional team.",
      package: "Premium Umrah Package"
    },
    {
      name: "Omar Al-Zahra",
      location: "Sydney, Australia",
      rating: 5,
      text: "Budget-friendly without compromising on quality. The economy package was perfect for first-time pilgrims like us. Great value for money.",
      package: "Economy Umrah Package"
    },
    {
      name: "Zainab Ali",
      location: "Karachi, Pakistan",
      rating: 5,
      text: "The spiritual guidance provided by their team helped us understand the deeper meaning of Hajj. It was not just a trip, but a transformative experience.",
      package: "Complete Hajj Package"
    }
  ];

  return (
    <section id="testimonials" className="py-20 gradient-peaceful">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Pilgrims Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Read the experiences of thousands of pilgrims who have trusted us 
            with their sacred journey to the Holy Cities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border shadow-peaceful hover:shadow-gold transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="w-5 h-5 fill-primary text-primary" 
                    />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-foreground leading-relaxed pl-6">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-primary font-medium">
                        {testimonial.package}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join Thousands of Satisfied Pilgrims
          </h3>
          <p className="text-muted-foreground mb-8">
            Experience the same level of care and spiritual guidance that has made Sacred Journey 
            the trusted choice for pilgrims worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-peaceful hover:shadow-gold">
              View All Packages
            </button>
            <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;