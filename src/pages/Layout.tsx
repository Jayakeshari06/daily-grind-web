
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cream-50 mandala-bg">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-henna-500 via-spice-500 to-chai-500"></div>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
