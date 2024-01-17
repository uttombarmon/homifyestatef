import Features from "../../components/features/Features";
import LetesNews from "../../components/homecomponents/letesNews/LetesNews";
import Review from "../../components/homecomponents/review/review";

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>import all home components from homecomponents folder </p>

             <div>
                <Features></Features>
             </div>
             <LetesNews></LetesNews>
            <Review></Review>
        </div>
    );
};

export default Home;