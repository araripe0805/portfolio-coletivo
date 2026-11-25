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
    'Vídeo da apresentação final gravado pela equipe demonstrando o HomeWash em produção — do pedido em tela única do cliente ao mural regional do lavador, aceite exclusivo atômico, liberação pós-aceite (LGPD) e backoffice administrativo.',
}

const NEIGHBORHOODS = ['Aldeota', 'Meireles', 'Papicu']

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Escolha',
    text: 'Catálogo com preço fechado e duração definida pelo backoffice, sem leilão nem negociação informal.',
  },
  {
    step: '02',
    title: 'Informe',
    text: 'Pedido em tela única (/pedir) com serviço, veículo, endereço nos bairros-piloto e horário opcional ("Hoje, quando der").',
  },
  {
    step: '03',
    title: 'Aceite exclusivo',
    text: 'O primeiro lavador aprovado que aceita leva o serviço em operação atômica única no MongoDB (HTTP 409 para disputas simultâneas); endereço completo e telefone só aparecem após o aceite (LGPD por design).',
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
    value: '16 RF · 8 RNF',
    label: 'requisitos rastreados',
    detail: 'Documentados do plano inicial até a produção.',
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
  'A Inteligência Artificial apoiou a prototipação rápida de telas (Stitch/Figma), a geração e revisão assistida de código na API, na SPA, no contrato OpenAPI e na suíte de testes, além da organização da documentação técnica e da construção desta página no Design System Modernist — sempre com revisão, validação funcional e testes automatizados conduzidos pela equipe.'

const MEMBERS = [
  {
    name: 'Welington da Silva Martins',
    role: 'Gerente do Projeto',
    photo: welingtonPhoto,
    photoPosition: 'center 20%',
    skills: ['Gestão Ágil', 'Kanban / Trello', 'DEEP & MoSCoW', 'Documentação'],
    bio: 'Coordenou as sprints, conduziu o quadro Kanban no Trello, consolidou a documentação do planejamento final e organizou as entregas acadêmicas.',
  },
  {
    name: 'Lucas Gomes Costa',
    role: 'Designer UX/UI',
    photo: lucasPhoto,
    photoPosition: 'center 30%',
    skills: ['Design System Modernist', 'Figma / Stitch', 'Prototipação', 'Usabilidade'],
    bio: 'Criou o Design System Modernist, prototipou 24 pranchetas navegáveis (Turns T1–T3) e desenvolveu as 5 telas do MVP para desktop e mobile.',
  },
  {
    name: 'Arthur Braz Masrua',
    role: 'Desenvolvedor Back-end',
    photo: arthurPhoto,
    photoPosition: 'center 20%',
    skills: ['Node.js / Express', 'MongoDB / Mongoose', 'Atomicidade (HTTP 409)', 'Vitest / Supertest'],
    bio: 'Estruturou a API REST em Node.js/Express, modelou coleções, snapshots e índices no MongoDB e implementou o aceite exclusivo atômico com testes de concorrência.',
  },
  {
    name: 'Julia Alvino de Mesquita Bernardo',
    role: 'Desenvolvedora Front-end',
    photo: juliaPhoto,
    photoPosition: 'center 22%',
    skills: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Responsividade'],
    bio: 'Desenvolveu a aplicação SPA em React 19 e Tailwind CSS v4, entregando o pedido em tela única (/pedir), acompanhamento, mural do prestador e backoffice.',
  },
  {
    name: 'Vinicios Gabriel de Castro Barbosa',
    role: 'Desenvolvedor Fullstack',
    photo: viniciosPhoto,
    photoPosition: 'center 36%',
    skills: ['JWT httpOnly', 'OpenAPI', 'GitHub Actions', 'Docker / Nginx'],
    bio: 'Implementou autenticação JWT via cookie httpOnly, contrato automático OpenAPI (@hey-api/openapi-ts), pipelines CI/CD no GitHub Actions, Docker/Nginx e deploy em produção.',
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
            Seu carro limpo.
            <span className={styles.heroAccent}>Seu sábado de volta.</span>
          </h1>
          <p className={styles.heroLead}>
            Marketplace bilateral para intermediação de lavagem automotiva a domicílio com preço fechado e aceite
            exclusivo atômico, em operação piloto em Fortaleza.
          </p>

          <div className={styles.actions}>
            <a className={styles.btnPrimary} href={LINKS.app} target="_blank" rel="noopener noreferrer">
              Abrir aplicação no ar <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.btnSecondary} href={LINKS.apiDocs} target="_blank" rel="noopener noreferrer">
              Documentação da API (Scalar) <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.btnSecondary} href={LINKS.pitch} target="_blank" rel="noopener noreferrer">
              Pitch no sistema <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.btnSecondary} href={LINKS.github} target="_blank" rel="noopener noreferrer">
              Repositório GitHub <span aria-hidden="true">↗</span>
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
          <p className={styles.kickerDark}>01 / Vídeo com referência</p>
          <h2 id="video-title" className={styles.sectionTitleDark}>
            O HomeWash funcionando.
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
            O carro fica. A lavagem vai até ele.
          </h2>

          <div className={styles.introGrid}>
            <div className={styles.introBlock}>
              <h3 className={styles.subTitle}>Tema da página</h3>
              <p>
                Vitrine técnica do <strong>HomeWash</strong> no Portfólio Coletivo da Turma, apresentando a solução, a
                arquitetura em produção e a equipe responsável pela entrega final.
              </p>
            </div>
            <div className={styles.introBlock}>
              <h3 className={styles.subTitle}>Propósito do projeto</h3>
              <p>
                Resolver o atrito dos dois lados: clientes que perdem tempo em filas ou contratações informais sem preço
                claro e confiança, e lavadores autônomos com equipamento parado e agenda irregular dependente de
                indicações.
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

          <h3 className={styles.blockHeading}>Números reais da entrega</h3>
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

      <section className={styles.sectionAlt} aria-labelledby="equipe-title">
        <div className={styles.wrap}>
          <p className={styles.kicker}>03 / A equipe</p>
          <div className={styles.teamIntro}>
            <div>
              <h2 id="equipe-title" className={styles.sectionTitle}>
                Equipe 03 — HomeWash
              </h2>
              <p className={styles.teamSummary}>
                Cinco estudantes de Desenvolvimento Web da UNIFOR organizados com divisão clara de papéis (gestão,
                UX/UI, back-end, front-end e fullstack/DevOps), gerenciamento ágil no Trello com método DEEP e
                priorização MoSCoW em 6 épicos e 21 histórias de usuário, além de entrega contínua validada
                automaticamente por CI/CD.
              </p>
            </div>
            <a className={styles.btnSecondary} href={LINKS.trello} target="_blank" rel="noopener noreferrer">
              Ver quadro Kanban no Trello <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="ficha-title">
        <div className={styles.wrap}>
          <p className={styles.kicker}>04 / Ficha técnica</p>
          <h2 id="ficha-title" className={styles.sectionTitle}>
            Quem construiu o HomeWash
          </h2>

          <ul className={styles.membersList}>
            {MEMBERS.map((member) => (
              <li key={member.name} className={styles.memberCard}>
                <div className={styles.photoBox}>
                  <img
                    className={styles.memberPhoto}
                    src={member.photo}
                    alt={`Foto de ${member.name}`}
                    width="160"
                    height="160"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: member.photoPosition }}
                  />
                </div>
                <div className={styles.memberBody}>
                  <div className={styles.memberHead}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <span className={styles.memberRole}>{member.role}</span>
                  </div>
                  <p className={styles.memberBio}>{member.bio}</p>
                  <ul className={styles.skillList} aria-label={`Habilidades de ${member.name}`}>
                    {member.skills.map((skill) => (
                      <li key={skill} className={styles.skillTag}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className={styles.credits}>
        <div className={styles.wrap}>
          <div className={styles.creditsInner}>
            <strong>HomeWash — Lavagem Automotiva a Domicílio · Equipe 03</strong>
            <p>Universidade de Fortaleza (UNIFOR) · Desenvolvimento Web · 2026</p>
          </div>
        </div>
      </footer>
    </article>
  )
}
