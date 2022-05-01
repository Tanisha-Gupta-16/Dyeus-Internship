import "../App.scss";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import Component3 from "./Components/Component3";
import Component4 from "./Components/Component4";
import Component5 from "./Components/Component5";
import Component6 from "./Components/Component6";
import Component7 from "./Components/Component7";
import Component8 from "./Components/Component8";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
const Page = () => {
  return (
    <div className="page-body">
      <Header />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
      <Component8 />
      <Footer />
    </div>
  );
};

export default Page;
