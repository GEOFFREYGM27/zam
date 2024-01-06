import React from "react";
import BusHireForm from "./Bus hire Form/BusHireForm";
import Styles from "./BusHire.module.css";
// import TripTypeContainer from "./Trip Type Container/TripTypeContainer";
import { FaCheckCircle } from "react-icons/fa";
import FAQ from "./FAQ Section/FAQ";
import BusHirePricing from "./Bus Hire Pricing/BusHirePricing";
import { BsCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import bg from "../../assets/bushirebg.png";
import { Player } from "@lottiefiles/react-lottie-player";
import map from "../../assets/zm-02.png";

const BusHire = () => {
  const [active, setActive] = React.useState("Type of trip");
  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );
  console.log("BusHire: ", currentCustomer);
  const handleClick = () => {
    if (active === "Type of trip") {
      setActive("Bus Hire Form");
    } else {
      setActive("Type of trip");
    }
    if (active === "Bus Hire Form") {
      setActive("Type of trip");
    } else {
      setActive("Bus Hire Form");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className={
          "w-full grid lg:grid-cols-2 grid-cols-1 py-8 items-center px-4 md:px-10 lg:px-12 gap-4 justify-center flex-col"
        }
      >
        <div className=" flex flex-col gap-4 md:text-left text-center">
          <div className={"text-4xl font-bold"}>Bus Hire</div>
          <p className={""}>
            Rent vehicles with a driver from the best operators. When it comes
            to renting vehicles with a driver, it's essential to choose from the
            best operators to ensure a safe and comfortable journey.
          </p>
          <button className="bg-green-500 lg:w-fit w-full text-white rounded-full font-bold py-3 px-5 shadow-lg">
            Hire
          </button>
        </div>
        <div className=" h-full w-full flex items-center justify-center">
          <Player
            autoplay
            loop
            src="https://lottie.host/085a03ea-e6ea-485f-918f-3b6d8f2790df/QjfRgfmz0F.json"
            className=" w-full h-full object-cover  z-30"
          />
        </div>
      </div>

      {/* Book in 3 easy steps */}
      <div
        className={
          " flex flex-col gap-8 w-full items-center justify-center py-16 px-4 md:px-10 lg:px-12"
        }
      >
        <div className={" text-4xl"}>Book in 3 easy steps</div>
        <div className=" lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 w-full items-center justify-center gap-6">
          <div className={"flex border p-4 rounded-3xl shadow-lg gap-5"}>
            <div>
              <img
                src="https://www.redbus.in/bushire/static/mwebv2/home/1%20(1).svg"
                alt="1"
                loading="lazy"
                className="h-12"
              />
            </div>
            <p className=" font-bold">Choose the journey type</p>
            <div>
              <img
                src="https://www.redbus.in/bushire/static/webv2/home/Group.png"
                alt=""
                className=" w-56 h-36 object-cover"
              />
            </div>
          </div>
          <div className={" flex border p-4 rounded-3xl shadow-lg gap-5"}>
            <div>
              <img
                src="https://www.redbus.in/bushire/static/mwebv2/home/2%20(2).svg"
                alt="1"
                className="h-12"
              />
            </div>
            <p className=" font-bold">Tell us about your travel plans</p>
            <div>
              <img
                src="https://www.redbus.in/bushire/static/webv2/home/2%20(5).svg"
                alt=""
                className=" w-56 h-36 object-cover"
              />
            </div>
          </div>
          <div className={"flex border p-4 rounded-3xl shadow-lg gap-5"}>
            <div>
              <img
                src="https://www.redbus.in/bushire/static/mwebv2/home/3.svg"
                alt="1"
                className="h-12"
              />
            </div>
            <p className={" font-bold"}>
              Pick the vehicle you like and go places.
            </p>
            <div>
              <img
                src="https://www.redbus.in/bushire/static/webv2/home/3%20(1).svg"
                alt=""
                className=" w-56 h-36 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* With bus hire you get */}
      <div
        className={
          "py-16 items-center justify-center bg-green-100 flex-col flex px-4 md:px-10 lg:px-12 w-full "
        }
      >
        <div className={" text-xl font-semibold my-5"}>
          With Bus Hire you get
        </div>
        <div className="grid lg:grid-cols-5 w-full text-left gap-4 md:gap-8 md:grid-cols-3 grid-cols-2 items-center justify-evenly">
          {/* 1 */}
          <div className={" flex flex-col items-center justify-center w-full"}>
            <div
              className={
                " flex items-center justify-center flex-col gap-4 rounded-3xl bg-white p-4 lg:p-8 border shadow text-center"
              }
            >
              <img
                src="https://www.redbus.in/bushire/static/mwebv2/home/great-price.svg"
                alt="1"
                className=" object-cover h-16 md:h-20"
              />
              <div>
                <div className={""}>Great price and</div>
                <div className={""}>Great value</div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className={"flex flex-col items-center justify-center w-full"}>
            <div
              className={
                " flex items-center justify-center flex-col gap-4 rounded-3xl bg-white p-4 lg:p-8 border shadow text-center"
              }
            >
              <img
                src="https://www.redbus.in/bushire/static/mwebv2/home/safe-vehicles.svg"
                alt="2"
                className=" object-cover h-16 md:h-20"
              />
              <div>
                <div className={""}>Safe /Hygenic</div>
                <div className={""}> Vehicles</div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className={"flex flex-col items-center justify-center w-full"}>
            <div
              className={
                " flex items-center justify-center flex-col gap-4 rounded-3xl bg-white p-4 lg:p-8 border shadow text-center"
              }
            >
              <img
                src="https://www.redbus.in/bushire/static/mwebv2/home/live-tracking.svg?v=1"
                alt="3"
                className=" object-cover h-16 md:h-20"
              />
              <div>
                <div className={""}>Live Track your</div>
                <div className={""}> Journey</div>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className={"flex flex-col items-center justify-center w-full"}>
            <div
              className={
                " flex items-center justify-center flex-col gap-4 rounded-3xl bg-white p-4 lg:p-8 border shadow text-center"
              }
            >
              <img
                src="https://www.redbus.in/bushire/static/mwebv2/home/customer-support.svg"
                alt="4"
                className=" object-cover h-16 md:h-20"
              />
              <div>
                <div className={""}>Best Customer</div>
                <div className={""}> Support</div>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className={"flex flex-col items-center justify-center w-full"}>
            <div
              className={
                " flex items-center justify-center flex-col gap-4 rounded-3xl bg-white p-4 lg:p-8 border shadow text-center"
              }
            >
              <img
                src="https://www.redbus.in/bushire/static/mwebv2/home/verified-drivers.svg"
                alt="5"
                className=" object-cover h-16 md:h-20"
              />
              <div>
                <div className={""}>Verified Drivers/</div>
                <div className={""}> Vehicles</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* vehicle type */}
      <div
        className={
          " py-16 items-center flex flex-col justify-center w-full px-4 md:px-10 lg:px-12"
        }
      >
        <div className={"text-xl font-semibold text-center mb-5"}>
          Vehicle Types
        </div>
        <div className={"w-full gap-6 grid-cols-1 lg:grid-cols-2 grid"}>
          <div className={""}>
            <div
              className={" bg-cover bg-center w-full h-full px-8 py-16 rounded-3xl"}
              style={{
                backgroundImage: `url("https://www.redbus.in/bushire/static/webv2/home/group%20(10).svg")`,
              }}
            >
              <h3 className=" text-lg font-bold">Buses and Mini Buses</h3>
              <p>
                Ideal for more than <br />
                18 people
              </p>
            </div>
          </div>
          <div
            className={"bg-cover bg-center w-full h-full px-8 py-16 rounded-3xl"}
            style={{
              backgroundImage: `url("https://www.redbus.in/bushire/static/webv2/home/group%20(11).svg")`,
            }}
          >
            <div className={""}>
              <h3 className=" text-lg font-bold">Tempo and Travellers</h3>
              <p>
                Ideal for
                <br />
                10-16 people
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Bus hire operates in */}
      <div
        className={
          " min-h-screen items-center justify-center flex flex-col w-full px-4 md:px-10 lg:px-12"
        }
      >
        <h1 className={" text-2xl font-bold text-center"}>
          Bus Hire Operates in
        </h1>
        <div className=" md:grid-cols-2 grid w-full gap-4 items-center justify-center">
          <div className=" grid grid-cols-2 mt-4 md:grid-cols-3 gap-4">
            <div className="flex items-center text-lg gap-2">
              <FaCheckCircle style={{ color: "green", fontSize: "20px" }} />
              <span>Lusaka</span>
            </div>
            <div className="flex items-center text-lg gap-2">
              <FaCheckCircle style={{ color: "green", fontSize: "20px" }} />
              <span>Copperbelt</span>
            </div>
            <div className="flex items-center text-lg gap-2">
              <FaCheckCircle style={{ color: "green", fontSize: "20px" }} />
              <span>Kabwe</span>
            </div>
            <div className="flex items-center text-lg gap-2">
              <FaCheckCircle style={{ color: "green", fontSize: "20px" }} />
              <span>Mansa</span>
            </div>
            <div className="flex items-center text-lg gap-2">
              <FaCheckCircle style={{ color: "green", fontSize: "20px" }} />
              <span>Ndola</span>
            </div>
            <div className="flex items-center text-lg gap-2">
              <FaCheckCircle style={{ color: "green", fontSize: "20px" }} />
              <span>Livingstone</span>
            </div>
            <div className="flex items-center text-lg gap-2">
              <FaCheckCircle style={{ color: "green", fontSize: "20px" }} />
              <span>Kasama</span>
            </div>
            <div className="flex items-center text-lg gap-2">
              <FaCheckCircle style={{ color: "green", fontSize: "20px" }} />
              <span>Chipata</span>
            </div>
            <div className="flex items-center text-lg gap-2">
              <FaCheckCircle style={{ color: "green", fontSize: "20px" }} />
              <span>Solwezi</span>
            </div>
            <div className="flex items-center text-lg gap-2">
              <FaCheckCircle style={{ color: "green", fontSize: "20px" }} />
              <span>Mongu</span>
            </div>
          </div>
          <div className=" relative">
            <img
              src={map}
              alt="map"
              loading="lazy"
              className=" object-cover w-full h-full"
            />
            <div className=" bg-white w-16 h-4 md:w-24 md:h-8 absolute bottom-0 right-0"></div>
          </div>
        </div>
      </div>
      {/* Pricing */}
      <BusHirePricing />
      {/* hire us Whenever */}
      <div className={Styles.VehicleYouCanGet}>
        <div className={Styles.bookInEasySteps_heading}>Hire us whenever</div>
        <div className={Styles.hireuswhenever_paraSection}>
          The buses can be hired not only for tourism, but also for leisure
          activities like picnics, field trips, excursions, and formal
          requirements like corporate events, meetings, weddings, and more.
        </div>
        <div className={Styles.hireuswhenever_paraSection}>
          No matter whether you want to hire/rent a vehicle for a whole day or
          just a few hours, we will meet your needs. Bus for hire is now one
          click away. We also ensure extra comfort, luxurious and hassle-free
          experience, and of course, a punctual and expert service
        </div>
      </div>
      {/* hire and renting a bus with redbus */}
      <div className={Styles.VehicleYouCanGet}>
        <div className={Styles.bookInEasySteps_heading}>
          Hiring/Renting A Bus with redBus
        </div>
        <div className={Styles.hireuswhenever_paraSection}>
          redBus understands that comfort and enjoyment are important while
          travelling. Therefore, we have collaborated with some of the finest
          travel agencies in India to render a perfect trip to our customers.
          The passengers can opt for air conditioned or non-air conditioned
          buses. The buses also have push back and recliner seats making it
          possible for the elderly to travel. Buses are also equipped with LCD
          TV and DVD player for your entertainment. Buses may also come equipped
          with mini-refrigerators and ice boxes for refreshment. Facilities like
          comfy blankets, and charging ports are also available in buses.
        </div>
        <div className={Styles.hireuswhenever_paraSection}>
          You can also book a sleeper coach bus with redBus. For long-distance
          night travel, travelling in a sleeper bus is the best option. Sleeper
          bus booking is possible online with redBus Bus Hire.
        </div>
      </div>
      {/*booking online buses */}
      <div className={Styles.VehicleYouCanGet}>
        <div className={Styles.bookInEasySteps_heading}>
          Booking Buses Online with redBus
        </div>
        <div className={Styles.hireuswhenever_paraSection}>
          redBus has identified the public’s love of travel and has made the
          renting/hiring of buses and tempo travellers easy. We hold almost
          10,000 buses, covering almost 60,000 routes throughout India equipped
          with a 24 hour tracking device, all available for booking online.
        </div>
        <div className={Styles.hireuswhenever_paraSection}>
          You can rent, hire, or book buses online though our official website
          or by downloading our app on your mobile phones.
        </div>
        <div className={Styles.hireuswhenever_paraSection}>
          All you have to do is enter your reason for hiring, your starting
          point, and your place of destination. Following this, you are required
          to enter the type of vehicle you prefer with the number of travellers.
          No booking cost is levied at the time of payment.
        </div>
      </div>
      {/*things to know about bus hire*/}
      <div className={Styles.VehicleYouCanGet}>
        <div className={Styles.bookInEasySteps_heading}>
          Things to know about Bus Hire
        </div>
        <div className={Styles.hireuswhenever_paraSection}>
          redBus is amongst the list of renowned online bus booking websites. It
          has earned its place among the best due to its ability to cater to
          every customer’s specific travel needs while also providing them with
          nothing but the best travel experience. In doing so, they provide
          their customers with a plethora of bus booking options. It works with
          only the best operators and ensures that only the most experienced
          drivers drive buses. redBus makes booking an ordinary vehicle, such as
          a tempo traveller or minibus, for a group vacation much more
          comfortable and more accessible. redBus offers customers with
          air-conditioned as well as non-air-conditioned buses to choose from
          and book. It also provides sleeper buses that operate at night. redBus
          bus hire and redBus bus rental can be done either through the use of
          the official website or the easy to download redBus application.
        </div>
        <div className={Styles.hireuswhenever_paraSection}>
          redBus has been making sure to take care of all its customer’s health
          and also play a role in curbing the further spread of COVID-19. In a
          bid to do just this, redBus has come out with an initiative called
          Safety+ under which there are specific preventive guidelines all buses
          must adhere to. Some of these are as follows:
        </div>
        <ul className={Styles.list}>
          <li>
            <BsCircleFill style={{ marginRight: "10px", fontSize: "7px" }} />
            Passengers, as well as staff and employees, are strictly required to
            wear masks at all times
          </li>
          <li>
            <BsCircleFill style={{ marginRight: "10px", fontSize: "7px" }} />
            Suspension of the complimentary provision of cover-ups temporarily
            to prevent contact spread
          </li>
          <li>
            <BsCircleFill style={{ marginRight: "10px", fontSize: "7px" }} />
            Mandatory requirement of sanitisers and disinfectants
          </li>
          <li>
            <BsCircleFill style={{ marginRight: "10px", fontSize: "7px" }} />
            Deep and thorough sanitation of all vehicles
          </li>
        </ul>
      </div>
      {/* must keep in mind specific tips.  */}
      <div className={Styles.VehicleYouCanGet}>
        <div
          className={Styles.bookInEasySteps_heading}
          style={{ width: "40%" }}
        >
          While booking a bus online, one must keep in mind specific tips. These
          are listed as follows:
        </div>

        <ul className={Styles.list}>
          <li>
            <BsCircleFill style={{ marginRight: "10px", fontSize: "7px" }} />
            It is essential to make sure that the online bus booking service
            that you choose is reliable and trustworthy like redBus.
          </li>
          <li>
            <BsCircleFill style={{ marginRight: "10px", fontSize: "7px" }} />
            Look to see if the online bus booking service of your choice meets
            all your expectations and services all your specific travel needs.
            redBus, through the provision of the filters option, allows its
            passengers to curate a trip by following their travel needs.
          </li>
          <li>
            <BsCircleFill style={{ marginRight: "10px", fontSize: "7px" }} />
            Make sure to carry a sanitiser and mask to all the locations you are
            visiting.
          </li>
        </ul>
      </div>
      {/* subFooter */}
      {/* <SubFooter/>
                Footer
                <BusHireFooter/> */}

      {/* tripTypeContainer
        {active === "Type of trip" && (
          <TripTypeContainer handleClick={handleClick} active={active} />
        )} */}
      {/* busHireForm */}
      {active === "Bus Hire Form" && <BusHireForm handleClick={handleClick} />}
      {/* FAQs */}
      <FAQ />
    </div>
  );
};

export default BusHire;
// https://www.redbus.in/bushire/static/webv2/home/group-4.svg
