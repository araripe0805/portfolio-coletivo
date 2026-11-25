import { useEffect } from 'react'
import styles from './Equipe.module.css'
import arthurPhoto from './photos/arthur.jpeg'
import juliaPhoto from './photos/julia.jpeg'
import lucasPhoto from './photos/lucas.jpeg'
import viniciosPhoto from './photos/vinicios.jpeg'
import welingtonPhoto from './photos/welington.jpeg'

// =====================================================================
// Equipe 03 — HomeWash (edite SOMENTE os arquivos em src/teams/equipe-03)
// =====================================================================

const LINKS = {
  app: 'https://homewash.thebylito.dev',
  apiDocs: 'https://api-homewash.thebylito.dev/docs',
  pitch: 'https://homewash.thebylito.dev/pitch',
  github: 'https://github.com/thebylito/home-wash',
  trello: 'https://trello.com/b/1EIVvg3y',
}

const VIDEO = {
  previewUrl: 'https://drive.google.com/file/d/14KOQOr9doS1jp6kCZKdfFY0QSVHEpTlJ/preview',
  viewUrl: 'https://drive.google.com/file/d/14KOQOr9doS1jp6kCZKdfFY0QSVHEpTlJ/view?usp=sharing',
  reference:
    'Gravado pela equipe com o sistema em produção. Mostra o cliente fazendo o pedido em uma tela, o lavador aceitando pelo mural da região, o endereço liberado só depois do aceite (LGPD) e o backoffice.',
}

const NEIGHBORHOODS = ['Aldeota', 'Meireles', 'Papicu']

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Escolha o serviço',
    text: 'O cliente escolhe a lavagem no catálogo. Preço e duração já vêm definidos pelo backoffice.',
  },
  {
    step: '02',
    title: 'Faça o pedido',
    text: 'Em uma tela só (/pedir), informa o veículo, o endereço e, se quiser, um horário. Sem horário, o pedido entra como "Hoje, quando der".',
  },
  {
    step: '03',
    title: 'Um lavador aceita',
    text: 'O pedido aparece no mural dos lavadores aprovados da região e o primeiro que aceitar fica com ele. O aceite é uma operação atômica no MongoDB, e quem tenta ao mesmo tempo recebe HTTP 409. Endereço completo e telefone só aparecem depois do aceite.',
  },
]

const METRICS = [
  {
    value: '136',
    label: 'testes automatizados',
    detail: '64 na API e 72 no front-end web.',
  },
  {
    value: '24',
    label: 'pranchetas prototipadas',
    detail: 'Fluxos dos Turns T1–T3 navegáveis em /galeria.',
  },
  {
    value: '16 + 8',
    label: 'requisitos rastreados',
    detail: '16 funcionais e 8 não funcionais, do plano inicial até a produção.',
  },
  {
    value: '20 → 1',
    label: 'teste de concorrência',
    detail: '20 aceites simultâneos: 1 vencedor, 19 HTTP 409.',
  },
]

const STACK = [
  {
    label: 'Front-end',
    text: 'React 19, TypeScript 5.9, Vite 8, React Router, Tailwind CSS v4 e cliente tipado gerado automaticamente via OpenAPI (@hey-api/openapi-ts).',
  },
  {
    label: 'Back-end',
    text: 'Node.js 22 (ESM), Express 5, MongoDB e Mongoose 9 (6 coleções, snapshots imutáveis e findOneAndUpdate atômico), validação Zod, JWT em cookie httpOnly e bcryptjs.',
  },
  {
    label: 'Qualidade & Infra',
    text: 'Vitest, Supertest, mongodb-memory-server, Docker multi-stage (node:22-alpine e nginx:alpine), GitHub Actions CI/CD, GHCR, Dokploy + Traefik e Cloudflare HTTPS.',
  },
]

const AI_USAGE =
  'Usamos IA para gerar as primeiras versões das telas no Stitch e no Figma, para escrever e revisar código da API, do front-end, do contrato OpenAPI e dos testes, e para organizar a documentação e montar esta página. Tudo passou por revisão da equipe, teste funcional e pela suíte de testes automatizados.'

const TEAM_SUMMARY =
  'Cinco estudantes de Desenvolvimento Web da UNIFOR, cada um responsável por uma frente: gestão, UX/UI, back-end, front-end e fullstack/DevOps. Cada entrega é validada pelo CI/CD no GitHub Actions.'

