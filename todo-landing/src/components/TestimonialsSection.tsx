import testimonialWoman from "../assets/testimonial-woman.jpg";
import testimonialMan from "../assets/testimonial-man.jpg";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Using this website has made my tasks so much easier! I can't imagine my day without it.",
    author: "Alena Donin",
    role: "Head of Marketing",
    image: testimonialWoman,
    rating: 5,
    featured: true,
  },
  {
    quote:
      "The best productivity tool I've ever used. It's simple, intuitive, and keeps me on track every single day.",
    author: "Michael Chen",
    role: "Product Manager",
    image: testimonialMan,
    rating: 5,
    featured: false,
  },
];

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">Customer Testimonials</h2>
          <p className="text-muted-foreground">See what our satisfied users have to say about their experience.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`rounded-3xl p-8 ${
                testimonial.featured ? "bg-primary text-primary-foreground" : "bg-card border border-border"
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className={`w-5 h-5 fill-current ${testimonial.featured ? "text-primary-foreground" : "text-primary"}`} />
                ))}
              </div>
              <blockquote className={`text-lg md:text-xl font-medium mb-6 ${testimonial.featured ? "" : "text-foreground"}`}>
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className={`font-semibold ${testimonial.featured ? "" : "text-foreground"}`}>{testimonial.author}</div>
                  <div className={`text-sm ${testimonial.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
