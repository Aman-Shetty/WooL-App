import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { default as NewsCard } from "../../News/components/NewsCard";
import { default as Price } from "../../Price/Price";
import { default as ItemCard } from "../../Store/components/ItemCard";
import { Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Body = () => {
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const [openAcc2, setOpenAcc2] = React.useState(true);
  const [openAcc3, setOpenAcc3] = React.useState(true);
  const [openAcc4, setOpenAcc4] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);
  const handleOpenAcc4 = () => setOpenAcc4((cur) => !cur);

  return (
    <>
      <Typography variant="h1" className="my-20 justify-center">
        WooL Sector of INDIA
      </Typography>
      <video
        className="h-full p-8 rounded-lg float-right min-w-[50rem] w-96"
        loading="lazy"
        controls
        autoPlay
        muted
      >
        <source src="./assets/vid/Sheep.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Typography variant="lead" className="-mt-12 mb-32 text-justify">
        <p>
          &nbsp; &nbsp; &nbsp; The wool sector in India, deeply entrenched in
          the nation's textile heritage, plays a pivotal role in sustaining the
          domestic textile industry. India boasts a diverse range of sheep
          breeds, particularly in regions like Jammu and Kashmir, Himachal
          Pradesh, Uttarakhand, and Rajasthan, contributing to the production of
          both coarse and fine wool. The shearing process is followed by a
          comprehensive wool processing cycle, involving cleaning, spinning, and
          dyeing, which prepares the raw material for the vibrant handloom and
          power loom sectors. These sectors are integral to transforming wool
          into an array of products, including shawls, blankets, sweaters,
          scarves, and carpets, showcasing the intricate traditional
          craftsmanship and unique designs synonymous with Indian woolen
          textiles.
        </p>
        <br />
        <p>
          Despite its historical significance, the Indian wool sector faces
          contemporary challenges. Fluctuating wool prices, stiff competition
          from synthetic fibers, and concerns regarding raw wool quality pose
          hurdles. To address these issues and bolster the industry, the Indian
          government has instituted various schemes. These include financial
          assistance programs for sheep farming, aimed at supporting local
          farmers, and initiatives to modernize processing units, enhancing
          efficiency and product quality. Additionally, research institutions
          contribute to advancements in sheep breeding and sustainable practices
          within the wool sector, further ensuring its resilience and growth in
          the face of evolving market dynamics.
        </p>
        <br />
        <p>
          As India's woolen products gain international acclaim for their
          quality and craftsmanship, the sector continues to evolve. The
          intersection of traditional techniques with modernization efforts and
          research-driven advancements positions the Indian wool sector as a
          dynamic force within the broader textile landscape, with the potential
          to navigate challenges and embrace opportunities for sustainable
          growth and global competitiveness.
        </p>
      </Typography>
      <Accordion open={openAcc3}>
        <AccordionHeader onClick={handleOpenAcc3} className="text-3xl">
          Prices
        </AccordionHeader>
        <AccordionBody>
          <Price />
        </AccordionBody>
      </Accordion>
      <Accordion open={openAcc1}>
        <AccordionHeader onClick={handleOpenAcc1} className="text-3xl mt-12">
          News &amp; Articles
        </AccordionHeader>
        <AccordionBody>
          <div className="mx-52 my-12 hover:scale-105 hover:cursor-pointer">
            <NewsCard />
          </div>
          <div className="mx-52 my-8 hover:scale-105 hover:cursor-pointer">
            <NewsCard />
          </div>
          <div className="pb-40 bg-gradient-to-t from-white to-transparent">
            <div className="my-8 mx-52 grayscale opacity-25 hover:-z-40 blur-sm">
              <NewsCard />
            </div>
            <div className="mx-[45rem] -mt-[15rem] mb-[10rem] hover:z-50 animate-bounce">
              <Button color="black">
                <Link to="/news"> Read More </Link>
              </Button>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={openAcc2}>
        <AccordionHeader onClick={handleOpenAcc2} className="text-3xl mt-12">
          Store
        </AccordionHeader>
        <AccordionBody>
          <Typography variant="lead" className="text-center">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </Typography>
          <div className="m-8 flex flex-nowrap overflow-x-auto">
            <ItemCard className="w-fit hover:scale-105 hover:cursor-pointer" />
            <ItemCard className="w-fit hover:scale-105 hover:cursor-pointer" />
            <ItemCard className="w-fit hover:scale-105 hover:cursor-pointer" />
            <ItemCard className="w-fit hover:scale-105 hover:cursor-pointer" />
            <ItemCard className="w-fit hover:scale-105 hover:cursor-pointer" />
            <ItemCard className="w-fit hover:scale-105 hover:cursor-pointer" />
            <ItemCard className="w-fit hover:scale-105 hover:cursor-pointer" />
            <ItemCard className="w-fit hover:scale-105 hover:cursor-pointer" />
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion open={openAcc4}>
        <AccordionHeader onClick={handleOpenAcc4} className="text-3xl mt-12">
          Ed Content
        </AccordionHeader>
        <AccordionBody>
          <div>
            <div>
              <figure className="relative h-96 w-full">
                <video
                  className="h-full p-8 rounded-lg mx-auto"
                  controls
                  autoPlay
                  muted
                  loading="lazy"
                >
                  <source src="./assets/vid/edu.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </figure>
            </div>
            <div>
              <Typography variant="lead" className="text-center">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </Typography>
              <div className="flex justify-center mt-4">
                <Button
                  variant="gradient"
                  className=" gap-3 mx-4 w-fit"
                  color="red"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                  Upload Videos
                </Button>
                <Button variant="outlined" className="gap-3 mx-4">
                  Go To Page
                </Button>
              </div>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
      <hr className="mx-auto h-8" />
      <div>
        <div className="flex items-center -space-x-4 justify-center mt-20">
          <Avatar
            variant="circular"
            alt="user 1"
            className="border-2 border-white hover:z-10 focus:z-10"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <Avatar
            variant="circular"
            alt="user 2"
            className="border-2 border-white hover:z-10 focus:z-10"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
          />
          <Avatar
            variant="circular"
            alt="user 3"
            className="border-2 border-white hover:z-10 focus:z-10"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
          />
          <Avatar
            variant="circular"
            alt="user 4"
            className="border-2 border-white hover:z-10 focus:z-10"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
          />
          <Avatar
            variant="circular"
            alt="user 5"
            className="border-2 border-white hover:z-10 focus:z-10"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
          />
          <Avatar
            variant="circular"
            alt="user 1"
            className="border-2 border-white hover:z-10 focus:z-10"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
        </div>
        <Typography variant="h3" className="justify-center text-center mb-10">
          About Us
        </Typography>
      </div>
    </>
  );
};
export default Body;
