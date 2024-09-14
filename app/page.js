import Header from "./Components/Header/Header";
import RentByBrands from "./Components/RentByBrands/RentByBrands";
import RentByBodyType from "./Components/RentByBodyType/RentByBodyType";
export default function Home() {
  return (
    <>
      <Header />
      <RentByBrands />
      <RentByBodyType />
    </>
  );
}
