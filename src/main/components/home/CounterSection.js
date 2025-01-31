import bg1Image from '../assets/images/bg_1.jpg';

const CounterSection = () => {

    return (
        <>
            <section className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img" id="section-counter">
                <div className="container">
                    <div className="row d-md-flex align-items-center">
                        <div className="col-md d-flex justify-content-center counter-wrap ">
                            <div className="block-18">
                                <div className="text">
                                    <strong className="number" data-number="100">0</strong>
                                    <span>Awards</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md d-flex justify-content-center counter-wrap ">
                            <div className="block-18">
                                <div className="text">
                                    <strong className="number" data-number="1200">0</strong>
                                    <span>Complete Projects</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md d-flex justify-content-center counter-wrap ">
                            <div className="block-18">
                                <div className="text">
                                    <strong className="number" data-number="1200">0</strong>
                                    <span>Happy Customers</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md d-flex justify-content-center counter-wrap ">
                            <div className="block-18">
                                <div className="text">
                                    <strong className="number" data-number="500">0</strong>
                                    <span>Cups of coffee</span>
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
                            <h2>I'm <span>Available</span> for freelancing</h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <p className="mb-0"><a href="#" className="btn btn-primary py-3 px-5">Hire me</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CounterSection;