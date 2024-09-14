import Image from "next/image";
export default function RentByBodyType() {
  return (
    <div className="py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-3 md:px-0">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">Rent By Body Type</h1>
          <button className="font-bold text-l">View all &rarr;</button>
        </div>
        <div className="p-3 grid grid-rows-3 md:grid-rows-2 md:grid-cols-6 grid-cols-4 gap-12 mt-12">
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/suv-icon.png" width={64} height={64} />
            <p className="font-semibold">SUV</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/crossover-icon1.png" width={64} height={64} />
            <p className="font-semibold">Crossover</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/wagon-icon1.png" width={64} height={64} />
            <p className="font-semibold">Wagon</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/mpv-icon.png" width={64} height={64} />
            <p className="font-semibold">Family MBP</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/sport-icon.png" width={64} height={64} />
            <p className="font-semibold">Sport Coupe</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/compact-icon.png" width={64} height={64} />
            <p className="font-semibold">Compact</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/coup-icon.png" width={64} height={64} />
            <p className="font-semibold">Coup</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/bmw-icon2.png" width={64} height={64} />
            <p className="font-semibold">BMW</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/sedan-icon.png" width={64} height={64} />
            <p className="font-semibold">Sedan</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/wagon-icon2.png" width={64} height={64} />
            <p className="font-semibold">Limousine</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/convertible-icon.png" width={64} height={64} />
            <p className="font-semibold">Convertible</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/crossover-icon2.png" width={64} height={64} />
            <p className="font-semibold">Crossover</p>
          </div>
        </div>
      </div>
    </div>
  );
}
