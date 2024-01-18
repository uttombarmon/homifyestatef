import Features from "../../components/features/Features";
import LetesNews from "../../components/homecomponents/letesNews/LetesNews";
import Review from "../../components/homecomponents/review/review";
import Slider from "../../components/homecomponents/slider/Slider";

const Home = () => {
    return (
        <div>
            <div>
                <Features></Features>
            </div>
            <LetesNews></LetesNews>
            <Slider></Slider>
            <Review></Review>
        </div>
    );
};

export default Home;