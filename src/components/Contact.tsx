import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import madinahMosque from "@/assets/madinah-mosque.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@sacredjourney.com", "support@sacredjourney.com"],
      description: "Send us your questions anytime"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Pilgrimage Way", "Islamic Center, NY 10001"],
      description: "Visit our consultation office"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9AM-7PM", "Sat-Sun: 10AM-5PM"],
      description: "Eastern Standard Time"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${madinahMosque})` }}
      >
        <div className="absolute inset-0 bg-foreground/80"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-background mb-6">
            Contact Sacred Journey
          </h2>
          <p className="text-xl text-background/90 max-w-3xl mx-auto">
            Ready to begin your spiritual journey? Contact our expert team for 
            personalized guidance and package recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-background/95 backdrop-blur-sm border shadow-peaceful">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1 mb-2">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-foreground font-medium">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="bg-background/95 backdrop-blur-sm border shadow-peaceful">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Send Us a Message
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input type="email" placeholder="Enter your email address" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Package Interest
                </label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                  <option value="">Select a package</option>
                  <option value="hajj">Complete Hajj Package</option>
                  <option value="umrah-premium">Premium Umrah Package</option>
                  <option value="umrah-economy">Economy Umrah Package</option>
                  <option value="custom">Custom Package</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea 
                  placeholder="Tell us about your requirements, preferred dates, group size, or any questions you have..."
                  rows={4}
                />
              </div>

              <Button variant="sacred" className="w-full" size="lg">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;