import HomeSection from "../components/blogdetail/HomeSection";
import HeadSection from "../components/blogdetail/HeadSection";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import useFetch from "../../hooks/useFetch";
import React, {useEffect} from "react";

const BlogDetail = () => {

    let { slug } = useParams();
    const apiUrl = useSelector((state) => state.global.ApiUrl);
    const {data, loading, fetchData} = useFetch();

    useEffect(() => {
        const listUrl = apiUrl + "/Blog/ListBySlug?slug=" + slug;
        fetchData(listUrl);
    }, []);

    if (loading) {
        return (
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="service-loader-container">
                            <div className="service-loader-overlay"></div>
                            <p className="service-loader-text">
                                Veriler Bekleniyor
                                <span className="service-loader-dot">.</span>
                                <span className="service-loader-dot">.</span>
                                <span className="service-loader-dot">.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <HeadSection data={data}/>
            <HomeSection data={data}/>
        </>
    )
}

export default BlogDetail;