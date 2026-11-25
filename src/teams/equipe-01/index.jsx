import VideoEmbed from '../../components/VideoEmbed.jsx'
import MemberCard from '../../components/MemberCard.jsx'
import info from './info.js'
import styles from './Equipe.module.css'
import telaHome from './telas/home.jpg'
import telaDetalhes from './telas/detalhes-esporte.jpg'
import telaGerenciar from './telas/gerenciar-inscricoes.jpg'
import telaAjuda from './telas/ajuda.jpg'

// =====================================================================
// Equipe 01 — edite SOMENTE os arquivos desta pasta (src/teams/equipe-01).
// =====================================================================

const APP_URL = 'https://unifor-sports-hub.onrender.com'
const REPO_URL = 'https://github.com/FranciscoPaz25/unifor-sports-hub'

/** 1. Vídeo com referência */
const VIDEO = {
  url: 'https://youtu.be/eqeNceHlViE',
  reference:
    'Vídeo de apresentação do Unifor Sports Hub, gravado pela equipe. Mostra o sistema publicado em uso: o aluno encontra um esporte, pede a inscrição e acompanha o status, e o administrador decide os pedidos e modera as avaliações. O roteiro seguiu o fluxo central do projeto, documentado no repositório.',
}

/** 2. Descrição da página e do projeto */
const PROJECT = {
  theme:
    'O Unifor Sports Hub é uma aplicação web que centraliza as atividades esportivas da Universidade de Fortaleza: catálogo de modalidades, inscrições com aprovação, avaliações e área de gestão.',
  purpose:
    'Hoje as informações sobre horários, locais e vagas dos esportes ficam espalhadas em vários canais. O projeto, feito como extensão da disciplina Desenvolvimento de Plataformas Web, junta tudo em um só lugar. Esta página apresenta o sistema, o vídeo de demonstração e quem fez cada parte.',
  aiUsage:
    'Usamos o Claude Code como apoio no código (integração das telas com a API, correções e revisão), na documentação viva do repositório, no artigo acadêmico e nesta página. Toda sugestão foi testada no navegador e revisada pela equipe antes de entrar na main por Pull Request.',
}

/** O que o sistema faz, por perfil */
const RECURSOS = [
  {
    perfil: 'Aluno',
    itens: [
      'Cadastro com o e-mail institucional (@edu.unifor.br)',
      'Busca por nome e filtros por categoria',
      'Pedido de inscrição, que começa "Em análise"',
      'Acompanhamento e cancelamento em Minhas inscrições',
      'Avaliação com estrelas e comentário dos esportes em que foi aceito',
    ],
  },
  {
    perfil: 'Administrador',
    itens: [
      'Cadastro, edição e exclusão de esportes, com ícone padrão',
      'Aceite ou recusa das inscrições, sem passar do limite de vagas',
      'Moderação das avaliações que têm comentário',
      'Atalhos de gestão na tela de Gerência',
    ],
  },
]

const STACK = [
  { label: 'Interface', text: 'React 19, Vite e React Router 7, com CSS próprio por tela.' },
  { label: 'API', text: 'Node.js com Express 5, organizada em módulos (rotas, controle, serviço e validação).' },
  { label: 'Banco', text: 'MySQL 8.4 com Prisma 7. Cada mudança de tabela é uma migração versionada.' },
  { label: 'Segurança', text: 'Senha guardada só como hash Argon2 e sessão em cookie HttpOnly que expira após 15 minutos sem uso.' },
  { label: 'Publicação', text: 'Render e Aiven. Cada merge na main publica uma nova versão.' },
]

const TELAS = [
  { src: telaHome, alt: 'Tela inicial do aluno com busca, filtros e esportes em destaque', legenda: 'Home do aluno: busca, filtros e vagas disponíveis em cada esporte.' },
  { src: telaDetalhes, alt: 'Detalhes de um esporte com local, horário, responsável e botão Inscrever-se', legenda: 'Detalhes do esporte: tudo o que o aluno precisa antes de se inscrever.' },
  { src: telaGerenciar, alt: 'Lista de inscrições em análise com botões Aceitar e Rejeitar', legenda: 'Gerenciar inscrições: o administrador aceita ou recusa cada pedido.' },
  { src: telaAjuda, alt: 'Tela de ajuda com passo a passo, status e perguntas frequentes', legenda: 'Ajuda: passo a passo, significado de cada status e perguntas frequentes.' },
]

/** 3. Apresentação da equipe (o nome da equipe fica em info.js) */
const TEAM = {
  profile:
    'Somos quatro alunos de Ciência da Computação da Unifor, turma T242. Dividimos o sistema por telas: cada integrante cuidou das suas, do requisito até a versão final, e a integração foi feita em conjunto. Cada um trabalhou na própria branch e tudo entrou na main por Pull Request, com uma documentação viva no repositório para todos acompanharem o andamento.',
}

