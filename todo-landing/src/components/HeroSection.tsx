import { Button } from "../components/ui/button";
import heroWoman from "../assets/hero-woman.jpg";

export function HeroSection({ onStartOrganizing }: { onStartOrganizing: () => void }) {
  return (
    <section id="home" className="pt-32 pb-16 md:pb-24">
      <div className="container mx-auto">
        {/* Hero Title */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Simplify Your Life with Our
            <br />
            Todo App
          </h1>
          <p className="text-muted-foreground text-base md:text-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Stay organized, boost your productivity, and never forget a task again. Our intuitive to-do list app helps you manage your
            daily tasks effortlessly.
          </p>
          <div className="mt-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="lg" onClick={onStartOrganizing}>
              Start Organizing
            </Button>
          </div>
        </div>

        {/* Hero Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Card - Gradient */}
          <div
            className="rounded-3xl p-8 md:p-10 lg:p-12 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden min-h-[320px] md:min-h-[400px] animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Organize.
                <br />
                Achieve.
                <br />
                Relax.
              </h2>
              <p className="mt-6 text-primary-foreground/90 max-w-sm">
                Take control of your day with smart task management. Prioritize what matters and enjoy the satisfaction of checking
                things off your list.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Button variant="secondary" size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                  Start Organizing
                </Button>
                <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/30">
                  Watch Video
                </Button>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary-foreground/10 rounded-full translate-x-1/4 translate-y-1/4" />
            <div className="absolute top-20 right-10 w-24 h-24 bg-primary-foreground/5 rounded-full" />
          </div>

          {/* Right Card - Image */}
          <div
            className="rounded-3xl overflow-hidden relative min-h-[320px] md:min-h-[400px] bg-secondary animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <img
              src={heroWoman}
              alt="Happy professional using todo app"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-xl p-3 shadow-card">
              <div className="text-xs font-medium text-muted-foreground mb-1">Your Today</div>
              <div className="text-sm font-bold text-foreground">Set Habits</div>
            </div>
            <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-card">
              <span className="text-sm font-medium text-foreground">Weekly Habits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
