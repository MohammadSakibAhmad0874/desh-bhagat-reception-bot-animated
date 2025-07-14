import { PageLayout } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { GraduationCap, FileText, CreditCard, Calendar, Award, HelpCircle } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Admissions",
    description: "Apply for undergraduate and postgraduate programs",
    details: [
      "Online application portal",
      "Document verification",
      "Entrance exam information",
      "Merit list and counseling"
    ]
  },
  {
    icon: GraduationCap,
    title: "Registration",
    description: "Course registration and academic planning",
    details: [
      "Semester registration",
      "Course selection guidance",
      "Academic calendar",
      "Credit requirements"
    ]
  },
  {
    icon: Award,
    title: "Academic Records",
    description: "Transcripts, certificates, and grade reports",
    details: [
      "Official transcripts",
      "Degree certificates",
      "Grade reports",
      "Academic verification"
    ]
  },
  {
    icon: CreditCard,
    title: "Fee Payment",
    description: "Tuition fees, hostel fees, and other payments",
    details: [
      "Online fee payment",
      "Fee structure",
      "Payment history",
      "Refund policies"
    ]
  },
  {
    icon: Calendar,
    title: "Academic Calendar",
    description: "Important dates and academic schedule",
    details: [
      "Semester dates",
      "Examination schedule",
      "Holiday calendar",
      "Registration deadlines"
    ]
  },
  {
    icon: HelpCircle,
    title: "Student Support",
    description: "Academic counseling and support services",
    details: [
      "Academic counseling",
      "Career guidance",
      "Mental health support",
      "Grievance redressal"
    ]
  }
];

const StudentServices = () => {
  return (
    <PageLayout
      title="Student Services"
      description="Comprehensive support for all your academic needs - from admissions to graduation"
    >
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
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

          {/* Contact Information */}
          <div className="mt-12 bg-primary/5 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              Our student services team is here to assist you with any questions or concerns.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold">Admissions Office</h4>
                <p className="text-sm text-muted-foreground">Ground Floor, Admin Block</p>
                <p className="text-primary font-medium">+91-1234-567890</p>
              </div>
              <div>
                <h4 className="font-semibold">Academic Section</h4>
                <p className="text-sm text-muted-foreground">First Floor, Admin Block</p>
                <p className="text-primary font-medium">+91-1234-567891</p>
              </div>
              <div>
                <h4 className="font-semibold">Fee Section</h4>
                <p className="text-sm text-muted-foreground">Ground Floor, Admin Block</p>
                <p className="text-primary font-medium">+91-1234-567892</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default StudentServices;