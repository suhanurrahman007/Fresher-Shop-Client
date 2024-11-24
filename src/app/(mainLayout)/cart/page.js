import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";

const Cart = () => {
  return (
    <div className="w-full mx-auto px-4 py-28 lg:px-20 md:px-10 sm:px-2">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Left Section - 2/3 width */}
        <div className="w-full lg:w-2/3">
          <LeftSection />
        </div>

        {/* Right Section - 1/3 width */}
        <div className="w-full lg:w-1/3">
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default Cart;