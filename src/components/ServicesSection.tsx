import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Dumbbell, UserCheck, ClipboardList, Activity, ArrowRight, Check, X } from "lucide-react";

type ServiceDetail = {
  subtitle?: string;
  intro: string;
  items: { title: string; text: string }[];
  highlightTitle: string;
  highlightIntro?: string;
  highlightList: string[];
  closing: string;
};

type Service = {
  icon: typeof Dumbbell;
  title: string;
  desc: string;
  highlight: boolean;
  detail?: ServiceDetail;
};

const services: Service[] = [
  {
    icon: Dumbbell,
    title: "Treino Personalizado",
    desc: "Programa de treino exclusivo criado de acordo com seus objetivos, limitações e disponibilidade.",
    highlight: true,
    detail: {
      subtitle: "Feito para você, apenas para você",
      intro:
        "Treino genérico serve para muitos — o seu treino serve só para você. É assim que trabalhamos: sem cópias, sem receitas prontas, apenas um plano desenhado em cima de quem você é e onde quer chegar.",
      items: [
        {
          title: "Feito sob medida",
          text: "Considera seu objetivo, nível, histórico, limitações e até suas preferências: cada exercício tem um motivo e um lugar.",
        },
        {
          title: "Evolução sem parar",
          text: "Planejamento em fases, com ajustes constantes para nunca estagnar e sempre avançar.",
        },
        {
          title: "Respeito ao seu ritmo",
          text: "Cargas, séries e intervalos adaptados ao seu corpo, sem forçar demais nem deixar a desejar.",
        },
        {
          title: "Foco no que importa para você",
          text: "Ganho de massa, perda de peso, desempenho ou saúde: todo o trabalho caminha na direção da sua meta.",
        },
      ],
      highlightTitle: "Por que faz toda a diferença?",
      highlightList: [
        "Resultados mais rápidos e consistentes: cada esforço vai para o alvo certo;",
        "Muito mais segurança: evita movimentos inadequados e riscos de lesão;",
        "Nunca fica chato nem parado: o plano cresce junto com você;",
        "É sobre você: seu tempo, seu corpo, sua jornada.",
      ],
      closing:
        "Seu corpo é único — o treino que cuida dele também deve ser. Invista no que é feito para você e veja a diferença acontecer.",
    },
  },
  {
    icon: UserCheck,
    title: "Acompanhamento Presencial",
    desc: "Treino ao vivo, com presença física, demonstração prática e segurança em cada exercício.",
    highlight: false,
    detail: {
      subtitle: "Presença que faz o treino acontecer",
      intro:
        "Algumas coisas só se aprendem e se sentem treinando de perto. No atendimento presencial, o treino acontece ao vivo, com demonstração prática, contato direto e a energia de quem treina com companhia.",
      items: [
        {
          title: "Demonstração na prática",
          text: "Você vê, sente e repete o movimento certo, com toque e orientação física quando necessário, sem depender de vídeo ou descrição.",
        },
        {
          title: "Segurança nos exercícios",
          text: "Apoio nos movimentos mais exigentes e nas cargas mais altas, para você ir além com tranquilidade.",
        },
        {
          title: "Conexão com o músculo",
          text: "Direcionamento durante a execução para você sentir o músculo certo trabalhando em cada repetição.",
        },
        {
          title: "Energia que empurra",
          text: "Incentivo na hora em que o cansaço aperta, para você completar a série que sozinho deixaria pela metade.",
        },
      ],
      highlightTitle: "Por que treinar presencialmente?",
      highlightList: [
        "Aprendizado mais rápido: o corpo entende melhor o que é demonstrado na prática;",
        "Mais intensidade: você alcança um nível de esforço difícil de atingir sozinho;",
        "Mais compromisso: horário marcado e alguém esperando por você;",
        "Mais prazer: treinar vira um momento leve, e não uma obrigação.",
      ],
      closing:
        "Quando o treino é vivido de perto, a diferença aparece na força, na técnica e na vontade de voltar. Venha treinar do jeito que só o presencial proporciona.",
    },
  },
  {
    icon: Activity,
    title: "Avaliação Física",
    desc: "Avaliação completa do seu condicionamento físico, composição corporal e definição de metas realistas.",
    highlight: true,
    detail: {
      intro:
        "Para treinar com segurança, eficiência e alcançar metas de verdade, não basta apenas começar a se exercitar — é preciso conhecer seu corpo por completo. É isso que oferecemos com a avaliação física detalhada, feita com métodos precisos:",
      items: [
        {
          title: "Perimetragem",
          text: "Mede as circunferências de cada região corporal, acompanhando ganho de massa, perda de medidas e mudanças na silhueta de forma visível e concreta.",
        },
        {
          title: "Adipometria",
          text: "Avalia a espessura das dobras cutâneas em pontos estratégicos, calculando a porcentagem de gordura corporal com precisão e identificando onde o tecido adiposo se concentra.",
        },
        {
          title: "Bioimpedância",
          text: "Analisa composição corporal: massa magra, massa gorda, nível de hidratação e metabolismo. Revela como seu corpo funciona por dentro, muito além do número na balança.",
        },
      ],
      highlightTitle: "Por que é essencial?",
      highlightIntro: "Sem dados corretos, o treino é apenas um palpite. Esses exames:",
      highlightList: [
        "Definem metas realistas e individuais;",
        "Orientam o planejamento de treino e nutrição;",
        "Acompanham a evolução a cada etapa;",
        "Detectam desequilíbrios e protegem sua saúde.",
      ],
      closing:
        "Seu corpo é único — seu acompanhamento também deve ser. Comece pelo caminho certo: com dados, ciência e resultados duradouros.",
    },
  },
  {
    icon: ClipboardList,
    title: "Consultoria Online",
    desc: "Acompanhamento remoto com planilha de treino, vídeos e suporte via WhatsApp.",
    highlight: false,
    detail: {
      subtitle: "Resultados onde você estiver",
      intro:
        "Ter acompanhamento profissional não precisa estar preso a um horário ou lugar. Nossa consultoria online leva o planejamento personalizado até você — com a mesma atenção, precisão e dedicação do atendimento presencial, adaptada à sua rotina.",
      items: [
        {
          title: "Plano totalmente individualizado",
          text: "Treino feito para seus objetivos, nível, disponibilidade e preferências; nada de receitas genéricas.",
        },
        {
          title: "Acompanhamento contínuo",
          text: "Ajustes frequentes, resposta às suas dúvidas e monitoramento da evolução, sempre perto de você.",
        },
        {
          title: "Flexibilidade total",
          text: "Treine no horário que preferir, em casa, na academia ou em viagem: o plano vai junto com você.",
        },
        {
          title: "Orientações completas",
          text: "Execução correta dos exercícios, dicas de nutrição e estilo de vida alinhados com suas metas.",
        },
      ],
      highlightTitle: "Por que escolher?",
      highlightList: [
        "Acesso a orientação especializada, independente de onde você esteja;",
        "Economia de tempo sem abrir mão da qualidade;",
        "Evolução mensurada e metas atualizadas passo a passo;",
        "Aprendizado que você leva para a vida: entenda o porquê de cada treino.",
      ],
      closing:
        "Seu progresso não tem barreiras. Com consultoria, você não está sozinho — tem um profissional ao seu lado, guiando cada etapa rumo aos resultados que deseja.",
    },
  },
];

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const { detail } = service;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl border border-primary/30 bg-card p-6 sm:p-8 shadow-2xl"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-4">
          <service.icon size={24} />
        </div>
        <h3 id="service-modal-title" className="font-display text-3xl text-foreground tracking-wide">
          {service.title}
        </h3>
        {detail?.subtitle && (
          <p className="font-inter text-sm font-medium text-primary mt-1">{detail.subtitle}</p>
        )}
        <div className="mb-4" />

        {detail ? (
          <div className="font-inter text-sm text-muted-foreground leading-relaxed space-y-5">
            <p>{detail.intro}</p>
            <ul className="space-y-3">
              {detail.items.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <Check size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">{item.title}</strong> — {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="rounded-xl bg-primary/10 border border-primary/30 p-4">
              <h4 className="font-bold text-foreground mb-1">{detail.highlightTitle}</h4>
              {detail.highlightIntro && <p className="mb-2">{detail.highlightIntro}</p>}
              <ul className="list-disc pl-5 space-y-1">
                {detail.highlightList.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </div>
            <p className="text-foreground font-medium">{detail.closing}</p>
          </div>
        ) : (
          <p className="font-inter text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
        )}

        <a
          href="#contact"
          onClick={onClose}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Entrar em contato <ArrowRight size={14} />
        </a>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const [selected, setSelected] = useState<Service | null>(null);

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
              <button
                type="button"
                onClick={() => setSelected(s)}
                className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all cursor-pointer"
              >
                Saiba mais <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
