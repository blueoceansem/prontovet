import { createFileRoute } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import {
  Mic, Pill, BedDouble, Wallet, ClipboardList, Clock, Receipt, CalendarDays, History, FileText,
  Users, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Activity, ArrowLeftRight, Database,
  CreditCard, Settings2, PlayCircle, Plus, HeartPulse, TrendingUp, ListChecks, Stethoscope,
} from "lucide-react";
import logo from "@/assets/prontovet-logo.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Prontovet | Prontuário por voz e gestão para clínicas veterinárias" },
      { name: "description", content: "Grave a consulta e a IA transcreve e organiza o prontuário para sua revisão. Agenda, laudos, internação e financeiro no mesmo sistema. Teste grátis por 10 dias." },
      { property: "og:title", content: "Prontovet | Prontuário por voz para clínicas veterinárias" },
      { property: "og:description", content: "Grave a consulta, revise o prontuário organizado pela IA e gerencie agenda, internação e financeiro no mesmo sistema." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-in"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function R({ children, d = 0, className = "" }: { children: ReactNode; d?: number; className?: string }) {
  return <div className={`reveal ${className}`} style={{ transitionDelay: `${d}ms` }}>{children}</div>;
}

const CTA_URL = "#teste";

function Cta({ children, variant = "coral", href = CTA_URL }: { children: ReactNode; variant?: "coral" | "petrol" | "light"; href?: string }) {
  const v = {
    coral: "bg-coral text-petrol-deep hover:bg-coral-hover",
    petrol: "bg-petrol text-on-color hover:bg-petrol-deep",
    light: "bg-on-color text-petrol-deep hover:bg-ice",
  }[variant];
  return (
    <a href={href} className={`group inline-flex min-h-13 items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-bold shadow-lift transition-all hover:-translate-y-0.5 ${v}`}>
      {children}
      <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Selo({ children, tone = "aqua" }: { children: ReactNode; tone?: "aqua" | "coral" | "lilac" | "blue" | "dark" }) {
  const t = {
    aqua: "bg-aqua-soft text-teal-ink",
    coral: "bg-coral-soft text-coral-ink",
    lilac: "bg-on-color text-lilac-ink",
    blue: "bg-blue-soft text-blue",
    dark: "bg-on-color/10 text-aqua ring-1 ring-on-color/15",
  }[tone];
  return <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] ${t}`}><span className="size-1.5 rounded-full bg-current" />{children}</span>;
}

function Wave({ from, to, flip = false }: { from: string; to: string; flip?: boolean }) {
  return (
    <div className={`${from} -mb-px`} aria-hidden>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className={`block h-12 w-full md:h-20 ${to} ${flip ? "-scale-x-100" : ""}`}>
        <path fill="currentColor" d="M0,48 C240,96 480,0 720,32 C960,64 1200,80 1440,24 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
}

function IconTile({ icon: I, tone }: { icon: typeof Mic; tone: string }) {
  return <span className={`icon-hover flex size-12 shrink-0 items-center justify-center rounded-2xl ${tone}`}><I className="size-6" /></span>;
}

function Index() {
  useReveal();
  return (
    <div className="overflow-x-clip bg-surface text-petrol">
      <Header />
      <Hero />
      <Wave from="bg-petrol-deep" to="text-ice" />
      <Dor />
      <Voz />
      <Wave from="bg-blue" to="text-surface" flip />
      <Integrada />
      <Internacao />
      <Financeiro />
      <Wave from="bg-ice" to="text-petrol" />
      <Migracao />
      <Wave from="bg-petrol" to="text-lilac" flip />
      <Teste />
      <Faq />
      <Final />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-petrol/10 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
        <a href="#top" aria-label="Prontovet"><img src={logo.url} alt="Prontovet" className="h-7 w-auto md:h-8" /></a>
        <nav className="hidden items-center gap-1 md:flex">
          {[["Prontuário por voz", "#voz"], ["Recursos", "#recursos"], ["Internação", "#internacao"], ["Dúvidas", "#duvidas"]].map(([l, h]) => (
            <a key={h} href={h} className="rounded-full px-4 py-2 text-sm font-semibold text-petrol/80 transition-colors hover:bg-ice hover:text-petrol">{l}</a>
          ))}
        </nav>
        <a href={CTA_URL} className="inline-flex h-10 items-center rounded-full bg-coral px-5 text-sm font-bold text-petrol-deep transition-colors hover:bg-coral-hover">Testar grátis</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-petrol-deep text-on-color">
      <div className="dot-grid pointer-events-none absolute inset-0 text-aqua opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-teal/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 size-[420px] rounded-full bg-blue/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 md:pt-20 lg:grid-cols-[1fr_1.02fr]">
        <div>
          <div className="animate-rise"><Selo tone="dark">PARA CLÍNICAS E HOSPITAIS VETERINÁRIOS</Selo></div>
          <h1 className="animate-rise mt-6 text-[2.1rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-[3.25rem]" style={{ animationDelay: "100ms" }}>
            Seu próximo paciente está esperando. <span className="text-aqua">O prontuário do anterior ainda precisa ser digitado?</span>
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-on-color/80" style={{ animationDelay: "200ms" }}>
            Com o Prontovet, você grava a consulta e a IA transcreve e organiza o prontuário para sua revisão. Agenda, laudos, internação e financeiro ficam no mesmo sistema.
          </p>
          <div className="animate-rise mt-8" style={{ animationDelay: "300ms" }}>
            <Cta>Testar grátis por 10 dias</Cta>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-on-color/60">Teste com cartão de crédito. Valor e data da primeira mensalidade informados antes da confirmação. Cancele até o fim do teste e nada é cobrado.</p>
          </div>
          <ul className="animate-rise mt-8 flex flex-wrap gap-2" style={{ animationDelay: "400ms" }}>
            {[[Mic, "Prontuário por voz"], [Pill, "Bulário incluído"], [Clock, "Internação por horário"], [Wallet, "Financeiro integrado"]].map(([I, t], i) => {
              const Ic = I as typeof Mic;
              return <li key={i} className="inline-flex items-center gap-2 rounded-full bg-on-color/10 px-3.5 py-2 text-sm font-semibold ring-1 ring-on-color/10"><Ic className="size-4 text-aqua" />{t as string}</li>;
            })}
          </ul>
        </div>
        <HeroMock />
      </div>
    </section>
  );
}

function HeroMock() {
  return (
    <div className="animate-rise relative" style={{ animationDelay: "250ms" }}>
      <div className="absolute -inset-6 rounded-[2.5rem] border-2 border-dashed border-aqua/30 animate-spin-slow [animation-duration:80s]" />
      <div className="relative overflow-hidden rounded-[2rem] bg-surface text-petrol shadow-lift ring-1 ring-on-color/20">
        <div className="flex items-center gap-1.5 border-b border-petrol/10 bg-ice px-4 py-3">
          <span className="size-2.5 rounded-full bg-coral" /><span className="size-2.5 rounded-full bg-aqua" /><span className="size-2.5 rounded-full bg-blue" />
          <span className="ml-3 text-xs font-semibold text-petrol/60">Atendimento · Thor (Golden, 6a)</span>
        </div>
        <div className="grid gap-4 p-5 sm:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl bg-petrol-deep p-5 text-on-color">
            <div className="flex items-center gap-3">
              <span className="animate-pulse-ring flex size-12 items-center justify-center rounded-full bg-coral text-petrol-deep"><Mic className="size-6" /></span>
              <div><p className="text-sm font-bold">Gravando consulta</p><p className="text-xs text-on-color/60">04:12</p></div>
            </div>
            <div className="mt-6 flex h-14 items-center gap-1">
              {Array.from({ length: 22 }).map((_, i) => (
                <span key={i} className="animate-wave w-1.5 flex-1 rounded-full bg-aqua" style={{ height: `${30 + ((i * 37) % 70)}%`, animationDelay: `${i * 70}ms` }} />
              ))}
            </div>
            <p className="mt-4 text-xs text-on-color/60">Transcrevendo e organizando...</p>
          </div>
          <div className="space-y-2.5">
            {[["Anamnese", "border-aqua", "w-10/12"], ["Exame físico", "border-blue", "w-9/12"], ["Exames", "border-coral", "w-7/12"], ["Conduta", "border-lilac-ink", "w-11/12"]].map(([t, b, w], i) => (
              <div key={t} className={`reveal is-in rounded-xl border-l-4 bg-ice px-3 py-2.5 ${b}`} style={{ animation: `rise .7s ${600 + i * 150}ms both` }}>
                <p className="text-xs font-bold">{t}</p>
                <div className={`mt-1.5 h-2 rounded bg-petrol/10 ${w}`} />
                <div className="mt-1 h-2 w-6/12 rounded bg-petrol/10" />
              </div>
            ))}
            <div className="flex items-center gap-2 rounded-xl bg-teal px-3 py-2 text-xs font-bold text-petrol-deep"><CheckCircle2 className="size-4" />Pronto para sua revisão</div>
          </div>
        </div>
      </div>
      <div className="animate-floaty absolute -bottom-6 -left-4 hidden rounded-2xl bg-surface p-3 text-petrol shadow-lift sm:flex sm:items-center sm:gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-lilac text-lilac-ink"><Pill className="size-5" /></span>
        <div><p className="text-xs font-bold">Bulário</p><p className="text-[11px] text-petrol/60">por espécie</p></div>
      </div>
      <div className="animate-floaty absolute -right-3 -top-5 hidden rounded-2xl bg-surface p-3 text-petrol shadow-lift [animation-delay:1.5s] sm:flex sm:items-center sm:gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-aqua-soft text-teal-ink"><BedDouble className="size-5" /></span>
        <div><p className="text-xs font-bold">Internação</p><p className="text-[11px] text-petrol/60">3 tarefas às 14h</p></div>
      </div>
    </div>
  );
}

function SectionHead({ selo, tone, title, sub, center = true, dark = false }: { selo?: string; tone?: Parameters<typeof Selo>[0]["tone"]; title: string; sub?: ReactNode; center?: boolean; dark?: boolean }) {
  return (
    <R className={center ? "mx-auto max-w-3xl text-center" : "max-w-xl"}>
      {selo && <Selo tone={tone}>{selo}</Selo>}
      <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight md:text-[2.5rem]">{title}</h2>
      {sub && <div className={`mt-5 text-lg leading-relaxed ${dark ? "text-on-color/80" : "text-petrol/75"}`}>{sub}</div>}
    </R>
  );
}

function Dor() {
  const items = [
    { i: ClipboardList, tone: "bg-coral text-petrol-deep", t: "O prontuário fica para depois", d: "Você precisa dividir a atenção entre ouvir o tutor, avaliar o paciente e digitar o que aconteceu na consulta." },
    { i: BedDouble, tone: "bg-blue text-on-color", t: "A internação exige acompanhamento constante", d: "Com pacientes internados, a equipe precisa saber quais tarefas foram executadas, quais estão pendentes e o que deve passar para o próximo plantão." },
    { i: Receipt, tone: "bg-lilac-ink text-on-color", t: "A cobrança pede uma nova conferência", d: "Consulta, exames, aplicações e produtos precisam entrar na conta do paciente antes do recebimento." },
  ];
  return (
    <section className="relative bg-ice py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead selo="A CONSULTA TERMINA. AS PENDÊNCIAS CONTINUAM." tone="coral" title="Consulta demorada, tutor impaciente e uma fila de registros para colocar em dia."
          sub="Entre um atendimento e outro, sua equipe precisa registrar informações, preparar documentos, acompanhar internados e conferir cobranças. Quando cada tarefa depende de controles separados, o trabalho se acumula." />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((x, k) => (
            <R key={x.t} d={k * 120}>
              <article className="group h-full rounded-[1.75rem] border border-petrol/10 bg-surface p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                <IconTile icon={x.i} tone={x.tone} />
                <h3 className="mt-6 text-xl font-bold leading-snug">{x.t}</h3>
                <p className="mt-3 leading-relaxed text-petrol/70">{x.d}</p>
              </article>
            </R>
          ))}
        </div>
        <R d={200} className="mt-10">
          <div className="flex flex-col items-start gap-4 rounded-[2rem] bg-aqua-soft p-7 md:flex-row md:items-center md:p-9">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-teal text-petrol-deep"><HeartPulse className="size-6 animate-wiggle" /></span>
            <p className="text-lg font-bold md:text-xl">Atender já exige concentração. Organizar o que aconteceu no atendimento precisa ser mais simples.</p>
          </div>
        </R>
      </div>
    </section>
  );
}

function Voz() {
  const steps = [
    { n: "1", tone: "bg-coral text-petrol-deep", t: "Grave a consulta", d: "Registre por voz as informações do atendimento, sem depender apenas da digitação.", i: Mic },
    { n: "2", tone: "bg-teal text-petrol-deep", t: "Receba o conteúdo organizado", d: "A transcrição é distribuída em campos como anamnese, exame físico, exames e conduta.", i: Sparkles },
    { n: "3", tone: "bg-on-color text-blue", t: "Revise e confirme", d: "Confira o conteúdo, faça os ajustes necessários e salve o registro no histórico do paciente.", i: CheckCircle2 },
  ];
  return (
    <section id="voz" className="relative scroll-mt-20 overflow-hidden bg-blue py-20 text-on-color md:py-28">
      <div className="dot-grid pointer-events-none absolute inset-0 text-on-color opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-blue-bright/60 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead dark selo="VOCÊ ATENDE. O PRONTOVET AJUDA A ORGANIZAR O REGISTRO." tone="dark" title="Transforme a conversa da consulta em um prontuário para revisar."
          sub="Grave pelo celular ou computador. O Prontovet transcreve o áudio e organiza as informações nos campos do atendimento, para você conferir, editar e confirmar." />
        <div className="relative mt-16 grid gap-5 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-8 hidden border-t-2 border-dashed border-on-color/30 md:block" />
          {steps.map((s, k) => (
            <R key={s.n} d={k * 150}>
              <article className="group relative h-full rounded-[1.75rem] bg-on-color/10 p-7 ring-1 ring-on-color/15 backdrop-blur transition-all hover:-translate-y-1 hover:bg-on-color/15">
                <div className="flex items-center gap-3">
                  <span className={`icon-hover flex size-16 items-center justify-center rounded-2xl shadow-lift ${s.tone}`}><s.i className="size-7" /></span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-on-color/70">Etapa {s.n}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold">{s.t}</h3>
                <p className="mt-3 leading-relaxed text-on-color/80">{s.d}</p>
              </article>
            </R>
          ))}
        </div>
        <R d={150} className="mt-10">
          <div className="flex flex-col gap-6 rounded-[2rem] bg-surface p-7 text-petrol shadow-lift md:flex-row md:items-center md:justify-between md:p-9">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-soft text-blue"><ShieldCheck className="size-6" /></span>
              <p className="max-w-xl text-lg font-semibold leading-relaxed">A decisão clínica continua com você. A IA organiza o que foi dito; não faz diagnóstico nem decide a conduta.</p>
            </div>
            <Cta>Experimentar o prontuário por voz</Cta>
          </div>
        </R>
      </div>
    </section>
  );
}

function Integrada() {
  const items = [
    { n: "01", i: CalendarDays, tone: "bg-teal text-petrol-deep", t: "Agenda com paciente e tutor identificados", d: "Organize horários por profissional e tipo de atendimento. Confira o tutor e o contato para distinguir pacientes com o mesmo nome." },
    { n: "02", i: History, tone: "bg-blue text-on-color", t: "Histórico para dar continuidade ao cuidado", d: "Consulte atendimentos anteriores, exames, laudos, vacinas, peso e documentos na linha do tempo do paciente." },
    { n: "03", i: FileText, tone: "bg-coral text-petrol-deep", t: "Documentos com a identidade da clínica", d: "Prepare receitas, atestados, termos e solicitações com os dados do paciente, a logo da clínica e o CRMV do profissional." },
    { n: "04", i: Pill, tone: "bg-lilac-ink text-on-color", t: "Bulário integrado à rotina", d: "Consulte informações sobre medicamentos por espécie, contraindicações e interações. O cálculo de dose fica disponível quando o regime está validado." },
    { n: "05", i: Users, tone: "bg-petrol text-on-color", t: "Equipe com acessos definidos", d: "Cada pessoa utiliza seu próprio acesso, com permissões para as atividades da operação." },
  ];
  return (
    <section id="recursos" className="relative scroll-mt-20 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead selo="DO PRIMEIRO AGENDAMENTO AO FECHAMENTO DO CAIXA" tone="aqua" title="O atendimento avança. As informações acompanham o paciente."
          sub="O Prontovet conecta as etapas da rotina para sua equipe consultar o histórico, preparar documentos e acompanhar o que precisa ser feito no mesmo sistema." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {items.map((x, k) => (
            <R key={x.n} d={k * 90} className={k < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
              <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-petrol/10 bg-ice p-7 transition-all hover:-translate-y-1 hover:bg-surface hover:shadow-lift">
                <span className="absolute right-6 top-5 text-5xl font-black text-petrol/[0.06]">{x.n}</span>
                <IconTile icon={x.i} tone={x.tone} />
                <h3 className="mt-6 text-lg font-bold leading-snug">{x.t}</h3>
                <p className="mt-3 leading-relaxed text-petrol/70">{x.d}</p>
              </article>
            </R>
          ))}
        </div>
        <R className="mt-10"><p className="mx-auto max-w-2xl text-center text-lg font-bold text-teal-ink">Da recepção ao veterinário e à gestão, cada etapa pode partir das informações já registradas.</p></R>
      </div>
    </section>
  );
}

function Internacao() {
  const tasks = [["08:00", "Dipirona 25 mg/kg IV", "Feito", "bg-teal text-petrol-deep"], ["10:00", "Aferir parâmetros", "Feito", "bg-teal text-petrol-deep"], ["12:00", "Fluidoterapia — revisar", "Atrasado", "bg-coral text-petrol-deep"], ["14:00", "Curativo", "Pendente", "bg-blue-soft text-blue"], ["16:00", "Alimentação assistida", "Pendente", "bg-blue-soft text-blue"]];
  const items = [
    { i: ListChecks, tone: "bg-lilac-ink text-on-color", t: "Tarefas organizadas ao longo do dia", d: "Visualize os cuidados previstos e acompanhe o que está feito, pendente ou atrasado." },
    { i: Activity, tone: "bg-teal text-petrol-deep", t: "Parâmetros e evolução no histórico", d: "Mantenha os registros da internação vinculados ao paciente para consulta da equipe." },
    { i: ArrowLeftRight, tone: "bg-coral text-petrol-deep", t: "Continuidade entre os plantões", d: "Acesse o que foi registrado e as tarefas que precisam de acompanhamento na próxima troca de equipe." },
  ];
  return (
    <section id="internacao" className="relative scroll-mt-20 overflow-hidden bg-lilac py-20 md:py-28">
      <div className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-lilac-ink/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div>
          <SectionHead center={false} selo="INTERNAÇÃO LOTADA PEDE INFORMAÇÃO CLARA" tone="lilac" title="Na troca de plantão, sua equipe precisa saber o que foi feito e o que ainda falta."
            sub="No Prontovet, as prescrições da internação viram tarefas por horário. A equipe acompanha a execução e registra a evolução no prontuário." />
          <div className="mt-8 space-y-4">
            {items.map((x, k) => (
              <R key={x.t} d={k * 110}>
                <div className="group flex gap-4 rounded-2xl bg-surface p-5 shadow-soft">
                  <IconTile icon={x.i} tone={x.tone} />
                  <div><h3 className="font-bold">{x.t}</h3><p className="mt-1 text-petrol/70">{x.d}</p></div>
                </div>
              </R>
            ))}
          </div>
        </div>
        <R d={150}>
          <div className="relative">
            <div className="rounded-[2rem] bg-surface p-6 shadow-lift">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3"><span className="flex size-11 items-center justify-center rounded-2xl bg-lilac text-lilac-ink"><BedDouble className="size-5" /></span><div><p className="font-bold">Mel · Baia 04</p><p className="text-xs text-petrol/60">SRD, 8 anos · Plantão diurno</p></div></div>
                <span className="rounded-full bg-aqua-soft px-3 py-1 text-xs font-bold text-teal-ink">Hoje</span>
              </div>
              <ol className="relative mt-6 space-y-3 border-l-2 border-petrol/10 pl-6">
                {tasks.map(([h, t, s, c], i) => (
                  <li key={h} className="relative flex items-center justify-between gap-3 rounded-xl bg-ice px-4 py-3">
                    <span className={`absolute -left-[31px] top-1/2 size-3 -translate-y-1/2 rounded-full ring-4 ring-surface ${i < 2 ? "bg-teal" : i === 2 ? "bg-coral" : "bg-blue"}`} />
                    <div><p className="text-xs font-bold text-petrol/60">{h}</p><p className="text-sm font-semibold">{t}</p></div>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${c}`}>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="animate-floaty absolute -right-4 -top-6 rounded-2xl bg-petrol-deep px-4 py-3 text-on-color shadow-lift">
              <p className="text-[11px] text-on-color/60">Próximo plantão</p><p className="text-sm font-bold">2 tarefas pendentes</p>
            </div>
          </div>
        </R>
      </div>
      <div className="relative mx-auto mt-14 max-w-6xl px-5">
        <R>
          <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-lilac-ink p-7 text-on-color md:flex-row md:items-center md:p-10">
            <p className="text-xl font-bold md:text-2xl">Mais clareza para acompanhar a internação, cuidado por cuidado.</p>
            <Cta variant="light">Conhecer a internação no teste gratuito</Cta>
          </div>
        </R>
      </div>
    </section>
  );
}

