import React from 'react';

// Componentes de apresentação. A navegação e a galeria usam HTML e CSS.
function Icon({ name, className = '' }) {
  const drawings = {
    shield: <><path d="M12 3 4.5 6v5.5c0 4.2 3.1 7.6 7.5 9.5 4.4-1.9 7.5-5.3 7.5-9.5V6L12 3Z" /><path d="m8.5 12 2.3 2.3 4.7-4.8" /></>,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.4" /></>,
    thumb: <><path d="M7 10H3v11h4V10Zm0 10h10.4a2 2 0 0 0 2-1.6l1.4-7a2 2 0 0 0-2-2.4H14l.6-4a2.2 2.2 0 0 0-2.2-2.5L7 10v10Z" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
    whatsapp: <><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" /><path d="M8.3 7.6c-.5 0-1.1.9-1 1.7.3 3 3 5.9 6.1 6.5.9.2 2-.4 2.2-1l.3-.9-2.3-1.1-.8.9c-1.2-.4-2.4-1.5-2.9-2.7l.8-.8-1-2.6H8.3Z" /></>,
    image: <><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m3 17 5-5 4 4 3-3 6 6" /></>,
  };
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawings[name]}</svg>;
}

function DoodleArrow({ className = '' }) {
  return <svg className={`doodle-arrow ${className}`} viewBox="0 0 100 100" fill="none" aria-hidden="true"><path d="M15 7C75 11 101 72 27 85m0 0 13-14M27 85l20 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function SectionHeading({ children, accent, id }) {
  return <h2 className="section-heading" id={id}>{children} <em>{accent}</em></h2>;
}

