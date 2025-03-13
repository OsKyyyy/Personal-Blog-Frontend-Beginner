import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import useFetch from "../../../hooks/useFetch";
import React, {useEffect} from "react";

const BlogSection = () => {

    const apiUrl = useSelector((state) => state.global.ApiUrl);
    const imageUrl = useSelector((state) => state.global.ImageUrl);
    const {data, loading, fetchData} = useFetch();

    useEffect(() => {
        fetchData(apiUrl + "/Blog/List");
    }, []);

    return (
        <section className="ftco-section" id="blog-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-5">
                    <div className="col-md-7 heading-section text-center ">
                        <h1 className="big big-2">Blog</h1>
                        <h2 className="mb-4">Bloglar</h2>
                        <p>Yazılarımızı buradan takip ederek bizimle güncel kalın</p>
                    </div>
                </div>
                <div className="row d-flex">
                    {data?.Data?.map(item => (
                        <div className="col-md-4 d-flex ">
                            <div className="blog-entry justify-content-end">
                                <Link to={`/blogdetail/${item.Slug}`} className="block-20"
                                      style={{backgroundImage: `url(${imageUrl}${item.Image})`, minWidth: '350px'}}>
                                </Link>
                                <div className="text mt-3 float-right d-block">
                                    <div className="d-flex align-items-center mb-3 meta">
                                        <p className="mb-0">
                                            <span className="mr-2">{item.CreateDate}</span>
                                            <span className="mr-2">- {item.CreateUser}</span>
                                            <span className="meta-chat"><span className="icon-chat"></span> 3</span>
                                        </p>
                                    </div>
                                    <h3 className="heading">
                                        <Link to={`/blogdetail/${item.Slug}`}>{item.Title}</Link>
                                    </h3>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogSection;