export function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "Download", "Updates"],
    Company: ["About", "Careers", "Press", "Contact"],
    Resources: ["Blog", "Help Center", "Community", "Guides"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">✓</span>
              </div>
              <span className="text-xl font-bold">do list</span>
            </div>
            <p className="text-background/70 text-sm">
              Simplify your life with our intuitive task management app.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">© 2024 do list. All rights reserved.</p>
          <div className="flex gap-4">
            {["Twitter", "LinkedIn", "Instagram", "Facebook"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-background/60 hover:text-background transition-colors text-sm"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