function Financeiro() {
  const items = [
    { i: Receipt, tone: "bg-coral text-petrol-deep", t: "Confira antes de cobrar", d: "Visualize consultas, exames, aplicações, produtos e descontos na conta do atendimento." },
    { i: CreditCard, tone: "bg-blue text-on-color", t: "Acompanhe os recebimentos", d: "Registre pagamentos parciais e diferentes formas de pagamento, mantendo o saldo a acertar visível." },
    { i: TrendingUp, tone: "bg-teal text-petrol-deep", t: "Enxergue a movimentação da clínica", d: "Acompanhe receitas, despesas, contas a pagar e fluxo de caixa no sistema." },
  ];
  const conta = [["Consulta clínica", "R$ 180,00"], ["Hemograma completo", "R$ 95,00"], ["Aplicação — antibiótico", "R$ 45,00"], ["Ração terapêutica", "R$ 129,90"]];
  return (
    <section className="relative bg-ice py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr]">
        <R className="order-2 lg:order-1">
          <div className="rounded-[2rem] bg-surface p-6 shadow-lift">
            <div className="flex items-center justify-between"><p className="font-bold">Conta do atendimento</p><span className="rounded-full bg-coral-soft px-3 py-1 text-xs font-bold text-coral-ink">Em aberto</span></div>
            <ul className="mt-5 divide-y divide-petrol/10">
              {conta.map(([a, b]) => <li key={a} className="flex justify-between py-3 text-sm"><span>{a}</span><span className="font-semibold">{b}</span></li>)}
              <li className="flex justify-between py-3 text-sm text-teal-ink"><span>Desconto</span><span className="font-semibold">- R$ 20,00</span></li>
            </ul>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl bg-ice p-3"><p className="text-[11px] text-petrol/60">Total</p><p className="font-bold">R$ 429,90</p></div>
              <div className="rounded-xl bg-aqua-soft p-3"><p className="text-[11px] text-teal-ink">Recebido</p><p className="font-bold">R$ 250,00</p></div>
              <div className="rounded-xl bg-coral-soft p-3"><p className="text-[11px] text-coral-ink">A acertar</p><p className="font-bold">R$ 179,90</p></div>
            </div>
          </div>
        </R>
        <div className="order-1 lg:order-2">
          <SectionHead center={false} selo="O CUIDADO PRESTADO TAMBÉM PRECISA ENTRAR NA CONTA" tone="coral" title="Na hora de cobrar, sua equipe consegue conferir tudo o que foi usado no atendimento?"
            sub="Reúna os itens lançados na conta do paciente, confira os valores e registre o recebimento. O financeiro acompanha a operação da clínica." />
        </div>
      </div>
      <div className="mx-auto mt-14 grid max-w-6xl gap-5 px-5 md:grid-cols-3">
        {items.map((x, k) => (
          <R key={x.t} d={k * 110}>
            <article className="group h-full rounded-[1.75rem] bg-surface p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
              <IconTile icon={x.i} tone={x.tone} />
              <h3 className="mt-6 text-lg font-bold">{x.t}</h3>
              <p className="mt-3 leading-relaxed text-petrol/70">{x.d}</p>
            </article>
          </R>
        ))}
      </div>
      <R className="mt-10"><p className="mx-auto max-w-2xl px-5 text-center text-lg font-bold">O atendimento fica registrado. A cobrança também precisa ficar clara.</p></R>
    </section>
  );
}

