import { PageLayout } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search, Mail, Phone, MapPin } from "lucide-react";
import { universityData } from "@/data/universityData";

const FacultyDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaculty = universityData.faculty.filter(faculty =>
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageLayout
      title="Faculty Directory"
      description="Meet our distinguished faculty members and academic staff"
    >
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search faculty by name, department, or designation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Faculty Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculty.map((faculty, index) => (
              <Card 
                key={faculty.email}
                className="service-card animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  {/* Profile Image Placeholder */}
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-primary">
                      {faculty.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold mb-1">{faculty.name}</h3>
                    <p className="text-primary font-medium mb-1">{faculty.designation}</p>
                    <p className="text-muted-foreground text-sm">{faculty.department}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{faculty.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{faculty.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Office: {faculty.office}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredFaculty.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No faculty members found matching your search.
              </p>
            </div>
          )}

          {/* Office Hours */}
          <div className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Office Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">General Office Hours</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                  <li>Saturday: 9:00 AM - 1:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Student Consultation</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Monday - Thursday: 2:00 PM - 4:00 PM</li>
                  <li>Friday: 10:00 AM - 12:00 PM</li>
                  <li>Prior appointment recommended</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FacultyDirectory;