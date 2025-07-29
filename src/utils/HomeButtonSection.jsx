import React from "react";
import { priceData } from "./mockData";

function HomeButtonSection() {
  return (
    <>
      <div className="bg-white w-full h-[300px] flex justify-center items-center text-black text-center p-8">
        <div>
          <h1 className="text-[50px] md:text-[40px] font-bold !mb-[20px]">
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
              className="bg-[#d63e2d] px-[60px] py-[10px] text-white font-semibold md:mt-[20px]"
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
        </div>
      </div>

      <div className="flex">
        {priceData.map((item, index) => (
          <div
            key={index}
            className="p-8 w-full h-[200px] flex flex-col justify-center items-center text-white text-center"
            style={{
              backgroundColor: item.backGround,
              color: item.color,
            }}
          >
            <h2 className="text-[50px] md:text-[40px] font-bold mb-4">
              {item.title}
            </h2>
            <p className="text-[22px] md:text-[18px] max-w-md text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeButtonSection;
