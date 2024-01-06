import React from "react";
import Services from "./Benefits/Services";
import BusTracker from "./BusTracker/BusTracker";
import Safety from "./SafetySection/Safety";
import { useDispatch, useSelector } from "react-redux";
import { getRoutes } from "../../Redux/routes/action";
import "../../index.css";
import bg from "../../assets/bottomhero.jpg";
import AppAd from "./Awards and Recognition/AppAd";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const currentDate = new Date().toISOString().split("T")[0];

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate < currentDate) {
      alert("Please select a date in the future.");
      // You can also reset the date input value to an empty string here.
    } else {
      setDate(selectedDate);
    }
  };
  const [departure, setDeparture] = React.useState("");
  const [arrival, setArrival] = React.useState("");
  const [date, setDate] = React.useState("");
  const [filteredSources, setFilteredSources] = React.useState([]);
  const [filteredDestinations, setFilteredDestinations] = React.useState([]);
  const history = useHistory();
  const [displayDepartureDropdown, setDisplayDepartureDropdown] =
    React.useState(false);
  const [displayArrivalDropdown, setDisplayArrivalDropdown] =
    React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getRoutes());
  }, [dispatch]);

  const routes = useSelector((state) => state.routesReducer.routes);

  const onDepartureChange = (e) => {
    let value = e.target.value;
    setDeparture(value);

    if (routes) {
      let allSources = [];
      routes.forEach((route) => {
        allSources.push(route.departureLocation.name);
        allSources = [
          ...allSources,
          route.departureLocation.name,
          ...route.departureLocation.subLocations,
        ];
      });
      allSources = Array.from(new Set(allSources));
      let filteredSources = allSources.filter((source) =>
        source.toLowerCase().includes(value.toLowerCase())
      );
      // console.log("Can search: ", routes.length, filteredSources);
      if (filteredSources.length > 0 && value) {
        setFilteredSources(filteredSources);
        setDisplayDepartureDropdown(true);
      } else {
        setDisplayDepartureDropdown(false);
      }
    }
  };
  const onArrivalChange = (e) => {
    let value = e.target.value;
    setArrival(value);
    if (routes) {
      let allDestinations = [];
      routes.forEach((route) => {
        allDestinations.push(route.arrivalLocation.name);
        allDestinations = [
          ...allDestinations,
          route.arrivalLocation.name,
          ...route.arrivalLocation.subLocations,
        ];
      });
      allDestinations = Array.from(new Set(allDestinations));
      let filteredDestinations = allDestinations.filter((source) =>
        source.toLowerCase().includes(value.toLowerCase())
      );

      if (filteredDestinations.length > 0 && value) {
        setFilteredDestinations(filteredDestinations);
        setDisplayArrivalDropdown(true);
      } else {
        setDisplayArrivalDropdown(false);
      }
    }
  };

  const handleBusSelection = () => {
    if (departure.trim() === "") {
      return alert("Please enter valid departure");
    }
    if (arrival.trim() === "") {
      return alert("Please enter valid arrival");
    }
    if (date.trim() === "") {
      return alert("Please select a valid date");
    }
    history.push(`/select-bus/${departure}/${arrival}/${date}`);
  };

  return (
    <div className=" w-full overflow-x-hidden">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className={
          " min-h-[70vh] items-center relative justify-center w-full grid bg-cover bg-no-repeat"
        }
      >
        <div
          className={
            "lg:flex-row lg:rounded-l-3xl flex flex-col lg:w-full w-[90vw] relative shadow-2xl shadow-[#313131] items-center justify-center rounded-3xl"
          }
        >
          {/* Departure */}
          <div className={" w-full lg:rounded-l-3xl lg:w-fit relative "}>
            <input
              type="text"
              placeholder="Departure"
              value={departure}
              onChange={onDepartureChange}
              className="focus:outline-none cursor-pointer lg:rounded-l-3xl rounded-t-3xl lg:rounded-tr-none focus:cursor-text py-6 pl-6 w-full focus-within:bg-green-100 duration-300"
            />
            {displayDepartureDropdown ? (
              <div
                className={
                  " absolute z-40 border bg-white top-[100%] left-0 shadow rounded-md"
                }
              >
                <ul className=" grid gap-2">
                  {filteredSources.map((source) => (
                    <li
                      onClick={() => {
                        setDeparture(source);
                        setDisplayDepartureDropdown(false);
                      }}
                      className="cursor-pointer hover:bg-green-100 w-full md:p-4 p-2"
                    >
                      {source}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {/* Destination */}
          <div className={"w-full lg:w-fit relative"}>
            <input
              type="text"
              placeholder="Destination"
              value={arrival}
              onChange={onArrivalChange}
              className="focus:outline-none py-6 pl-6 w-full focus-within:bg-green-100 duration-300"
            />
            {displayArrivalDropdown ? (
              <div
                className={
                  "absolute z-40 border bg-white top-[100%] left-0 shadow rounded-md"
                }
              >
                <ul className=" grid gap-2">
                  {filteredDestinations.map((destination) => (
                    <li
                      onClick={() => {
                        setArrival(destination);
                        setDisplayArrivalDropdown(false);
                      }}
                      className="cursor-pointer hover:bg-green-100 w-full md:p-4 p-2"
                    >
                      {destination}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div className={" w-full lg:w-fit"}>
            <input
              type="date"
              onfocus="(this.type='date')"
              placeholder="Date"
              value={date}
              onChange={(e) => {
                handleDateChange(e);
              }}
              className="focus:outline-none text-black -z-50 placeholder:text-black focus-within:bg-green-100 w-full lg:w-fit px-6 py-6 lg:pl-6 duration-300"
            />
          </div>
          <button
            onClick={handleBusSelection}
            className={"lg:w-fit w-full text-center rounded-r-3xl"}
          >
            <div className="bg-green-500 hover:bg-green-400 lg:rounded-bl-none rounded-b-3xl lg:rounded-r-3xl delay-100 hover:text-green-900 p-6 active:scale-95 duration-300 lg:w-fit w-full text-white font-semibold">
              Search Bus
            </div>
          </button>
        </div>
      </div>
      {/* <div
        onClick={(e) => handleCloseModal(e.stopPropagation)}
        className={`inset-0 absolute items-center duration-300 justify-center px-4 backdrop-blur-sm bg-slate-200 bg-opacity-70 ${
          openModal ? " scale-100" : " scale-0"
        }`}
      >
        <div className=" w-full min-h-screen items-center justify-center flex-col flex">
          <p className=" font-bold my-4 text-center">
            Note: Currently we are serving our customers only in the below
            mentioned routes.
          </p>
          <div className=" bg-white flex flex-col p-3 rounded-md w-full">
            <div className="grid grid-cols-3 font-bold border-b-2 pb-3 items-center justify-center gap-6">
              <div>Departure</div>
              <div>Arrival</div>
              <div>Bus Count</div>
            </div>
            {routes.map((row) => (
              <div key={row._id} className=" grid grid-cols-3 gap-3">
                <div>{row.departureLocation.name}</div>
                <div>{row.arrivalLocation.name}</div>
                <div>{row.buses}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <BusTracker />
      <Safety />

      <Services />
      <AppAd />
    </div>
  );
};

export default LandingPage;
