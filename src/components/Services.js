import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const styles = {
    backgroundColor: "#cb6036",
    color: "white",
    fontSize: "16px",
    padding: "90px",
    Text: "white",
  };
  const text = {
    color: "white",
  };
  const color = {
    color: "orange",
  };
  return (
    <>
      <header>
        <div class="container">
          <div class="header">
            <div class="header__brandLogo">
              <a href="#">
                <img src="./brand__logo.png" alt="Brand Logo" />
              </a>
            </div>
            <div class="header__brandnav">
              <nav>
                <ul class="header__navigations">
                  <li class="header__list--items">
                    <a href="/">Home</a>
                  </li>
                  <li class="header__list--items">
                    <Link to="/About">About</Link>
                  </li>
                  <li class="header__list--items">
                    <Link to="/Services">Services</Link>
                  </li>
                  <a href="#" className="abc">
                    Our Vision
                  </a>
                </ul>
              </nav>
            </div>
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>
      <section class="banner">
        <img
          src="./WhatsApp Image 2023-05-17 at 6.43.25 PM.jpeg"
          alt="About us banner image"
        />
        <div class="banner__content--wrapper">
          <div class="container">
            <div class="we">
              <div class="head">
                <div class="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
                  <div class="et_pb_text_inner">
                    <h1>
                      We <span style={color}>Love</span> to do
                    </h1>
                  </div>
                </div>
                <div class="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_left et_pb_bg_layout_light">
                  <div class="et_pb_text_inner">
                    <h2> Design, Development and Marketing</h2>
                  </div>
                </div>
                <div class="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_left et_pb_bg_layout_light">
                  <div class="et_pb_text_inner">
                    <h2>Our mission help businesses becomes online</h2>
                  </div>
                </div>
                <div class="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_center et_pb_module "></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section id="what-we-do">
        <div class="container-fluid">
          <h2 class="section-title mb-2 h1">O QUE NÓS FAZEMOS</h2>
          <p class="text-center text-muted h5">
            Ter e gerenciar uma estratégia de marketing correta é crucial em um
            mercado em rápida evolução..
          </p>
          <br></br>
          <div class="row mt-5">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-1">
                  <h3 class="card-title">DESENVOLVIMENTO WEB</h3>
                  <p class="card-text">
                    <img src="./19362653.jpg" />
                    Himalayastechies criando e mantendo sites para empresas e
                    organizações. Envolve uma série de tarefas, como projetar,
                    codificar, testar e publicar páginas e aplicativos da Web.
                    Os desenvolvedores da Web usam várias linguagens de
                    programação e estruturas para criar sites funcionais,
                    amigáveis e visualmente atraentes. Eles também garantem que
                    os sites sejam otimizados para mecanismos de pesquisa,
                    acessíveis a usuários com deficiência e compatíveis com
                    diferentes dispositivos e navegadores da web. À medida que a
                    presença online das empresas se torna cada vez mais
                    importante, o desenvolvimento web tornou-se um componente
                    crítico da estratégia digital de qualquer empresa..
                  </p>
                  <a
                    
                    title="Read more"
                    class="read-more"
                  >
                    Consulte Mais informação<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-2">
                  <h3 class="card-title">Marketing de mídia social</h3>
                  <p class="card-text">
                    <img src="./5618169.jpg" />
                    Himalayastechies criando e compartilhando conteúdo,
                    envolvendo-se com seguidores e executando campanhas
                    publicitárias direcionadas para atingir um público
                    específico. O marketing de mídia social pode ajudar as
                    empresas a aumentar o reconhecimento da marca, aumentar o
                    tráfego do site, gerar leads e impulsionar as vendas. As
                    plataformas de mídia social mais populares para marketing
                    incluem Facebook, Instagram, Twitter, LinkedIn e YouTube.
                    Para ter sucesso no marketing de mídia social, as empresas
                    precisam desenvolver uma estratégia sólida, criar conteúdo
                    de alta qualidade e se envolver de forma consistente com
                    seus seguidores. Também é importante acompanhar e analisar o
                    desempenho das campanhas de mídia social para garantir que
                    elas atendam aos objetivos de negócios.
                  </p>
                  <a
                  
                    title="Read more"
                    class="read-more"
                  >
                    Consulte Mais informação<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-3">
                  <h3 class="card-title">SUPORTE GLOBAL</h3>
                  <p class="card-text">
                    <img src="./Wavy_Eco-06_Single-01.jpg" />
                    Os Himalayastechies fornecem serviços a seus clientes em
                    todo o mundo, ajudando-os com seus produtos ou serviços.
                    Esse suporte pode vir de várias formas, como telefone,
                    e-mail, bate-papo ao vivo ou recursos de autoajuda, como uma
                    base de conhecimento ou perguntas frequentes. O objetivo do
                    suporte global é ajudar os clientes a resolver problemas ou
                    responder a perguntas que possam ter sobre um produto ou
                    serviço. As empresas com equipes de suporte globais costumam
                    ter equipes de suporte dedicadas em vários fusos horários
                    para garantir que os clientes recebam assistência rápida e
                    eficaz. Fornecer suporte global pode ajudar as empresas a
                    melhorar a satisfação do cliente, aumentar a fidelidade do
                    cliente e impulsionar as vendas.
                  </p>
                  <a
                    
                    title="Read more"
                    class="read-more"
                  >
                    Consulte Mais informação<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-4">
                  <h3 class="card-title">Animação e produção de filmes digitais</h3>
                  <p class="card-text">
                    <img src="./151.jpg" />
                    Os Himalayastechies criam conteúdo visualmente
                    impressionante e atraente por meio do uso de gráficos,
                    animações e efeitos visuais gerados por computador. Abrange
                    uma ampla gama de técnicas, incluindo animação 2D e 3D,
                    composição, gráficos em movimento e efeitos especiais. Na
                    indústria da animação, os profissionais usam ferramentas de
                    software como Adobe Animate, Autodesk Maya e Toon Boom
                    Harmony para criar conteúdo animado para programas de
                    televisão, filmes, videogames e outras plataformas de mídia
                    digital. Com animação 3D, eles podem criar personagens e
                    ambientes realistas, que podem ser usados em aplicações de
                    realidade virtual e realidade aumentada.
                  </p>
                  <a
                
                    title="Read more"
                    class="read-more"
                  >
                    Consulte Mais informação<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-5">
                  <h3 class="card-title">SERVIÇOS OFFSHORE</h3>
                  <p class="card-text">
                    <img src="./6182753.jpg" />
                    Os serviços offshore referem-se à terceirização de processos
                    ou funções de negócios para um país estrangeiro ou um
                    provedor de serviços terceirizado. Isso pode incluir uma
                    série de atividades, como desenvolvimento de software,
                    suporte ao cliente, entrada de dados e muito mais. Os
                    serviços offshore podem oferecer vários benefícios às
                    empresas, incluindo economia de custos, acesso a
                    conhecimentos especializados, maior flexibilidade e
                    capacidade de se concentrar nas principais funções de
                    negócios. No entanto, também existem riscos e desafios
                    potenciais, como barreiras linguísticas e culturais,
                    diferenças de fuso horário e preocupações com a segurança
                    dos dados.
                  </p>
                  <a
                  
                    title="Read more"
                    class="read-more"
                  >
                    Consulte Mais informação<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-6">
                  <h3 class="card-title">Comércio eletrônico</h3>
                  <p class="card-text">
                    <img src="./female_shopping_from_phone.jpg" />
                    E-commerce, abreviação de comércio eletrônico, refere-se à
                    compra e venda de bens e serviços pela internet. Envolve
                    transações online entre empresas, indivíduos ou entidades e
                    pode ser realizada por meio de várias plataformas, como
                    sites, aplicativos móveis e mídias sociais. O comércio
                    eletrônico revolucionou a maneira como as pessoas compram,
                    oferecendo conveniência, acessibilidade e flexibilidade para
                    consumidores e empresas. Ele permite que as empresas
                    alcancem um público global e operem 24 horas por dia.

                  </p>
                  <a
                  
                    title="Read more"
                    class="read-more"
                  >
                    Consulte Mais informação<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="main-page-sec main-page-sec2" style={styles}>
        <div class="row">
          <div class="col-md-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                {" "}
                <span class="expertise__heading">eCommerce </span>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="shopify-development-services.php"
                >
                  Shopify
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="prestashop-development-services.php"
                >
                  PrestaShop
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="woocommerce-development-services.php"
                >
                  WooCommerce
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="bigcommerce-development-services.php"
                >
                  BigCommerce
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="magento-development-services.php"
                >
                  Magento
                </a>{" "}
              </li>
            </ul>
          </div>

          <div class="col-md-3">
            <ul class="nav flex-column">
              <li class="expertise__supportText">
                {" "}
                <span class="expertise__heading">Product Development</span>{" "}
              </li>
              <li class="expertise__supportText">
                <a
                  class="nav-link"
                  style={text}
                  href="saas-web-application-development.php"
                >
                  Saas Web applications
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="third-party-integration-services.php"
                >
                  Third Party Integrations
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="ui-ux-design-services.php"
                >
                  UI/UX Design
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="mobile-app-development-services.php"
                >
                  Mobile App Dev{" "}
                </a>{" "}
              </li>
            </ul>
          </div>

          <div class="col-md-3">
            <ul class="nav flex-column">
              <li class="expertise__supportText">
                {" "}
                <span class="expertise__heading">Expertise</span>{" "}
              </li>
              <li class="expertise__supportText">
                <a
                  class="nav-link"
                  style={text}
                  href="https://shopify.webgarh.com/"
                >
                  {" "}
                  Shopify Apps
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="third-party-integration-services.php"
                >
                  Third Party Integrations
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="prestashop-module-development.php"
                >
                  {" "}
                  PrestaShop Modules
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="software-product-development-services.php"
                >
                  {" "}
                  Product Development{" "}
                </a>{" "}
              </li>
              <li class="expertise__supportText">
                {" "}
                <a
                  class="nav-link"
                  style={text}
                  href="white-label-web-development.php"
                >
                  {" "}
                  White Label Development{" "}
                </a>{" "}
              </li>
            </ul>
          </div>

          <div class="col-md-3">
            <ul class="nav flex-column">
              <li class="expertise__supportText">
                <span class="expertise__heading"> Contact Us</span>
              </li>
              <li class="expertise__supportText">
                <p class="address-p">
                  Rua Manilla 407 Jd São Fernando Barueri - São Paulo Brazil
                </p>
                <p>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  &nbsp; himalayasbrazil@gmail.com
                </p>
                <p>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  &nbsp; 551194772-7979&nbsp;{" "}
                  <img
                    className="cont"
                    src="./icons8-brazil-48.png"
                    alt="Brand Logo"
                  />
                </p>
                <hr></hr>
                <p class="address-p">
                  new sunny enclave , mohali 140301, india
                </p>
                <p>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  &nbsp; himalayastechies@gmail.com
                </p>
                <p>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  &nbsp; 9872567925 &nbsp;{" "}
                  <img
                    className="cont"
                    src="./icons8-india-48.png"
                    alt="Brand Logo"
                  />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer>
        <div class="container">
          <div class="footer">
            <div class="footer__social--icons">
              <ul>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blank">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/himalayastechies?igshid=OTJhZDVkZWE="
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer__monospace">
              <p>2023 © Himalayas Techies. All rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Services;
