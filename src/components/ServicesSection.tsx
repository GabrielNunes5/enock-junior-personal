import { motion } from "framer-motion";
import { Dumbbell, Users, ClipboardList, Activity, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Treino Personalizado",
    desc: "Programa de treino exclusivo criado de acordo com seus objetivos, limitações e disponibilidade.",
    highlight: true,
  },
  {
    icon: Users,
    title: "Treino em Dupla",
    desc: "Treine com um amigo ou parceiro e divida os custos. Mais motivação e resultados juntos.",
    highlight: false,
  },
  {
    icon: Activity,
    title: "Avaliação Física",
    desc: "Avaliação completa do seu condicionamento físico, composição corporal e definição de metas realistas.",
    highlight: true,
  },
  {
    icon: ClipboardList,
    title: "Consultoria Online",
    desc: "Acompanhamento remoto com planilha de treino, vídeos e suporte via WhatsApp.",
    highlight: false,
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-inter text-sm font-medium tracking-widest">SERVIÇOS</span>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide mt-3">
            O QUE EU OFEREÇO
          </h2>
          <p className="font-inter text-muted-foreground mt-4 max-w-lg mx-auto">
            Soluções completas para você alcançar seus objetivos de forma segura e eficiente.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                s.highlight
                  ? "bg-primary/10 border-primary/30 hover:border-primary"
                  : "bg-card border-border/50 hover:border-primary/30"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                s.highlight ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
              }`}>
                <s.icon size={24} />
              </div>
              <h3 className="font-inter font-bold text-foreground text-base mb-2">{s.title}</h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <a href="#contact" className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Saiba mais <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}