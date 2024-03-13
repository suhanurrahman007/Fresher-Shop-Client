import Faq from "@/components/HomeDesign/Faq/Faq";
import { Carousel } from "@/components/share/Carousel/Carousel";
import Navbar from "@/components/share/Navbar/Navbar";
import SideNavbar from "@/components/share/Navbar/SideNavbar";
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
                <Faq />
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