export default function App() {
  return (
    <div className="site">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Movan, início">
            <span className="brand-lockup">
              <span className="brand-name">MO<span>VAN</span></span>
              <span className="brand-caption">Seu caminho seguro<br />na palma da mão</span>
            </span>
          </a>
          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#inicio">Início</a><a href="#sobre">Sobre</a><a href="#regioes">Regiões</a><a href="#vagas">Vagas</a><a href="#horarios">Horários</a>
          </nav>
        </div>
      </header>

      <main className="page-content" id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">Segurança<br /><span>e confiança</span></h1>
            <p className="hero-handwriting">para o seu filho</p>
            <p className="hero-description">Transporte escolar com<br />pontualidade e responsabilidade.</p>
            <div className="hero-action"><a className="button button-whatsapp" href="#contato"><Icon name="whatsapp" /> WhatsApp</a><DoodleArrow /></div>
          </div>
          <div className="hero-visual">
            <div className="hero-backdrop" aria-hidden="true" />
            <img className="hero-van" src="/assets/van-escolar.png" alt="Van branca de transporte escolar com faixa amarela" width="500" height="343" fetchPriority="high" />
            <span className="hero-caption">Cuidado em cada caminho.</span>
          </div>
        </section>

        <ul className="benefits" aria-label="Nossos valores">
          <li><Icon name="shield" /><div><strong>Segurança</strong><span>em primeiro lugar</span></div></li>
          <li><Icon name="pin" /><div><strong>Pontualidade</strong><span>sempre</span></div></li>
          <li><Icon name="thumb" /><div><strong>Confiança</strong><span>na condução</span></div></li>
          <li><Icon name="clock" /><div><strong>Atendimento</strong><span>com os pais</span></div></li>
        </ul>

        <section className="panel about-panel" id="sobre" aria-labelledby="sobre-title">
          <SectionHeading id="sobre-title" accent="mim">Sobre</SectionHeading>
          <div className="about-layout">
            <div className="about-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <figure className="driver"><div className="driver-photo"><img src="/assets/motorista.png" alt="Renê, motorista do transporte escolar" width="1047" height="1085" loading="lazy" /></div><figcaption>Renê</figcaption></figure>
          </div>
        </section>

        <div className="section-grid">
          <section className="panel regions-panel" id="regioes" aria-labelledby="regioes-title">
            <SectionHeading id="regioes-title" accent="atendidas">Regiões</SectionHeading>
            <div className="regions-layout">
              <ul className="region-list"><li>[Nome do bairro]</li><li>[Nome do bairro]</li><li>[Nome do bairro]</li><li>[Nome do bairro]</li><li>[Nome do bairro]</li><li>[Nome do bairro]</li></ul>
              <div className="van-postcard" aria-hidden="true"><span className="postcard-tape" /><div className="postcard-image"><img src="/assets/van-escolar.png" alt="" width="500" height="343" loading="lazy" /></div><span className="postcard-caption">Vamos juntos!</span></div>
            </div>
          </section>

          <section className="panel schedule-panel" id="horarios" aria-labelledby="horarios-title">
            <h2 className="section-heading" id="horarios-title">Horá<em>rios</em></h2>
            <div className="schedule-table-wrap">
              <table className="schedule-table">
                <caption className="visually-hidden">Turnos e horários de saída — informações de exemplo</caption>
                <thead><tr><th scope="col">Turno</th><th scope="col">Saída</th></tr></thead>
                <tbody><tr><td>[Turno]</td><td>[00:00]</td></tr><tr><td>[Turno]</td><td>[00:00]</td></tr><tr><td>[Turno]</td><td>[00:00]</td></tr><tr><td>[Turno]</td><td>[00:00]</td></tr><tr><td>[Turno]</td><td>[00:00]</td></tr></tbody>
              </table>
            </div>
          </section>

          <section className="panel vacancies-panel" id="vagas" aria-labelledby="vagas-title">
            <SectionHeading id="vagas-title" accent="disponíveis">Vagas</SectionHeading>
            <div className="vacancies">
              <div className="vacancy-period"><h3>Manhã</h3><p><strong>[00]</strong><span>vagas disponíveis</span></p></div>
              <div className="vacancy-period afternoon"><h3>Tarde</h3><p><strong>[00]</strong><span>vagas disponíveis</span></p></div>
            </div>
            <div className="vacancy-action"><DoodleArrow className="arrow-left" /><a className="button" href="#contato">Garantir vaga</a><DoodleArrow className="arrow-right" /></div>
          </section>

          <section className="panel gallery-panel" aria-labelledby="imagens-title">
            <input className="gallery-radio radio-one" type="radio" name="galeria" id="imagem-1" aria-label="Mostrar imagem 1 de 3" defaultChecked />
            <input className="gallery-radio radio-two" type="radio" name="galeria" id="imagem-2" aria-label="Mostrar imagem 2 de 3" />
            <input className="gallery-radio radio-three" type="radio" name="galeria" id="imagem-3" aria-label="Mostrar imagem 3 de 3" />
            <div className="gallery-heading"><h2 className="section-heading" id="imagens-title">Ima<em>gens</em></h2><span className="gallery-counter" aria-hidden="true"><span className="count-one">01</span><span className="count-two">02</span><span className="count-three">03</span><span className="count-total"> / 03</span></span></div>
            <div className="gallery-window"><div className="gallery-track">
              <div className="gallery-slide slide-one"><Icon name="image" /><strong>Imagem 01</strong><span>[Foto do transporte]</span></div>
              <div className="gallery-slide slide-two"><Icon name="image" /><strong>Imagem 02</strong><span>[Foto do transporte]</span></div>
              <div className="gallery-slide slide-three"><Icon name="image" /><strong>Imagem 03</strong><span>[Foto do transporte]</span></div>
            </div></div>
            <p className="gallery-note">Um pouquinho do nosso dia a dia.</p>
          </section>
        </div>
      </main>

      <footer className="site-footer" id="contato" aria-labelledby="contato-title">
        <div><strong id="contato-title">Vamos conversar?</strong><p>Renê</p></div>
        <div className="contact-placeholder"><Icon name="whatsapp" /><div><span>WhatsApp</span><p>(00) 00000-0000</p></div></div>
      </footer>
    </div>
  );
}
