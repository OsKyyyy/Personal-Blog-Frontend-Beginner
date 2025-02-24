import img1Image from '../../../assets/main/images/image_1.jpg';
import img2Image from '../../../assets/main/images/image_2.jpg';
import img3Image from '../../../assets/main/images/image_3.jpg';

const SidebarSection = () => {
    return (
        <div className="col-lg-4 sidebar ">
            <div className="sidebar-box">
                <form action="#" className="search-form">
                    <div className="form-group">
                        <span className="icon icon-search"></span>
                        <input type="text" className="form-control"
                               placeholder="Type a keyword and hit enter"/>
                    </div>
                </form>
            </div>
            <div className="sidebar-box ">
                <h3 className="heading-sidebar">Categories</h3>
                <ul className="categories">
                    <li><a href="#">Interior Design <span>(12)</span></a></li>
                    <li><a href="#">Exterior Design <span>(22)</span></a></li>
                    <li><a href="#">Industrial Design <span>(37)</span></a></li>
                    <li><a href="#">Landscape Design <span>(42)</span></a></li>
                </ul>
            </div>

            <div className="sidebar-box ">
                <h3 className="heading-sidebar">Recent Blog</h3>
                <div className="block-21 mb-4 d-flex">
                    <a className="blog-img mr-4" style={{backgroundImage: `url(${img1Image})`}}></a>
                    <div className="text">
                        <h3 className="heading">
                            <a href="#">Why Lead Generation is Key for Business Growth</a>
                        </h3>
                        <div className="meta">
                            <div>
                                <a href="#"><span className="icon-calendar"></span> March 12, 2019</a>
                            </div>
                            <div>
                                <a href="#"><span className="icon-person"></span> Admin</a>
                            </div>
                            <div>
                                <a href="#"><span className="icon-chat"></span> 19</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                    <a className="blog-img mr-4" style={{backgroundImage: `url(${img2Image})`}}></a>
                    <div className="text">
                        <h3 className="heading">
                            <a href="#">Why Lead Generation is Key for Business Growth</a>
                        </h3>
                        <div className="meta">
                            <div>
                                <a href="#"><span className="icon-calendar"></span> March 12, 2019</a>
                            </div>
                            <div>
                                <a href="#"><span className="icon-person"></span> Admin</a>
                            </div>
                            <div>
                                <a href="#"><span className="icon-chat"></span> 19</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                    <a className="blog-img mr-4" style={{backgroundImage: `url(${img3Image})`}}></a>
                    <div className="text">
                        <h3 className="heading">
                            <a href="#">Why Lead Generation is Key for Business Growth</a>
                        </h3>
                        <div className="meta">
                            <div>
                                <a href="#"><span className="icon-calendar"></span> March 12, 2019</a>
                            </div>
                            <div>
                                <a href="#"><span className="icon-person"></span> Admin</a>
                            </div>
                            <div>
                                <a href="#"><span className="icon-chat"></span> 19</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sidebar-box ">
                <h3 className="heading-sidebar">Tag Cloud</h3>
                <div className="tagcloud">
                    <a href="#" className="tag-cloud-link">house</a>
                    <a href="#" className="tag-cloud-link">office</a>
                    <a href="#" className="tag-cloud-link">building</a>
                    <a href="#" className="tag-cloud-link">land</a>
                    <a href="#" className="tag-cloud-link">table</a>
                    <a href="#" className="tag-cloud-link">interior</a>
                    <a href="#" className="tag-cloud-link">exterior</a>
                    <a href="#" className="tag-cloud-link">industrial</a>
                </div>
            </div>

            <div className="sidebar-box ">
                <h3 className="heading-sidebar">Paragraph</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem
                    necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa
                    sapiente consectetur similique, inventore eos fugit cupiditate numquam!
                </p>
            </div>
        </div>
    )
}

export default SidebarSection