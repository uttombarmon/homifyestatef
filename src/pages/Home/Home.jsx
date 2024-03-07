import Advertise from "../../components/homecomponents/advertisement/Advertise";
import Contact from "../../components/homecomponents/contact/Contact";
import Professionals from "../../components/homecomponents/professionals/Professionals";
import Banner from "../../components/homecomponents/banner/Banner";
import Choose from "../../components/homecomponents/choose/Choose";
import Features from "../../components/homecomponents/features/Features";
import LetesNews from "../../components/homecomponents/letestNews/LetesNews";
import Review from "../../components/homecomponents/review/Review";
import Slider from "../../components/homecomponents/slider/Slider";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Professionals></Professionals>
            <LetesNews></LetesNews>
            <Advertise></Advertise>
            <Contact></Contact>
            <Choose></Choose>
            <Slider></Slider>
            <Review></Review>
        </div>
    );
};

export default Home;