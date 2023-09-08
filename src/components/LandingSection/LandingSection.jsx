import Navbar from "./Navbar";

const width = screen.width;

export default function LandingSection() {
  return (
    <div className="grid lg:grid-rows-[1fr_2fr]">
      <img
        src={width < 768 ? "mobile/image-hero.jpg" : "desktop/image-hero.jpg"}
        alt=""
        className="col-start-1 col-end-1 row-start-1 row-end-3 w-full lg:brightness-50 lg:relative lg:z-0"
      />
      <Navbar />
      <div className="col-start-1 col-end-1 row-start-2 row-end-3 lg:px-32 lg:relative lg:z-10">
        <h1 className="text-white font-josefin border-2 w-11/12 m-auto text-4xl p-5 lg:w-1/2 lg:m-0 lg:text-6xl lg:p-8">
          IMMERSIVE
          <br />
          EXPERIENCES
          <br />
          THAT {width < 1024 && <br />}DELIVER
        </h1>
      </div>
    </div>
  );
}
