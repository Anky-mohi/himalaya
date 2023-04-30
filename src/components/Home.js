import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
                    <a href="#">Services</a>
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

      <main>
        <section class="banner">
          <video
            preload="auto"
            id="pageBackground_c1dmp_video"
            class="banner__bgVideo"
            role="presentation"
            crossorigin="anonymous"
            playsinline=""
            autoPlay
            muted
            loop
          >
            <source
              src="https://video.wixstatic.com/video/11062b_b75407a670324c39babd882c6c01d983/1080p/mp4/file.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div class="banner__content--wrapper">
            <div class="container">
              <div class="banner__content">
                <h1 class="banner__content--heading">Himalayas Tech</h1>
                <p class="banner__content--supportText">
                  Simples, Intuitivo e Perfeitamente Elaborado !
                </p>
                <a href="/Contact" class="abc">
                  {" "}
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="introduction">
          <div class="container">
            <div class="introduction__content">
              <p>
                Aqui na himalyas techie trabalhamos duro todos os dias para
                manter um ótimo relacionamento com nossos clientes e clientes.
                Somos um grupo de designers, desenvolvedores, profissionais de
                marketing. Todos nós reunimos diferentes habilidades e formamos
                uma empresa que lida com vários domínios, como desenvolvimento
                de software, saúde, odontologia, turismo médico, marketing e
                outros domínios relacionados.
              </p>
              <div class="introduction__button">
                <a href="/Contact" class="abc">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="expertise">
          <div class="container">
            <div class="expertise__wrapper">
              <div class="expertise__leftSide">
                <img src="./svg.png" alt="" />
              </div>
              <div class="expertise__rightSide">
                <div class="expertise__card--wrapper">
                  <div class="expertise__card">
                    <div class="expertise__heading">E-Commerce</div>
                    <div class="expertise__supportText">
                      Somos especializados na criação de sites de comércio
                      eletrônico de alta qualidade que ajudam as empresas a
                      vender produtos e serviços a seus clientes. Nossa equipe
                      trabalha em estreita colaboração com os clientes para
                      entender suas necessidades de negócios e criar um site
                      personalizado que atenda aos seus objetivos. Usamos as
                      tecnologias mais recentes para garantir que nossos sites
                      sejam visualmente atraentes, fáceis de usar e otimizados
                      para desempenho, segurança e otimização de mecanismo de
                      pesquisa Saber mais
                    </div>
                    <div class="expertise__button">
                      <a href="#">Know More</a>
                    </div>
                  </div>
                  <div class="expertise__card">
                    <div class="expertise__heading">Product Develop</div>
                    <div class="expertise__supportText">
                      Desenvolvimento de produto Somos uma empresa de
                      desenvolvimento de sites de comércio eletrônico
                      especializada na criação de vitrines online de alta
                      qualidade. Nossa equipe trabalha em estreita colaboração
                      com os clientes para criar sites personalizados
                      visualmente atraentes, fáceis de usar e otimizados para
                      desempenho Saber mais - Button
                    </div>
                    <div class="expertise__button">
                      <a href="#">Know More</a>
                    </div>
                  </div>
                  <div class="expertise__card">
                    <div class="expertise__heading">Website Expertise</div>
                    <div class="expertise__supportText">
                      Experiência em sites Somos uma empresa de desenvolvimento
                      web com experiência na criação de sites personalizados de
                      alta qualidade para empresas de todos os tamanhos. Nossa
                      equipe de desenvolvedores especializados usa as mais
                      recentes tecnologias e práticas recomendadas para garantir
                      que nossos sites sejam visualmente atraentes, fáceis de
                      usar e otimizados para desempenho e visibilidade nos
                      mecanismos de pesquisa.
                    </div>
                    <div class="expertise__button">
                      <a href="#">Know More</a>
                    </div>
                  </div>
                  <div class="expertise__card">
                    <div class="expertise__heading">Customer Experience</div>
                    <div class="expertise__supportText">
                      Experiência do cliente No centro do nosso negócio está o
                      compromisso de fornecer serviços centrados no cliente que
                      priorizam as necessidades e preferências exclusivas de
                      cada indivíduo. Empregamos uma variedade de estratégias
                      personalizadas, incluindo pesquisa aprofundada do cliente
                      e suporte individual, para garantir que cada interação
                      seja personalizada para criar uma experiência memorável e
                      positiva
                    </div>
                    <div class="expertise__button">
                      <a href="#">Know More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="contact">
          <div class="container">
            <div class="contact__heading">
              <p>
                Let's work <br />
                <span>Together.</span>
              </p>
            </div>
            <div class="contact__wrapper">
              <div class="contact__leftSide">
                <div class="contact__content">
                  <p>
                    Vamos trabalhar Juntos! 😁 Em nossa empresa, acreditamos na
                    parceria com nossos clientes para criar soluções poderosas e
                    eficazes que atendam às suas necessidades exclusivas. Nós
                    trazemos nossa experiência em desenvolvimento web, comércio
                    eletrônico e desenvolvimento de produtos para cada projeto,
                    trabalhando de forma colaborativa para garantir que cada
                    detalhe seja executado sem falhas. Nossa abordagem
                    personalizada garante que cada cliente receba a atenção e
                    suporte necessários para atingir seus objetivos de negócios,
                    e nosso compromisso com a excelência garante resultados que
                    superam as expectativas
                  </p>
                </div>
              </div>
              <div class="contact__rightSide">
                <div class="contact__form">
                  <h1 class="contact__form--title">Contact us</h1>
                  <p class="contact__form--description">
                    Contate-nos Em nossa empresa, acreditamos na parceria com
                    nossos clientes para criar soluções poderosas e eficazes que
                    atendam às suas necessidades exclusivas.
                  </p>
                  <div class="row">
                    <div class="col-md-9 mb-md-0 mb-5">
                      <form
                        action="https://formspree.io/f/xknakpww"
                        method="POST"
                        id="contact-form"
                        name="contact-form"
                      >
                        <div class="row">
                          <div class="col-md-6">
                            <div class="md-form mb-0">
                              <label for="name" class="">
                                SOU NOME
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div class="row">
                            <div class="md-form mb-0">
                              <label for="email" class="">
                                SOU EMAIL
                              </label>
                              <input
                                type="text"
                                id="email"
                                name="email"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="md-form mb-0">
                              <label for="subject" class="">
                                MENSAGENS
                              </label>
                              <input
                                type="text"
                                id="subject"
                                name="subject"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="text-center text-md-left">
                          <button type="submit" class="btn btn--primary">
                            send
                          </button>
                        </div>
                      </form>

                      <div class="status"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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
                  new sunny enclave ,
                  mohali 140301, india 
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

export default Home;
