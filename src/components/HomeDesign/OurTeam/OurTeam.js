"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import SectionTitle from "@/components/share/SectionTitle";
import Container from "@/components/share/Container";
import "./OurTeam.css"

const OurTeams = () => {
  return (
    <div className="pb-10">
      <Container>
        <div>
          <SectionTitle
            header={"Our Team"}
            miniHeader={"Safety and Reliability"}
          ></SectionTitle>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{ delay: 2000 }}
            loop={true} // Set loop to true
          >
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center  p-10 bg-[#0D0D21]">
                <Image
                  className="rounded-full transition-all hover:border-r-5 -mt-20 hover:border-red-700"
                  src={"https://i.ibb.co/xM7TJ84/team-member-opt-1.jpg"}
                  alt="team1"
                  width={300}
                  height={300}
                ></Image>

                <div
                  div
                  className="space-y-2 flex flex-col items-center justify-center"
                >
                  <h1 className="mt-3 text-xl font-bold hover:text-purple-700">
                    John Smith
                  </h1>

                  <p className="text-purple-700 ">Design Director</p>

                  <div className="flex space-x-4 items-center">
                    <FaFacebook className="text-blue-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                    <FaInstagram className="text-pink-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                    <FaTwitter className="text-blue-400 text-2xl transform hover:scale-150 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center mx-2 p-10 bg-[#0D0D21]">
                <Image
                  className="rounded-full transition-all hover:border-r-5 -mt-20 hover:border-red-700"
                  src={"https://i.ibb.co/mB85G7g/team-member-opt-2.jpg"}
                  alt="team1"
                  width={300}
                  height={300}
                ></Image>

                <div
                  div
                  className="space-y-2 flex flex-col items-center justify-center"
                >
                  <h1 className="mt-3 text-xl font-bold hover:text-purple-700">
                    Emily Davis
                  </h1>

                  <p className="text-purple-700 ">General Manager</p>

                  <div className="flex space-x-4 items-center">
                    <FaFacebook className="text-blue-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                    <FaInstagram className="text-pink-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                    <FaTwitter className="text-blue-400 text-2xl transform hover:scale-150 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center mx-2 p-10 bg-[#0D0D21]">
                <Image
                  className="rounded-full transition-all hover:border-r-5 -mt-20 hover:border-red-700"
                  src={"https://i.ibb.co/SsN17gh/team-member-opt-6.jpg"}
                  alt="team1"
                  width={300}
                  height={300}
                ></Image>

                <div
                  div
                  className="space-y-2 flex flex-col items-center justify-center"
                >
                  <h1 className="mt-3 text-xl font-bold hover:text-purple-700">
                    Michael Johnson
                  </h1>

                  <p className="text-purple-700 ">Managing Drector</p>

                  <div className="flex space-x-4 items-center">
                    <FaFacebook className="text-blue-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                    <FaInstagram className="text-pink-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                    <FaTwitter className="text-blue-400 text-2xl transform hover:scale-150 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center mx-2 p-10 bg-[#0D0D21]">
                <Image
                  className="rounded-full transition-all hover:border-r-5 -mt-20 hover:border-red-700"
                  src={"https://i.ibb.co/gZJ5Lc8/team-member-opt-4.jpg"}
                  alt="team1"
                  width={300}
                  height={300}
                ></Image>

                <div
                  div
                  className="space-y-2 flex flex-col items-center justify-center"
                >
                  <h1 className="mt-3 text-xl font-bold hover:text-purple-700">
                    David Williams
                  </h1>

                  <p className="text-purple-700 ">Hudai guraguri korbe</p>

                  <div className="flex space-x-4 items-center">
                    <FaFacebook className="text-blue-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                    <FaInstagram className="text-pink-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                    <FaTwitter className="text-blue-400 text-2xl transform hover:scale-150 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center mx-2 p-10 bg-[#0D0D21]">
                <Image
                  className="rounded-full transition-all hover:border-r-5 -mt-20 hover:border-red-700"
                  src={"https://i.ibb.co/mB85G7g/team-member-opt-2.jpg"}
                  alt="team1"
                  width={300}
                  height={300}
                ></Image>

                <div
                  div
                  className="space-y-2 flex flex-col items-center justify-center"
                >
                  <h1 className="mt-3 text-xl font-bold hover:text-purple-700">
                    Sarah Martinez
                  </h1>

                  <p className="text-purple-700 ">Delivery Head</p>

                  <div className="flex space-x-4 items-center">
                    <FaFacebook className="text-blue-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                    <FaInstagram className="text-pink-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                    <FaTwitter className="text-blue-400 text-2xl transform hover:scale-150 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center mx-2 p-10 bg-[#0D0D21]">
                <Image
                  className="rounded-full transition-all hover:border-r-5 -mt-20 hover:border-red-700"
                  src={"https://i.ibb.co/SsN17gh/team-member-opt-6.jpg"}
                  alt="team1"
                  width={300}
                  height={300}
                ></Image>

                <div
                  div
                  className="space-y-2 flex flex-col items-center justify-center"
                >
                  <h1 className="mt-3 text-xl font-bold hover:text-purple-700">
                    Christopher Brown
                  </h1>

                  <p className="text-purple-700 ">Employee Head</p>

                  <div className="flex space-x-4 items-center">
                    <FaFacebook className="text-blue-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                    <FaInstagram className="text-pink-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                    <FaTwitter className="text-blue-400 text-2xl transform hover:scale-150 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default OurTeams;
