
import Header from "../components/Header"; 
import Loader from "../components/Loader"; 


const Home = () => {
  return (
    <div>
      <Loader />
      <Header />
    </div>
  );
};

// Apply transition as a higher-order component to the Home component
export default (Home);