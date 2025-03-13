import {useSelector} from "react-redux";
import useFetch from "../../../hooks/useFetch";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const SidebarSection = ({blogDetailData}) => {

    const apiUrl = useSelector((state) => state.global.ApiUrl);
    const imageUrl = useSelector((state) => state.global.ImageUrl);
    const {data, loading, fetchData} = useFetch();

    useEffect(() => {
        fetchData(apiUrl + "/Blog/List");
    }, []);

    return (
        <div className="col-lg-4 sidebar ">
            <div className="sidebar-box ">
                <h3 className="heading-sidebar">Son Bloglar</h3>
                {data?.Data?.slice(0, 3).map((item, index) => (
                    <div className="block-21 mb-4 d-flex">
                        <Link to={`/blogdetail/${item.Slug}`} className="blog-img mr-4" style={{backgroundImage: `url(${imageUrl}${item.Image})`}}></Link>
                        <div className="text">
                            <h3 className="heading">
                                <Link to={`/blogdetail/${item.Slug}`}>{item.Title}</Link>
                            </h3>
                            <div className="meta">
                                <div>
                                    <span className="icon-calendar"></span> {item.CreateDate}
                                </div>
                                <div>
                                   <span className="icon-person"></span> {item.CreateUser}
                                </div>
                                <div>
                                    <span className="icon-chat"></span> 19
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="sidebar-box ">
                <h3 className="heading-sidebar">Etiketler</h3>
                <div className="tagcloud">
                    {blogDetailData?.Data?.Tags?.map(item => (
                        <a href="#" className="tag-cloud-link">{item.Name}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SidebarSection