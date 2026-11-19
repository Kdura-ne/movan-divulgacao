import React from 'react';

// Componentes de apresentação. A navegação e a galeria usam HTML e CSS.
function Icon({ name, className = '' }) {
  if (name === 'whatsapp') {
    return <img className={`icon icon-whatsapp ${className}`} src="/assets/whatsapp.png" width="250" height="250" alt="" aria-hidden="true" />;
  }
  const drawings = {
    shield: <><path d="M12 3 4.5 6v5.5c0 4.2 3.1 7.6 7.5 9.5 4.4-1.9 7.5-5.3 7.5-9.5V6L12 3Z" /><path d="m8.5 12 2.3 2.3 4.7-4.8" /></>,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.4" /></>,
    thumb: <><path d="M7 10H3v11h4V10Zm0 10h10.4a2 2 0 0 0 2-1.6l1.4-7a2 2 0 0 0-2-2.4H14l.6-4a2.2 2.2 0 0 0-2.2-2.5L7 10v10Z" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
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
            <h1 id="hero-title"><span className="hero-title-first">Segurança</span><span className="hero-title-accent">e confiança</span></h1>
            <p className="hero-handwriting">Para o seu filho</p>
            <p className="hero-description">Transporte escolar com<br />pontualidade e responsabilidade</p>
            <div className="hero-action"><a className="button button-whatsapp" href="#contato"><Icon name="whatsapp" /> Whatsapp</a></div>
            <svg className="hero-arrow" viewBox="5 0 63 176" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M18 6C70 34 83 115 12 164m0 0 22-5m-22 5 12-20" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
              <p>Olá, sou o Renê! Trabalho com transporte escolar na região do Jardim Ângela e arredores. Meu objetivo é ajudar as famílias a organizar a rotina de ida e volta da escola, com cuidado em cada trajeto.</p>
              <p>Para consultar uma rota, me informe o bairro, a escola e o turno do aluno. Assim podemos combinar os pontos de embarque e desembarque e os horários que melhor atendem à sua família.</p>
            </div>
            <figure className="driver"><div className="driver-photo"><img src="/assets/motorista.png" alt="Renê, motorista do transporte escolar" width="1047" height="1085" loading="lazy" /></div><figcaption>Renê</figcaption></figure>
          </div>
        </section>

        <div className="section-grid">
          <section className="panel regions-panel" id="regioes" aria-labelledby="regioes-title">
            <SectionHeading id="regioes-title" accent="atendidas">Regiões</SectionHeading>
            <div className="regions-layout">
              <ul className="region-list"><li>Jardim Ângela</li><li>Jardim Nakamura</li><li>Jardim Capela</li><li>Jardim Vera Cruz</li><li>Parque do Lago</li><li>Vila Calu</li></ul>
              <div className="van-postcard" aria-hidden="true"><span className="postcard-tape" /><div className="postcard-image"><img src="/assets/van-escolar.png" alt="" width="500" height="343" loading="lazy" /></div><span className="postcard-caption">Vamos juntos!</span></div>
            </div>
          </section>

          <section className="panel schedule-panel" id="horarios" aria-labelledby="horarios-title">
            <h2 className="section-heading" id="horarios-title">Horá<em>rios</em></h2>
            <div className="schedule-table-wrap">
              <table className="schedule-table">
                <caption className="visually-hidden">Horários escolares de referência para manhã, tarde e noite</caption>
                <thead><tr><th scope="col">Turno</th><th scope="col">Entrada</th><th scope="col">Saída</th></tr></thead>
                <tbody><tr><th scope="row">Manhã</th><td>07:00</td><td>12:00</td></tr><tr><th scope="row">Tarde</th><td>13:30</td><td>18:30</td></tr><tr><th scope="row">Noite</th><td>19:00</td><td>23:00</td></tr></tbody>
              </table>
            </div>
            <p className="panel-note">Horários escolares de referência. Embarque e retorno a combinar conforme a escola e a rota.</p>
          </section>

          <section className="panel vacancies-panel" id="vagas" aria-labelledby="vagas-title">
            <SectionHeading id="vagas-title" accent="disponíveis">Vagas</SectionHeading>
            <div className="vacancies">
              <div className="vacancy-period"><h3>Manhã</h3><p><strong>15</strong><span>vagas por turno</span></p></div>
              <div className="vacancy-period afternoon"><h3>Tarde</h3><p><strong>15</strong><span>vagas por turno</span></p></div>
            </div>
            <div className="vacancy-action"><DoodleArrow className="arrow-left" /><a className="button" href="#contato">Garantir vaga</a><DoodleArrow className="arrow-right" /></div>
            <p className="panel-note vacancy-note">Capacidade de referência. Consulte a disponibilidade.</p>
          </section>

          <section className="panel gallery-panel" aria-labelledby="imagens-title">
            <input className="gallery-radio radio-one" type="radio" name="galeria" id="imagem-1" aria-label="Mostrar imagem 1 de 3" defaultChecked />
            <input className="gallery-radio radio-two" type="radio" name="galeria" id="imagem-2" aria-label="Mostrar imagem 2 de 3" />
            <input className="gallery-radio radio-three" type="radio" name="galeria" id="imagem-3" aria-label="Mostrar imagem 3 de 3" />
            <div className="gallery-heading"><h2 className="section-heading" id="imagens-title">Ima<em>gens</em></h2><span className="gallery-counter" aria-hidden="true"><span className="count-one">01</span><span className="count-two">02</span><span className="count-three">03</span><span className="count-total"> / 03</span></span></div>
            <div className="gallery-window"><div className="gallery-track">
              <figure className="gallery-slide slide-one"><img src="/assets/galeria/ducato-exterior.jpg" alt="Fiat Ducato branca de transporte escolar, vista de frente e de lado" width="850" height="450" loading="lazy" /><figcaption>Fiat Ducato escolar</figcaption></figure>
              <figure className="gallery-slide slide-two"><img src="/assets/galeria/ducato-interior-acesso.jpg" alt="Interior da Fiat Ducato visto pelo acesso lateral, com fileiras de bancos e cintos" width="850" height="450" loading="lazy" /><figcaption>Interior e acesso lateral</figcaption></figure>
              <figure className="gallery-slide slide-three"><img src="/assets/galeria/ducato-interior-bancos.jpg" alt="Bancos cinza e cintos de segurança no interior da mesma Fiat Ducato" width="850" height="450" loading="lazy" /><figcaption>Fileiras de bancos</figcaption></figure>
            </div></div>
            <p className="gallery-note">Fiat Ducato · fotos ilustrativas do modelo.</p>
          </section>
        </div>
      </main>

      <footer className="site-footer" id="contato" aria-labelledby="contato-title">
        <div><strong id="contato-title">Vamos conversar?</strong><p>Renê</p></div>
        <div className="contact-placeholder"><Icon name="whatsapp" /><div><span>WhatsApp</span><p>(11) 90000-0000</p></div></div>
      </footer>
    </div>
  );
}
