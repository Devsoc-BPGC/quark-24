import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "./carouselComp.css";

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

  return (
    <div className="w-[85vw] h-auto flex flex-col mx-auto">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w- flex flex-col justify-center"
      >
        <CarouselContent>
          {Array.from({ length: 7 }).map((_, index) => (
            <CarouselItem
              key={index}
              className={`md:basis-1 lg:basis-1/3 ${
                hoveredIndex === index ? "hovered-slide" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`p-1 ${index === current ? "" : "p-8"} 
                } `}
              >
                <Card className={``}>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-4 flex items-center flex-col justify-center">
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </div>
      </Carousel>

      {/* {hoveredIndex !== null && (
        <div className="flex items-center text-6xl justify-center bg-gray-800 text-white mt-4">
          Hover detected on slide {hoveredIndex}
        </div>
      )} */}
    </div>
  );
}
