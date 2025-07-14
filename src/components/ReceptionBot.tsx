import { useState } from "react";
import { MessageCircle, Bot, User, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { universityData } from "@/data/universityData";

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

export const ReceptionBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm the Desh Bhagat University reception assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const processQuery = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    // Student information search
    if (lowerQuery.includes('student') || lowerQuery.includes('roll') || lowerQuery.includes('id')) {
      const student = universityData.students.find(s => 
        lowerQuery.includes(s.rollNumber.toLowerCase()) || 
        lowerQuery.includes(s.name.toLowerCase())
      );
      if (student) {
        return `Student Found:\n📚 Name: ${student.name}\n🆔 Roll Number: ${student.rollNumber}\n📘 Course: ${student.course}\n📅 Year: ${student.year}\n📧 Email: ${student.email}`;
      }
    }

    // Faculty information search
    if (lowerQuery.includes('faculty') || lowerQuery.includes('professor') || lowerQuery.includes('teacher')) {
      const faculty = universityData.faculty.find(f => 
        lowerQuery.includes(f.name.toLowerCase()) || 
        lowerQuery.includes(f.department.toLowerCase())
      );
      if (faculty) {
        return `Faculty Information:\n👨‍🏫 Name: ${faculty.name}\n🏢 Department: ${faculty.department}\n📧 Email: ${faculty.email}\n📍 Office: ${faculty.office}`;
      }
    }

    // Department information
    if (lowerQuery.includes('department') || lowerQuery.includes('course')) {
      const dept = universityData.departments.find(d => 
        lowerQuery.includes(d.name.toLowerCase())
      );
      if (dept) {
        return `Department Information:\n🏢 ${dept.name}\n👨‍💼 Head: ${dept.head}\n📍 Location: ${dept.location}\n📞 Contact: ${dept.contact}`;
      }
    }

    // General university information
    if (lowerQuery.includes('admission') || lowerQuery.includes('fee')) {
      return "For admission information, please visit our Admissions Office on the ground floor or call +91-1234-567890. Fee structure varies by course. Would you like information about a specific program?";
    }

    if (lowerQuery.includes('library')) {
      return "📚 Central Library is open Monday-Saturday, 8:00 AM - 8:00 PM. Located on the 2nd floor of the Academic Block. Digital resources available 24/7.";
    }

    if (lowerQuery.includes('hostel') || lowerQuery.includes('accommodation')) {
      return "🏠 Hostel facilities available for both boys and girls. Contact Hostel Warden at +91-1234-567891 for room availability and booking.";
    }

    if (lowerQuery.includes('cafeteria') || lowerQuery.includes('canteen')) {
      return "🍽️ University Cafeteria is located on the ground floor, open 7:00 AM - 9:00 PM. Multiple food courts available across campus.";
    }

    // Default response
    return "I can help you with:\n• Student information (provide roll number or name)\n• Faculty details\n• Department information\n• Admission queries\n• Campus facilities\n• Library, hostel, and cafeteria details\n\nWhat would you like to know?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: processQuery(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto h-[600px] flex flex-col animate-slide-up">
      {/* Header */}
      <div className="university-gradient p-4 rounded-t-xl">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Reception Assistant</h3>
            <p className="text-white/80 text-sm">Desh Bhagat University</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 animate-fade-in-delay ${
              message.sender === 'user' ? 'flex-row-reverse' : ''
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              {message.sender === 'bot' ? (
                <Bot className="w-4 h-4 text-primary" />
              ) : (
                <User className="w-4 h-4 text-primary" />
              )}
            </div>
            <div
              className={`max-w-[80%] p-3 rounded-xl whitespace-pre-line ${
                message.sender === 'bot'
                  ? 'chat-bubble'
                  : 'bg-primary text-primary-foreground'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-start gap-3 animate-bounce-in">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div className="chat-bubble">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about students, faculty, departments..."
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="sm" className="hero-button px-4">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};