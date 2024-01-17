import Banner from "../../components/homecomponents/banner/Banner";
import Review from "../../components/homecomponents/review/review";

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Banner></Banner>
            <p>import all home components from homecomponents folder </p>
            <Review></Review>
        </div>
    );
};

export default Home;