// Épicos do quadro Kanban (etiquetas E01–E06 no Trello)
const EPICS = [
  { code: 'E01', name: 'Auth & Compliance' },
  { code: 'E02', name: 'Catálogo' },
  { code: 'E03', name: 'Demanda / Cliente' },
  { code: 'E04', name: 'Mural & Aceite' },
  { code: 'E05', name: 'Notificações & SLA' },
  { code: 'E06', name: 'Reputação & Pagamento' },
]

const MEMBERS = [
  {
    name: 'Welington da Silva Martins',
    role: 'Gerente do Projeto',
    photo: welingtonPhoto,
    photoPosition: 'center 20%',
    skills: ['Gestão Ágil', 'Kanban / Trello', 'DEEP & MoSCoW', 'Documentação'],
    bio: 'Coordenou as sprints e conduziu o quadro Kanban no Trello. Também consolidou a documentação do planejamento e organizou as entregas da disciplina.',
    links: {
      linkedin: 'https://www.linkedin.com/in/thebylito/',
      github: 'https://github.com/thebylito',
    },
  },
  {
    name: 'Lucas Gomes Costa',
    role: 'Designer UX/UI',
    photo: lucasPhoto,
    photoPosition: 'center 30%',
    skills: ['Design System Modernist', 'Figma / Stitch', 'Prototipação', 'Usabilidade'],
    bio: 'Criou o Design System Modernist, o mesmo desta página. Prototipou 24 pranchetas navegáveis (Turns T1–T3) e fez as 5 telas do MVP em versão desktop e mobile.',
    links: {
      linkedin: 'https://www.linkedin.com/in/lucas-gomes-ab49582bb/',
      github: 'https://github.com/luckhaosbb',
    },
  },
  {
    name: 'Arthur Braz Masrua',
    role: 'Desenvolvedor Back-end',
    photo: arthurPhoto,
    photoPosition: 'center 20%',
    skills: ['Node.js / Express', 'MongoDB / Mongoose', 'Atomicidade (HTTP 409)', 'Vitest / Supertest'],
    bio: 'Montou a API REST em Node.js e Express e modelou as coleções, snapshots e índices no MongoDB. Implementou o aceite exclusivo atômico e os testes de concorrência que garantem um lavador por pedido.',
    links: {
      github: 'https://github.com/artmasrua',
    },
  },
  {
    name: 'Julia Alvino de Mesquita Bernardo',
    role: 'Desenvolvedora Front-end',
    photo: juliaPhoto,
    photoPosition: 'center 22%',
    skills: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Responsividade'],
    bio: 'Desenvolveu a SPA em React 19 e Tailwind CSS v4: a tela única de pedido (/pedir), o acompanhamento, o mural do lavador e o backoffice.',
    links: {
      github: 'https://github.com/juulialvino',
    },
  },
  {
    name: 'Vinicios Gabriel de Castro Barbosa',
    role: 'Desenvolvedor Fullstack',
    photo: viniciosPhoto,
    photoPosition: 'center 36%',
    photoZoom: 1.6, // a foto original é aberta; aproxima o rosto
    skills: ['JWT httpOnly', 'OpenAPI', 'GitHub Actions', 'Docker / Nginx'],
    bio: 'Implementou a autenticação JWT em cookie httpOnly e o contrato OpenAPI que gera o cliente tipado do front-end. Montou o CI/CD no GitHub Actions, as imagens Docker com Nginx e o deploy em produção.',
    links: {
      github: 'https://github.com/Vinicios-Gabriel27',
    },
  },
]

