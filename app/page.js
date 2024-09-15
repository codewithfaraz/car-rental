import Header from "./Components/Header/Header";
import RentByBrands from "./Components/RentByBrands/RentByBrands";
import RentByBodyType from "./Components/RentByBodyType/RentByBodyType";
import CarCollection from "./Components/CarCollection/CarCollection";
export default function Home() {
  return (
    <>
      <Header />
      <RentByBrands />
      <RentByBodyType />
      <CarCollection />
    </>
  );
}
