import React, {useEffect} from "react";
import HomeSection from "../components/home/HomeSection";
import CounterSection from "../components/home/CounterSection";
import ContactSection from "../components/contact/ContactSection";

const Home = ({counterFunction, carouselFunction}) => {

    useEffect(() => {
        carouselFunction()
        counterFunction()
    }, []);

    return (
      <>
        <HomeSection />
        <CounterSection />
        <ContactSection />
      </>
    );
}

export default Home;
