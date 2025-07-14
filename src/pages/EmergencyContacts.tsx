import { PageLayout } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Phone, Shield, Heart, AlertTriangle, Clock, MapPin } from "lucide-react";

const emergencyContacts = [
  {
    category: "Medical Emergency",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-50",
    priority: "IMMEDIATE",
    contacts: [
      { title: "Campus Medical Center", number: "+91-1234-567813", availability: "24/7", location: "Campus Center" },
      { title: "Ambulance Service", number: "+91-1234-567999", availability: "24/7", location: "On-call" },
      { title: "Nearest Hospital", number: "+91-1234-567850", availability: "24/7", location: "2km from campus" }
    ]
  },
  {
    category: "Security & Safety",
    icon: Shield,
    color: "text-blue-600", 
    bgColor: "bg-blue-50",
    priority: "URGENT",
    contacts: [
      { title: "Campus Security Control Room", number: "+91-1234-567841", availability: "24/7", location: "Main Gate" },
      { title: "Emergency Helpline", number: "1234", availability: "24/7", location: "Internal number" },
      { title: "Local Police Station", number: "+91-1234-567860", availability: "24/7", location: "1km from campus" }
    ]
  },
  {
    category: "Fire & Safety",
    icon: AlertTriangle,
    color: "text-orange-600",
    bgColor: "bg-orange-50", 
    priority: "CRITICAL",
    contacts: [
      { title: "Fire Safety Officer", number: "+91-1234-567842", availability: "24/7", location: "Campus" },
      { title: "Fire Department", number: "+91-1234-567870", availability: "24/7", location: "City Fire Station" },
      { title: "Emergency Evacuation", number: "1235", availability: "24/7", location: "Internal number" }
    ]
  }
];

const administrativeContacts = [
  {
    title: "Vice Chancellor Office",
    number: "+91-1234-567800",
    email: "vc@deshbhagat.edu.in",
    timing: "9:00 AM - 5:00 PM",
    location: "3rd Floor, Administration Block"
  },
  {
    title: "Registrar Office", 
    number: "+91-1234-567801",
    email: "registrar@deshbhagat.edu.in",
    timing: "9:00 AM - 5:00 PM",
    location: "1st Floor, Administration Block"
  },
  {
    title: "Student Affairs",
    number: "+91-1234-567830",
    email: "students@deshbhagat.edu.in", 
    timing: "9:00 AM - 6:00 PM",
    location: "Student Center"
  },
  {
    title: "Technical Support",
    number: "+91-1234-567845",
    email: "support@deshbhagat.edu.in",
    timing: "8:00 AM - 8:00 PM", 
    location: "IT Block"
  }
];

const hostelContacts = [
  {
    title: "Boys Hostel Warden",
    name: "Mr. Deepak Sharma",
    number: "+91-1234-567811",
    email: "boyshostel@deshbhagat.edu.in",
    location: "Boys Hostel Block A"
  },
  {
    title: "Girls Hostel Warden", 
    name: "Mrs. Meera Gupta",
    number: "+91-1234-567812",
    email: "girlshostel@deshbhagat.edu.in",
    location: "Girls Hostel Block B"
  }
];

const EmergencyContacts = () => {
  return (
    <PageLayout
      title="Emergency Contacts"
      description="Important contact numbers for emergencies and administrative support"
    >
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Emergency Alert */}
          <Card className="p-6 mb-12 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-red-100 rounded-full">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-red-900">Emergency Quick Dial</h2>
                <p className="text-red-700">For immediate assistance, call these numbers first</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Phone className="w-6 h-6 text-red-600 mx-auto mb-2" />
                <div className="font-bold text-lg text-red-600">1234</div>
                <div className="text-sm text-red-700">Campus Emergency</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Heart className="w-6 h-6 text-red-600 mx-auto mb-2" />
                <div className="font-bold text-lg text-red-600">+91-1234-567813</div>
                <div className="text-sm text-red-700">Medical Center</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Shield className="w-6 h-6 text-red-600 mx-auto mb-2" />
                <div className="font-bold text-lg text-red-600">+91-1234-567841</div>
                <div className="text-sm text-red-700">Security Control</div>
              </div>
            </div>
          </Card>

          {/* Emergency Contacts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Emergency Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {emergencyContacts.map((category, index) => (
                <Card 
                  key={category.category}
                  className="service-card animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl ${category.bgColor}`}>
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{category.category}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${category.bgColor} ${category.color} font-medium`}>
                          {category.priority}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {category.contacts.map((contact, idx) => (
                        <div key={idx} className="border-l-2 border-primary/20 pl-4">
                          <h4 className="font-semibold text-sm mb-1">{contact.title}</h4>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Phone className="w-3 h-3 text-muted-foreground" />
                              <span className="text-sm font-medium text-primary">{contact.number}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{contact.availability}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{contact.location}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Administrative Contacts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Administrative Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {administrativeContacts.map((contact, index) => (
                <Card 
                  key={contact.title}
                  className="p-6 hover:shadow-lg transition-shadow animate-fade-in-delay"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-lg font-semibold mb-4">{contact.title}</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium text-primary">{contact.number}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm">✉️</span>
                      <span className="text-sm text-muted-foreground">{contact.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{contact.timing}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{contact.location}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Hostel Contacts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Hostel Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hostelContacts.map((contact, index) => (
                <Card 
                  key={contact.title}
                  className="p-6 bg-gradient-to-br from-accent/5 to-primary/5 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-lg font-semibold mb-2">{contact.title}</h4>
                  <p className="text-primary font-medium mb-4">{contact.name}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium text-primary">{contact.number}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm">✉️</span>
                      <span className="text-sm text-muted-foreground">{contact.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{contact.location}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Emergency Procedures */}
          <Card className="p-8 mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <h3 className="text-2xl font-bold mb-6 text-orange-900">Emergency Procedures</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-orange-800">In Case of Medical Emergency</h4>
                <ol className="space-y-2 text-sm text-orange-700">
                  <li>1. Call Campus Medical Center: +91-1234-567813</li>
                  <li>2. If serious, call Ambulance: +91-1234-567999</li>
                  <li>3. Notify Security: +91-1234-567841</li>
                  <li>4. Stay with the person until help arrives</li>
                  <li>5. Inform family/emergency contacts</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-orange-800">In Case of Fire</h4>
                <ol className="space-y-2 text-sm text-orange-700">
                  <li>1. Alert others immediately</li>
                  <li>2. Call Fire Safety: +91-1234-567842</li>
                  <li>3. Evacuate using nearest safe exit</li>
                  <li>4. Assemble at designated meeting point</li>
                  <li>5. Do not use elevators</li>
                </ol>
              </div>
            </div>
          </Card>

          {/* Contact Information Footer */}
          <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">24/7 Support Available</h2>
            <p className="mb-6 opacity-90">
              Our emergency response team is available round the clock to ensure your safety and security.
            </p>
            <div className="text-2xl font-bold mb-2">Emergency Hotline</div>
            <div className="text-3xl font-bold text-yellow-300">1234</div>
            <div className="text-sm opacity-80 mt-2">Save this number in your phone</div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EmergencyContacts;