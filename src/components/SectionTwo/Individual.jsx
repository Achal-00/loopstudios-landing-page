export default function Individual(props) {
  return (
    <div className="grid grid-rows-[0.5fr_1fr] overflow-hidden hover:cursor-pointer">
      <img
        src={props.image}
        alt=""
        className="w-full col-start-1 col-end-1 row-start-1 row-end-3 brightness-75 hover:scale-125 transition-transform duration-1000 ease-in-out"
      />
      <h2 className="col-start-1 col-end-1 row-start-2 row-end-3 text-white pl-5 text-3xl self-end pb-5 font-light w-1/2 relative z-10 lg:w-full lg:pl-10 lg:pb-10">
        {props.first}
        <br />
        {props.second}
      </h2>
    </div>
  );
}
