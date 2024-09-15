"use client";
import { useState } from "react";
import Car from "./Car";
const cars = [
  {
    img: "/Images/audi-image.png",
    carName: "Audi A8 L 2022",
    rent: "78.90",
    miles: "4000",
    type: "Auto",
    capacity: "4",
    model: "Electric",
  },
  {
    img: "/Images/nissan-image.png",
    carName: "Nissan Maxima Platinum 2022",
    rent: "78.90",
    miles: "4000",
    type: "Auto",
    capacity: "4",
    model: "Electric",
  },
  {
    img: "/Images/porsche-image.png",
    carName: "Porsche Cayenne GTS 2022",
    rent: "78.90",
    miles: "4000",
    type: "Auto",
    capacity: "4",
    model: "Electric",
  },
  {
    img: "/Images/bmw-image.png",
    carName: "BMW M8 Coupe 2022",
    rent: "78.90",
    miles: "4000",
    type: "Auto",
    capacity: "4",
    model: "Electric",
  },
  {
    img: "/Images/bmw-image2.png",
    carName: "BMW X7 M50i 2022",
    rent: "78.90",
    miles: "4000",
    type: "Auto",
    capacity: "4",
    model: "Electric",
  },
  {
    img: "/Images/porsche-image2.png",
    carName: "Porsche Cayenne GTS 2022",
    rent: "78.90",
    miles: "4000",
    type: "Auto",
    capacity: "4",
    model: "Electric",
  },
];
export default function CarCollection() {
  const [carCollectionState, setCarCollectionState] = useState("all");
  return (
    <div className="md:py-32 py-16 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        <h1 className="text-black text-4xl font-semibold md:text-6xl">
          Our Impressive Collection of Cars
        </h1>
        <p className="w-[600px] font-semibold text-center">
          Ranging from elegant sedans to powerful sports cars, all carefully
          selected to provide our customers with the ultimate driving
          experience.
        </p>
        {/* button container */}
        <div className="flex flex-wrap space-x-4 justify-center">
          <button
            className={`${
              carCollectionState === "all"
                ? "bg-black text-white"
                : "text-black"
            } text-black px-6 py-3 rounded-full border border-black `}
            onClick={() => setCarCollectionState("all")}
          >
            All
          </button>
          <button
            className={`${
              carCollectionState === "luxury-car"
                ? "bg-black text-white"
                : "text-black"
            } text-black px-6 py-3 rounded-full border border-black `}
            onClick={() => setCarCollectionState("luxury-car")}
          >
            Luxury car
          </button>
          <button
            className={`${
              carCollectionState === "vintage-car"
                ? "bg-black text-white"
                : "text-black"
            } text-black px-6 py-3 rounded-full border border-black `}
            onClick={() => setCarCollectionState("vintage-car")}
          >
            Vintage car
          </button>
          <button
            className={`${
              carCollectionState === "family-car"
                ? "bg-black text-white"
                : "text-black"
            } text-black px-6 py-3 rounded-full border border-black `}
            onClick={() => setCarCollectionState("family-car")}
          >
            Family car
          </button>
          <button
            className={`${
              carCollectionState === "off-road-car"
                ? "bg-black text-white"
                : "text-black"
            } text-black px-6 py-3 rounded-full border border-black `}
            onClick={() => setCarCollectionState("off-road-car")}
          >
            Off-Road car
          </button>
        </div>
        {/* all */}
        {carCollectionState === "all" ? (
          <div className="flex flex-wrap md:space-x-3 space-y-3 justify-center">
            {cars.map((car) => {
              return <Car {...car} />;
            })}
          </div>
        ) : (
          ""
        )}
        {/* luxury car */}
        {carCollectionState === "luxury-car" ? (
          <div className="flex flex-wrap md:space-x-3 space-y-3 justify-center">
            <Car {...cars[0]} />
            <Car {...cars[1]} />
          </div>
        ) : (
          ""
        )}
        {/* vintage car */}
        {carCollectionState === "vintage-car" ? (
          <div className="flex flex-wrap md:space-x-3 space-y-3 justify-center">
            <Car {...cars[1]} />
            <Car {...cars[2]} />
          </div>
        ) : (
          ""
        )}
        {/* family car */}
        {carCollectionState === "family-car" ? (
          <div className="flex flex-wrap md:space-x-3 space-y-3 justify-center">
            <Car {...cars[2]} />
            <Car {...cars[3]} />
          </div>
        ) : (
          ""
        )}
        {/* off-road car */}
        {carCollectionState === "off-road-car" ? (
          <div className="flex flex-wrap md:space-x-3 space-y-3 justify-center">
            <Car {...cars[3]} />
            <Car {...cars[4]} />
            <Car {...cars[5]} />
          </div>
        ) : (
          ""
        )}
        <button className="bg-black text-white px-6 py-2 rounded-full font-bold hover:text-black hover:bg-white hover:border-black border transition-all duration-[.2s]">
          See all cars &rarr;
        </button>
      </div>
    </div>
  );
}
