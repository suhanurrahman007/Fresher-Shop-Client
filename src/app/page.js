
// import Accordion4 from "@/components/HomeDesign/F";
import Faq from "@/components/HomeDesign/Faq/Faq";
import LatestProducts from "@/components/HomeDesign/LatestProducts/LatestProducts";
import OurTeams from "@/components/HomeDesign/OurTeam/OurTeam";
import Testimonial from "@/components/HomeDesign/Testimonial/Testimonial";
import { Carousel } from "@/components/share/Carousel/Carousel";
import Footer from "@/components/share/Footer/Footer";
import Navbar from "@/components/share/Navbar/Navbar";
import SideNavbar from "@/components/share/Navbar/SideNavbar";
import ContactUs from "./(mainLayout)/contactUs/page";
import ProductMenu from "@/components/HomeDesign/ProductMenu/ProductMenu";
const HomePage = () => {
  return (
    <div>
      <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <Navbar></Navbar>
                {/* <!-- Page content here --> */}
                <Carousel />
                <ProductMenu />
                <LatestProducts />
                <Faq />
                <OurTeams />
                <Testimonial />
                <ContactUs />
                {/* <Accordion4 /> */}
                <Footer />
            </div> 
            <div className="drawer-side">
                <label for="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul  className = "menu p-4 w-52 min-h-full text-white bg-[#0D0D21] flex justify-between" >
                {/* <!-- Sidebar content here --> */}
                <SideNavbar></SideNavbar>
                </ul>
            </div>
            </div>
      

    </div>
  );
};

export default HomePage;