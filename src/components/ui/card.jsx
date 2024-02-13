import * as React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

const HoverText = ({ title, description, className }) => {
  const navigate = useNavigate();
  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col  justify-end mb-8 opacity-0 transition-opacity duration-300 hover:opacity-100",
        className
      )}
    >
      <div className="text-4xl font-azonix text-white font-bold z-10 ml-8 mb-3">
        {title}
      </div>
      <p className="text-sm text-white font- font-light z-10 flex mx-8">
        {description}
      </p>
      <div className="mt-3 flex flex-row justify-between w-full  z-10">
        <span
          className=" ml-10 font-azonix text-lg text-white  hover:bg-[rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_-0px_rgba(255,255,255,1)] rounded-full  font-bold cursor-pointer "
          onClick={() => {
            navigate("/events");
          }}
        >
          MORE EVENTS
        </span>
        <span
          className="font-azonix mr-12 text-white hover:bg-[rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_-0px_rgba(255,255,255,1)] rounded-full  text-lg font-bold cursor-pointer "
          onClick={() => {
            window.open("https://register.bitsquark.in", "_blank");
          }}
        >
          REGISTER
        </span>
      </div>
      <div className="absolute w-full mb-[-1rem] h-48 bg-gradient-to-t from-black to-transparent z-0" />
    </div>
  );
};

const BottomText = ({ title, description, dept, className }) => {
  const navigate = useNavigate();
  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col  justify-end mb-8  transition-opacity",
        className
      )}
    >
      <div className="text-2xl font-azonix text-white font-bold z-10 ml-8 mb-3">
        {title}
      </div>
      <p className="text-sm text-white font- font-light z-10 flex mx-8">
        {description}
      </p>
      <div className="text-sm text-white mx-8 z-20 mt-2">{dept}</div>
      <div className="absolute w-full mb-[-1rem] h-48 bg-gradient-to-t from-black to-transparent z-0" />
    </div>
  );
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  HoverText,
  BottomText,
};
