import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCards } from "@/components/ServiceCards";
import { ReceptionBot } from "@/components/ReceptionBot";

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  const handleStartChat = () => {
    setShowChat(true);
    // Smooth scroll to chat section
    setTimeout(() => {
      document.getElementById('chat-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection onStartChat={handleStartChat} />
      
      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive services or ask our AI assistant for personalized help
            </p>
          </div>
          
          <ServiceCards />
        </div>
      </section>

      {/* Chat Section */}
      {showChat && (
        <section id="chat-section" className="py-16 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Chat with Our Reception Assistant
              </h2>
              <p className="text-muted-foreground">
                Ask questions about students, faculty, departments, or any campus information
              </p>
            </div>
            
            <ReceptionBot />
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Desh Bhagat University</h3>
              <p className="text-primary-foreground/80">
                Leading institution providing quality education and comprehensive student services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>• Admissions</li>
                <li>• Academic Programs</li>
                <li>• Campus Life</li>
                <li>• Research</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <div className="text-primary-foreground/80 space-y-2">
                <p>📞 +91-1234-567890</p>
                <p>✉️ info@deshbhagat.edu.in</p>
                <p>📍 Desh Bhagat University Campus</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Desh Bhagat University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