/** 4. Ficha técnica — um objeto por integrante */
const MEMBERS = [
  {
    name: 'João Francisco Morais Paz',
    role: 'Gerência do projeto, integração Git e vídeo',
    skills: ['React', 'Node.js', 'Git e GitHub', 'Testes manuais'],
    bio: 'Coordenou as branches e os Pull Requests, ligou as telas do aluno à API (esportes, inscrições, busca, filtros e avaliações), publicou o sistema e gravou o vídeo de apresentação.',
    links: [{ label: 'GitHub', url: 'https://github.com/FranciscoPaz25' }],
  },
  {
    name: 'Gleison Gomes Fraga Filho',
    role: 'Back-end, banco de dados e autenticação',
    skills: ['MySQL', 'Prisma', 'Docker', 'Argon2'],
    bio: 'Montou o banco MySQL com Docker e Prisma, a autenticação por sessão com senha em Argon2 e o perfil do usuário (ver, editar e trocar a senha).',
    links: [],
  },
  {
    name: 'João Gabriel Rocha Gomes',
    role: 'Front-end',
    skills: ['React', 'CSS', 'Layout'],
    bio: 'Desenvolveu as telas de administração Aceitar resenhas e Criar evento.',
    links: [],
  },
  {
    name: 'Marcio Jose Moura de Melo Junior',
    role: 'Design UX/UI',
    skills: ['Wireframes', 'Protótipos', 'Identidade visual'],
    bio: 'Desenhou os wireframes das 23 telas, definiu o padrão visual do sistema e montou os slides da apresentação.',
    links: [],
  },
]

export default function Equipe01() {
  const title = info.name?.trim() || 'Equipe 01'

  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <p className={styles.kicker}>Equipe 01</p>
        <h1 className={styles.title}>{title}</h1>
        {info.theme?.trim() && <p className={styles.theme}>{info.theme}</p>}
        <div className={styles.actions}>
          <a className={styles.primary} href={APP_URL} target="_blank" rel="noopener noreferrer">
            Abrir o sistema
          </a>
          <a className={styles.secondary} href={REPO_URL} target="_blank" rel="noopener noreferrer">
            Código no GitHub
          </a>
        </div>
        <p className={styles.note}>
          A hospedagem é gratuita: se o sistema estiver parado, o primeiro acesso pode levar até um minuto.
        </p>
      </header>

      <section className={styles.section} aria-labelledby="video">
        <h2 id="video">Vídeo e referência</h2>
        <VideoEmbed url={VIDEO.url} title={`Vídeo — ${title}`} />
        <p className={styles.reference}>
          <strong>Referência:</strong> {VIDEO.reference}
        </p>
      </section>

      <section className={styles.section} aria-labelledby="sobre">
        <h2 id="sobre">Sobre o projeto</h2>
        <dl className={styles.details}>
          <dt>Tema</dt>
          <dd>{PROJECT.theme}</dd>
          <dt>Propósito</dt>
          <dd>{PROJECT.purpose}</dd>
          <dt>Uso de IA</dt>
          <dd>{PROJECT.aiUsage}</dd>
        </dl>
      </section>

      <section className={styles.section} aria-labelledby="recursos">
        <h2 id="recursos">O que o sistema faz</h2>
        <div className={styles.columns}>
          {RECURSOS.map((grupo) => (
            <div key={grupo.perfil} className={styles.box}>
              <h3 className={styles.boxTitle}>{grupo.perfil}</h3>
              <ul className={styles.list}>
                {grupo.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <h3 className={styles.subtitle}>Tecnologias</h3>
        <dl className={styles.stack}>
          {STACK.map((item) => (
            <div key={item.label} className={styles.stackItem}>
              <dt>{item.label}</dt>
              <dd>{item.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.section} aria-labelledby="telas">
        <h2 id="telas">Telas do sistema</h2>
        <div className={styles.gallery}>
          {TELAS.map((tela) => (
            <figure key={tela.legenda} className={styles.shot}>
              <img src={tela.src} alt={tela.alt} loading="lazy" />
              <figcaption>{tela.legenda}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="equipe">
        <h2 id="equipe">A equipe</h2>
        <p>{TEAM.profile}</p>
      </section>

      <section className={styles.section} aria-labelledby="ficha">
        <h2 id="ficha">Ficha técnica</h2>
        <div className={styles.members}>
          {MEMBERS.map((member, i) => (
            <MemberCard key={`${member.name}-${i}`} {...member} />
          ))}
        </div>
      </section>
    </article>
  )
}
