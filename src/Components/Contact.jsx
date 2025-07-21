import React from "react";

function Contact() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row w-[98%] mx-auto justify-between items-center mt-[60px]">
        <div className="w-full p-[20px] lg:p-[35px]">
          <h1 className="text-[40px] lg:text-[70px] font-bold mt-[50px] lg:mt-[100px] mb-[30px] lg:mb-[50px]">
            CONTACT<span className="text-[#d63e2d]">.</span>
          </h1>
          <div>
            <p className="text-[16px] lg:text-[20px] text-[#6e6e6e] leading-7 lg:leading-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis{" "}
              <span className="text-[#d63e2d]">parturient montes</span>,
              nascetur ridiculus mus.
            </p>
            <p className="text-[16px] lg:text-[20px] text-[#6e6e6e] leading-7 lg:leading-8 mt-[15px] lg:mt-[20px]">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>

        <div className="w-[50%]   lg:mt-[248px] text-[#6e6e6e]">
          <p>
            <span className="text-[#d63e2d] font-bold ">Address:</span>
          </p>
          <p className="py-[6px]">1818 N Vermont Ave</p>
          <p>Los Angeles, CA, United States</p>
          <p className="pt-[12px]">(555) 774 433</p>
          <p>
            <span className="text-[#d63e2d] ">office@enfold-gym.com</span>
          </p>
        </div>
        <div className="w-[50%]   lg:mt-[248px] text-[16px] text-[#6e6e6e]">
          <p>
            <span className="text-[#d63e2d] font-bold ">Opening hours:</span>
          </p>
          <p className="py-[6px]">Mo-Fr: 8:00-22:00</p>
          <p className="py-[6px]">Sa: 8:00-24:00</p>
          <p className="py-[6px]">So: 8:00-14:00</p>
        </div>
      </div>

      <div className="relative h-[800px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{
            backgroundImage:
              "url(https://kriesi.at/themes/enfold-gym/wp-content/uploads/sites/63/2016/02/hero-2-705x338.jpg)",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-65 z-0" />

        {/* Content */}
        <div className="relative w-[100%] z-10 flex gap-8 px-10 ">
          {/* First Card */}
          <div className="w-full  h-[600px] text-white text-[20px] ">
            <h1 className="text-[50px] font-bold">
              GET IN TOUCH<span className="text-[#d63e2d]">.</span>
            </h1>
            <form
              // onSubmit={handleSubmit}
              className="w-full py-[20px] text-left"
            >
              <div className="mb-4 flex gap-3">
                <input
                  placeholder="Name*"
                  type="text"
                  name="name"
                  // value={formData.name}
                  // onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
                <input
                  placeholder="Email*"
                  type="email"
                  name="email"
                  // value={formData.email}
                  // onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  placeholder="Subject*"
                  type="subject"
                  name="subject"
                  // value={formData.subject}
                  // onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  placeholder="Message*"
                  name="message"
                  // value={formData.message}
                  // onChange={handleChange}
                  className="w-full border p-2 rounded"
                  rows="4"
                  required
                />
              </div>

              <button
                type="submit"
                className=" text-white border px-10 py-3 rounded hover:bg-orange-700"
              >
                Submit
              </button>
            </form>
          </div>
          {/* Second Section */}
          <div className="w-[60%] h-[600px] mx-[50px] text-white text-start text-[17px]  ">
            <h1 className="text-[50px] font-bold">
              ALSO<span className="text-[#d63e2d]">…</span>
            </h1>
            <p className="py-[20px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p>
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <p className="py-[20px]">
              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
              eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
              feugiat a, tellus.
            </p>
          </div>
        </div>
      </div>

      <div className="py-[50px]">
        <div className="flex flex-wrap gap-20 w-[90%] mx-[120px]">
          <div className="w-[40%]">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis{" "}
              <span className="text-[#d63e2d] ">parturient montes</span>,
              nascetur ridiculus mus.
            </p>
          </div>
          <div className="w-[40%]">
            <p>
              Cras dapibus. Vivamus elementum semper nisi.
              <span className="text-[#d63e2d] font-bold">Aenean </span>
              vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
              consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
              in, viverra quis, feugiat a, tellus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
