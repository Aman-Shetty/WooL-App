import { NavBar, CarouselImage, Footer } from "../../components";
import { default as Body } from "./Body";

const Home = () => {
  return (
    <>
      <NavBar />
      <CarouselImage />
      <div className="pt-0 mx-40">
        <Body />
      </div>
      <Footer />
    </>
  );
};
export default Home;
