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

// Import all your images
import one from "../assets/carousel/one.jpeg";
import two from "../assets/carousel/two.jpeg";
import three from "../assets/carousel/three.jpeg";
import four from "../assets/carousel/four.jpeg";
import five from "../assets/carousel/five.jpeg";
// Add more imports as needed

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

  // Array of images
  const images = [one, two, three, four, five]; // Add more images as needed

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
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className={`md:basis-1 lg:basis-1/3 ${
                hoveredIndex === index ? "" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`p-1 ${index === current ? "" : "p-8"} 
                } `}
              >
                <Card className={``}>
                  <CardContent className="flex  items-center justify-center p-6">
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="aspect-[1/1] bg-cover "
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-4 flex items-center flex-col justify-center">
          <CarouselPrevious />
          <CarouselNext />
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
