import Image from "next/image";
export default function Services() {
  return (
    <div className="md:py-32 py-16 bg-black w-full">
      <div className="max-w-6xl mx-auto md:px-0 px-6">
        <div className="flex flex-col justify-center items-center text-center space-y-3">
          <h1 className="text-white text-4xl md:text-6xl font-semibold">
            Our Services & Benefits
          </h1>
          <p className="text-white md:w-[700px]">
            To make renting easy and hassle-free, we provide a variety of
            services and advantages. We have you covered with a variety of
            vehicles and flexible rental terms.
          </p>
        </div>
        <div className="flex justify-between mt-16 md:flex-row flex-col md:space-y-0 space-y-6 md:space-x-6">
          <div className="flex flex-col justify-center items-center flex-1 space-y-4">
            <Image
              src="/Icons/stars-icon.png"
              width={32}
              height={32}
              className="bg-white rounded-full p-2"
            />
            <h1 className="text-xl text-white font-semibold text-center">
              Quality choice
            </h1>
            <p className="text-white text-center">
              We offer a wide range of high-quality vehicles to choose from,
              including luxury cars, SUVs, vans, and more.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center flex-1 space-y-4">
            <Image
              src="/Icons/coins-hand-icon.png"
              width={32}
              height={32}
              className="bg-white rounded-full p-2"
            />
            <h1 className="text-xl text-white font-semibold text-center">
              Affordable Prices
            </h1>
            <p className="text-white text-center">
              Our rental rates are highly competitive and affordable, allowing
              our customers to enjoy their trips without breaking the bank.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center flex-1 space-y-4">
            <Image
              src="/Icons/check-verified-icon.png"
              width={32}
              height={32}
              className="bg-white rounded-full p-2 text-center"
            />
            <h1 className="text-xl text-white font-semibold text-center">
              Convenient Online Booking
            </h1>
            <p className="text-white text-center">
              With our easy-to-use online booking system, customers can quickly
              and conveniently reserve their rental car from anywhere, anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
