"use client";
import useLatestProducts from "@/components/hooks/useLatestProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Container from "@/components/share/Container";
import ProductCard from "@/app/(mainLayout)/shop/ProductCard";

const LatestProducts = () => {
  const [latestProducts] = useLatestProducts();
  console.log(latestProducts);
  return (
    <div>
      <Container>
        <div className="text-2xl font-extrabold text-purple-300 mt-8">
          <h2>Latest Products</h2>
        </div>

        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{ delay: 4000 }}
            autoHeight={true}
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
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {latestProducts?.map((item) => (
              <SwiperSlide key={item?._id}>
                <ProductCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default LatestProducts;