function Migracao() {
  return (
    <section className="relative overflow-hidden bg-petrol py-20 text-on-color md:py-24">
      <div className="dot-grid pointer-events-none absolute inset-0 text-aqua opacity-25" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <SectionHead dark center={false} selo="JÁ USA OUTRO SISTEMA?" tone="dark" title="Antes de trocar, descubra como seus dados podem acompanhar a mudança."
            sub="A equipe do Prontovet avalia o sistema de origem e orienta a importação dos dados disponíveis, para você entender o que pode ser levado para a nova operação." />
          <R d={150} className="mt-8"><Cta href="#teste">Falar sobre a migração da minha clínica</Cta></R>
        </div>
        <R d={200}>
          <div className="rounded-[2rem] bg-on-color/10 p-7 ring-1 ring-on-color/15">
            <div className="flex items-center justify-center gap-4">
              <span className="flex size-16 items-center justify-center rounded-2xl bg-on-color/15"><Database className="size-7" /></span>
              <span className="flex gap-1.5">{[0, 1, 2].map((i) => <span key={i} className="size-2 rounded-full bg-aqua animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />)}</span>
              <span className="animate-floaty flex size-16 items-center justify-center rounded-2xl bg-teal text-petrol-deep"><Stethoscope className="size-7" /></span>
            </div>
            <p className="mt-7 leading-relaxed text-on-color/85">A viabilidade e o alcance da migração dependem da base de origem. Converse com a equipe sobre o cenário da sua clínica.</p>
          </div>
        </R>
      </div>
    </section>
  );
}

function Teste() {
  const steps = [
    { n: "01", i: CreditCard, tone: "bg-coral text-petrol-deep", t: "Escolha seu plano", d: "Confira o valor, a quantidade de usuários e os recursos disponíveis antes de confirmar o cadastro." },
    { n: "02", i: Settings2, tone: "bg-teal text-petrol-deep", t: "Configure sua operação", d: "Cadastre a equipe, os serviços, os produtos e a identidade da clínica." },
    { n: "03", i: PlayCircle, tone: "bg-lilac-ink text-on-color", t: "Explore o fluxo de atendimento", d: "Conheça a agenda, revise um registro por voz, prepare documentos e confira a conta de um atendimento." },
  ];
  return (
    <section id="teste" className="relative scroll-mt-20 bg-lilac py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead selo="CONHEÇA O PRONTOVET NA PRÁTICA" tone="lilac" title="Teste por 10 dias e avalie como o Prontovet se encaixa na sua rotina."
          sub="Conheça o registro por voz e os recursos de gestão antes de decidir pela continuidade da assinatura." />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, k) => (
            <R key={s.n} d={k * 130}>
              <article className="group h-full rounded-[1.75rem] bg-surface p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-center justify-between"><IconTile icon={s.i} tone={s.tone} /><span className="text-4xl font-black text-lilac-ink/15">{s.n}</span></div>
                <h3 className="mt-6 text-lg font-bold">{s.t}</h3>
                <p className="mt-3 leading-relaxed text-petrol/70">{s.d}</p>
              </article>
            </R>
          ))}
        </div>
        <R d={150} className="mt-12 text-center">
          <Cta variant="petrol">Escolher meu plano e testar 10 dias grátis</Cta>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-petrol/65">É necessário cadastrar um cartão de crédito. O valor e a data da primeira mensalidade aparecem antes da confirmação. Para não ser cobrado, cancele até o fim do teste.</p>
        </R>
      </div>
    </section>
  );
}

