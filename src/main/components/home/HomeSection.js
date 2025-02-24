import bg1Image from '../../../assets/main/images/bg_1.png';
import bg2Image from '../../../assets/main/images/bg_2.png';
import {Link} from "react-router-dom";

const HomeSection = () => {
    return (
        <section id="home-section" className="hero">
            <div className="home-slider  owl-carousel">
                <div className="slider-item ">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row d-md-flex no-gutters slider-text justify-content-end"
                             data-scrollax-parent="true">
                            <div className="one-third js-fullheight order-md-last img"
                                 style={{backgroundImage: `url(${bg1Image})`}}>
                                <div className="overlay"></div>
                            </div>
                            <div className="one-forth d-flex  align-items-center"
                                 data-scrollax=" properties: { translateY: '70%' }">
                                <div className="text">
                                    <span className="subheading">Merhaba!</span>
                                    <h1 className="mb-4 mt-3">Ben <span>Oğuzhan</span></h1>
                                    <h2 className="mb-4">Yazılım Geliştiricisi</h2>
                                    <p>
                                        <Link to='/contact' className="btn btn-primary py-3 px-4">İletişime Geç</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-item">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row d-flex no-gutters slider-text justify-content-end"
                             data-scrollax-parent="true">
                            <div className="one-third js-fullheight order-md-last img"
                                 style={{backgroundImage: `url(${bg2Image})`}}>
                                <div className="overlay"></div>
                            </div>
                            <div className="one-forth d-flex align-items-center "
                                 data-scrollax=" properties: { translateY: '70%' }">
                                <div className="text">
                                    <span className="subheading">Merhaba!</span>
                                    <h1 className="mb-4 mt-3">Web üzerinde <span>yazılım</span> yapıyorum</h1>
                                    <p>
                                        <Link to='/projects' className="btn btn-primary py-3 px-4">Projelerim</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection;