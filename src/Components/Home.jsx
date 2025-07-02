import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import {
  footerData,
  homeElementData,
  imageData,
  priceData,
  slides,
} from "../utils/mockData";

function Home() {
  return (
    <section className="w-full h-[600px] bg-red-200">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  flex flex-col justify-center items-center text-white text-center p-4">
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
      <div className=" flex ">
        {homeElementData.map((item, index) => (
          <div
            key={index}
            className="p-8 w-full h-[300px] flex flex-col justify-center items-center text-white text-center"
            style={{
              backgroundColor: item.backGround,
              color: item.color,
            }}
          >
            {/* <img src={item.image} /> */}
            <h2 className="text-[20px] font-bold mb-4">{item.title}</h2>
            <p className="text-[16px] max-w-md text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div
        className="home-page h-[600px] flex flex-col justify-center items-center  text-white text-center p-8"
        style={{
          backgroundImage:
            "url(https://kriesi.at/themes/enfold-gym/wp-content/uploads/sites/63/2016/02/bg1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-[60%] flex flex-col justify-center items-center h-full text-white text-center p-8 ">
          <h1 className="text-[40px] font-bold">WELLCOME TO THE ENFOLD-GYM.</h1>
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

      <div className="h-[400px] flex flex-col justify-center items-center  text-white text-center p-8">
        <div className="w-[60%]  h-full text-black text-center p-8 mt-[25px]">
          <h1 className="text-[45px] font-bold">
            CLASSES TO MAKE IN OUR GYM<span className="text-[#d63e2d] ">.</span>
          </h1>
          <p className="text-[16px]">
            We offer a multitude of fun and motivating classes that allow you to
            work out alone or with friends. Our trainers are highly educated and
            will make sure you give your all. The classes are:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-[900px] bg-black">
        {imageData.map((item, index) => (
          <div
            key={index}
            className="group relative w-full h-[400px] mt-5 flex justify-center items-center overflow-hidden"
          >
            {/* Background image with zoom on hover */}
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-500 scale-100 group-hover:scale-110"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            />

            {/* Text that hides on hover */}
            <h1 className="z-10 text-[24px] text-white font-bold transition-opacity duration-300 group-hover:opacity-0">
              {item.title}
            </h1>

            {/* Optional: dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-300" />
          </div>
        ))}
      </div>

      <div className="bg-white w-full h-[300px] flex justify-center items-center text-black text-center p-8">
        <div>
          <h1 className="text-[50px] font-bold !mb-[20px]">
            SUBCRIBE TO OUR NEWSLETTER
            <span className="text-[#d63e2d] ">.</span>
          </h1>

          <form>
            <input
              type="name"
              placeholder="Name"
              className="px-[30px] py-[10px] mr-4 border border-gray-300 rounded-sm bg-[#f8f8f8]"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-[30px] py-[10px] mr-4 border border-gray-300 rounded-sm bg-[#f8f8f8]"
            />
            <button
              type="submit"
              className="bg-[#d63e2d] px-[60px] py-[10px] text-white font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="relative w-full h-[600px] overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          src="https://www.youtube.com/embed/oXdzvMLiE7Q?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=oXdzvMLiE7Q&modestbranding=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>

        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

        <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center p-4">
          <h1 className="text-4xl font-bold mb-4">
            WHAT ARE YOU WAITING FOR <span className="text-[#d63e2d]">?</span>
          </h1>
          <p className="text-lg max-w-2xl mb-6">
            Enfold Gym leads the fitness industry when it comes to helping
            people reach their fitness goals. We have Crossfit courses, a full
            weight room, multiple cardio areas, personal trainings, group
            classes, and more!
          </p>

          {/* <div className="flex gap-6 text-white text-2xl">
            <i className="fa-solid fa-dumbbell"></i>
            <i className="fa-solid fa-heart-pulse"></i>
            <i className="fa-solid fa-bolt"></i>
          </div> */}
        </div>
      </div>

      <div className=" flex ">
        {priceData.map((item, index) => (
          <div
            key={index}
            className="p-8 w-full h-[200px] flex flex-col justify-center items-center text-white text-center"
            style={{
              backgroundColor: item.backGround,
              color: item.color,
            }}
          >
            <h2 className="text-[50px] font-bold mb-4">{item.title}</h2>
            <p className="text-[22px] max-w-md text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <footer className="bg-black w-full h-[300px] flex justify-center items-center text-[#757575] ">
        {footerData.map((item, index) => (
          <div key={index} className="p-[40px] w-full  ">
            <hr />
            <h1 className="text-[17px] font-bold py-[8px]">{item.title}</h1>
            <hr />
            <p className="py-[9px]">{item.description}</p>
          </div>
        ))}
      </footer>
    </section>
  );
}

export default Home;