const FAQ = [
  ["O teste é gratuito mesmo com o cadastro do cartão?", "Sim. O teste tem duração de 10 dias e exige cartão de crédito. Antes da confirmação, você vê o valor e a data da primeira mensalidade. Cancele até o fim do teste e nada será cobrado."],
  ["A IA salva o prontuário sem a minha revisão?", "Não. O conteúdo organizado fica disponível para você conferir e editar. O registro só é salvo com a confirmação do profissional."],
  ["Preciso registrar todas as consultas por voz?", "Não. Você também pode digitar e editar os registros manualmente. A voz é uma opção para agilizar a documentação."],
  ["O que acontece se os minutos de voz acabarem?", "Você continua utilizando agenda, histórico, financeiro e registros manuais. Novas solicitações de voz aguardam saldo disponível. Não há cobrança automática de excedente."],
  ["Funciona no celular e no computador?", "Sim. O Prontovet funciona pelo navegador em celular, tablet e computador com acesso à internet, sem instalação obrigatória."],
  ["Posso usar a logo da minha clínica nos documentos?", "Sim. Receitas, laudos e outros documentos podem utilizar a identidade da clínica e os dados do profissional responsável."],
  ["Consigo levar os dados do meu sistema atual?", "Existe estrutura para migração. A equipe avalia a origem dos dados e orienta quais informações podem ser importadas."],
  ["O Prontovet envia mensagens automaticamente pelo WhatsApp?", "O sistema disponibiliza mensagens prontas que são abertas no seu WhatsApp para você enviar ao tutor."],
  ["A emissão de nota fiscal já fica disponível para qualquer clínica?", "A emissão depende do credenciamento da clínica e da configuração fiscal com o contador. A equipe pode orientar a avaliação do seu caso."],
];

