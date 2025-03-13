import React, {useEffect} from "react";
import useFetch from "../../hooks/useFetch";
import AboutSection from "../components/about/AboutSection";
import ResumeSection from "../components/about/ResumeSection";
import SkillSection from "../components/about/SkillSection";
import {useSelector} from "react-redux";

const About = ({ counterFunction }) => {

    const apiUrl = useSelector((state) => state.global.ApiUrl);
    const { data: aboutData, loading: aboutLoading, error: aboutError, fetchData: fetchAbout } = useFetch();
    const { data: resumeData, loading: resumeLoading, error: resumeError, fetchData: fetchResume } = useFetch();

    useEffect(() => {
        fetchAbout(apiUrl + "/About/List");
        fetchResume(apiUrl + "/Resume/List");
    }, []);

    useEffect(() => {
        if (!aboutLoading && !resumeLoading) {
            counterFunction();
        }
    }, [aboutLoading, resumeLoading]);

    if (aboutLoading || resumeLoading){
        return (
            <div className="service-loader-container">
                <div className="service-loader-overlay"></div>
                <p className="service-loader-text">
                    Veriler Bekleniyor
                    <span className="service-loader-dot">.</span>
                    <span className="service-loader-dot">.</span>
                    <span className="service-loader-dot">.</span>
                </p>
            </div>
        );
    }

    return (
        <>
            <AboutSection data={aboutData}/>
            <ResumeSection data={resumeData}/>
            <SkillSection />
        </>
    );
};

export default About;