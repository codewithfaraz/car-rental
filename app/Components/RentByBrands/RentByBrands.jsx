import Image from "next/image";
export default function RentByBrands() {
  return (
    <div className="py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-3 md:px-0">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">Rent By Car</h1>
          <button className="font-bold text-l">View all &rarr;</button>
        </div>
        <div className="p-3 grid grid-rows-3 md:grid-rows-2 md:grid-cols-6 grid-cols-4 gap-12 mt-12">
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/toyota-icon.png" width={32} height={32} />
            <p className="font-semibold">Toyota</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/ford-icon.png" width={32} height={32} />
            <p className="font-semibold">Ford</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/tesla-icon.png" width={32} height={32} />
            <p className="font-semibold">Tesla</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/volkswagen-icon.png" width={32} height={32} />
            <p className="font-semibold">Volkswagen</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/honda-icon.png" width={32} height={32} />
            <p className="font-semibold">Honda</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/nissan-icon.png" width={32} height={32} />
            <p className="font-semibold">Nissan</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/cheverolet-icon.png" width={32} height={32} />
            <p className="font-semibold">Chevrolet</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/bmw-icon.png" width={32} height={32} />
            <p className="font-semibold">BMW</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/mercedez-icon.png" width={32} height={32} />
            <p className="font-semibold">Mercedes-Benz</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/hyundai-icon.png" width={32} height={32} />
            <p className="font-semibold">Hyundai</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/audi-icon.png" width={32} height={32} />
            <p className="font-semibold">Audi</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-[#ebe9e9] p-4 rounded-lg justify-center">
            <Image src="/Icons/kia-icon.png" width={32} height={32} />
            <p className="font-semibold">KIA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
