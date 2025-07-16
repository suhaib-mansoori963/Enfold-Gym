import React from "react";
import { classesData } from "../utils/mockData";

function Classes() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row w-[98%] mx-auto justify-between items-center mt-[60px]">
        <div className="w-full p-[20px] lg:p-[50px]">
          <h1 className="text-[40px] lg:text-[70px] font-bold mt-[50px] lg:mt-[100px] mb-[30px] lg:mb-[50px]">
            CLASSES<span className="text-[#d63e2d]">.</span>
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
          {/* <button className="bg-[#d63e2d] text-white px-[25px] lg:px-[35px] py-[10px] lg:py-[15px] mt-[20px] lg:mt-[30px]">
            OUR TEAM
          </button> */}
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
          {/* <button className="bg-[#d63e2d] text-white px-[25px] lg:px-[35px] py-[10px] lg:py-[15px] mt-[20px] lg:mt-[30px]">
            OUR STUDIOS
          </button> */}
        </div>
      </div>

      <div className="bg-black !h-[700px] flex flex-wrap justify-between px-[20px] pt-[20px]">
        {classesData.map((items, index) => {
          return (
            <div className="w-[32%]" key={index}>
              <div className="overflow-hidden cursor-pointer ">
                {/* Container to clip image */}
                <img
                  src={items?.img}
                  className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="bg-white p-[20px] mb-[20px]">
                <h3 className="!text-black !text-[15px] font-bold">
                  {items?.displayName}
                </h3>
                <p className="text-[#696969]">{items?.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Classes;
