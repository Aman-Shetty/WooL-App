import { Footer, NavBar } from "../../components";
import WarehouseCard from "./components/WarehouseCard";

const WareHouse = () => {
  return (
    <div>
      <NavBar />
      <div className="m-8 flex flex-wrap">
        <WarehouseCard className="w-fit" />
        <WarehouseCard className="w-fit" />
        <WarehouseCard className="w-fit" />
        <WarehouseCard className="w-fit" />
        <WarehouseCard className="w-fit" />
        <WarehouseCard className="w-fit" />
        <WarehouseCard className="w-fit" />
        <WarehouseCard className="w-fit" />
        <WarehouseCard className="w-fit" />
      </div>
      <Footer />
    </div>
  );
};
export default WareHouse;
