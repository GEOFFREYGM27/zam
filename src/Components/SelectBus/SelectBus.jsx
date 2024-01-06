import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SelectBus = () => {
  const { departure, arrival, date } = useParams();
  const [buses, setBuses] = useState([]);
  console.log(departure, arrival, date);

  useEffect(() => {
    const getBuses = async () => {
      try {
        const response = await axios.get("https://backends-nine.vercel.app/v1/api/bus");
        if (response.status === 200) {
          setBuses(response.data);
          console.log("buses fetched");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBuses();
  }, [buses]);
  return (
    <div className=" min-h-screen bg-gradient-to-r from-green-200 to-green-500 w-full items-center flex flex-col px-4 md:px-10 lg:px-12 justify-center">
      <div className=" bg-white shadow-lg rounded-3xl max-w-lg w-full p-4 grid">
        {/* Departure Arrival row */}
        <div className="items-center justify-center grid grid-cols-2 border-b pb-2">
          <div className=" grid gap-1">
            <span className="font-extrabold text-lg md:text-xl">Departure</span>
            <p className=" capitalize">{departure}</p>
          </div>
          <div className=" grid gap-1">
            <span className="font-extrabold text-lg md:text-xl">Arrival</span>
            <p className=" capitalize">{arrival}</p>
          </div>
        </div>

        {/* Date and Bus */}
        <div className="items-center justify-center grid grid-cols-2">
          {/* Date */}
          <div>
            <span className="font-extrabold text-lg md:text-xl">Date</span>
            <p className=" capitalize">{date}</p>
          </div>

          {/* Bus */}
          <div>
            <p className="font-extrabold text-lg md:text-xl">Choose Bus</p>

            <select className=" p-2 rounded-md w-full">
              {buses.map((item, i) => (
                <option value="">{item.operatorName}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectBus;
