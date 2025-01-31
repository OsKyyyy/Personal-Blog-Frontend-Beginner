import React from "react";
import HomeSection from "../components/home/HomeSection";
import AboutSection from "../components/home/AboutSection";
import ResumeSection from "../components/home/ResumeSection";
import ServiceSection from "../components/home/ServiceSection";
import SkillSection from "../components/home/SkillSection";
import ProjectSection from "../components/home/ProjectSection";
import BlogSection from "../components/home/BlogSection";
import CounterSection from "../components/home/CounterSection";
import ContactSection from "../components/home/ContactSection";

const Home = () => {
    return (
      <>
        <HomeSection />
        <AboutSection />
        <ResumeSection />
        <ServiceSection />
        <SkillSection />
        <ProjectSection />
        <BlogSection />
        <CounterSection />
        <ContactSection />
      </>
    );
}

export default Home;
