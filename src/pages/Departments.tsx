import { PageLayout } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Building, Users, Phone, MapPin, BookOpen } from "lucide-react";
import { universityData } from "@/data/universityData";

const Departments = () => {
  return (
    <PageLayout
      title="Academic Departments"
      description="Explore our diverse academic departments and programs"
    >
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {universityData.departments.map((department, index) => (
              <Card 
                key={department.name}
                className="service-card animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Building className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{department.name}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>Head: {department.head}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                      <span className="text-muted-foreground">{department.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-muted-foreground" />
                      <span className="text-muted-foreground">{department.contact}</span>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <BookOpen className="w-5 h-5 text-muted-foreground" />
                        <span className="font-semibold">Courses Offered:</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 ml-8">
                        {department.courses.map((course, idx) => (
                          <div 
                            key={idx}
                            className="bg-primary/5 text-primary px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-xl font-bold mb-4">Research Opportunities</h3>
              <p className="text-muted-foreground mb-4">
                All departments offer research programs and opportunities for both undergraduate and graduate students.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Faculty-guided research projects</li>
                <li>• Industry collaboration programs</li>
                <li>• Conference presentation opportunities</li>
                <li>• Publication support</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5">
              <h3 className="text-xl font-bold mb-4">Interdisciplinary Programs</h3>
              <p className="text-muted-foreground mb-4">
                Cross-departmental programs that combine multiple fields of study.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Computer Science + Business</li>
                <li>• Engineering + Management</li>
                <li>• Commerce + Technology</li>
                <li>• Liberal Arts + Sciences</li>
              </ul>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-primary text-primary-foreground rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
            <p className="mb-6 opacity-90">
              Want to know more about a specific department or program? Contact our academic office.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Academic Office</h4>
                <p className="opacity-80">First Floor, Administration Block</p>
                <p className="font-medium">+91-1234-567895</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Department Coordinators</h4>
                <p className="opacity-80">Available for consultation</p>
                <p className="font-medium">Monday - Friday, 10 AM - 4 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Departments;