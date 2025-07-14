import { MessageCircle, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/university-hero.jpg";

interface HeroSectionProps {
  onStartChat: () => void;
}

export const HeroSection = ({ onStartChat }: HeroSectionProps) => {
  return (
    <div className="relative min-h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 university-gradient opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] px-6">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Welcome Text */}
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block text-yellow-300 animate-pulse-glow">
                Desh Bhagat University
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Your Smart Reception Assistant
              <span className="block text-lg mt-2 text-white/80">
                Get instant help with admissions, student services, and campus information
              </span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
            <Button 
              onClick={onStartChat}
              className="hero-button text-lg px-8 py-4 animate-bounce-in"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Conversation
            </Button>
            
            <div className="flex gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Campus Info</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300">15,000+</div>
              <div className="text-white/80">Students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300">500+</div>
              <div className="text-white/80">Faculty Members</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300">50+</div>
              <div className="text-white/80">Courses</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};