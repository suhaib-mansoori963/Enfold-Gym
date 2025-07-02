import { Link, NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <section className="">
      <div className="bg-white text-black flex justify-between items-center p-3 fixed top-0 left-0 w-full  shadow-md z-50 ">
        <img
          src="https://kriesi.at/themes/enfold-gym/wp-content/uploads/sites/63/2016/02/logo.png"
          className="w-[15%]"
        />
        <nav className="flex gap-10 text-[16px] font-semibold !mr-[40px]">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Classes", path: "/classes" },
            { name: "Price", path: "/price" },
            { name: "News", path: "/news" },
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

      <hr />
      <Outlet />
    </section>
  );
}

export default Layout;
