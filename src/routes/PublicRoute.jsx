import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../Components";
const PublicRoute = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicRoute;
