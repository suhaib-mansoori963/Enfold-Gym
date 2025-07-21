import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomLoader from "../CustomLoader";

export default function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200); // 500ms ke liye loader dikhayega

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <section>
        <div className="bg-white text-black flex justify-between items-center p-3 fixed top-0 left-0 w-full shadow-md z-50">
          <img
            src="https://kriesi.at/themes/enfold-gym/wp-content/uploads/sites/63/2016/02/logo.png"
            className="w-[15%] "
            alt="logo"
          />
          <nav className="flex gap-10 text-[16px] font-semibold !mr-[40px] text-[#696969]">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Classes", path: "/classes" },
              { name: "Price", path: "/price" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "relative text-red-600 after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-red-600 after:left-0 after:-bottom-1"
                    : "relative hover:text-red-600"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* 👇 Loader shown during route change */}
        {loading ? (
          <CustomLoader />
        ) : (
          <div className="pt-[70px]">
            <Outlet />
          </div>
        )}

        <footer className="bg-black w-full px-[50px] h-[400px] flex flex-wrap justify-center items-center text-[#AAAAAA]">
          <div className="p-[40px] w-full md:w-1/3 mt-[-22px]">
            <hr />
            <h1 className="text-[19px] font-bold py-[8px]">INTRESTING INFOS</h1>
            <hr />
            <p className="py-[9px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </div>
          <div className="p-[40px] w-full md:w-1/3">
            <hr />
            <h1 className="text-[19px] font-bold py-[8px]">ENFOLD GYM</h1>
            <hr />
            <p className="py-[6px]">1818 N Vermont Ave</p>
            <p>Los Angeles, CA, United States</p>
            <p className="py-[2px]">(555) 774 433</p>
            <p>office@enfold-gym.com</p>
          </div>
          <div className="p-[40px] w-full md:w-1/3">
            <hr />
            <h1 className="text-[19px] font-bold py-[8px]">OPENING HOURS</h1>
            <hr />
            <p className="py-[6px]">Mo-Fr: 8:00-22:00</p>
            <p className="py-[6px]">Sa: 8:00-24:00</p>
            <p className="py-[6px]">So: 8:00-14:00</p>
          </div>
        </footer>
      </section>
    </>
  );
}
