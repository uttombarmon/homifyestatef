import Features from "../../components/features/Features";
import Choose from "../../components/homecomponents/choose/Choose";
import LetesNews from "../../components/homecomponents/letesNews/LetesNews";
import Review from "../../components/homecomponents/review/review";

const Home = () => {
    return (
        <div>
            <div>
                <Features></Features>
            </div>
            <LetesNews></LetesNews>
            <Choose></Choose>
            <Review></Review>
        </div>
    );
};

export default Home;