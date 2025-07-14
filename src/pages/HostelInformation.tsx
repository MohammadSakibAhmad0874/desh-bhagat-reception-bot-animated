import { PageLayout } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Home, Users, Wifi, Car, Utensils, Shield, Phone, MapPin } from "lucide-react";

const hostelFeatures = [
  {
    icon: Home,
    title: "Accommodation",
    description: "Comfortable rooms with modern amenities",
    details: [
      "Single and shared occupancy",
      "Furnished rooms with beds & study tables",
      "Attached bathrooms",
      "Air conditioning available"
    ]
  },
  {
    icon: Utensils,
    title: "Mess Facilities",
    description: "Nutritious meals with varied menu",
    details: [
      "Breakfast, lunch & dinner",
      "Vegetarian and non-vegetarian options",
      "Hygienic food preparation",
      "Special dietary accommodations"
    ]
  },
  {
    icon: Wifi,
    title: "Internet & Utilities",
    description: "High-speed connectivity and essential services",
    details: [
      "24/7 Wi-Fi connectivity",
      "Power backup",
      "Hot water supply",
      "Laundry facilities"
    ]
  },
  {
    icon: Shield,
    title: "Security & Safety",
    description: "Round-the-clock security for peace of mind",
    details: [
      "24/7 security guards",
      "CCTV surveillance",
      "Visitor management system",
      "Emergency response team"
    ]
  }
];

const additionalFacilities = [
  { icon: Car, name: "Parking", description: "Secure parking for vehicles" },
  { icon: Users, name: "Common Room", description: "Recreation and social activities" },
  { icon: Phone, name: "Medical Aid", description: "First aid and medical assistance" },
  { icon: MapPin, name: "Transportation", description: "Regular bus service to campus" }
];

const HostelInformation = () => {
  return (
    <PageLayout
      title="Hostel Information"
      description="Comfortable and secure accommodation for a home-away-from-home experience"
    >
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {hostelFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="service-card animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Facilities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Additional Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalFacilities.map((facility, index) => (
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

          {/* Hostel Blocks Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">Boys Hostel Block A</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-800">Capacity & Rooms</h4>
                  <p className="text-blue-700">200 students • 100 rooms</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800">Warden</h4>
                  <p className="text-blue-700">Mr. Deepak Sharma</p>
                  <p className="text-sm text-blue-600">+91-1234-567811</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800">Location</h4>
                  <p className="text-blue-700">North Campus, Block A</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
              <h3 className="text-2xl font-bold mb-6 text-pink-900">Girls Hostel Block B</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-pink-800">Capacity & Rooms</h4>
                  <p className="text-pink-700">150 students • 75 rooms</p>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-800">Warden</h4>
                  <p className="text-pink-700">Mrs. Meera Gupta</p>
                  <p className="text-sm text-pink-600">+91-1234-567812</p>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-800">Location</h4>
                  <p className="text-pink-700">South Campus, Block B</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Rules and Regulations */}
          <Card className="p-8 mb-12 bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
            <h3 className="text-2xl font-bold mb-6 text-orange-900">Hostel Rules & Regulations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-orange-800">General Rules</h4>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>• Valid student ID required at all times</li>
                  <li>• Visitors allowed only during designated hours</li>
                  <li>• Maintain cleanliness in rooms and common areas</li>
                  <li>• No smoking or alcohol consumption</li>
                  <li>• Noise levels to be kept minimal after 10 PM</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-orange-800">Timings</h4>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>• Entry/Exit: 6:00 AM - 9:00 PM</li>
                  <li>• Mess hours: 7 AM, 1 PM, 8 PM</li>
                  <li>• Visitor hours: 4:00 PM - 7:00 PM</li>
                  <li>• Study hours: 8:00 PM - 11:00 PM</li>
                  <li>• Lights out: 11:30 PM</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Contact and Booking */}
          <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Hostel Admission & Booking</h2>
            <p className="mb-6 opacity-90">
              Secure your accommodation today! Limited seats available.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Admission Office</h4>
                <p className="opacity-90">Ground Floor, Admin Block</p>
                <p className="font-medium">+91-1234-567890</p>
                <p className="text-sm opacity-80">hostel@deshbhagat.edu.in</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Fee Structure</h4>
                <p className="opacity-90">Boys: ₹40,000/year</p>
                <p className="opacity-90">Girls: ₹45,000/year</p>
                <p className="text-sm opacity-80">Includes accommodation & meals</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HostelInformation;