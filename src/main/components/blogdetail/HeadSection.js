import bg1Image from "../../../assets/main/images/bg_1.jpg";

const HeadSection = () => {
    return (
        <section className="hero-wrap js-fullheight" style={{backgroundImage: `url(${bg1Image})`,maxHeight:'450px'}} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center" style={{maxHeight:'450px'}}>
                    <div className="col-md-12 pb-5 mb-3 text-center">
                        <h1 className="mb-3 bread">Blog Single Post</h1>
                        <p className="breadcrumbs">
                            <span className="mr-2">
                                <a href="index.html">Home
                                    <i className="ion-ios-arrow-forward"></i>
                                </a>
                            </span>
                            <span className="mr-2">
                                <a href="blog.html">Blog
                                    <i className="ion-ios-arrow-forward"></i>
                                </a>
                            </span>
                            <span>
                                Blog Single
                                <i className="ion-ios-arrow-forward"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeadSection;