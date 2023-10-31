import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const NewsData = [
  {
    category: "startups",
    title: "Lyft launching cross-platform service this week",
    brief:
      "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  },
];

const NewsCard = () => {
  return (
    <div>
      {NewsData.map(({ category, title, brief, img }, key) => (
        <Card className="w-full flex-row">
          <CardHeader
            key={key}
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src={img}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography
              key={key}
              variant="h6"
              color="gray"
              className="mb-4 uppercase"
            >
              {category}
            </Typography>
            <Typography
              key={key}
              variant="h4"
              color="blue-gray"
              className="mb-2"
            >
              {title}
            </Typography>
            <Typography key={key} color="gray" className="mb-8 font-normal">
              {brief}
            </Typography>
            <a href="#" className="inline-block">
              <Button variant="text" className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
export default NewsCard;
