import { NavBar, CarouselImage, Footer } from "../../components";
import NewsCard from "./components/NewsCard";

const NewsPage = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-52 my-8">
        <NewsCard />
      </div>
      <div className="mx-52 my-8">
        <NewsCard />
      </div>
      <div className="mx-52 my-8">
        <NewsCard />
      </div>
      <Footer />
    </div>
  );
};
export default NewsPage;
