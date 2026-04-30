import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import bgHeader from "@/assets/versio/hero-neymar.png";
import bgHeaderMobile from "@/assets/versio/hero-neymar-mobile.png";
import bgFooter from "@/assets/versio/background-footer_3d0938a766fd.png";
import lateralDark from "@/assets/versio/lateral-dark-mode_2266b9c0b713.png";
import avatarMan from "@/assets/versio/image_6e1f787d00c0.png";
import avatarWoman from "@/assets/versio/image_7cba69393704.png";
import avatarMan2 from "@/assets/versio/image_3ef650545b5c.png";
import njrLogo from "@/assets/versio/njr-edutech.png";

const VersioLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6 L14 26 L18 26 L22 18 L18 18 L16 22 L8 6 Z" fill="currentColor"/>
      <circle cx="24" cy="10" r="2" fill="currentColor"/>
    </svg>
    <span className="text-[22px] font-medium tracking-tight leading-none">versio</span>
  </div>
);

const Index = () => {
  const [email, setEmail] = useState("");
  const [lang, setLang] = useState<"PT" | "EN">("PT");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
          <a href="/" aria-label="versio">
            <VersioLogo />
          </a>
          {/* Desktop nav */}
          <nav className="hidden items-center gap-3 md:flex md:gap-6">
            <a href="#especialista" className="text-[13px] font-semibold tracking-wide text-foreground hover:opacity-70">
              ME TORNAR ESPECIALISTA
            </a>
            <a
              href="#planos"
              className="rounded-sm border border-foreground px-4 py-2 text-[13px] font-semibold tracking-wide hover:bg-foreground hover:text-background transition-colors"
            >
              PLANOS
            </a>
            <a
              href="#acessar"
              className="rounded-sm bg-primary px-4 py-2 text-[13px] font-semibold tracking-wide text-primary-foreground hover:opacity-90"
            >
              ACESSAR
            </a>
            <div className="flex overflow-hidden rounded-sm border border-border text-[12px] font-semibold">
              <button
                onClick={() => setLang("PT")}
                className={`px-2.5 py-1.5 ${lang === "PT" ? "bg-primary text-primary-foreground" : "bg-background"}`}
              >
                PT
              </button>
              <button
                onClick={() => setLang("EN")}
                className={`px-2.5 py-1.5 ${lang === "EN" ? "bg-primary text-primary-foreground" : "bg-background"}`}
              >
                EN
              </button>
            </div>
          </nav>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            className="md:hidden p-2"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-dark-bg/40" onClick={() => setMenuOpen(false)} />
          <div className="relative bg-background shadow-xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <span className="w-6" />
              <VersioLogo />
              <button onClick={() => setMenuOpen(false)} aria-label="Fechar menu" className="p-1">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-4 px-6 py-8">
              <a
                href="#especialista"
                onClick={() => setMenuOpen(false)}
                className="text-center text-[13px] font-semibold tracking-wide py-3"
              >
                ME TORNAR ESPECIALISTA
              </a>
              <a
                href="#planos"
                onClick={() => setMenuOpen(false)}
                className="rounded-sm border border-foreground py-3 text-center text-[13px] font-semibold tracking-wide"
              >
                PLANOS
              </a>
              <a
                href="#acessar"
                onClick={() => setMenuOpen(false)}
                className="rounded-sm bg-primary py-3 text-center text-[13px] font-semibold tracking-wide text-primary-foreground"
              >
                ACESSAR
              </a>
              <div className="flex justify-center">
                <div className="flex overflow-hidden rounded-sm border border-border text-[12px] font-semibold">
                  <button
                    onClick={() => setLang("PT")}
                    className={`px-4 py-1.5 ${lang === "PT" ? "bg-primary text-primary-foreground" : "bg-background"}`}
                  >
                    PT
                  </button>
                  <button
                    onClick={() => setLang("EN")}
                    className={`px-4 py-1.5 ${lang === "EN" ? "bg-primary text-primary-foreground" : "bg-background"}`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero (sticky parallax) */}
      <div className="relative" style={{ height: "100vh" }}>
        <section className="sticky top-0 h-screen w-full overflow-hidden rounded-b-3xl">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
            style={{ backgroundImage: `url(${bgHeaderMobile})` }}
          />
          <div
            className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
            style={{ backgroundImage: `url(${bgHeader})` }}
          />
          <div className="relative mx-auto grid h-full max-w-[1400px] items-start gap-10 px-6 text-center md:items-center md:pt-0 md:text-left lg:grid-cols-2 lg:px-10" style={{ paddingTop: "20px" }}>
            <div className="relative z-10 mx-auto md:mx-0 md:!pt-0">
              <p className="mb-4 text-[13px] font-semibold tracking-[0.08em] text-primary md:mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                ESPECIALISTA COM IA
              </p>
              <h1 className="text-[28px] font-bold leading-[1.1] tracking-tight md:text-[56px] lg:text-[64px] animate-blur-in" style={{ animationDelay: "200ms" }}>
                Tem uma dúvida ou quer aprender algo novo? Fale com a IA de um especialista de verdade.
              </h1>
              <p className="mx-auto mt-4 max-w-md text-[14px] leading-relaxed text-foreground/80 md:mx-0 md:mt-6 md:text-[15px] animate-fade-up" style={{ animationDelay: "550ms" }}>
                Uma inteligência artificial com conteúdo criado por quem é autoridade no assunto. Rápido, confiável e direto ao ponto
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mx-auto mt-6 flex max-w-lg overflow-hidden rounded-sm border border-input bg-background/80 backdrop-blur md:mx-0 md:mt-8 animate-fade-up transition-all duration-300 focus-within:border-primary focus-within:shadow-[0_0_0_4px_hsl(var(--primary)/0.12)]"
                style={{ animationDelay: "700ms" }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e-mail"
                  className="flex-1 bg-transparent px-4 py-3 text-[14px] outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  className="bg-primary px-6 py-3 text-[13px] font-semibold tracking-wide text-primary-foreground transition-all duration-300 ease-out-expo hover:opacity-90 hover:tracking-wider"
                >
                  COMECE AGORA
                </button>
              </form>
            </div>
            <div aria-hidden className="hidden lg:block" />
          </div>
        </section>
      </div>

      {/* Subhero + chat */}
      <section className="relative z-10 -mt-8 rounded-t-3xl bg-background px-6 py-20 lg:px-10">

        <div className="mx-auto max-w-3xl text-center">
          <Reveal as="h2" className="text-[26px] font-bold leading-tight md:text-[34px]">
            Aprenda no seu ritmo, com quem você admira, em conversas que geram resultados baseados no conteúdo e identidade do especialista.
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-6">
          {/* Incoming */}
          <Reveal className="flex items-end gap-3" delay={100}>
            <img src={avatarMan} alt="" className="h-10 w-10 shrink-0 rounded-sm" />
            <div className="rounded-2xl rounded-bl-sm bg-primary px-5 py-3 text-[14px] text-primary-foreground max-w-md">
              Acho que quero sentir que minhas ações têm propósito, sabe? Que não estou só apagando incêndios.
            </div>
          </Reveal>
          {/* Outgoing */}
          <Reveal className="flex items-start justify-end gap-3" delay={300}>
            <div className="flex flex-col items-end gap-2 max-w-md">
              <div className="rounded-2xl rounded-br-sm bg-secondary px-5 py-2 text-[14px]">
                Perfeito
              </div>
              <div className="rounded-2xl rounded-br-sm bg-secondary px-5 py-3 text-[14px]">
                O primeiro passo é separar o que é importante do que é apenas barulhento. Nem tudo merece atenção.
              </div>
            </div>
            <div className="relative shrink-0">
              <img src={avatarWoman} alt="" className="h-10 w-10 rounded-sm" />
              <span className="absolute -bottom-1 -right-1 rounded-sm bg-primary px-1 text-[9px] font-bold text-primary-foreground">IA</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dark features section */}
      <section className="relative overflow-hidden bg-dark-bg text-dark-fg">
        <img
          src={lateralDark}
          alt=""
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-auto opacity-90 md:block"
        />
        <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <p className="mb-12 text-center text-[13px] font-semibold tracking-[0.1em] text-primary">
            PARA AQUELES QUE BUSCAM RESPOSTAS REAIS
          </p>
          <div className="border-t border-white/15 pt-12">
            <div className="grid gap-12 md:grid-cols-3 md:gap-8">
              {[
                {
                  title: "CHEGA DE USAR IAS COM FONTES DESCONHECIDAS",
                  items: [
                    "Esqueça respostas de fontes desconhecidas. Você conversa com a versão digital de criadores de conteúdo que você conhece, confia e acompanha, especialistas em diversos temas.",
                  ],
                },
                {
                  title: "UMA NOVA FORMA DE APRENDER E TIRAR SUAS DÚVIDAS",
                  items: [
                    "Esqueça o conteúdo estático. Aqui você interage diretamente com seu criador de conteúdo favorito.",
                    "Não existe script. Você pergunta livremente, e as respostas vêm do conhecimento e da forma única de cada especialista.",
                  ],
                },
                {
                  title: "PROTEÇÃO E PRIVACIDADE PARA SUAS CONVERSAS",
                  items: [
                    "Pergunte o que quiser com segurança. Seus dados são criptografados e suas conversas são privadas até dos próprios especialistas.",
                  ],
                },
              ].map((col, idx) => (
                <Reveal key={col.title} delay={idx * 150} className="max-w-xs mx-auto md:mx-0">
                  <h3 className="text-center text-[14px] font-bold leading-snug tracking-wide">
                    {col.title}
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {col.items.map((it, i) => (
                      <li key={i} className="flex gap-2 text-[13px] leading-relaxed text-white/85">
                        <span className="text-white/60">—</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
            <div className="mt-16 flex justify-center border-t border-white/15 pt-12">
              <button className="group relative overflow-hidden rounded-sm bg-primary px-10 py-3 text-[13px] font-semibold tracking-wide text-primary-foreground transition-all duration-300 ease-out-expo hover:tracking-wider hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.6)]">
                ASSINAR AGORA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center text-[28px] font-bold md:text-[36px]">
            Um processo simples para tirar suas dúvidas
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
            {[
              ["Escolha seu especialista", "Encontre quem entende do assunto que você quer aprender ou conversar, baseado nos seus interesses."],
              ["Converse com versão digital", "Envie suas dúvidas e conte com a opinião segura do seu especialista favorito."],
              ["Acompanhe seu progresso", "Crie a sua própria trilha de aprendizado, fazendo anotações e destacando insights importantes dos seus temas favoritos."],
              ["Expanda suas áreas de interesse", "Tenha uma versão dos seus especialistas favoritos disponíveis 24h para você em diferentes áreas de atuação."],
            ].map(([title, desc], i) => (
              <div key={i}>
                <div className="mb-4 border-t border-foreground/30 pt-4 flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-chip-pink text-[12px] font-bold text-foreground">
                    {i + 1}
                  </span>
                  <h3 className="text-[14px] font-bold">{title}</h3>
                </div>
                <p className="text-[13px] leading-relaxed text-foreground/75">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <button className="rounded-sm bg-primary px-10 py-3 text-[13px] font-semibold tracking-wide text-primary-foreground hover:opacity-90">
              CONVERSE AGORA
            </button>
          </div>
        </div>
      </section>

      {/* Connect / community */}
      <section className="px-6 pt-8 pb-20 md:py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-[40px] font-bold leading-[1.05] tracking-tight md:text-[52px]">
              Conecte seu conhecimento à comunidade que importa
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground/80">
              Compartilhe seu conhecimento com quem realmente valoriza sua experiência e conecte-se a uma comunidade engajada.
            </p>
            <button className="mt-8 rounded-sm bg-primary px-8 py-3 text-[13px] font-semibold tracking-wide text-primary-foreground hover:opacity-90">
              EXPANDA SUA INFLUÊNCIA
            </button>
          </div>
          <div className="space-y-8">
            {[
              ["INFLUENCIADORES & CRIADORES", "Transforme sua rotina, dicas e conteúdos em aprendizado interativo. Seus seguidores podem conversar com sua versão avatar, aprendendo de forma personalizada a partir de seus vídeos, textos e postagens."],
              ["PROFISSIONAIS DO MERCADO", "Escale sua presença e complemente cursos, workshops ou serviços. Seus mentorados podem tirar dúvidas e interagir sempre que precisarem, com respostas baseadas no seu conhecimento e estilo único."],
              ["PROFESSORES & ACADÊMICOS", "Alimente a IA com aulas, artigos, pesquisas ou livros. Seus alunos podem continuar interagindo com o conteúdo e manter o diálogo ativo mesmo fora da sala de aula."],
            ].map(([title, desc]) => (
              <div key={title}>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 bg-primary"></span>
                  <h3 className="text-[14px] font-bold tracking-wide">{title}</h3>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-foreground/80">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative">

        <div className="bg-dark-bg text-dark-fg">
          <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-4 px-6 py-5 md:flex-row md:justify-between lg:px-10">
            <div className="flex items-center gap-4 text-[12px] text-white/70">
              <VersioLogo className="text-white" />
              <span className="h-6 w-px bg-white/25" />
              <img src={njrLogo} alt="NJR Edutech" className="h-8 w-auto" />
              <span className="opacity-60">© 2025</span>
            </div>
            <div className="flex items-center gap-6 text-[12px] text-white/70">
              <a href="#" className="hover:text-white">Termos de Uso</a>
              <span className="opacity-40">·</span>
              <a href="#" className="hover:text-white">Política de Privacidade</a>
            </div>
            <div className="flex items-center gap-2">
              <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/10 hover:bg-white/20">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 5.8.1 5 .3 4.2.6c-.8.3-1.5.7-2.2 1.4C1.3 2.7.9 3.4.6 4.2.3 5 .1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c0 1.3.2 2.1.5 2.9.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.6.5 2.9.5C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c1.3 0 2.1-.2 2.9-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.6.5-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c0-1.3-.2-2.1-.5-2.9-.3-.8-.7-1.5-1.4-2.2C21.3 1.3 20.6.9 19.8.6 19 .3 18.2.1 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/10 hover:bg-white/20">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.3A1.8 1.8 0 116.5 4.7a1.8 1.8 0 010 3.6zM19 19h-3v-4.7c0-1.1 0-2.5-1.5-2.5S13 13 13 14.2V19h-3v-9h2.9v1.2h.1c.4-.7 1.4-1.5 2.9-1.5 3.1 0 3.7 2 3.7 4.7V19z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
