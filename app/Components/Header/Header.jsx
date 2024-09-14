"use client";
import { TextField, InputLabel, Input, InputAdornment } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function Header() {
  return (
    <div className="w-full h-[90vh] bg-header-background bg-cover bg-center relative">
      <div className="max-6xl mx-auto flex flex-col items-center ">
        <nav className="flex w-full justify-between md:justify-around items-center py-6 px-6 md:px-0">
          <div className="flex flex-col space-y-2 cursor-pointer">
            <span className="bg-white w-8 h-[2px] absolute"></span>
            <span className="bg-white w-8 h-[2px] absolute"></span>
          </div>
          <h1 className="text-white text-3xl font-bold uppercase">Luxedrive</h1>
          <button className="hidden md:block rounded-full text-white border border-white px-6 py-3 hover:bg-white hover:text-black transition duration-[.2]">
            Login/Register
          </button>
        </nav>
        <h1 className="text-white md:text-6xl  text-center w-[450px] md:w-[900px] font-bold text-4xl">
          Discover the world on wheels with our car rental service
        </h1>
        <div className="bg-white text-black px-12 md:py-6 py-2 absolute -bottom-4 rounded-lg flex md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-3">
          <div className="flex space-x-3 flex-wrap">
            <div className="flex flex-col space-y-4">
              <InputLabel htmlFor="pick-up-location">
                Picke-up Location
              </InputLabel>
              <Input
                id="pick-up-location"
                startAdornment={
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                }
              />
            </div>
            <div className="flex flex-col space-y-4">
              <InputLabel htmlFor="pick-up-date">Picke-up Date</InputLabel>
              <Input id="pick-up-date" type="date" />
            </div>
            <div className="flex flex-col space-y-4">
              <InputLabel htmlFor="drop-off-location">
                Drop-off Location
              </InputLabel>
              <Input
                id="drop-off-location"
                startAdornment={
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                }
              />
            </div>
            <div className="flex flex-col space-y-4">
              <InputLabel htmlFor="drop-off-date">Drop-off Date</InputLabel>
              <Input id="drop-off-date" type="date" />
            </div>
          </div>
          <button className="block  rounded-full text-white bg-black font-bold px-6 py-3 hover:bg-white border border-transparent hover:border-black hover:text-black transition duration-[.2]">
            Find a Vehicle &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
