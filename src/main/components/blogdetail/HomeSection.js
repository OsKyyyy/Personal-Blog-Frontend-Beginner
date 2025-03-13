import CommentSection from "./CommentSection";
import SidebarSection from "./SidebarSection";
import {Image} from "react-bootstrap";
import img3Image from '../../../assets/main/images/image_3.jpg';

const HomeSection = ({data}) => {
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div dangerouslySetInnerHTML={{ __html: data?.Data?.Content }}></div>
                        <CommentSection commentsData={data?.Data?.Comments}/>
                    </div>
                    <SidebarSection blogDetailData={data}/>
                </div>
            </div>
        </section>
    )
}

export default HomeSection;