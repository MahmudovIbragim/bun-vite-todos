import { Route, Routes } from "react-router-dom";
import scss from "./Layout.module.scss";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";
import HomePage from "../../pages/home/HomePage";
import AboutPage from "../../pages/about/AboutPage";
import CreateProduct from "../../pages/create-product/CreateProduct";
import Nav from "../../widgets/nav/Nav";
import { useEffect, useState } from "react";
const Layout = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScroll]);
  return (
    <div className={scss.Layout}>
      <Header />
      <Nav isScroll={isScroll} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about/:id" element={<AboutPage />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