const SOCIAL_NETWORKS = [
  {
    key: 'linkedin',
    label: 'LinkedIn',
    iconPath:
      'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    key: 'github',
    label: 'GitHub',
    iconPath:
      'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
]

function useArchivoFont() {
  useEffect(() => {
    const preconnects = [
      { href: 'https://fonts.googleapis.com' },
      { href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    ]
    for (const { href, crossOrigin } of preconnects) {
      if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) continue
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = href
      if (crossOrigin) link.crossOrigin = crossOrigin
      document.head.appendChild(link)
    }

    const id = 'equipe-03-archivo'
    if (!document.getElementById(id)) {
      const link = document.createElement('link')
      link.id = id
      link.rel = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&display=swap'
      document.head.appendChild(link)
    }
  }, [])
}

// "https://www.linkedin.com/in/fulano/" -> "linkedin.com/in/fulano"
function displayUrl(url) {
  return url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')
}

function MemberSocialLinks({ name, links = {} }) {
  const available = SOCIAL_NETWORKS.filter((network) => links[network.key])
  if (available.length === 0) return null

  return (
    <ul className={styles.socialList} aria-label={`Perfis de ${name}`}>
      {available.map((network) => (
        <li key={network.key}>
          <a className={styles.socialLink} href={links[network.key]} target="_blank" rel="noopener noreferrer">
            <svg className={styles.socialIcon} viewBox="0 0 24 24" role="img" aria-label={network.label}>
              <path d={network.iconPath} />
            </svg>
            <span className={styles.socialUrl}>{displayUrl(links[network.key])}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Equipe03() {
  useArchivoFont()

  return (
    <article className={styles.page}>
      <header className={styles.topBar}>
        <div className={styles.wrap}>
          <div className={styles.topBarInner}>
            <span className={styles.brand}>
              HomeWash<span className={styles.brandDot}>.</span>
            </span>
            <p className={styles.topMeta}>Equipe 03 · Desenvolvimento Web · UNIFOR</p>
          </div>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.wrap}>
          <p className={styles.kicker}>Lavagem automotiva a domicílio · Fortaleza</p>
          <h1 id="hero-title" className={styles.heroTitle}>
            HomeWash<span className={styles.heroAccent}>.</span>
          </h1>
          <p className={styles.heroLead}>
            O cliente escolhe a lavagem com preço fechado e informa onde o carro está. O primeiro lavador aprovado
            que aceitar o pedido vai até o endereço.
          </p>

          <div className={styles.actions}>
            <a className={styles.btnPrimary} href={LINKS.app} target="_blank" rel="noopener noreferrer">
              Abrir o HomeWash <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.btnSecondary} href={LINKS.apiDocs} target="_blank" rel="noopener noreferrer">
              Documentação da API <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.btnSecondary} href={LINKS.pitch} target="_blank" rel="noopener noreferrer">
              Pitch <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.btnSecondary} href={LINKS.github} target="_blank" rel="noopener noreferrer">
              Código no GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className={styles.pilotBar}>
            <span className={styles.pilotLabel}>Bairros no piloto:</span>
            <ul className={styles.pilotList}>
              {NEIGHBORHOODS.map((bairro) => (
                <li key={bairro} className={styles.pilotTag}>
                  {bairro}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.videoSection} aria-labelledby="video-title">
        <div className={styles.wrap}>
          <p className={styles.kickerDark}>01 / Vídeo</p>
          <h2 id="video-title" className={styles.sectionTitleDark}>
            Apresentação final, com o sistema em produção
          </h2>

          <figure className={styles.videoFigure}>
            <div className={styles.videoFrame}>
              <iframe
                src={VIDEO.previewUrl}
                title="Apresentação final do HomeWash"
                loading="lazy"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
            <figcaption className={styles.videoRef}>
              <p>
                <strong>Referência:</strong> {VIDEO.reference}
              </p>
              <a className={styles.videoLink} href={VIDEO.viewUrl} target="_blank" rel="noopener noreferrer">
                Abrir vídeo no Google Drive <span aria-hidden="true">↗</span>
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="sobre-title">
        <div className={styles.wrap}>
          <p className={styles.kicker}>02 / Sobre o projeto</p>
          <h2 id="sobre-title" className={styles.sectionTitle}>
            O que o HomeWash resolve
          </h2>

          <div className={styles.introGrid}>
            <div className={styles.introBlock}>
              <h3 className={styles.subTitle}>Tema da página</h3>
              <p>
                Esta página apresenta o <strong>HomeWash</strong> no Portfólio Coletivo da turma: o que o sistema faz,
                como foi construído e quem fez cada parte.
              </p>
            </div>
            <div className={styles.introBlock}>
              <h3 className={styles.subTitle}>Propósito do projeto</h3>
              <p>
                Para lavar o carro, o cliente enfrenta fila no lava-jato ou contrata alguém por indicação, sem saber o
                preço antes. Do outro lado, lavadores autônomos têm equipamento parado e dependem de indicação para
                encher a agenda. O HomeWash liga os dois com preço definido antes do pedido.
              </p>
            </div>
          </div>

          <h3 className={styles.blockHeading}>Como funciona</h3>
          <ol className={styles.stepsGrid}>
            {HOW_IT_WORKS.map((item) => (
              <li key={item.step} className={styles.stepCard}>
                <span className={styles.stepNum}>{item.step}</span>
                <h4 className={styles.stepTitle}>{item.title}</h4>
                <p className={styles.stepText}>{item.text}</p>
              </li>
            ))}
          </ol>

          <h3 className={styles.blockHeading}>Números da entrega</h3>
          <div className={styles.metricsGrid}>
            {METRICS.map((metric) => (
              <div key={metric.label} className={styles.metricCard}>
                <strong className={styles.metricValue}>{metric.value}</strong>
                <span className={styles.metricLabel}>{metric.label}</span>
                <p className={styles.metricDetail}>{metric.detail}</p>
              </div>
            ))}
          </div>

          <h3 className={styles.blockHeading}>Stack tecnológica</h3>
          <dl className={styles.stackList}>
            {STACK.map((row) => (
              <div key={row.label} className={styles.stackRow}>
                <dt className={styles.stackTerm}>{row.label}</dt>
                <dd className={styles.stackDesc}>{row.text}</dd>
              </div>
            ))}
          </dl>

          <aside className={styles.aiCallout} aria-labelledby="ai-title">
            <h3 id="ai-title" className={styles.aiTitle}>
              Uso de Inteligência Artificial
            </h3>
            <p className={styles.aiText}>{AI_USAGE}</p>
          </aside>
        </div>
      </section>

      <section className={styles.teamSection} aria-labelledby="equipe-title">
        <div className={styles.wrap}>
          <p className={styles.kicker}>03 / Equipe e ficha técnica</p>
          <h2 id="equipe-title" className={styles.sectionTitle}>
            Quem construiu o HomeWash
          </h2>
          <p className={styles.teamSummary}>{TEAM_SUMMARY}</p>

          <div className={styles.membersGrid}>
            {MEMBERS.map((member, index) => (
              <article key={member.name} className={styles.memberCard}>
                <div className={styles.photoBox}>
                  <img
                    className={styles.memberPhoto}
                    src={member.photo}
                    alt={`Foto de ${member.name}`}
                    width="400"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    style={{
                      objectPosition: member.photoPosition,
                      '--photo-zoom': member.photoZoom ?? 1,
                    }}
                  />
                  <span className={styles.memberNum} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className={styles.memberBody}>
                  <p className={styles.memberRole}>{member.role}</p>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberBio}>{member.bio}</p>
                  <ul className={styles.skillList} aria-label={`Habilidades de ${member.name}`}>
                    {member.skills.map((skill) => (
                      <li key={skill} className={styles.skillTag}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <MemberSocialLinks name={member.name} links={member.links} />
                </div>
              </article>
            ))}

            <aside className={styles.boardCard} aria-labelledby="quadro-title">
              <h3 id="quadro-title" className={styles.boardTitle}>
                Como a equipe se organizou
              </h3>
              <ul className={styles.boardStats}>
                <li>
                  <strong>6</strong>
                  <span>épicos</span>
                </li>
                <li>
                  <strong>21</strong>
                  <span>histórias de usuário</span>
                </li>
              </ul>
              <ul className={styles.epicList} aria-label="Épicos do backlog">
                {EPICS.map((epic) => (
                  <li key={epic.code}>
                    <span className={styles.epicCode}>{epic.code}</span>
                    {epic.name}
                  </li>
                ))}
              </ul>
              <p className={styles.boardText}>
                Histórias priorizadas por MoSCoW e refinadas pelo método DEEP no quadro Kanban do Trello.
              </p>
              <a className={styles.boardLink} href={LINKS.trello} target="_blank" rel="noopener noreferrer">
                Ver o quadro no Trello <span aria-hidden="true">↗</span>
              </a>
            </aside>
          </div>
        </div>
      </section>

      <footer className={styles.credits}>
        <div className={styles.wrap}>
          <div className={styles.creditsInner}>
            <strong>HomeWash · Lavagem automotiva a domicílio · Equipe 03</strong>
            <p>Universidade de Fortaleza (UNIFOR) · Desenvolvimento Web · 2026</p>
          </div>
        </div>
      </footer>
    </article>
  )
}
