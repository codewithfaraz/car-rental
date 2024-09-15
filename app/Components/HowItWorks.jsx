import Image from "next/image";
export default function HowItWorks() {
  return (
    <div className="md:py-32 py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center md:px-0 px-2">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold">How it Works</h1>
          <p className="md:w-[650px] mt-3 md:px-0 ">
            Renting a luxury car has never been easier. Our streamlined process
            makes it simple for you to book and confirm your vehicle of choice
            online
          </p>
        </div>
        <div className="flex items-center space-x-4 mt-12 md:flex-row flex-col md:flex-row-reverse">
          <div className="flex-1">
            <Image
              src="/Images/how-it-works-car-image.png"
              width={400}
              height={400}
            />
          </div>
          <div className="flex-1 space-y-8 md:mt-0 mt-6">
            <div className="flex items-center space-x-6">
              <Image src="/Icons/search-icon.png" width={32} height={32} />
              <div className="space-y-2">
                <h1 className="text-xl font-bold">Browse and Select</h1>
                <p>
                  Choose from our wide range of premium cars, select the pickup
                  and return dates and locations that suit you best.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Image src="/Icons/calender-icon.png" width={32} height={32} />
              <div className="space-y-2">
                <h1 className="text-xl font-bold">Book and Confirm</h1>
                <p>
                  Book your desired car with just a few clicks and receive an
                  instant confirmation via email or SMS.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Image src="/Icons/emoji-icon.png" width={32} height={32} />
              <div className="space-y-2">
                <h1 className="text-xl font-bold">Enjoy your ride</h1>
                <p>
                  Pick up your car at the designated location and enjoy your
                  premium driving experience with our top-quality service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
