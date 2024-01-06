import { v4 as uuidv4 } from "uuid";
import track from "../../../assets/track.png";
const data = [
  {
    type: "Buses",
    number: "10,000",
    details: "Total buses currently being tracked",
  },
  {
    type: "Routes",
    number: "60,000",
    details: "Total routes covered by live tracking",
  },
  {
    type: "Users",
    number: "40,000",
    details: "Total users using Track My Bus feature",
  },
];

const BusTracker = () => {
  return (
    <div
      className={
        " min-h-screen flex w-full items-center justify-center flex-col px-4 md:px-10 lg:px-12"
      }
    >
      <div
        className={
          "grid lg:grid-cols-2 grid-cols-1 w-full items-center justify-center"
        }
      >
        <div className={" lg:text-left text-center flex flex-col gap-3"}>
          <h2 className=" text-4xl">TRACK MY BUS</h2>
          <p>
            Track your bus with our ‘Track My Bus’ feature and know the exact
            location in real-time. Stay informed and keep your family informed!
          </p>
          <button className=" bg-green-500 lg:w-fit w-full text-white rounded-full font-bold p-3 shadow-lg">
            know more
          </button>
        </div>
        <div className={" w-full flex items-center justify-center"}>
          <img
            src={track}
            alt="tracker"
            loading="lazy"
            className=" object-cover w-full h-full"
          />
        </div>
      </div>

      <hr />
      <div
        className={
          " w-full grid items-center justify-center gap-8 grid-cols-1 shadow-xl md:grid-cols-2 lg:grid-cols-3 bg-green-100 p-6 rounded-3xl"
        }
      >
        {data.map((item) => {
          return (
            <div key={uuidv4()} className={" text-center"}>
              <span className=" text-lg">{item.type} - </span>
              <span className=" font-bold text-lg">{item.number}</span>
              <p className=" text-gray-500">{item.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BusTracker;
