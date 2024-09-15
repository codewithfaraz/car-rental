import Image from "next/image";
export default function Car({
  img,
  carName,
  rent,
  miles,
  type,
  capacity,
  model,
}) {
  return (
    <div className="p-3 rounded-lg border hover:border-[#929292]">
      <div className="flex flex-col">
        <Image src={img} width={300} height={300} />
        <div className="p-3">
          <p className="text-xl font-semibold">{carName}</p>
          <p className="font-bold text-xl">
            {rent}
            <sub className="text-sm text-[#818080]">/day</sub>
          </p>
          <div className="flex justify-between mt-6 px-6">
            <div className="flex flex-col items-center">
              <Image src="/Icons/speedometer-icon.png" width={12} height={12} />
              <p>{miles}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/Icons/manual-gearbox-icon.png"
                width={12}
                height={12}
              />
              <p>{type}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/Icons/users-icon.png" width={12} height={12} />
              <p>{capacity}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/Icons/gas-station-icon.png"
                width={12}
                height={123}
              />
              <p>{model}</p>
            </div>
          </div>
          <button className="mt-4 w-full py-3 rounded-full border hover:text-white border-black hover:bg-black text-black transition-all duration-[.2s]">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}
