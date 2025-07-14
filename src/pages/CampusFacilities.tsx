import { PageLayout } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Coffee, Heart, Dumbbell, Bus, Car, Cpu, Beaker, Activity } from "lucide-react";

const facilities = [
  {
    icon: Coffee,
    title: "Cafeteria & Food Courts",
    description: "Multiple dining options across campus",
    details: [
      "Main cafeteria with 300+ seating",
      "Fast food court",
      "Coffee shops and snack bars",
      "Healthy meal options available"
    ],
    hours: "7:00 AM - 9:00 PM",
    location: "Ground Floor, Main Building"
  },
  {
    icon: Heart,
    title: "Medical Center",
    description: "Comprehensive healthcare services",
    details: [
      "24/7 emergency medical care",
      "Qualified doctors and nurses",
      "Pharmacy on-site",
      "Regular health check-ups"
    ],
    hours: "24/7 Emergency Services",
    location: "Campus Center"
  },
  {
    icon: Dumbbell,
    title: "Sports Complex",
    description: "State-of-the-art fitness and sports facilities",
    details: [
      "Fully equipped gymnasium",
      "Indoor & outdoor sports courts",
      "Swimming pool",
      "Professional trainers available"
    ],
    hours: "6:00 AM - 10:00 PM",
    location: "Sports Block"
  },
  {
    icon: Cpu,
    title: "Computer Labs",
    description: "Advanced computing facilities",
    details: [
      "500+ high-end computers",
      "Latest software and programming tools",
      "High-speed internet connectivity",
      "24/7 access for students"
    ],
    hours: "24/7 Access",
    location: "IT Block, All Floors"
  },
  {
    icon: Beaker,
    title: "Research Laboratories",
    description: "Well-equipped labs for practical learning",
    details: [
      "Physics, Chemistry & Biology labs",
      "Engineering workshops",
      "Research equipment",
      "Safety protocols maintained"
    ],
    hours: "8:00 AM - 6:00 PM",
    location: "Science Block"
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "Convenient transport services",
    details: [
      "Regular bus services",
      "Multiple routes across city",
      "Air-conditioned buses",
      "Safe and reliable transport"
    ],
    hours: "6:30 AM - 8:30 PM",
    location: "Transport Hub"
  }
];

const additionalServices = [
  {
    icon: Car,
    title: "Parking Facilities",
    description: "Secure parking for vehicles",
    features: ["Separate parking for cars and bikes", "24/7 security", "CCTV surveillance"]
  },
  {
    icon: Activity,
    title: "Student Activities Center",
    description: "Hub for extracurricular activities",
    features: ["Club meeting rooms", "Event halls", "Music and dance studios"]
  }
];

const CampusFacilities = () => {
  return (
    <PageLayout
      title="Campus Facilities"
      description="World-class facilities to support your academic journey and campus life"
    >
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Facilities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {facilities.map((facility, index) => (
              <Card 
                key={facility.title}
                className="service-card animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <facility.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{facility.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {facility.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <h5 className="font-semibold text-sm text-muted-foreground mb-1">HOURS</h5>
                        <p className="text-sm font-medium">{facility.hours}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm text-muted-foreground mb-1">LOCATION</h5>
                        <p className="text-sm font-medium">{facility.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {additionalServices.map((service, index) => (
                <Card 
                  key={service.title}
                  className="p-6 hover:shadow-lg transition-shadow animate-fade-in-delay"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{service.title}</h4>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Campus Map Section */}
          <Card className="p-8 mb-12 bg-gradient-to-r from-primary/5 to-accent/5">
            <h3 className="text-2xl font-bold mb-6 text-center">Campus Layout</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Academic Zone</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Main Academic Building</li>
                  <li>• IT & Computer Labs</li>
                  <li>• Science Laboratories</li>
                  <li>• Central Library</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Recreation Zone</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Sports Complex</li>
                  <li>• Student Activities Center</li>
                  <li>• Cafeteria & Food Courts</li>
                  <li>• Auditorium</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Support Services</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Medical Center</li>
                  <li>• Administration Block</li>
                  <li>• Parking Areas</li>
                  <li>• Transportation Hub</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Facility Management</h2>
            <p className="mb-6 opacity-90">
              For any facility-related queries or maintenance requests, contact our support team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Facility Management Office</h4>
                <p className="opacity-90">Ground Floor, Administration Block</p>
                <p className="font-medium">+91-1234-567820</p>
                <p className="text-sm opacity-80">facilities@deshbhagat.edu.in</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Emergency Helpline</h4>
                <p className="opacity-90">24/7 Emergency Support</p>
                <p className="font-medium text-lg">+91-1234-567999</p>
                <p className="text-sm opacity-80">Available round the clock</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CampusFacilities;