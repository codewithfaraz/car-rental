import Header from "./Components/Header/Header";
import RentByBrands from "./Components/RentByBrands/RentByBrands";
import RentByBodyType from "./Components/RentByBodyType/RentByBodyType";
import CarCollection from "./Components/CarCollection/CarCollection";
import HowItWorks from "./Components/HowItWorks";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
export default function Home() {
  return (
    <>
      <Header />
      <RentByBrands />
      <RentByBodyType />
      <CarCollection />
      <HowItWorks />
      <Services />
      <Banner />
      <Footer />
    </>
  );
}
