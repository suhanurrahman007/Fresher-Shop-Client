"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import profileImg from "@/assets/avatar.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "@smastrom/react-rating/style.css";

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import SectionTitle from "@/components/share/SectionTitle";
import useProducts from "@/components/hooks/useProducts";
const Testimonial = () => {
  const [products] = useProducts();
  return (
    <div className="lg:px-16 md:px-8 sm:px-2 px-4">
      <SectionTitle
        SectionTitle
        header={"Testimonials"}
        miniHeader={"OUR CLIENTS SAY"}
      ></SectionTitle>

      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{ delay: 2000 }}
          breakpoints={{
            // when window width is >= 640px
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {products?.map((item) => (
            <SwiperSlide key={item?._id}>
              <div>
                <div className="bg-[#0D0D21] rounded-md p-10 text-sm text-gray-400 text-justify">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-slate-800 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="">
                    {" "}
                    QuickShip, the epitome of efficiency in the realm of
                    international courier services, stands as a beacon for swift
                    and reliable parcel deliveries across borders.
                  </p>
                </div>

                <div className="flex gap-5 px-2 pt-5">
                  <div>
                    {item?.image ? (
                      <Image
                        className="rounded-full w-16 h-16"
                        src={item?.image}
                        alt="images"
                        width={100} // Adjusted width to 100
                        height={100} // Adjusted height to 100
                      />
                    ) : (
                      <Image
                        className="rounded-full w-16 h-16"
                        src={profileImg}
                        alt="images"
                        width={100}
                        height={100}
                      />
                    )}
                  </div>

                  <div className="space-y-1">
                    <p className="text-gray-500 font-semibold text-md">
                      S H SuHan
                    </p>

                    <div>
                      <Rating style={{ maxWidth: 80 }} value={3} readOnly />
                    </div>
                    <p className="text-sm text-justify text-gray-400">
                      Customer
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
