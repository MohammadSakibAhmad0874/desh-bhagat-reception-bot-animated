import { PageLayout } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, Trophy, BookOpen, Music, Briefcase } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Tech Fest 2024",
    description: "3-day technology festival featuring competitions, workshops, and exhibitions",
    date: "March 15-17, 2024",
    time: "9:00 AM onwards",
    venue: "Main Campus Auditorium",
    category: "Technology",
    icon: Briefcase,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: 2,
    title: "Sports Week Championship", 
    description: "Inter-department sports competitions including cricket, football, basketball",
    date: "March 20-25, 2024",
    time: "7:00 AM - 6:00 PM",
    venue: "Sports Complex",
    category: "Sports",
    icon: Trophy,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    id: 3,
    title: "Cultural Night",
    description: "Traditional and modern performances by students showcasing diverse talents",
    date: "March 30, 2024",
    time: "6:00 PM - 10:00 PM",
    venue: "Open Air Theatre",
    category: "Cultural",
    icon: Music,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    id: 4,
    title: "Academic Excellence Awards",
    description: "Recognizing outstanding academic achievements and research contributions",
    date: "April 5, 2024",
    time: "4:00 PM - 7:00 PM",
    venue: "Convention Center",
    category: "Academic",
    icon: BookOpen,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }
];

const recentNews = [
  {
    id: 1,
    title: "New Computer Science Lab Inaugurated",
    summary: "State-of-the-art computer lab with 100 workstations and latest software",
    date: "March 10, 2024",
    category: "Infrastructure"
  },
  {
    id: 2,
    title: "Placement Drive Results",
    summary: "95% placement rate achieved with top companies recruiting our graduates",
    date: "March 8, 2024",
    category: "Placements"
  },
  {
    id: 3,
    title: "Research Paper Published",
    summary: "Faculty research on renewable energy published in international journal",
    date: "March 5, 2024",
    category: "Research"
  },
  {
    id: 4,
    title: "New Partnership Announced",
    summary: "Strategic partnership with tech industry leaders for skill development",
    date: "March 1, 2024",
    category: "Partnerships"
  }
];

const EventsNews = () => {
  return (
    <PageLayout
      title="Events & News"
      description="Stay updated with the latest happenings and upcoming events at our university"
    >
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card 
                  key={event.id}
                  className="service-card animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${event.bgColor}`}>
                        <event.icon className={`w-6 h-6 ${event.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${event.bgColor} ${event.color}`}>
                            {event.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent News */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Recent News & Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentNews.map((news, index) => (
                <Card 
                  key={news.id}
                  className="p-6 hover:shadow-lg transition-shadow animate-fade-in-delay"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {news.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{news.title}</h4>
                  <p className="text-muted-foreground text-sm">{news.summary}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Event Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Event Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="p-3 bg-blue-50 rounded-full w-fit mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Technical Events</h4>
                <p className="text-sm text-muted-foreground">Workshops, seminars, and tech competitions</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="p-3 bg-green-50 rounded-full w-fit mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Sports Events</h4>
                <p className="text-sm text-muted-foreground">Inter and intra college sports competitions</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="p-3 bg-purple-50 rounded-full w-fit mx-auto mb-4">
                  <Music className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">Cultural Events</h4>
                <p className="text-sm text-muted-foreground">Dance, music, drama, and art festivals</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="p-3 bg-orange-50 rounded-full w-fit mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibant mb-2">Academic Events</h4>
                <p className="text-sm text-muted-foreground">Conferences, award ceremonies, and lectures</p>
              </Card>
            </div>
          </div>

          {/* Event Calendar */}
          <Card className="p-8 mb-12 bg-gradient-to-r from-primary/5 to-accent/5">
            <h3 className="text-2xl font-bold mb-6 text-center">Academic Calendar Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">March 2024</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>15-17: Tech Fest</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>20-25: Sports Week</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>30: Cultural Night</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">April 2024</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>5: Excellence Awards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>15: Semester Exams Begin</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>25: Project Presentations</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">May 2024</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>10: Graduation Ceremony</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>20: Summer Break Begins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>25: Summer Courses Start</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Event Information</h2>
            <p className="mb-6 opacity-90">
              For event registrations, updates, or organizing campus events, contact our student affairs office.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Student Affairs Office</h4>
                <p className="opacity-90">Second Floor, Student Center</p>
                <p className="font-medium">+91-1234-567830</p>
                <p className="text-sm opacity-80">events@deshbhagat.edu.in</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Event Registration</h4>
                <p className="opacity-90">Online Portal Available</p>
                <p className="font-medium text-accent">Register Now</p>
                <p className="text-sm opacity-80">portal.deshbhagat.edu.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EventsNews;