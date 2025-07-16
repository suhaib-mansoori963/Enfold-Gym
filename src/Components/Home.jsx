import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { homeElementData, imageData, slides } from "../utils/mockData";
import HomeButtonSection from "../utils/HomeButtonSection";

function Home() {
  return (
    <section className="w-full h-full">
      {/* Hero Slider Section */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
                <h2 className="text-[70px] font-bold mb-4">
                  {slide.title}
                  <span className="text-[#d63e2d]">.</span>
                </h2>
                <p className="text-[38px] max-w-xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 3 Columns with background */}
      <div className="flex">
        {homeElementData.map((item, index) => (
          <div
            key={index}
            className="p-8 w-full h-[300px] flex flex-col justify-center items-center text-white text-center"
            style={{
              backgroundColor: item.backGround,
              color: item.color,
            }}
          >
            <h2 className="text-[20px] font-bold mb-4">{item.title}</h2>
            <p className="text-[16px] max-w-md text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Welcome Section */}
      <div
        className="h-[600px] flex flex-col justify-center items-center text-white text-center p-8"
        style={{
          backgroundImage:
            "url(https://kriesi.at/themes/enfold-gym/wp-content/uploads/sites/63/2016/02/bg1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-[60%] flex flex-col justify-center items-center h-full p-8">
          <h1 className="text-[40px] font-bold">WELCOME TO THE ENFOLD-GYM.</h1>
          <p className="text-[16px] max-w-2xl mb-6">
            Enfold Gym leads the fitness industry when it comes to helping
            people reach their fitness goals. We have Crossfit courses, a full
            weight room, multiple cardio areas, personal trainings, group
            classes, and more!
          </p>
          <button className="bg-[#d63e2d] px-[35px] py-[15px]">
            Learn More
          </button>
        </div>
      </div>

      {/* Classes Section */}
      <div className="h-[400px] flex flex-col justify-center items-center text-black text-center p-8">
        <div className="w-[60%] h-full p-8 mt-[25px]">
          <h1 className="text-[45px] font-bold">
            CLASSES TO MAKE IN OUR GYM<span className="text-[#d63e2d]">.</span>
          </h1>
          <p className="text-[16px]">
            We offer a multitude of fun and motivating classes that allow you to
            work out alone or with friends. Our trainers are highly educated and
            will make sure you give your all. The classes are:
          </p>
        </div>
      </div>

      {/* Class Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-[900px] bg-black">
        {imageData.map((item, index) => (
          <div
            key={index}
            className="group relative w-full h-[400px] mt-5 flex justify-center items-center overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-500 scale-100 group-hover:scale-110"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            />
            <h1 className="z-10 text-[24px] text-white font-bold transition-opacity duration-300 group-hover:opacity-0">
              {item.title}
            </h1>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-300" />
          </div>
        ))}
      </div>
      <HomeButtonSection />
    </section>
  );
}

export default Home;
