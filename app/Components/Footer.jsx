import Image from "next/image";
export default function Footer() {
  return (
    <div className="md:py-8 py-4 bg-black border-t border-[#474747]">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-col md:flex-row md:space-y-0 space-y-4">
        <div className="">
          <h1 className="text-white text-3xl font-bold uppercase">Luxedrive</h1>
        </div>
        <div className="">
          <ul className="flex space-x-4">
            <a href="" className="text-white">
              Rent
            </a>
            <a href="" className="text-white">
              Share
            </a>
            <a href="" className="text-white">
              About Us
            </a>
            <a href="" className="text-white">
              Contact Us
            </a>
          </ul>
        </div>
        <div className="flex space-x-3">
          <Image
            src="/Icons/instagram-icon.png"
            width={32}
            height={32}
            className="bg-[#585858] p-3 rounded-full"
          />
          <Image
            src="/Icons/twitter-icon.png"
            width={32}
            height={32}
            className="bg-[#585858] p-3 rounded-full"
          />
          <Image
            src="/Icons/youtube-icon.png"
            width={32}
            height={32}
            className="bg-[#585858] p-3 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
