import bg1Image from "../../../assets/main/images/bg_1.jpg";
import {Link} from "react-router-dom";

const HeadSection = ({data}) => {
    return (
        <section className="hero-wrap js-fullheight" style={{backgroundImage: `url(${bg1Image})`,maxHeight:'450px'}} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center" style={{maxHeight:'450px'}}>
                    <div className="col-md-12 pb-5 mb-2 text-center">
                        <h1 className="mb-3 bread" style={{marginTop: "100px"}}>{data?.Data?.Title}</h1>
                        <p className="breadcrumbs">
                            <span className="mr-2">
                                <Link to="/">Anasayfa
                                    <i className="ion-ios-arrow-forward"></i>
                                </Link>
                            </span>
                            <span className="mr-2">
                                <Link to="/blog">Blog
                                    <i className="ion-ios-arrow-forward"></i>
                                </Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeadSection;