import { useEffect, useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.querySelector(".menu").src = "icon-close.svg";
      document.querySelector(".overlay").classList.remove("hidden");
    } else {
      document.querySelector(".menu").src = "icon-hamburger.svg";
      document.querySelector(".overlay").classList.add("hidden");
    }
  }, [menu]);

  return (
    <div className="col-start-1 col-end-1 row-start-1 row-end-2">
      <div>
        <div className="flex items-center justify-between px-5 pt-10 relative z-50 lg:hidden">
          <div>
            <img src="logo.svg" alt="" />
          </div>
          <div>
            <img
              src="icon-hamburger.svg"
              alt=""
              className="menu"
              onClick={() => setMenu((prev) => !prev)}
            />
          </div>
        </div>
        <div className="absolute w-full h-full bg-black top-0 left-0 z-40 font-josefin text-white px-5 overlay">
          <div className="mt-60 grid gap-5 text-2xl">
            <p>ABOUT</p>
            <p>CAREERS</p>
            <p>EVENTS</p>
            <p>PRODUCTS</p>
            <p>SUPPORT</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-between px-32 py-16 lg:relative lg:z-10">
        <div>
          <img src="logo.svg" alt="" />
        </div>
        <div className="flex gap-8 text-white font-alata">
          <p className="relative cursor-pointer after:hidden hover:after:block after:absolute after:w-1/2 after:h-0.5 after:left-1/2 after:-translate-x-1/2 after:bg-white after:bottom-0 rounded-full">
            About
          </p>
          <p className="relative cursor-pointer after:hidden hover:after:block after:absolute after:w-1/2 after:h-0.5 after:left-1/2 after:-translate-x-1/2 after:bg-white after:bottom-0 rounded-full">
            Careers
          </p>
          <p className="relative cursor-pointer after:hidden hover:after:block after:absolute after:w-1/2 after:h-0.5 after:left-1/2 after:-translate-x-1/2 after:bg-white after:bottom-0 rounded-full">
            Events
          </p>
          <p className="relative cursor-pointer after:hidden hover:after:block after:absolute after:w-1/2 after:h-0.5 after:left-1/2 after:-translate-x-1/2 after:bg-white after:bottom-0 rounded-full">
            Products
          </p>
          <p className="relative cursor-pointer after:hidden hover:after:block after:absolute after:w-1/2 after:h-0.5 after:left-1/2 after:-translate-x-1/2 after:bg-white after:bottom-0 rounded-full">
            Support
          </p>
        </div>
      </div>
    </div>
  );
}
