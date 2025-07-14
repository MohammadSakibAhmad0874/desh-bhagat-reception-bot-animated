import { PageLayout } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Award, Globe, Target, Heart, BookOpen, Lightbulb } from "lucide-react";

const stats = [
  { icon: Users, label: "Students", value: "15,000+", description: "Across all programs" },
  { icon: GraduationCap, label: "Faculty Members", value: "500+", description: "Qualified educators" },
  { icon: BookOpen, label: "Academic Programs", value: "50+", description: "Undergraduate & Graduate" },
  { icon: Award, label: "Years of Excellence", value: "25+", description: "Established in 1999" }
];

const values = [
  {
    icon: Target,
    title: "Excellence in Education",
    description: "Committed to providing world-class education that prepares students for global challenges and opportunities."
  },
  {
    icon: Lightbulb,
    title: "Innovation & Research", 
    description: "Fostering a culture of innovation, critical thinking, and research-driven learning across all disciplines."
  },
  {
    icon: Heart,
    title: "Student-Centric Approach",
    description: "Placing students at the center of everything we do, ensuring their holistic development and success."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Preparing students with global outlook and skills needed to succeed in an interconnected world."
  }
];

const milestones = [
  { year: "1999", event: "University Establishment", description: "Founded with a vision to transform higher education" },
  { year: "2005", event: "First Graduation Ceremony", description: "Celebrated our first batch of graduates with flying colors" },
  { year: "2010", event: "Research Center Launch", description: "Established dedicated research facilities and innovation labs" },
  { year: "2015", event: "International Recognition", description: "Received accreditation from international educational bodies" },
  { year: "2020", event: "Digital Transformation", description: "Launched comprehensive online learning platform" },
  { year: "2024", event: "Smart Campus Initiative", description: "Introducing AI-powered reception and campus management system" }
];

const About = () => {
  return (
    <PageLayout
      title="About Desh Bhagat University"
      description="Empowering minds, transforming futures - A legacy of excellence in higher education"
    >
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* University Overview */}
          <div className="mb-16">
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Established in 1999, Desh Bhagat University has been a beacon of educational excellence for over two decades. 
                  We began with a simple yet powerful vision: to provide quality education that transforms lives and shapes futures.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we stand as a premier institution offering diverse academic programs, cutting-edge research opportunities, 
                  and a vibrant campus life that nurtures both intellectual growth and personal development.
                </p>
              </div>
            </Card>
          </div>

          {/* Statistics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">University at a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label}
                  className="p-6 text-center hover:shadow-lg transition-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 animate-slide-in-right">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h3>
                <p className="text-blue-800 leading-relaxed">
                  To provide transformative education that empowers students with knowledge, skills, and values necessary 
                  to become responsible global citizens and leaders in their chosen fields. We are committed to fostering 
                  innovation, critical thinking, and lifelong learning.
                </p>
              </Card>
              
              <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 border-green-200 animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-2xl font-bold mb-4 text-green-900">Our Vision</h3>
                <p className="text-green-800 leading-relaxed">
                  To be recognized as a leading university that shapes the future through excellence in education, research, 
                  and community engagement. We envision creating an inclusive learning environment that prepares students 
                  to address global challenges and contribute meaningfully to society.
                </p>
              </Card>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="p-6 hover:shadow-lg transition-shadow animate-fade-in-delay"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <value.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <Card 
                  key={milestone.year}
                  className="p-6 hover:shadow-lg transition-shadow animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                        {milestone.year.slice(-2)}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{milestone.year}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{milestone.event}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">VC</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Dr. Rajesh Kumar</h4>
                <p className="text-primary font-medium mb-2">Vice Chancellor</p>
                <p className="text-sm text-muted-foreground">Leading the university with 25+ years of experience in higher education and administration.</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">R</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Dr. Priya Sharma</h4>
                <p className="text-primary font-medium mb-2">Registrar</p>
                <p className="text-sm text-muted-foreground">Overseeing academic affairs and student services with dedication to educational excellence.</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">DoA</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Dr. Amit Gupta</h4>
                <p className="text-primary font-medium mb-2">Dean of Academics</p>
                <p className="text-sm text-muted-foreground">Driving academic innovation and ensuring quality education across all departments.</p>
              </Card>
            </div>
          </div>

          {/* Accreditations */}
          <Card className="p-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <h3 className="text-2xl font-bold mb-6 text-center text-orange-900">Accreditations & Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-orange-800">Quality Assurance</h4>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>• UGC Recognized University</li>
                  <li>• NAAC A+ Grade Accreditation</li>
                  <li>• ISO 9001:2015 Certified</li>
                  <li>• NBA Accredited Programs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-orange-800">Rankings & Awards</h4>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>• Top 100 Universities in India</li>
                  <li>• Excellence in Teaching Award</li>
                  <li>• Best Campus Infrastructure</li>
                  <li>• Outstanding Placement Record</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;