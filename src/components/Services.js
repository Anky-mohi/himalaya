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
          src="./pexels-karsten-madsen-18105.jpg"
          alt="About us banner image"
        />
        <div class="banner__content--wrapper">
          <div class="container">
            <div class="banner__content">
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
          <h2 class="section-title mb-2 h1">What we do</h2>
          <p class="text-center text-muted h5">
            Having and managing a correct marketing strategy is crucial in a
            fast moving market.
          </p>
          <br></br>
          <div class="row mt-5">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-1">
                  <h3 class="card-title">WEB DEVELOPMENT</h3>
                  <p class="card-text">
                    <img src="./19362653.jpg" />
                    Himalayastechies creating and maintaining websites for
                    businesses and organizations. It involves a range of tasks
                    such as designing, coding, testing, and publishing web pages
                    and applications. Web developers use various programming
                    languages and frameworks to build websites that are
                    functional, user-friendly, and visually appealing. They also
                    ensure that websites are optimized for search engines,
                    accessible to users with disabilities, and compatible with
                    different devices and web browsers. As the online presence
                    of businesses becomes increasingly important, web
                    development has become a critical component of any company's
                    digital strategy.
                  </p>
                  <a
                    href="https://www.fiverr.com/share/qb8D02"
                    title="Read more"
                    class="read-more"
                  >
                    Read more<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-2">
                  <h3 class="card-title">Social media Marketing</h3>
                  <p class="card-text">
                  <img src="./5618169.jpg" />
                    Himalayastechies creating and sharing content, engaging with
                    followers, and running targeted advertising campaigns to
                    reach a specific audience. Social media marketing can help
                    businesses build brand awareness, increase website traffic,
                    generate leads, and drive sales. The most popular social
                    media platforms for marketing include Facebook, Instagram,
                    Twitter, LinkedIn, and YouTube. To be successful in social
                    media marketing, businesses need to develop a solid
                    strategy, create high-quality content, and consistently
                    engage with their followers. It is also important to track
                    and analyze the performance of social media campaigns to
                    ensure that they are meeting business objectives..
                  </p>
                  <a
                    href="https://www.fiverr.com/share/qb8D02"
                    title="Read more"
                    class="read-more"
                  >
                    Read more<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-3">
                  <h3 class="card-title">GLOBAL SUPPORT</h3>
                  <p class="card-text">
                  <img src="./Wavy_Eco-06_Single-01.jpg" />
                    Himalayastechies provide services to their customers around
                    the world, helping them with their products or services.
                    This support can come in many forms, such as phone, email,
                    live chat, or self-help resources such as a knowledge base
                    or FAQs. The purpose of global support is to assist
                    customers in resolving issues or answering questions they
                    may have about a product or service. Companies with global
                    support teams often have dedicated support staff in various
                    time zones to ensure customers receive prompt and effective
                    assistance. Providing global support can help companies
                    improve customer satisfaction, increase customer loyalty,
                    and drive sales. It can also be a competitive advantage for
                    companies looking to expand into new markets or compete on a
                    global scale.
                  </p>
                  <a
                    href="https://www.fiverr.com/share/qb8D02"
                    title="Read more"
                    class="read-more"
                  >
                    Read more<i class="fa fa-angle-double-right ml-2"></i>
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
                  <h3 class="card-title">Animation And Digital Film Making</h3>
                  <p class="card-text">
                  <img src="./151.jpg" />
                    Himalayastechies create visually stunning and engaging
                    content through the use of computer-generated graphics,
                    animation, and visual effects. It encompasses a wide range
                    of techniques, including 2D and 3D animation, compositing,
                    motion graphics, and special effects. In the animation
                    industry, professionals use software tools such as Adobe
                    Animate, Autodesk Maya, and Toon Boom Harmony to create
                    animated content for television shows, movies, video games,
                    and other digital media platforms. With 3D animation, they
                    can create realistic characters and environments, which can
                    be used in virtual reality and augmented reality
                    applications.
                  </p>
                  <a
                    href="https://www.fiverr.com/share/qb8D02"
                    title="Read more"
                    class="read-more"
                  >
                    Read more<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-5">
                  <h3 class="card-title">OFFSHORE SERVICES</h3>
                  <p class="card-text">
                  <img src="./6182753.jpg" />
                    Offshore services refer to outsourcing business processes or
                    functions to a foreign country or a third-party service
                    provider. This can include a range of activities such as
                    software development, customer support, data entry, and
                    more. Offshore services can provide a number of benefits to
                    businesses, including cost savings, access to specialized
                    expertise, increased flexibility, and the ability to focus
                    on core business functions. However, there are also
                    potential risks and challenges, such as language and
                    cultural barriers, time zone differences, and data security
                    concerns
                  </p>
                  <a
                    href="https://www.fiverr.com/share/qb8D02"
                    title="Read more"
                    class="read-more"
                  >
                    Read more<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-6">
                  <h3 class="card-title">eCommerce</h3>
                  <p class="card-text">
                  <img src="./female_shopping_from_phone.jpg" />
                    E-commerce, short for electronic commerce, refers to the
                    buying and selling of goods and services over the internet.
                    It involves online transactions between businesses,
                    individuals, or entities, and can be conducted through
                    various platforms, such as websites, mobile applications,
                    and social media. E-commerce has revolutionized the way
                    people shop, providing convenience, accessibility, and
                    flexibility to both consumers and businesses. It allows
                    businesses to reach a global audience and operate 24/7,
                    while consumers can browse and purchase products from the
                    comfort of their own homes. E-commerce platforms also offer
                    various payment options, secure transactions, and
                    personalized experiences, making online shopping a seamless
                    process. With the continuous growth and advancements in
                    technology, e-commerce is expected to continue its upward
                    trajectory and dominate the retail industry in the years to
                    come.
                  </p>
                  <a
                    href="https://www.fiverr.com/share/qb8D02"
                    title="Read more"
                    class="read-more"
                  >
                    Read more<i class="fa fa-angle-double-right ml-2"></i>
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
