import Image from "next/image";
export default function Banner() {
  return (
    <div className="md:py-16 py-8 bg-black mt-12">
      <div className="max-w-6xl mx-auto flex items-center md:flex-row flex-col">
        <div className="flex-1 space-y-5 text-center md:text-left">
          <h1 className="text-white text-4xl">Download our mobile app</h1>
          <p className="text-white px-6 md:px-0">
            Get exclusive access to car rentals with our mobile app. Download
            now and experience convenience on the go.
          </p>
        </div>
        <div className="flex-1 flex space-x-5 mt-12">
          <button className="px-6 py-1 rounded-full bg-white flex items-center space-x-4">
            <Image
              src="/Icons/apple-icon.png"
              width={24}
              height={24}
              className=""
            />
            <div className="flex flex-col items-start">
              <p className="uppercase text-[#494949]">Download on the</p>
              <p className="font-bold text-lg">App Store</p>
            </div>
          </button>
          <button className="px-6 py-1 rounded-full bg-white flex items-center space-x-4">
            <Image
              src="/Icons/android-icon.png"
              width={24}
              height={24}
              className=""
            />
            <div className="flex flex-col items-start">
              <p className="uppercase text-[#494949]">Get it on</p>
              <p className="font-bold text-lg">Play Store</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
