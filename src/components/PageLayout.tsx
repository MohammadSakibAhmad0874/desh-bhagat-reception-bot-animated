import { ReactNode } from "react";
import { Navigation } from "./Navigation";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {(title || description) && (
        <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-6">
            {title && (
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-xl text-primary-foreground/90 max-w-3xl animate-fade-in-delay">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
      
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2024 Desh Bhagat University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};