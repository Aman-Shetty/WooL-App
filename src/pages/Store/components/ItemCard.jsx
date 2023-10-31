import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { storeItems } from "../../../data/storeItems";

const ItemCard = () => {
  return (
    <div>
      {storeItems.map((item) => (
        <Card className="w-96" key={item.id}>
          <CardHeader shadow={false} floated={false} className="h-96">
            <img
              src={item.image}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {item.itemName}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                {item.price}
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {item.description}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
export default ItemCard;
