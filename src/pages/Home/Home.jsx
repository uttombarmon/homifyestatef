import Banner from "../../components/homecomponents/banner/Banner";
import Features from "../../components/features/Features";
import LetesNews from "../../components/homecomponents/letesNews/LetesNews";
import Review from "../../components/homecomponents/review/review";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <Features></Features>
            </div>
            <LetesNews></LetesNews>
            <Review></Review>
        </div>
    );
};

export default Home;