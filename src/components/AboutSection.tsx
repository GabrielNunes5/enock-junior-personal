import { motion } from "framer-motion";
import { Award, Target, Heart, Zap } from "lucide-react";

const ABOUT_IMG = "https://i.ibb.co/Ld9yFd95/imagem-2026-05-30-173405957.png";

const features = [
  { icon: Award, title: "Certificado", desc: "CREF ativo e formação em Educação Física" },
  { icon: Target, title: "Personalizado", desc: "Treinos adaptados ao seu objetivo" },
  { icon: Heart, title: "Saúde", desc: "Foco em qualidade de vida e bem-estar" },
  { icon: Zap, title: "Resultados", desc: "Método comprovado com centenas de alunos" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img src={ABOUT_IMG} alt="Academia moderna" className="w-full h-72 sm:h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-inter text-sm font-medium tracking-widest">SOBRE MIM</span>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide mt-3 mb-6">
              ENOCK JUNIOR
            </h2>
            <p className="font-inter text-left text-muted-foreground leading-relaxed mb-4">
              Sou Personal Trainer dedicado, apaixonado por transformar vidas por meio da atividade física e do cuidado com a saúde. Meu trabalho é pautado no profissionalismo, na responsabilidade e no compromisso com os resultados de cada aluno.
              <br />

              Acredito que treinar vai muito além de exercícios: é sobre disciplina, constância e bem-estar. Por isso, desenvolvo treinos personalizados, respeitando as necessidades, objetivos e limitações individuais, sempre com seriedade e foco na evolução contínua.
              <br />

              Ao mesmo tempo, levo leveza para cada sessão. Meu bom humor faz parte do processo, tornando os treinos mais motivadores, agradáveis e eficientes. Afinal, acredito que um ambiente positivo contribui diretamente para melhores resultados.
              <br />

              Se você busca um acompanhamento sério, profissional e ao mesmo tempo motivador, estou pronto para te ajudar a alcançar seus objetivos com segurança, dedicação e excelência.
            </p>
            <p className="font-inter text-muted-foreground leading-relaxed mb-8">
              Acredito que o corpo é uma tela e que, com dedicação e orientação certa, qualquer pessoa pode criar
              sua obra-prima. Vamos juntos nessa jornada?
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                  <f.icon size={22} className="text-primary mb-2" />
                  <h4 className="font-inter font-semibold text-foreground text-sm">{f.title}</h4>
                  <p className="font-inter text-xs text-muted-foreground mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}