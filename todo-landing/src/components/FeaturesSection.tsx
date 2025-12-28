import { Sparkles, Timer, CheckCircle, Layers } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Smart Reminders",
    description: "Never miss a deadline with smart notifications that learn your habits and remind you at the right time.",
  },
  {
    icon: Timer,
    title: "2-Minute to-Do",
    description: "Quick capture tasks in seconds. Our streamlined interface lets you add tasks without breaking your flow.",
  },
  {
    icon: CheckCircle,
    title: "Effortless Collaboration",
    description: "Share lists with family, friends, or colleagues. Work together seamlessly on shared goals.",
  },
  {
    icon: Layers,
    title: "Multi-Device Sync",
    description: "Access your tasks anywhere. Your to-do list stays perfectly synced across all your devices.",
  },
];

export function FeaturesSection() {
  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Transform Your Productivity with Our
            <br />
            Innovative To-Do List Features
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
