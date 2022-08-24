import React from 'react'
import prologic from '../assets/prologic.png'

export default function Home() {
  return (
    <div>
        {/* ======= Header ======= */}
        <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center">
            <div className="logo me-auto">
            <h1><a href="index.html"><img src={prologic} alt='prologic'></img></a></h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
            </div>
            <nav id="navbar1" className="navbar1">
            <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                
                <li><a className="nav-link scrollto" href="#team">Team</a></li>
               
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                
                <li><a className="nav-link scrollto" href="/Login">Connexion</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
            </nav>{/* .navbar1 */}
        </div>
        </header>{/* End Header */}


        {/* ======= Hero Section ======= */}
        <section id="hero">
        <div className="hero-container">
            <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval={5000}>
            <ol className="carousel-indicators" id="hero-carousel-indicators" />
            <div className="carousel-inner" role="listbox">
                {/* Slide 1 */}
                <div className="carousel-item active" style={{backgroundImage: 'url("assets/img/slide/slide-1.jpg")'}}>
                <div className="carousel-container">
                    <div className="carousel-content container">
                    <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Prologic</span></h2>
                    <p className="animate__animated animate__fadeInUp">
                        Développement et maintenir une culture d'entreprise de classe mondiale basée sur l'intégrité,
                        l'autonominisation et l'adaptabilité pour attirer, développer et retentir les talents les plus 
                        brillants de la Tunisie, nous permettant ainsi de fournir systématiquement un support inégalé 
                        à nous clients et fournisseurs.
                    </p>
                    <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                    </div>
                </div>
                </div>
                {/* Slide 2 */}
                <div className="carousel-item" style={{backgroundImage: 'url("assets/img/slide/slide-2.jpg")'}}>
                <div className="carousel-container">
                    <div className="carousel-content container">
                    <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                    <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                    <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                    </div>
                </div>
                </div>
                {/* Slide 3 */}
                <div className="carousel-item" style={{backgroundImage: 'url("assets/img/slide/slide-3.jpg")'}}>
                <div className="carousel-container">
                    <div className="carousel-content container">
                    <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                    <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                    <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                    </div>
                </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
            </a>
            <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
            </a>
            </div>
        </div>
        </section>{/* End Hero */}


        {/* ======= Main Section ======= */}
        <main id="main">
        {/* ======= About Us Section ======= */}
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
            <div className="row no-gutters">
                <div className="col-lg-6 video-box">
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" />
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
                <div className="section-title">
                    <h2>About Us</h2>
                    <p>Créée en 1985 par des experts et des passionnés de nouvelles technologies, PROLOGIC Tunisie est une société anonyme de service à haute valeur ajoutée dotée d’un capital de 3.415.500DT.</p>
                </div>
                <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                    <div className="icon"><i className="bx bx-fingerprint" /></div>
                    <h4 className="title"><a href>Achèvement</a></h4>
                    <p className="description">Fruit de 35 ans d’expérience dans le conseil, la vente et le service, PROLOGIC Tunisie est aujourd’hui l’un des leaders incontestés du marché des Equipements et des Services Informatiques.</p>
                </div>
                <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                    <div className="icon"><i className="bx bx-gift" /></div>
                    <h4 className="title"><a href>Services</a></h4>
                    <p className="description">PROLOGIC Tunisie accompagne ainsi les grandes, les petites et les moyennes entreprises dans la conception, le développement, l’exploitation et la maintenance de solutions, nécessitant la mise en œuvre des nouvelles technologies de l’information.</p>
                </div>
                </div>
            </div>
            </div>
        </section>{/* End About Us Section */}
        {/* ======= About Lists Section ======= */}
        <section className="about-lists">
            <div className="container">
         {/*    <div className="row no-gutters">
                <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up">
                <span>01</span>
                <h4>Lorem Ipsum</h4>
                <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                </div>
                <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay={100}>
                <span>02</span>
                <h4>Repellat Nihil</h4>
                <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                </div>
                <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay={200}>
                <span>03</span>
                <h4> Ad ad velit qui</h4>
                <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                </div>
                <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay={300}>
                <span>04</span>
                <h4>Repellendus molestiae</h4>
                <p>Inventore quo sint a sint rerum. Distinctio blanditiis deserunt quod soluta quod nam mider lando casa</p>
                </div>
                <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay={400}>
                <span>05</span>
                <h4>Sapiente Magnam</h4>
                <p>Vitae dolorem in deleniti ipsum omnis tempore voluptatem. Qui possimus est repellendus est quibusdam</p>
                </div>
                <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay={500}>
                <span>06</span>
                <h4>Facilis Impedit</h4>
                <p>Quis eum numquam veniam ea voluptatibus voluptas. Excepturi aut nostrum repudiandae voluptatibus corporis sequi</p>
                </div>
            </div> */}
            </div>
        </section>{/* End About Lists Section */}
        {/* ======= Counts Section ======= */}
        {/* <section className="counts section-bg">
            <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up">
                <div className="count-box">
                    <i className="bi bi-simple-smile" style={{color: '#20b38e'}} />
                    <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
                    <p>Happy Clients</p>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay={200}>
                <div className="count-box">
                    <i className="bi bi-document-folder" style={{color: '#c042ff'}} />
                    <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
                    <p>Projects</p>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay={400}>
                <div className="count-box">
                    <i className="bi bi-live-support" style={{color: '#46d1ff'}} />
                    <span data-purecounter-start={0} data-purecounter-end={1463} data-purecounter-duration={1} className="purecounter" />
                    <p>Hours Of Support</p>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay={600}>
                <div className="count-box">
                    <i className="bi bi-users-alt-5" style={{color: '#ffb459'}} />
                    <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
                    <p>Hard Workers</p>
                </div>
                </div>
            </div>
            </div>
        </section> */}{/* End Counts Section */}
        {/* ======= Services Section ======= */}
        <section id="services" className="services">
            <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2>Services</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                <div className="icon"><i className="bi bi-chat-left-dots" /></div>
                <h4 className="title"><a href>DAAS</a></h4>
                <p className="description">Device as a service « DAAS ». Matériel, logiciels et services combinés en un seul tarif par appareil. </p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon"><i className="bi bi-bounding-box" /></div>
                <h4 className="title"><a href>MPS</a></h4>
                <p className="description">Les services d'impression gérés (MPS) sont une approche spécialisée qui analyse les processus et les flux de travail de votre organisateur.</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                <div className="icon"><i className="bi bi-globe" /></div>
                <h4 className="title"><a href>Infogérances</a></h4>
                <p className="description">Prologic vous propose de confier la gestion de votre informatique à nos experts et de diposer d'un système d'information plus flexible.</p>
                </div>
{/*                 <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                <div className="icon"><i className="bi bi-broadcast" /></div>
                <h4 className="title"><a href>Magni Dolores</a></h4>
                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                <div className="icon"><i className="bi bi-brightness-high" /></div>
                <h4 className="title"><a href>Nemo Enim</a></h4>
                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                <div className="icon"><i className="bi bi-calendar2-week" /></div>
                <h4 className="title"><a href>Eiusmod Tempor</a></h4>
                <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                </div> */}
            </div>
            </div>
        </section>{/* End Services Section */}
        {/* ======= Our Portfolio Section ======= */}

        {/* ======= Our Team Section ======= */}
        <section id="team" className="team">
            <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2>Our Team</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
            </div>
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="member">
                    <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
                    <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <div className="social">
                        <a href><i className="bi bi-twitter" /></a>
                        <a href><i className="bi bi-facebook" /></a>
                        <a href><i className="bi bi-instagram" /></a>
                        <a href><i className="bi bi-linkedin" /></a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="member">
                    <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                    <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <div className="social">
                        <a href><i className="bi bi-twitter" /></a>
                        <a href><i className="bi bi-facebook" /></a>
                        <a href><i className="bi bi-instagram" /></a>
                        <a href><i className="bi bi-linkedin" /></a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                <div className="member">
                    <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" /></div>
                    <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <div className="social">
                        <a href><i className="bi bi-twitter" /></a>
                        <a href><i className="bi bi-facebook" /></a>
                        <a href><i className="bi bi-instagram" /></a>
                        <a href><i className="bi bi-linkedin" /></a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="member">
                    <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" /></div>
                    <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <div className="social">
                        <a href><i className="bi bi-twitter" /></a>
                        <a href><i className="bi bi-facebook" /></a>
                        <a href><i className="bi bi-instagram" /></a>
                        <a href><i className="bi bi-linkedin" /></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>{/* End Our Team Section */}

        {/* ======= Contact Us Section ======= */}
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2>Contact Us</h2>
            </div>
            <div className="row">
                <div className="col-lg-6 d-flex" data-aos="fade-up">
                <div className="info-box">
                    <i className="bx bx-map" />
                    <h3>Our Address</h3>
                    <p>2, Rue Apollo XI - 1082 Tunis - MAHRAJENE</p>
                </div>
                </div>
                <div className="col-lg-3 d-flex" data-aos="fade-up" data-aos-delay={100}>
                <div className="info-box">
                    <i className="bx bx-envelope" />
                    <h3>Email Us</h3>
                    <p>prologic@prologic.com.tn</p>
                </div>
                </div>
                <div className="col-lg-3 d-flex" data-aos="fade-up" data-aos-delay={200}>
                <div className="info-box ">
                    <i className="bx bx-phone-call" />
                    <h3>Call Us</h3>
                    <p>+(216) 71 155.500<br />+(216) 71 155.500</p>
                </div>
                </div>
                <div className="col-lg-12" data-aos="fade-up" data-aos-delay={300}>
                <form action="forms/contact.php" method="post" className="php-email-form">
                    <div className="row">
                    <div className="col-lg-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-lg-6 form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group">
                    <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                    </div>
                    <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
                </div>
            </div>
            </div>
        </section>{/* End Contact Us Section */}
        </main>{/* End #main */}

        {/* ======= Footer ======= */}
        <footer id="footer">
        <div className="footer-top">
            <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 footer-info">
                <h3>PROLOGIC</h3>
                <p>
                2, Rue Apollo XI  <br />
                1082 Tunis - MAHRAJENE<br /><br />
                    <strong>Phone:</strong> +(216) 71 155.500<br />
                    <strong>Email:</strong> prologic@prologic.com.tn<br />
                </p>
                <div className="social-links mt-3">
                    <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                </div>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
                </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
                </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action method="post">
                    <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                </form>
                </div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
            © Copyright <strong><span>PROLOGIC</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mamba-one-page-bootstrap-template-free/ */}
            
            </div>
        </div>
        </footer>{/* End Footer */}


        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>


    </div>
  )
}
