import Features from "../../components/features/Features";
import Advertise from "../../components/homecomponents/advertisement/Advertise";
import Contact from "../../components/homecomponents/contact/Contact";
import LetesNews from "../../components/homecomponents/letesNews/LetesNews";
import Professionals from "../../components/homecomponents/professionals/Professionals";
import Review from "../../components/homecomponents/review/review";

const Home = () => {
    return (
        <div>
            <div>
                <Features></Features>
            </div>
            <Professionals></Professionals>
            <LetesNews></LetesNews>
            <Advertise></Advertise>
            <Contact></Contact>
            <Review></Review>
        </div>
    );
};

export default Home;