import { Route, Routes } from "react-router-dom";
import scss from "./Layout.module.scss";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";
import HomePage from "../../pages/home/HomePage";
import AboutPage from "../../pages/about/AboutPage";
import CreateProduct from "../../pages/create-product/CreateProduct";
import Nav from "../../widgets/nav/Nav";
const Layout = () => {
  return (
    <div className={scss.Layout}>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
