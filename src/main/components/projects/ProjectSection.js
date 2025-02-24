import project1Image from "../../../assets/main/images/project-1.jpg";
import project2Image from "../../../assets/main/images/project-2.jpg";
import project3Image from "../../../assets/main/images/project-3.jpg";
import project4Image from "../../../assets/main/images/project-4.jpg";
import project5Image from "../../../assets/main/images/project-5.jpg";
import project6Image from "../../../assets/main/images/project-6.jpg";

const ProjectSection = () => {
    return (
        <section className="ftco-section ftco-project" id="projects-section">
            <div className="container">
                <div className="row justify-content-center pb-5">
                    <div className="col-md-12 heading-section text-center ">
                        <h1 className="big big-2">Projeler</h1>
                        <h2 className="mb-4">Projeler</h2>
                        <p>Gerçekleştirdiğimiz projelerle yenilikçi ve etkili çözümler sunuyoruz. Her biri, kalite ve yaratıcılığı ön planda tutarak hayata geçirilmiştir.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="project img  d-flex justify-content-center align-items-center"
                             style={{backgroundImage: `url(${project1Image})`}}>
                            <div className="overlay"></div>
                            <div className="text text-center p-4">
                                <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="project img  d-flex justify-content-center align-items-center"
                             style={{backgroundImage: `url(${project2Image})`}}>
                            <div className="overlay"></div>
                            <div className="text text-center p-4">
                                <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="project img  d-flex justify-content-center align-items-center"
                             style={{backgroundImage: `url(${project3Image})`}}>
                            <div className="overlay"></div>
                            <div className="text text-center p-4">
                                <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="project img  d-flex justify-content-center align-items-center"
                             style={{backgroundImage: `url(${project4Image})`}}>
                            <div className="overlay"></div>
                            <div className="text text-center p-4">
                                <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="project img  d-flex justify-content-center align-items-center"
                             style={{backgroundImage: `url(${project5Image})`}}>
                            <div className="overlay"></div>
                            <div className="text text-center p-4">
                                <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="project img  d-flex justify-content-center align-items-center"
                             style={{backgroundImage: `url(${project6Image})`}}>
                            <div className="overlay"></div>
                            <div className="text text-center p-4">
                                <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;