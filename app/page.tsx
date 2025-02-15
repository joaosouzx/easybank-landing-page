import Header from "./components/Header/Header";
import Section1 from "./components/Section1/Section1";
import HeaderMobile from "./components/HeaderMobile/HeaderMobile";
import Section2 from "./components/Section2/Section2";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeaderMobile />
      <Section1 />
      <Section2 />
      <Articles />
      <Footer />
    </>
  );
}
