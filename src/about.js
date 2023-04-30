import React from 'react'


const about = () => {
  return (
    <>
    
    <header>
      <div class="container">
        <div class="header">
          <div class="header__brandLogo">
            <a href="#"
              ><img src="./brand__logo.png" alt="Brand Logo"
            /></a>
          </div>
          <div class="header__brandnav">
            <nav>
              <ul class="header__navigations">
                <li class="header__list--items">
                  <a href="/index.html">Home</a>
                </li>
                <li class="header__list--items">
                  <a href="/about.html">About</a>
                </li>
                <li class="header__list--items">
                  <a href="/services.html">Services</a>
                </li>
                <a href="#" class="btn btn--secondary">Our Vision</a>
              </ul>
            </nav>
          </div>
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>

    <main>

      <section class="banner">
        <img src="./about__banner.jpeg" alt="About us banner image" />
        <div class="banner__content--wrapper">
          <div class="container">
            <div class="banner__content">
              <h1 class="banner__content--heading">Himalayas Tech</h1>
              <p class="banner__content--supportText">
                Simple, Intuitive & Expertly Crafted!
              </p>
              <a href="#" class="banner__content--btn btn btn--primary"
                >Contact</a
              >
            </div>
          </div>
        </div>
      </section>

      
      <section class="vision">
        <div class="container">
          <div class="vision__wrapper">
            <div class="vision__heading">
              <p class="like-text popup-text">
                <span class="text-effect">V</span>
                <span class="text-effect">I</span>
                <span class="text-effect">S</span>
                <span class="text-effect">I</span>
                <span class="text-effect">O</span>
                <span class="text-effect">N</span>
              </p>
            </div>
            <div class="vision__supportContent">
              <p class="main--text">
                We create web and mobile app solutions that will delight your
                customers At himalayas tech, our team is dedicated to building
                and designing brands through web and mobile app development. We
                collaborate closely with our clients to develop a detailed plan
                for creating their website or mobile app, ensuring that we
                deliver the desired outcomes they are looking for.We work
                remotely or in person. We collaborate with people and computers,
                but usually not at the same time. Transitioning between them can
                be challenging, confusing or impossible. That’s all changing.
                The next wave of business transformation will shift from
                building isolated digital capabilities to creating the
                foundations of a new reality—a shared reality that seamlessly
                combines our physical lives of atoms and our digital ones of
                bits. The goal is not incremental improvement, but a step
                change. The true value of this convergence is in creating
                something fundamentally new. Look at generative AI – many people
                are using it to generate purely digital images and content, but
                we already see how it will shape the future of science
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="whatwedo">
        <div class="container">
          <div class="whatwedo__wrapper">
            <div class="whatwedo__heading">
              <p class="like-text popup-text">
                <span class="text-effect">W</span>
                <span class="text-effect">H</span>
                <span class="text-effect">A</span>
                <span class="text-effect">T</span>
                
                <span class="text-effect">W</span>
                <span class="text-effect">E</span>
                
                <span class="text-effect">D</span>
                <span class="text-effect">O</span>
                
                <span class="text-effect">?</span>
              </p>
            </div>
            <div class="whatwedo__supportContent">
              <p class="main--text">
                When Atoms Meet Bits: The Foundations of Our New Reality When
                Atoms meet Bits The foundations of our new reality We live in
                two parallel realities, one of atoms and one of bits. When we
                shop, we either go into a store or pull up a webpage. We work
                remotely or in person. We collaborate with people and computers,
                but usually not at the same time. Transitioning between them can
                be challenging, confusing or impossible. That's all changing.
                The next wave of business transformation will shift from
                building isolated digital capabilities to creating the
                foundations of a new reality—a shared reality that seamlessly
                combines our physical lives of atoms and our digital ones of
                bits. The goal is not incremental improvement, but a step
                change. The true value of this convergence is in creating
                something fundamentally new. Look at generative AI -- many people
                are using it to generate purely digital images and content, but
                we already see how it will shape the future of science,
                enterprise data, how we design and manufacture products, and so
                much more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="container">
        <div class="footer">
          <div class="footer__social--icons">
            <ul>
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <i class="fa-brands fa-facebook"></i
                ></a>
              </li>
              <li>
                <a href="https://www.twitter.com/" target="_blank"
                  ><i class="fa-brands fa-twitter"></i
                ></a>
              </li>
              <li>
                <a
                  href="https://instagram.com/himalayastechies?igshid=OTJhZDVkZWE="
                  target="_blank"
                >
                  <i class="fa-brands fa-instagram"></i
                ></a>
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
  )
}

export default about