import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Celine",
    text: "Enock, um professor diferenciado!\nSempre ajudando a quebrar barreiras,\nrespeitando nossos limites e aumentando a nossa autoestima.\nCada aula é uma evolução!",
    role: "Acompanhamento Presencial",
  },
  {
    name: "Genésia",
    text: "Quero te parabenizar pelo seu trabalho! Já estou percebendo melhoras no meu corpo e vendo que os treinos estão fazendo a diferença. Obrigada pela dedicação, pela atenção e por montar meus treinos com tanto cuidado. Estou muito feliz com os resultados!",
    role: "Acompanhamento Presencial",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-inter text-sm font-medium tracking-widest">DEPOIMENTOS</span>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide mt-3">
            RESULTADOS REAIS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-colors"
            >
              <Quote size={28} className="text-primary/30 mb-4" />
              <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-6 whitespace-pre-line">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <div>
                <p className="font-inter font-semibold text-foreground text-sm">{t.name}</p>
                <p className="font-inter text-xs text-primary">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}