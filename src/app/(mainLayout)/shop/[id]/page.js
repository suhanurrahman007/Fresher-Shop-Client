"use client";
import Container from "@/components/share/Container";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import useProducts from "@/components/hooks/useProducts";
import Loading from "@/app/loading";
import { BsBookmarkPlusFill } from "react-icons/bs";
import ProductDescription from "./ProductDescription";
import Link from "next/link";
import OrderCard from "./OrderCard";

const ProductDetails = ({ params }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = params;
  const [products, refetch] = useProducts();
  const findProduct = products?.find((item) => item?._id === id);

  if (!findProduct) {
    return <Loading />;
  }
  const discountPrice =
    findProduct?.price && findProduct?.discount_price
      ? findProduct.price -
        (findProduct.price * findProduct.discount_price) / 100
      : findProduct?.price;
  console.log(discountPrice);
  
  return (
    <Container>
      <div className="mt-[77px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10">
          <div className="lg:col-span-4">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <Image
                  className="w-full rounded-md mb-3 shadow-[#000C21] shadow-lg transition-transform duration-300 ease-in-out hover:scale-150"
                  alt={findProduct?.name || "Product Image"}
                  width={500}
                  height={500}
                  src={findProduct?.image}
                  priority
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              // loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  alt="image"
                  width={500}
                  height={500}
                  src={findProduct?.image}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="lg:col-span-5">
            <div className="w-full space-y-4 rounded-xl p-4 shadow-lg">
              <div className="space-y-2 font-semibold">
                <h6 className="text-sm md:text-base lg:text-lg">
                  {findProduct?.product_name}
                </h6>
                <ProductDescription findProduct={findProduct} />
                <p>
                  <span className="text-gray-700 mr-4 line-through">
                    ${findProduct?.price?.toFixed(2)}
                  </span>
                  <span className="font-bold mr-2 text-purple-600">
                    ${discountPrice ? discountPrice?.toFixed(2) : "00"}
                  </span>
                  Per Piece
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-6 text-sm md:text-base">
                <button className="text-sm box-border border-4 border-sky-900 w-48 h-12 rounded-lg bg-sky-600 text-white relative group">
                  <span className="pr-8">Add to Bag</span>
                  <span className="bg-sky-900 absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300">
                    <BsBookmarkPlusFill />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <OrderCard discountPrice={discountPrice} order={findProduct} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
