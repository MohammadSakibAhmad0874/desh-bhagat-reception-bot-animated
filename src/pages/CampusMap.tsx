import { PageLayout } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { MapPin, Building, Car, Bus, Coffee, BookOpen, Home, Heart } from "lucide-react";

const campusZones = [
  {
    zone: "Academic Zone",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    icon: Building,
    locations: [
      { name: "Main Academic Building", code: "MAB", floor: "G-4", departments: ["CSE", "ECE", "Civil"] },
      { name: "Science Block", code: "SB", floor: "G-3", departments: ["Physics", "Chemistry", "Biology"] },
      { name: "Commerce Block", code: "CB", floor: "G-2", departments: ["Commerce", "Economics"] },
      { name: "Arts Block", code: "AB", floor: "G-2", departments: ["English", "Hindi", "History"] }
    ]
  },
  {
    zone: "Administrative Zone", 
    color: "text-green-600",
    bgColor: "bg-green-50",
    icon: Building,
    locations: [
      { name: "Administration Block", code: "ADM", floor: "G-3", departments: ["Admissions", "Accounts", "HR"] },
      { name: "Registrar Office", code: "REG", floor: "1st Floor", departments: ["Academic Records", "Certificates"] },
      { name: "Vice Chancellor Office", code: "VC", floor: "3rd Floor", departments: ["Executive Office"] }
    ]
  },
  {
    zone: "Recreation Zone",
    color: "text-purple-600", 
    bgColor: "bg-purple-50",
    icon: Coffee,
    locations: [
      { name: "Sports Complex", code: "SC", floor: "G-2", departments: ["Gymnasium", "Indoor Courts"] },
      { name: "Student Center", code: "STC", floor: "G-2", departments: ["Clubs", "Activities"] },
      { name: "Auditorium", code: "AUD", floor: "G-1", departments: ["Main Hall"] },
      { name: "Open Air Theatre", code: "OAT", floor: "Ground", departments: ["Events"] }
    ]
  },
  {
    zone: "Support Services",
    color: "text-orange-600",
    bgColor: "bg-orange-50", 
    icon: Heart,
    locations: [
      { name: "Central Library", code: "LIB", floor: "G-3", departments: ["Reference", "Digital"] },
      { name: "Medical Center", code: "MED", floor: "G-1", departments: ["Emergency", "Pharmacy"] },
      { name: "Cafeteria", code: "CAF", floor: "Ground", departments: ["Main Dining", "Fast Food"] },
      { name: "Guest House", code: "GH", floor: "G-2", departments: ["Accommodation"] }
    ]
  }
];

const transportationInfo = [
  {
    type: "Bus Routes",
    icon: Bus,
    details: [
      "Route A: Campus ↔ City Center (Every 30 minutes)",
      "Route B: Campus ↔ Railway Station (Every 45 minutes)", 
      "Route C: Campus ↔ Airport (Every 2 hours)",
      "Route D: Campus ↔ Hostel Areas (Every 15 minutes)"
    ]
  },
  {
    type: "Parking Areas",
    icon: Car,
    details: [
      "Main Parking: Near Administration Block (200+ spaces)",
      "Student Parking: Near Academic Zone (150+ spaces)",
      "Faculty Parking: Dedicated areas near each block",
      "Visitor Parking: Near Main Gate (50+ spaces)"
    ]
  }
];

const quickDirections = [
  { from: "Main Gate", to: "Administration Block", route: "Enter → Straight 100m → Right turn", time: "2 min walk" },
  { from: "Main Gate", to: "Central Library", route: "Enter → Straight 200m → Academic Block", time: "3 min walk" },
  { from: "Hostel Area", to: "Academic Zone", route: "Exit hostel → Bus stop → 5 min ride", time: "8 min total" },
  { from: "Cafeteria", to: "Sports Complex", route: "Exit cafeteria → Cross quad → Left turn", time: "4 min walk" }
];

const CampusMap = () => {
  return (
    <PageLayout
      title="Campus Map & Directions"
      description="Navigate our campus easily with detailed maps and location information"
    >
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Campus Zones */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Campus Zones</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {campusZones.map((zone, index) => (
                <Card 
                  key={zone.zone}
                  className="service-card animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl ${zone.bgColor}`}>
                        <zone.icon className={`w-6 h-6 ${zone.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold">{zone.zone}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {zone.locations.map((location, idx) => (
                        <div key={idx} className="border-l-2 border-primary/20 pl-4">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold">{location.name}</h4>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              {location.code}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{location.floor}</p>
                          <div className="flex flex-wrap gap-1">
                            {location.departments.map((dept, deptIdx) => (
                              <span 
                                key={deptIdx}
                                className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                              >
                                {dept}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Transportation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Transportation & Parking</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {transportationInfo.map((info, index) => (
                <Card 
                  key={info.type}
                  className="p-6 animate-fade-in-delay"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{info.type}</h3>
                  </div>
                  <ul className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Directions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Quick Directions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quickDirections.map((direction, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-sm">{direction.from} → {direction.to}</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          {direction.time}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{direction.route}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Important Locations */}
          <Card className="p-8 mb-12 bg-gradient-to-r from-primary/5 to-accent/5">
            <h3 className="text-2xl font-bold mb-6 text-center">Important Locations & Contacts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Emergency Points
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Medical Center: Near Main Gate</li>
                  <li>• Security Office: Administration Block</li>
                  <li>• Fire Safety: Each building</li>
                  <li>• Emergency Assembly: Central Quad</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  Student Services
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Admissions: Ground Floor, ADM</li>
                  <li>• Academic Office: 1st Floor, ADM</li>
                  <li>• Fee Counter: Ground Floor, ADM</li>
                  <li>• Student Affairs: Student Center</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Home className="w-4 h-4 text-primary" />
                  Facilities
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• ATM: Near Cafeteria</li>
                  <li>• Stationery Shop: Student Center</li>
                  <li>• Photocopy Center: Library Ground Floor</li>
                  <li>• Lost & Found: Security Office</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Interactive Map Placeholder */}
          <Card className="p-8 text-center bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-600">Interactive Campus Map</h3>
            <p className="text-muted-foreground mb-4">
              Coming Soon: Interactive digital map with real-time navigation and location tracking
            </p>
            <div className="text-sm text-muted-foreground">
              For now, visit the Information Desk at the Main Gate for printed campus maps
            </div>
          </Card>

          {/* Contact Information */}
          <div className="mt-12 bg-primary text-primary-foreground rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Finding Your Way?</h2>
            <p className="mb-6 opacity-90">
              Our campus navigation team is here to help you find any location on campus.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Information Desk</h4>
                <p className="opacity-90">Main Gate Entrance</p>
                <p className="font-medium">+91-1234-567840</p>
                <p className="text-sm opacity-80">Open 24/7</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Campus Security</h4>
                <p className="opacity-90">Administration Block</p>
                <p className="font-medium">+91-1234-567841</p>
                <p className="text-sm opacity-80">Emergency: 1234</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CampusMap;