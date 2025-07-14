import { PageLayout } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { BookOpen, Clock, Wifi, Computer, Search, Download, Users, Coffee } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Book Collection",
    description: "Over 50,000 books across all disciplines",
    features: [
      "Academic textbooks",
      "Reference materials", 
      "Research journals",
      "Digital archives"
    ]
  },
  {
    icon: Computer,
    title: "Digital Resources",
    description: "24/7 access to online databases and e-books",
    features: [
      "E-book collection",
      "Online journals",
      "Research databases",
      "Digital thesis repository"
    ]
  },
  {
    icon: Users,
    title: "Study Spaces",
    description: "Quiet and collaborative study areas",
    features: [
      "Individual study carrels",
      "Group study rooms",
      "Silent reading areas",
      "Discussion zones"
    ]
  },
  {
    icon: Search,
    title: "Research Assistance",
    description: "Expert help with research and citations",
    features: [
      "Research consultation",
      "Citation guidance",
      "Database training",
      "Thesis support"
    ]
  }
];

const facilities = [
  { icon: Wifi, name: "Free Wi-Fi", description: "High-speed internet throughout" },
  { icon: Computer, name: "Computer Lab", description: "40 computers with software access" },
  { icon: Download, name: "Printing Services", description: "Color and B&W printing available" },
  { icon: Coffee, name: "Reading Café", description: "Light refreshments while studying" }
];

const LibraryServices = () => {
  return (
    <PageLayout
      title="Library Services"
      description="Your gateway to knowledge - comprehensive resources and study facilities"
    >
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="service-card animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Facilities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Additional Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((facility, index) => (
                <Card 
                  key={facility.name}
                  className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in-delay"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-accent/10 rounded-full w-fit mx-auto mb-4">
                    <facility.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2">{facility.name}</h4>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Operating Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Operating Hours</h3>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Weekdays</h4>
                    <p className="text-muted-foreground">Monday - Friday</p>
                    <p className="text-lg font-medium text-primary">8:00 AM - 8:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Saturday</h4>
                    <p className="text-muted-foreground">Weekend Hours</p>
                    <p className="text-lg font-medium text-primary">9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Digital Resources</h4>
                  <p className="text-primary font-medium">24/7 Online Access</p>
                  <p className="text-sm text-muted-foreground">Access e-books and databases anytime</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5">
              <h3 className="text-2xl font-bold mb-6">Library Rules</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  <span className="text-sm">Maintain silence in reading areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  <span className="text-sm">Present student ID for book borrowing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  <span className="text-sm">Books can be borrowed for 15 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  <span className="text-sm">No food or drinks in reading areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  <span className="text-sm">Mobile phones on silent mode</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Library Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="opacity-90">Academic Block, 2nd Floor</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <p className="opacity-90">+91-1234-567810</p>
                <p className="opacity-90">library@deshbhagat.edu.in</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Librarian</h4>
                <p className="opacity-90">Dr. Rajesh Kumar</p>
                <p className="opacity-90">Chief Librarian</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LibraryServices;