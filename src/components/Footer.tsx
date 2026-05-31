import { User, MessageCircle } from "lucide-react";

export default function Footer() {
  const msg = "Olá Enock! Gostaria de saber mais sobre seus serviços"
  const url = `https://wa.me/558587756124?text=${encodeURIComponent(msg)}`

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-display text-primary-foreground text-base">EJ</span>
          </div>
          <span className="font-display text-foreground text-lg tracking-wider">ENOCK JUNIOR</span>
        </div>

        <p className="font-inter text-xs text-muted-foreground">
          © 2026 Enock Junior Personal Trainer. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-3">
          <a href="https://www.instagram.com/enockiano/" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/15 transition-colors">
            <User size={16} />
          </a>
          <a href={url} className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/15 transition-colors">
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}