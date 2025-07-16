import React, { useState } from "react";
import { aboutImgData, footerData, priceData } from "../utils/mockData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <div className="flex flex-col lg:flex-row w-[98%] mx-auto justify-between items-center mt-[60px]">
        <div className="w-full p-[20px] lg:p-[50px]">
          <h1 className="text-[40px] lg:text-[70px] font-bold mt-[50px] lg:mt-[100px] mb-[30px] lg:mb-[50px]">
            ABOUT US<span className="text-[#d63e2d]">.</span>
          </h1>
          <p className="text-[16px] lg:text-[20px] text-[#6e6e6e] leading-7 lg:leading-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis{" "}
            <span className="text-[#d63e2d]">parturient montes</span>, nascetur
            ridiculus mus.
          </p>
          <p className="text-[16px] lg:text-[20px] text-[#6e6e6e] leading-7 lg:leading-8 mt-[15px] lg:mt-[20px]">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <button className="bg-[#d63e2d] text-white px-[25px] lg:px-[35px] py-[10px] lg:py-[15px] mt-[20px] lg:mt-[30px]">
            OUR TEAM
          </button>
        </div>

        <div className="w-full p-[20px] lg:p-[50px] mt-[40px] lg:mt-[248px]">
          <p className="text-[16px] lg:text-[20px] text-[#6e6e6e] leading-7 lg:leading-8">
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
          </p>
          <p className="text-[16px] lg:text-[20px] text-[#6e6e6e] leading-7 lg:leading-8 mt-[15px] lg:mt-[20px]">
            Cras dapibus.{" "}
            <span className="text-[#d63e2d]">Vivamus elementum</span> semper
            nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.
          </p>
          <button className="bg-[#d63e2d] text-white px-[25px] lg:px-[35px] py-[10px] lg:py-[15px] mt-[20px] lg:mt-[30px]">
            OUR STUDIOS
          </button>
        </div>
      </div>

      <div className="h-[700px] bg-black">
        <div className=" flex justify-center items-center gap-4">
          {aboutImgData.map((item, index) => (
            <div
              key={index}
              className="w-[30%] h-[300px] cursor-pointer mt-[15px] "
              onClick={() => handleClick(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="w-[100%] flex justify-between items-center gap-[35px]">
          <div className="w-[48%] h-[300px] mt-[20px]">
            <img src="https://kriesi.at/themes/enfold-gym/wp-content/uploads/sites/63/2016/02/hero-3-1030x494.jpg" />
          </div>
          <div className="w-[48%] h-[300px] flex flex-col justify-center items-start p-[20px]">
            <h1 className="text-[50px] font-bold text-white">
              HOW IT START
              <span className="text-[#d63e2d] ">...</span>
            </h1>
            <p className="text-[16px] text-white leading-8 mt-[20px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
      </div>

      <div
        className="relative h-[600px] flex justify-center items-center text-white text-center p-8"
        style={{
          backgroundImage:
            "url(https://kriesi.at/themes/enfold-gym/wp-content/uploads/sites/63/2016/02/hero-5.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* Content */}
        <div className="w-[60%] flex flex-col justify-center items-center h-full text-white text-center p-8 z-10">
          <h1 className="text-[50px] font-bold">
            THE FUTURE IS BRIGHT<span className="text-[#d63e2d] ">.</span>
          </h1>
          <p className="text-[16px] max-w-2xl mb-6">
            Enfold Gym leads the fitness industry when it comes to helping
            people reach their fitness goals. We have Crossfit courses, a full
            weight room, multiple cardio areas, personal trainings, group
            classes, and more!
          </p>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center">
          <button
            className="absolute top-4 right-6 text-white text-3xl"
            onClick={handleClose}
          >
            ✕
          </button>
          <div className="w-full max-w-4xl">
            <Swiper
              initialSlide={activeIndex}
              navigation={true}
              modules={[Navigation]}
            >
              {aboutImgData.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[600px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

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

      {/* <footer className="bg-black w-full h-[300px] flex justify-center items-center text-[#757575] ">
        {footerData.map((item, index) => (
          <div key={index} className="p-[40px] w-full  ">
            <hr />
            <h1 className="text-[17px] font-bold py-[8px]">{item.title}</h1>
            <hr />
            <p className="py-[9px]">{item.description}</p>
          </div>
        ))}
      </footer> */}
    </section>
  );
}

export default About;
