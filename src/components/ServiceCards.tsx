import { 
  GraduationCap, 
  Users, 
  Building, 
  BookOpen, 
  Home, 
  Coffee,
  Calendar,
  Phone,
  MapPin
} from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: GraduationCap,
    title: "Student Services",
    description: "Admissions, registrations, academic records",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Users,
    title: "Faculty Directory",
    description: "Find professors, staff contacts and office hours",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Building,
    title: "Departments",
    description: "Academic departments, courses and programs",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: BookOpen,
    title: "Library Services",
    description: "Digital resources, study spaces, timings",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: Home,
    title: "Hostel Information",
    description: "Accommodation, room booking, facilities",
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    icon: Coffee,
    title: "Campus Facilities",
    description: "Cafeteria, sports, medical center",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    icon: Calendar,
    title: "Events & News",
    description: "University events, announcements, calendar",
    color: "text-pink-600",
    bgColor: "bg-pink-50"
  },
  {
    icon: MapPin,
    title: "Campus Map",
    description: "Find buildings, rooms, and facilities",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    icon: Phone,
    title: "Emergency Contacts",
    description: "Security, medical, administrative contacts",
    color: "text-teal-600",
    bgColor: "bg-teal-50"
  }
];

export const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => (
        <Card 
          key={service.title}
          className={`service-card cursor-pointer hover:shadow-xl animate-slide-in-right`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl ${service.bgColor}`}>
              <service.icon className={`w-6 h-6 ${service.color}`} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};