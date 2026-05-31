import { useState } from "react"
import { motion } from "framer-motion"
import { Send, MapPin, User, MessageCircle } from "lucide-react"
import { useToast } from "./ui/useToast"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

type FormData = {
  name: string
  goal: string
}

export default function ContactSection() {
  const { toast } = useToast()
  const [form, setForm] = useState<FormData>({ name: "", goal: "" })
  const [sending, setSending] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    
    const msg = `Olá Enock! Meu nome é ${form.name}. Gostaria de saber mais sobre seus serviços. Meu objetivo é ${form.goal}`
    const url = `https://wa.me/558587756124?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
    
    toast({ 
      title: "Redirecionando para o WhatsApp!", 
      description: "Fale diretamente com o Enock." 
    })
    
    setSending(false)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <span className="text-primary font-inter text-sm font-medium tracking-widest">CONTATO</span>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide mt-3 mb-6">
              VAMOS COMEÇAR?
            </h2>
            <p className="font-inter text-muted-foreground leading-relaxed mb-8">
              Preencha o formulário ou entre em contato diretamente. Responderei o mais rápido possível!
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <MessageCircle size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-inter text-sm font-semibold text-foreground">WhatsApp</p>
                  <p className="font-inter text-sm text-muted-foreground">
                    (85) 98775-6124
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <User size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-inter text-sm font-semibold text-foreground">
                    Instagram
                  </p>
                  <p className="font-inter text-sm text-muted-foreground">
                    @enockiano
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-inter text-sm font-semibold text-foreground">Localização</p>
                  <p className="font-inter text-sm text-muted-foreground">Atendimento presencial e online</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-card border border-border/50 space-y-5">
              <div>
                <label className="font-inter text-sm font-medium text-foreground mb-1.5 block">Nome</label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>

              <div>
                <label className="font-inter text-sm font-medium text-foreground mb-1.5 block">Seu Objetivo</label>
                <Textarea
                  required
                  placeholder="Conte-me sobre seus objetivos..."
                  rows={4}
                  value={form.goal}
                  onChange={(e) => setForm({ ...form, goal: e.target.value })}
                />
              </div>
              
              <Button type="submit" disabled={sending} className="w-full">
                <Send size={16} className="mr-2" />
                ENVIAR MENSAGEM
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}