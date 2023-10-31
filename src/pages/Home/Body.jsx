import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { default as NewsCard } from "../News/components/NewsCard";
import { default as Price } from "../Price/Price";
import { default as ItemCard } from "../Store/components/ItemCard";

const Body = () => {
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const [openAcc2, setOpenAcc2] = React.useState(true);
  const [openAcc3, setOpenAcc3] = React.useState(true);
  const [openAcc4, setOpenAcc4] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);
  const handleOpenAcc4 = () => setOpenAcc4((cur) => !cur);

  // const items = () => {
  //     var rows = 10;
  //     <div>
  //             for(let i=0; i < rows; i++) {
  //         <ItemCard className="w-fit hover:scale-105 hover:cursor-pointer" />
  //     }

  //             </div>
  // }

  return (
    <>
      <Typography variant="h1" className="my-20 justify-center">
        WooL Sector of INDIA
      </Typography>
      <video
        className="h-full p-8 rounded-lg float-right min-w-[50rem]"
        controls
        autoPlay
        muted
      >
        <source src="/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Typography variant="lead" className="-mt-12 mb-32 text-justify">
        Material Tailwind is an easy to use components library for Tailwind CSS
        and Material Design. It provides a simple way to customize your
        components, you can change the colors, fonts, breakpoints and everything
        you need. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellendus sunt suscipit quod accusantium quis quaerat harum
        temporibus. Accusantium debitis velit illo voluptate itaque sint est
        officia minus, possimus, incidunt eaque! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Labore distinctio excepturi nihil dolore
        vero consectetur vel fuga nobis quis? Aut tempore vel beatae doloribus!
        Facilis alias vitae reprehenderit sit veritatis. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Rem rerum ea molestias molestiae
        sint dolorum quidem atque, doloremque sit at aspernatur ab quod officia,
        ducimus iure architecto minima sed est! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Asperiores maxime, magni saepe, culpa
        voluptas esse natus ex, consequatur nobis rem necessitatibus. Natus
        repellat atque, voluptatem libero necessitatibus aperiam omnis nihil!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        mollitia quasi minus voluptates facere laudantium explicabo similique!
        Dolorum ducimus ipsum nisi, doloremque laborum corrupti ipsa, modi
        impedit numquam beatae cupiditate? Dolorum rerum incidunt error rem
        obcaecati velit magni libero neque. Suscipit assumenda sequi asperiores
        veritatis, fuga non deserunt temporibus incidunt numquam? Accusantium
        eius, sequi laboriosam laudantium iure reprehenderit unde nostrum? Quae,
        laboriosam. Amet sed quos maiores unde tenetur eos rem delectus non
        soluta saepe dolore veritatis, voluptatibus distinctio architecto. Id
        fugit sunt ipsam ab cupiditate culpa aspernatur nobis quisquam magni?
        Neque dolorem numquam voluptatum modi? Temporibus omnis, doloremque
        maxime cumque saepe nisi eaque quae, ullam dolorum voluptatum enim
        dolore doloribus error deserunt. Libero praesentium debitis quasi totam
        repudiandae natus quis. Iste adipisci iusto, odit accusamus quasi porro
        numquam, nam autem enim fugiat corporis illum sapiente esse optio rem
        mollitia architecto dolor nostrum! Mollitia nemo culpa eos laboriosam,
        nulla assumenda ratione.
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
          News &amp; Updates
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
              <Button color="black">Read More</Button>
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
          <Typography variant="lead" className="text-center">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </Typography>
          <div className="flex justify-center ">
            <Button variant="gradient" className=" gap-3 mx-4 w-fit">
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
        </AccordionBody>
      </Accordion>
      {/* <Accordion open={openAcc5}>
        <AccordionHeader onClick={handleOpenAcc5} className="text-3xl mt-12">
          About Us
        </AccordionHeader>
        <AccordionBody>
          <Typography variant="lead" className="text-center">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quidem ducimus omnis maiores sint nostrum quis eos
            magni animi culpa nobis possimus quo totam nam necessitatibus
            numquam obcaecati, rem consequatur quia. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Reiciendis dignissimos sunt tenetur
            nobis, mollitia perferendis alias, tempore id vel adipisci ad omnis
            molestias quas accusamus vitae, harum non distinctio nesciunt?
          </Typography>
        </AccordionBody>
      </Accordion> */}
      <div>
        <Typography variant="h3" className="my-20 justify-center text-center">
          About Us
        </Typography>
        <Typography variant="lead" className="-mt-12 mb-32 text-justify">
          Material Tailwind is an easy to use components library for Tailwind
          CSS and Material Design. It provides a simple way to customize your
          components, you can change the colors, fonts, breakpoints and
          everything you need. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repellendus sunt suscipit quod accusantium quis
          quaerat harum temporibus. Accusantium debitis velit illo voluptate
          itaque sint est officia minus, possimus, incidunt eaque! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Labore distinctio
          excepturi nihil dolore vero consectetur vel fuga nobis quis? Aut
          tempore vel beatae doloribus! Facilis alias vitae reprehenderit sit
          veritatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Rem rerum ea molestias molestiae sint dolorum quidem atque, doloremque
          sit at aspernatur ab quod officia, ducimus iure architecto minima sed
          est! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Asperiores maxime, magni saepe, culpa voluptas esse natus ex,
          consequatur nobis rem necessitatibus. Natus repellat atque, voluptatem
          libero necessitatibus aperiam omnis nihil! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Repellendus mollitia quasi minus
          voluptates facere laudantium explicabo similique! Dolorum ducimus
          ipsum nisi, doloremque laborum corrupti ipsa, modi impedit numquam
          beatae cupiditate? Dolorum rerum incidunt error rem obcaecati velit
          magni libero neque. Suscipit assumenda sequi asperiores veritatis,
          fuga non deserunt temporibus incidunt numquam? Accusantium eius, sequi
          laboriosam laudantium iure reprehenderit unde nostrum? Quae,
          laboriosam. Amet sed quos maiores unde tenetur eos rem delectus non
          soluta saepe dolore veritatis, voluptatibus distinctio architecto. Id
          fugit sunt ipsam ab cupiditate culpa aspernatur nobis quisquam magni?
          Neque dolorem numquam voluptatum modi? Temporibus omnis, doloremque
          maxime cumque saepe nisi eaque quae, ullam dolorum voluptatum enim
          dolore doloribus error deserunt. Libero praesentium debitis quasi
          totam repudiandae natus quis. Iste adipisci iusto, odit accusamus
          quasi porro numquam, nam autem enim fugiat corporis illum sapiente
          esse optio rem mollitia architecto dolor nostrum! Mollitia nemo culpa
          eos laboriosam, nulla assumenda ratione.
        </Typography>
      </div>
    </>
  );
};
export default Body;
