import bg1Image from '../../../assets/main/images/bg_1.png';
import {Link} from "react-router-dom";

const AboutSection = ({data}) => {

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
                                <p>{data?.Data?.Content || "Veri Yok!"}</p>
                                <ul className="about-info mt-4 px-md-0 px-2">
                                    <li className="d-flex"><span>İsim :</span> <span>{data?.Data?.Name || "Veri Yok!"}</span></li>
                                    <li className="d-flex"><span>Doğum Tarihi :</span><span>{data?.Data?.DateOfBirth || "Veri Yok!"}</span></li>
                                    <li className="d-flex"><span>Adres :</span><span>{data?.Data?.Address || "Veri Yok!"}</span></li>
                                    <li className="d-flex"><span>Eposta :</span><span>{data?.Data?.Email || "Veri Yok!"}</span></li>
                                    <li className="d-flex"><span>Telefon : </span><span>{data?.Data?.Phone || "Veri Yok!"}</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="counter-wrap d-flex mt-md-3">
                            <div className="text">
                                <p className="mb-4">
                                    <span className="number" data-number="120">0</span>
                                    <span>&nbsp;Tamamlanan Proje</span>
                                </p>
                                <p>
                                    <Link to='/contact' className="btn btn-primary py-3 px-4">İletişime Geç</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default AboutSection;