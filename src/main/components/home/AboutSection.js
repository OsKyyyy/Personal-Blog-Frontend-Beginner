import bg1Image from '../assets/images/bg_1.png';

const AboutSection = () => {

    return(
        <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-6 col-lg-5 d-flex">
                        <div className="img-about img d-flex align-items-stretch">
                            <div className="overlay"></div>
                            <div className="img d-flex align-self-stretch align-items-center"
                                 style={{backgroundImage:`url(${bg1Image})`}}>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
                        <div className="row justify-content-start pb-3">
                            <div className="col-md-12 heading-section">
                                <h1 className="big">Hakkımda</h1>
                                <h2 className="mb-4">Hakkımda</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary
                                    regelialia.</p>
                                <ul className="about-info mt-4 px-md-0 px-2">
                                    <li className="d-flex"><span>Name:</span> <span>Clark Thompson</span></li>
                                    <li className="d-flex"><span>Date of birth:</span> <span>January 01, 1987</span>
                                    </li>
                                    <li className="d-flex"><span>Address:</span> <span>San Francisco CA 97987 USA</span>
                                    </li>
                                    <li className="d-flex"><span>Zip code:</span> <span>1000</span></li>
                                    <li className="d-flex"><span>Email:</span> <span>clarkthomp@gmail.com</span></li>
                                    <li className="d-flex"><span>Phone: </span> <span>+1-2234-5678-9-0</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="counter-wrap d-flex mt-md-3">
                            <div className="text">
                                <p className="mb-4">
                                    <span className="number" data-number="120">0</span>
                                    <span>Project complete</span>
                                </p>
                                <p><a href="#" className="btn btn-primary py-3 px-3">Download CV</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default AboutSection;