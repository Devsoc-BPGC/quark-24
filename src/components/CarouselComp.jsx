import * as React from "react";
import { useCallback } from "react";
import { Card, CardContent, HoverText } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import rt from "../assets/images/rt.png";
import lt from "../assets/images/lt.png";

import one from "../assets/carousel/one.jpeg";
import two from "../assets/carousel/two.jpeg";
import three from "../assets/carousel/three.jpeg";
import four from "../assets/carousel/four.jpeg";
import five from "../assets/carousel/five.jpeg";

export default function CarouselComp() {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const scrollPrev = useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);
  const images = [
    {
      src: one,
      dsc: "Get ready to put your engineering skills to the test at Time Challenge.",
      title: "TIME CHALLENGE",
    },
    {
      src: two,
      dsc: "Get ready to put your engineering skills to the test at Time Challenge.",
      title: "ROBOWARS",
    },
    {
      src: three,
      dsc: "Get ready to put your engineering skills to the test at Time Challenge.",
      title: "VALORANT",
    },
    {
      src: four,
      dsc: "Get ready to put your engineering skills to the test at Time Challenge.",
      title: "PRODUCT MANAGEMENT",
    },
    {
      src: five,
      dsc: "Get ready to put your engineering skills to the test at Time Challenge.",
      title: "UI/UX WORKSHOP",
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col mx-auto">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w- flex  flex-col justify-center"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className={`md:basis-[90%] lg:basis-[42%] ${
                hoveredIndex === index ? "" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`p-1 ${index === current ? "" : "p-12"} 
                } `}
              >
                <Card className={``}>
                  <CardContent className="flex  items-center justify-center p-4">
                    <img
                      src={image.src}
                      alt={`Image ${index + 1}`}
                      className="aspect-[1.4/1] object-cover "
                    />
                    <HoverText
                      description={image.dsc}
                      title={image.title}
                      className="font-Azonix"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center  z-10  mt-4">
        <img src={lt} onClick={scrollPrev} className="cursor-pointer"></img>
        <img
          src={rt}
          onClick={scrollNext}
          className="ml-8 cursor-pointer"
        ></img>
      </div>
    </div>
  );
}
