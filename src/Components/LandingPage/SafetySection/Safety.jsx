import { v4 as uuidv4 } from "uuid";
import bg from "../../../assets/pexels-nubia-navarro-(nubikini)-386009.jpg";
import { safety } from "../../../constants/safety";

const Safety = () => {
  return (
    <div className=" w-full h-auto lg:min-h-screen gap-12 py-24 bg-green-400 text-green-900 px-4 md:px-10 lg:px-12 items-center justify-center flex flex-col">
      <div className=" w-full text-center flex flex-col gap-3 items-center justify-center">
        <h2 className=" font-bold text-3xl">Introducing Safety++</h2>
        <h3 className=" text-green-700 font-semibold">
          Opt to Travel Safe with ZamBus.Look for buses with &nbsp;
          <span>safety+</span>&nbsp;tag while booking your journey
        </h3>
        <button className=" bg-white w-fit shadow-lg border font-bold text-green-800 hover:scale-95 active:scale-105 duration-300 rounded-full p-3">
          Know more
        </button>
      </div>

      <div className="items-center gap-8 grid lg:grid-cols-2 grid-cols-1 justify-center w-full">
        <div className="grid gap-5">
          {safety.map((item) => {
            return (
              <div
                key={uuidv4()}
                className="flex items-center group md:hover:-translate-y-2 hover:shadow-2xl duration-300 gap-4 bg-white rounded-3xl p-4 shadow-lg"
              >
                <div className=" rounded-full group-hover:rotate-6 duration-200 flex items-center justify-center bg-green-500 text-white p-4 group-hover:bg-green-400 text-3xl md:text-4xl lg:text-5xl">
                  {item.icon}
                </div>
                <div className="">
                  <h3 className=" font-bold text-lg md:text-xl">
                    {item.heading}
                  </h3>
                  <p>{item.descriptions}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" w-full flex items-center overflow-hidden h-full group justify-center rounded-3xl">
          <img
            src={bg}
            alt="bottom hero"
            loading="lazy"
            className=" object-cover w-full h-full group-hover:scale-110 duration-700 delay-200 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Safety;
