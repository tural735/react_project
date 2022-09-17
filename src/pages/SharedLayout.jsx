import { Outlet } from "react-router-dom";
import Footer from "../components/general/Footer";
import Header from "../components/general/Header";


const SharedLayout = () => {
  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  );
};
export default SharedLayout;