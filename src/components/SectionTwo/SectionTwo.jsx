import Cards from "./Cards";

export default function SectionTwo() {
  return (
    <div className="grid gap-10 px-5 lg:grid-cols-[1fr_0.5fr] lg:px-32 lg:gap-20">
      <h1 className="text-3xl text-center text-black font-light lg:text-5xl lg:text-left">
        OUR CREATIONS
      </h1>
      <Cards />
      <button className="border border-black w-1/2 m-auto py-2 tracking-[0.3em] font-normal font-alata lg:col-start-2 lg:row-start-1 lg:m-0 justify-self-end hover:bg-black hover:text-white">
        SEE ALL
      </button>
    </div>
  );
}
