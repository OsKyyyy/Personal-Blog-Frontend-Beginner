import bg1Image from '../../../assets/main/images/bg_1.jpg';
import {Link} from "react-router-dom";

const CounterSection = () => {

    return (
        <div className='mt-5 py-5'>
            <section className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img" id="section-counter">
                <div className="container">
                    <div className="row d-md-flex align-items-center">
                        <div className="col-md d-flex justify-content-center counter-wrap ">
                            <div className="block-18">
                                <div className="text">
                                    <strong className="number" data-number="100">0</strong>
                                    <span>Ödüller</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md d-flex justify-content-center counter-wrap ">
                            <div className="block-18">
                                <div className="text">
                                    <strong className="number" data-number="1200">0</strong>
                                    <span>Tamamlanan Projeler</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md d-flex justify-content-center counter-wrap ">
                            <div className="block-18">
                                <div className="text">
                                    <strong className="number" data-number="1200">0</strong>
                                    <span>Mutlu Müşteriler</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md d-flex justify-content-center counter-wrap ">
                            <div className="block-18">
                                <div className="text">
                                    <strong className="number" data-number="500">0</strong>
                                    <span>Kahve Hediye Edenler</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section ftco-hireme img margin-top" style={{backgroundImage: `url(${bg1Image})`}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h2>Freelance çalışmaya <span>Hazırım</span></h2>
                            <p>Projelerinize esneklik ve uzmanlık katmak için buradayım. Web geliştirme, otomasyon sistemleri ve özelleştirilmiş yazılım çözümleri konusunda destek almak için benimle iletişime geçin!.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CounterSection;