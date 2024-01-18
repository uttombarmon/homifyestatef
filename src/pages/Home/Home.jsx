
import Features from "../../components/homecomponents/features/Features";
import LetesNews from "../../components/homecomponents/letestNews/LetesNews";
import Review from "../../components/homecomponents/review/review";

const Home = () => {
    return (
        <div>
            <div>
                <Features></Features>
            </div>
            <LetesNews></LetesNews>
            <Review></Review>
        </div>
    );
};

export default Home;