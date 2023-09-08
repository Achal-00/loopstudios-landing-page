export default function Footer() {
  return (
    <div className="bg-black grid py-10 justify-items-center gap-5 font-alata mt-28 lg:grid-cols-[1fr_1fr] lg:justify-items-start lg:px-32">
      <div className="self-center">
        <img src="logo.svg" alt="" />
      </div>
      <div className="text-white py-5 flex flex-col gap-3 text-center lg:row-start-2 lg:row-end-3 lg:flex-row lg:py-0 lg:gap-12">
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
      <div className="flex gap-3 lg:justify-self-end self-center">
        <img
          src="icon-facebook.svg"
          alt=""
          className="lg:cursor-pointer hover:scale-125 transition-transform duration-200"
        />
        <img
          src="icon-twitter.svg"
          alt=""
          className="lg:cursor-pointer hover:scale-125 transition-transform duration-200"
        />
        <img
          src="icon-pinterest.svg"
          alt=""
          className="lg:cursor-pointer hover:scale-125 transition-transform duration-200"
        />
        <img
          src="icon-instagram.svg"
          alt=""
          className="lg:cursor-pointer hover:scale-125 transition-transform duration-200"
        />
      </div>
      <div className="lg:justify-self-end">
        <p className="text-very-dark-grey">
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  );
}
