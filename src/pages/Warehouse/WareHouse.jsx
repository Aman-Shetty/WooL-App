import { Footer, NavBar, DefaultPagination } from "../../components";
import WarehouseCard from "./components/WarehouseCard";
import { Typography } from "@material-tailwind/react";

const WareHouse = () => {
  return (
    <div>
      <NavBar />
      <div className="p-8 px-24">
        <Typography variant="h2">Warehouses Near your Location</Typography>
        <Typography variant="lead" className="p-8">
          Material Tailwind is an easy to use components library for Tailwind
          CSS and Material Design. It provides a simple way to customize your
          components, you can change the colors, fonts, breakpoints and
          everything you need.
        </Typography>
      </div>
      <div className="p-8 px-24 flex flex-wrap">
        <div className="w-fit p-8">
          <WarehouseCard />
        </div>
        <div className="w-fit p-8">
          <WarehouseCard />
        </div>
        <div className="w-fit p-8">
          <WarehouseCard />
        </div>
        <div className="w-fit p-8">
          <WarehouseCard />
        </div>
        <div className="w-fit p-8">
          <WarehouseCard />
        </div>
        <div className="w-fit p-8">
          <WarehouseCard />
        </div>
        <div className="w-fit p-8">
          <WarehouseCard />
        </div>
        <div className="w-fit p-8">
          <WarehouseCard />
        </div>
      </div>
      <div className="p-8 px-[40rem]">
        <DefaultPagination />
      </div>
      <Footer />
    </div>
  );
};
export default WareHouse;