function Faq() {
  return (
    <section id="duvidas" className="relative scroll-mt-20 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHead title="O que você precisa saber antes de começar." />
        <div className="mt-12 space-y-3">
          {FAQ.map(([q, a], k) => (
            <R key={q} d={k * 40}>
              <details className="group rounded-2xl border border-petrol/10 bg-surface px-5 transition-colors open:bg-ice open:shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-bold [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-aqua-soft text-teal-ink transition-transform group-open:rotate-45"><Plus className="size-4" /></span>
                </summary>
                <p className="pb-5 leading-relaxed text-petrol/75">{a}</p>
              </details>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}

function Final() {
  return (
    <section className="relative overflow-hidden bg-petrol-deep py-20 text-on-color md:py-28">
      <div className="dot-grid pointer-events-none absolute inset-0 text-aqua opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/15 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <R><span className="animate-floaty mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-coral text-petrol-deep shadow-lift"><Mic className="size-7" /></span></R>
        <SectionHead dark selo="MENOS RETRABALHO. MAIS TEMPO PARA ATENDER." tone="dark" title="Comece pela próxima consulta: grave, revise e mantenha o atendimento organizado."
          sub="Conheça o Prontovet e veja como conectar prontuários, documentos, internação e financeiro à rotina da sua clínica." />
        <R d={150} className="mt-9">
          <Cta>Começar meu teste grátis de 10 dias</Cta>
          <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-on-color/60">Com cartão de crédito. Confira as condições antes de confirmar. Cancele até o fim do teste e nada é cobrado.</p>
        </R>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-on-color/10 bg-petrol-deep py-8 text-on-color/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm md:flex-row">
        <span className="rounded-xl bg-surface px-3 py-2"><img src={logo.url} alt="Prontovet" className="h-6 w-auto" /></span>
        <p>© {new Date().getFullYear()} Prontovet. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
