import aboutImage from '../../../assets/main/images/about.jpg';

const ContactSection = () => {
    return (
        <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section text-center ">
                        <h1 className="big big-2">İletişim</h1>
                        <h2 className="mb-4">İletişime Geç</h2>
                        <p>Projeleriniz hakkında konuşmak ve işbirliği yapmak için bana ulaşın!</p>
                    </div>
                </div>

                <div className="row d-flex contact-info mb-5">
                    <div className="col-md-6 col-lg-3 d-flex ">
                        <div className="align-self-stretch box p-4 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="icon-map-signs"></span>
                            </div>
                            <h3 className="mb-4">Adres</h3>
                            <p>Çankaya / Ankara</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex ">
                        <div className="align-self-stretch box p-4 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="icon-phone2"></span>
                            </div>
                            <h3 className="mb-4">İletişim Numarası</h3>
                            <p>+90 544 444 4444</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex ">
                        <div className="align-self-stretch box p-4 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="icon-paper-plane"></span>
                            </div>
                            <h3 className="mb-4">E-Posta</h3>
                            <p>info@personal-blog.com</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex ">
                        <div className="align-self-stretch box p-4 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="icon-globe"></span>
                            </div>
                            <h3 className="mb-4">Website</h3>
                            <p>personal-blog.com</p>
                        </div>
                    </div>
                </div>

                <div className="row no-gutters block-9">
                    <div className="col-md-6 order-md-last d-flex">
                        <form action="#" className="bg-light p-4 p-md-5 contact-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="İsim Soyisim"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="E-Posta Adresi"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Konu"/>
                            </div>
                            <div className="form-group">
                                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Mesaj"></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Gönder" className="btn btn-primary py-3 px-5"/>
                            </div>
                        </form>

                    </div>

                    <div className="col-md-6 d-flex">
                        <div className="img" style={{backgroundImage: `url(${aboutImage})`}}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;