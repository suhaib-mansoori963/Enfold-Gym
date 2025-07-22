import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomLoader from "../CustomLoader";

export default function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200); // 200ms ke liye loader dikhayega

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <section>
        <div className="bg-white sm:flex-row text-black flex justify-between items-center p-3 fixed top-0 left-0 w-full shadow-md z-50">
          <img
            src="https://kriesi.at/themes/enfold-gym/wp-content/uploads/sites/63/2016/02/logo.png"
            className="w-[15%] sm:w-[15%] md:w-[20%]"
            alt="logo"
          />
          <button
            className="md:hidden text-3xl"
            onClick={() => setShowMenu(!showMenu)}
          >
            ☰
          </button>
          <nav className="hidden md:flex gap-10 text-[16px] font-semibold text-[#696969] mr-6">
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
        {showMenu && (
          <div className="md:hidden bg-white shadow-md px-6 py-4 absolute top-[60px] left-0 right-0 z-40">
            <div className="flex flex-col gap-4">
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
                      ? "text-red-600 font-semibold"
                      : "hover:text-red-600"
                  }
                  onClick={() => setShowMenu(false)} // close menu on click
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}

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
        <div className="bg-black w-full text-center py-[20px]">
          <p className="text-center text-[14px] text-[#AAAAAA] py-[20px]">
            © Copyright - Enfold Gym - Enfold React Theme by Sohaib Mansoori
          </p>
        </div>
      </section>
    </>
  );
}
