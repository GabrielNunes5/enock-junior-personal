import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO_IMG = "https://i.ibb.co/PfXpcRx/imagem-2026-05-30-173720629.png";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 mt-6">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/40" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary font-inter text-xs sm:text-sm font-medium tracking-wide mb-6">
              PERSONAL TRAINER CERTIFICADO
            </span>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[0.9] tracking-wide mb-6">
              SEU CORPO<br />
              <span className="text-primary">
                É UMA TELA,
              </span><br />
              E VOCÊ É O<br />
              ARTISTA.
            </h1>

            <p className="font-inter text-muted-foreground text-base sm:text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              Transforme seu corpo e sua vida com treinos personalizados e acompanhamento profissional de alta performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-inter font-bold text-sm rounded-xl hover:bg-accent transition-all duration-300">
                COMECE AGORA
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-inter font-semibold text-sm rounded-xl hover:border-primary/50 hover:text-primary transition-all duration-300">
                VER SERVIÇOS
              </a>
            </div>

            <div className="flex items-center gap-8 sm:gap-12 mt-12 justify-center lg:justify-start">
              {[
                { value: "300+", label: "Alunos" },
                { value: "100%", label: "Satisfação" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-2xl sm:text-3xl text-primary">{s.value}</div>
                  <div className="font-inter text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-72 sm:w-80 lg:w-full max-w-md">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 via-transparent to-accent/30 blur-sm" />
              <img
                src={HERO_IMG}
                alt="Enock Junior - Personal Trainer"
                className="relative rounded-2xl w-full h-auto object-cover shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}