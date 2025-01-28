import Image from "next/image";

const Gallery = () => {
  return (
    <div>
      <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex w-1/2 flex-wrap">
          <div class="w-1/2 p-1 md:p-2">
            <Image
              data-aos="zoom-in-up"
              height={200}
              width={200}
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center shadow-2xl hover:shadow-orange-400 "
              src="https://i.ibb.co/D7Md95d/15.jpg"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <Image
              data-aos="zoom-out-up"
              height={200}
              width={200}
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center shadow-2xl hover:shadow-orange-400"
              src="https://i.ibb.co/6FKZd0K/i-Stock-1170275750-600x400.png"
            />
          </div>
          <div class="w-full p-1 md:p-2">
            <Image
              data-aos="zoom-in-up"
              height={200}
              width={200}
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center shadow-2xl hover:shadow-orange-400"
              src="https://i.ibb.co/FBKYNZG/truck-with-container-highway-cargo-transportation-concept-140916-2909.jpg"
            />
          </div>
        </div>
        <div class="flex w-1/2 flex-wrap">
          <div class="w-full p-1 md:p-2">
            <Image
              data-aos="zoom-out-up"
              height={200}
              width={200}
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center shadow-2xl  hover:shadow-orange-400 "
              src="https://i.ibb.co/870Wr3x/2.jpg"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <Image
              data-aos="zoom-in-up"
              height={200}
              width={200}
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center shadow-2xl hover:shadow-orange-400"
              src="https://i.ibb.co/ggSKFGB/8.jpg"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <Image
              data-aos="zoom-out-up"
              height={200}
              width={200}
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center shadow-2xl hover:shadow-orange-400"
              src="https://i.ibb.co/y5cH6Sn/coffee-brain-caffeine-neuroscincces-1.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
