import project1Image from "../assets/images/project-1.jpg";
import project2Image from "../assets/images/project-2.jpg";
import project3Image from "../assets/images/project-3.jpg";
import project4Image from "../assets/images/project-4.jpg";
import project5Image from "../assets/images/project-5.jpg";
import project6Image from "../assets/images/project-6.jpg";

const ProjectSection = () => {
    return (
        <section className="ftco-section ftco-project" id="projects-section">
            <div className="container">
                <div className="row justify-content-center pb-5">
                    <div className="col-md-12 heading-section text-center ">
                        <h1 className="big big-2">Projects</h1>
                        <h2 className="mb-4">Our Projects</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="project img  d-flex justify-content-center align-items-center"
                            style={{backgroundImage: `url(${project1Image})`}}>
                            <div className="overlay"></div>
                            <div className="text text-center p-4">
                                <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                <span>Web Design</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="project img  d-flex justify-content-center align-items-center"
                             style={{backgroundImage: `url(${project2Image})`}}>
                            <div className="overlay"></div>
                            <div className="text text-center p-4">
                                <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                <span>Web Design</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="project img  d-flex justify-content-center align-items-center"
                             style={{backgroundImage: `url(${project3Image})`}}>
                            <div className="overlay"></div>
                            <div className="text text-center p-4">
                                <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                <span>Web Design</span>
                            </div>
                        </div>

                        <div className="project img  d-flex justify-content-center align-items-center"
                             style={{backgroundImage: `url(${project4Image})`}}>
                            <div className="overlay"></div>
                            <div className="text text-center p-4">
                                <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                <span>Web Design</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    className="project img  d-flex justify-content-center align-items-center"
                                    style={{backgroundImage: `url(${project5Image})`}}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                        <span>Web Design</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div
                                    className="project img  d-flex justify-content-center align-items-center"
                                    style={{backgroundImage: `url(${project6Image})`}}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                                        <span>Web Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;