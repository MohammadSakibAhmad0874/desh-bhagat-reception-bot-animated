import { PageLayout } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Car, Bus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Campus Address",
    details: [
      "Desh Bhagat University",
      "Mandi Gobindgarh-Khanna Road",
      "Mandi Gobindgarh, Punjab - 147301",
      "India"
    ]
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: [
      "Main Office: +91-1234-567890",
      "Admissions: +91-1234-567891",
      "Student Affairs: +91-1234-567830",
      "Emergency: +91-1234-567999"
    ]
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: [
      "General: info@deshbhagat.edu.in",
      "Admissions: admissions@deshbhagat.edu.in",
      "Students: students@deshbhagat.edu.in",
      "Support: support@deshbhagat.edu.in"
    ]
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: [
      "Monday - Friday: 9:00 AM - 5:00 PM",
      "Saturday: 9:00 AM - 1:00 PM",
      "Sunday: Closed",
      "Emergency: 24/7 Available"
    ]
  }
];

const departments = [
  { name: "Admissions Office", phone: "+91-1234-567890", email: "admissions@deshbhagat.edu.in" },
  { name: "Academic Office", phone: "+91-1234-567895", email: "academic@deshbhagat.edu.in" },
  { name: "Finance Office", phone: "+91-1234-567892", email: "finance@deshbhagat.edu.in" },
  { name: "Student Affairs", phone: "+91-1234-567830", email: "students@deshbhagat.edu.in" },
  { name: "International Office", phone: "+91-1234-567896", email: "international@deshbhagat.edu.in" },
  { name: "Career Services", phone: "+91-1234-567897", email: "careers@deshbhagat.edu.in" }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <PageLayout
      title="Contact Us"
      description="Get in touch with us - we're here to help with all your queries and concerns"
    >
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="p-6 text-center hover:shadow-lg transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card className="p-8 animate-slide-in-right">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your query or concern..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="hero-button w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Campus Location */}
            <div className="space-y-8">
              <Card className="p-8 animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-2xl font-bold mb-6">Visit Our Campus</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Campus Location</h4>
                    <p className="text-muted-foreground">
                      Our beautiful campus is strategically located in Mandi Gobindgarh, Punjab, 
                      easily accessible by road and well-connected to major cities.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Car className="w-4 h-4 text-primary" />
                        <span className="font-medium">By Car</span>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 45 km from Chandigarh</li>
                        <li>• 25 km from Ludhiana</li>
                        <li>• Free parking available</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Bus className="w-4 h-4 text-primary" />
                        <span className="font-medium">By Public Transport</span>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Regular bus services</li>
                        <li>• Nearest railway station: 5 km</li>
                        <li>• Airport shuttle available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Map Placeholder */}
              <Card className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed animate-fade-in-delay">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-600">Interactive Campus Map</h3>
                  <p className="text-muted-foreground text-sm">
                    Detailed campus map and directions coming soon
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Department Contacts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Department Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <Card 
                  key={dept.name}
                  className="p-6 hover:shadow-lg transition-shadow animate-fade-in-delay"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-semibold mb-3">{dept.name}</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-primary">{dept.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{dept.email}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Media & Links */}
          <Card className="p-8 bg-primary text-primary-foreground text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
            <p className="mb-6 opacity-90">
              Follow us on social media for the latest updates, events, and university news.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Website</h4>
                <p className="text-sm opacity-80">www.deshbhagat.edu.in</p>
              </div>
              <div>
                <h4 className="font-semibant mb-2">Facebook</h4>
                <p className="text-sm opacity-80">@DeshBhagatUniversity</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">LinkedIn</h4>
                <p className="text-sm opacity-80">Desh Bhagat University</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">YouTube</h4>
                <p className="text-sm opacity-80">DBU Official Channel</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;