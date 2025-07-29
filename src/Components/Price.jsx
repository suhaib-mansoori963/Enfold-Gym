import React from "react";

function Price() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row w-[98%] mx-auto justify-between items-center mt-[60px]">
        <div className="w-full p-[20px] lg:p-[50px]">
          <h1 className="text-[40px] lg:text-[70px] font-bold mt-[50px] lg:mt-[100px] mb-[30px] lg:mb-[50px]">
            PRICING<span className="text-[#d63e2d]">.</span>
          </h1>

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
        </div>

        <div className="w-full p-[20px] lg:p-[50px] mt-[40px] lg:mt-[248px]">
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
        </div>
      </div>

      <div className="relative min-h-[800px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed z-0"
          style={{
            backgroundImage:
              "url(https://kriesi.at/themes/enfold-gym/wp-content/uploads/sites/63/2016/02/bg1.jpg)",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80 z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 px-4 py-10 w-full">
          {/* First Card */}
          <div className="w-full md:w-[45%] lg:w-[26%] lg:h-[576px] bg-white h-[600px] text-black text-[20px]">
            <div className="p-[14px] font-bold">
              <h3>BASIC</h3>
            </div>
            <div>
              <img src="https://kriesi.at/themes/enfold-gym/wp-content/uploads/sites/63/2016/02/hero-1-1030x494.jpg" />
            </div>
            <div className="py-[18px]">
              <h3 className="text-[40px] md:text-[50px] font-bold">19,60$</h3>
              <p className="text-[15px]">per month</p>
            </div>
            <div className="text-[#a0a0a0] text-[16px] py-[15px]">
              <p>Crossfit 3 times a week</p>
              <p className="py-[15px]">Access until 16:00</p>
              <p className="py-[15px]">–</p>
              <p className="py-[15px]">–</p>
            </div>
            <div className="bg-[#d63e2d] h-[48px] text-white text-[24px] flex items-center justify-center">
              <button>Sign Up</button>
            </div>
          </div>

          {/* Second Card */}
          <div className="w-full md:w-[45%] lg:w-[26%] lg:h-[576px] bg-white h-[600px] text-black text-[20px]">
            <div className="p-[14px] font-bold">
              <h3>ADVANCED</h3>
            </div>
            <div>
              <img src="https://kriesi.at/themes/enfold-gym/wp-content/uploads/sites/63/2016/02/hero-4-1030x494.jpg" />
            </div>
            <div className="py-[18px]">
              <h3 className="text-[40px] md:text-[50px] font-bold">49,00$</h3>
              <p className="text-[15px]">per month</p>
            </div>
            <div className="text-[#a0a0a0] text-[16px] py-[15px]">
              <p>Crossfit 5 times a week</p>
              <p className="py-[15px]">Access until 24:00</p>
              <p className="py-[15px]">Zumba Classes</p>
              <p className="py-[15px]">Sauna access</p>
            </div>
            <div className="bg-[#d63e2d] h-[48px] text-white text-[24px] flex items-center justify-center">
              <button>Sign Up</button>
            </div>
          </div>

          {/* Third Section */}
          <div className="w-full md:w-[90%] lg:w-[26%] h-[600px] text-white text-[20px] text-center items-center flex flex-col justify-center">
            <div className="py-[32px]">
              <h3 className="text-[40px] md:text-[50px] font-bold">
                87{" "}
                <span className="text-[#a0a0a0] text-[30px] md:text-[40px]">
                  Studios
                </span>
              </h3>
              <p className="text-[18px] md:text-[22px]">around the world</p>
            </div>
            <hr className="w-[20%] border-2" />
            <div className="py-[32px]">
              <p className="text-[40px] md:text-[50px] font-bold">298.000</p>
              <p>active members</p>
            </div>
            <hr className="w-[20%] border-2" />
            <div className="py-[32px]">
              <p className="text-[40px] md:text-[50px] font-bold">
                19,90
                <span className="text-[#a0a0a0] text-[30px] md:text-[40px]">
                  $
                </span>
              </p>
              <p>Starting Price</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[50px]">
        <h1 className="text-[40px] lg:text-[70px] md:text-[60px] font-bold mx-[120px] md:mx-[50px] ">
          FAQ<span className="text-[#d63e2d]">.</span>
        </h1>

        <div className="flex flex-wrap gap-20 w-[90%] mx-[120px] lg:mx-[70px] md:mx-[50px]">
          <div className="w-[40%]">
            <h4 className="text-[16px] lg:text-[20px] ">
              <strong>STUDIO RELATED</strong>
            </h4>
            <ul className="list-disc text-[#6e6e6e] p-[10px]">
              <li className=" p-[4px]">
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                arcu.
              </li>
              <li className=" p-[4px]">
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo
              </li>
              <li className=" p-[4px]">
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              </li>
            </ul>
            <p className="text-[16px]  text-[#6e6e6e]  mt-[15px] lg:mt-[20px]">
              Cras dapibus.{" "}
              <span className="text-[#d63e2d]">Vivamus elementum</span> semper
              nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.
            </p>
          </div>
          <div className="w-[40%]">
            <h4 className="text-[16px] lg:text-[20px] ">
              <strong>PRICING RELATED</strong>
            </h4>
            <ul className="list-disc text-[#6e6e6e] p-[10px]">
              <li className=" p-[4px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </li>
              <li className=" p-[4px]">
                Aenean commodo ligula eget dolor. Aenean massa.
              </li>
              <li className=" p-[4px]">
                Cum agnis dis{" "}
                <span className="text-[#d63e2d]">parturient montes</span>,
                nascetur ridiculus mus.
              </li>
            </ul>
            <p className="text-[16px]  text-[#6e6e6e]  mt-[15px] lg:mt-[20px]">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className="w-[40%]">
            <h4 className="text-[16px] lg:text-[20px] ">
              <strong>GROUPS AND CLASSES</strong>
            </h4>
            <ul className="list-disc text-[#6e6e6e] p-[10px]">
              <li className=" p-[4px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </li>
              <li className=" p-[4px]">
                Aenean commodo ligula eget dolor. Aenean massa.
              </li>
              <li className=" p-[4px]">
                Cum agnis dis{" "}
                <span className="text-[#d63e2d]">parturient montes</span>,
                nascetur ridiculus mus.
              </li>
            </ul>
            <p className="text-[16px]  text-[#6e6e6e]  mt-[15px] lg:mt-[20px]">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className="w-[40%]">
            <h4 className="text-[16px] lg:text-[20px] ">
              <strong>ACESS TO THE GYM</strong>
            </h4>
            <ul className="list-disc text-[#6e6e6e] p-[10px]">
              <li className=" p-[4px]">
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                arcu.
              </li>
              <li className=" p-[4px]">
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo
              </li>
              <li className=" p-[4px]">
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              </li>
            </ul>
            <p className="text-[16px]  text-[#6e6e6e]  mt-[15px] lg:mt-[20px]">
              Cras dapibus.{" "}
              <span className="text-[#d63e2d]">Vivamus elementum</span> semper
              nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;
