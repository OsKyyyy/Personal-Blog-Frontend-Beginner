import {NavLink} from "react-router-dom";

const Footer = () => {

    return (
        <>
            <footer className="ftco-footer ftco-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Hakkımda</h2>
                                <p>Hakkımda</p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                                    <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a>
                                    </li>
                                    <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-4">
                                <h2 className="ftco-heading-2">Sayfalar</h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <NavLink activeClassName="active" to={'/'}>
                                            <span className="icon-long-arrow-right mr-2"></span>Anasayfa
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeClassName="active" to={'/about'}>
                                            <span className="icon-long-arrow-right mr-2"></span>Hakkımda
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeClassName="active" to={'/services'}>
                                            <span className="icon-long-arrow-right mr-2"></span>Hizmetler
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeClassName="active" to={'/blog'}>
                                            <span className="icon-long-arrow-right mr-2"></span>Blog
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeClassName="active" to={'/contact'}>
                                            <span className="icon-long-arrow-right mr-2"></span>İletişim
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Hizmetler</h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#"><span className="icon-long-arrow-right mr-2"></span>Web Tasarım</a>
                                    </li>
                                    <li>
                                        <a href="#"><span className="icon-long-arrow-right mr-2"></span>Fotoğrafçılık</a>
                                    </li>
                                    <li>
                                        <a href="#"><span className="icon-long-arrow-right mr-2"></span>Web Geliştirici</a>
                                    </li>
                                    <li>
                                        <a href="#"><span className="icon-long-arrow-right mr-2"></span>Uygulama Geliştirme</a>
                                    </li>
                                    <li>
                                        <a href="#"><span className="icon-long-arrow-right mr-2"></span>Markalaşma</a>
                                    </li>
                                    <li>
                                        <a href="#"><span className="icon-long-arrow-right mr-2"></span>Ürün Stratejisi</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">İletişime Geç</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li>
                                            <span className="icon icon-map-marker"></span>
                                            <span className="text">Çankaya / ANKARA</span>
                                        </li>
                                        <li>
                                            <span className="icon icon-phone"></span>
                                            <span className="text">+90 544 444 4444</span>
                                        </li>
                                        <li>
                                            <span className="icon icon-envelope"></span>
                                            <span className="text">info@personal-blog.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>
                                Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script>
                                Tüm Hakları Saklıdır
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div id="ftco-loader" className="show fullscreen">
                <svg className="circular" width="48px" height="48px">
                    <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee"/>
                    <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00"/>
                </svg>
            </div>
        </>
    )
}

export default Footer;