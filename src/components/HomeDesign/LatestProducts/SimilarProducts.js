"use client";
import useLatestProducts from "@/components/hooks/useLatestProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Container from "@/components/share/Container";
import ProductCard from "@/app/(mainLayout)/shop/ProductCard";
import useProducts from "@/components/hooks/useProducts";
import Loading from "@/app/loading";
import SectionTitle from "@/components/share/SectionTitle";

const SimilarProducts = ({ category }) => {
  const [products, refetch, isLoading] = useProducts();
  
  if (isLoading) {
    return <Loading />;
  }

  // Filter products based on the provided category
  const similarProducts = products?.filter(
    (item) => item?.category === category
  );

  if (!similarProducts || similarProducts.length === 0) {
    return (
      <Container>
        <p>No similar products available.</p>
      </Container>
    );
  }

  return (
    <div>
      <Container>
        <SectionTitle
          header={"Similar Products"}
          miniHeader={"You might also like these items"}
        />
        <div className="my-7">
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
            {similarProducts?.map((item) => (
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

export default SimilarProducts;
