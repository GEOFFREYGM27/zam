import { useState } from "react";
import { RiArrowDropUpLine } from "react-icons/ri";
const FAQ = () => {
  const [arrow1, setArrow1] = useState("downArrow");
  const [arrow2, setArrow2] = useState("downArrow");
  const [arrow3, setArrow3] = useState("downArrow");
  const [arrow4, setArrow4] = useState("downArrow");
  const [arrow5, setArrow5] = useState("downArrow");
  const [arrow6, setArrow6] = useState("downArrow");
  const [arrow7, setArrow7] = useState("downArrow");
  const [arrow8, setArrow8] = useState("downArrow");
  const [arrow9, setArrow9] = useState("downArrow");
  const [arrow10, setArrow10] = useState("downArrow");
  const [arrow11, setArrow11] = useState("downArrow");
  const [arrow12, setArrow12] = useState("downArrow");

  const handleArrow1 = () => {
    if (arrow1 === "downArrow") {
      setArrow1("upArrow");
    } else {
      setArrow1("downArrow");
    }
    if (arrow1 === "upArrow") {
      setArrow1("downArrow");
    } else {
      setArrow1("upArrow");
    }
  };
  const handleArrow2 = () => {
    if (arrow2 === "downArrow") {
      setArrow2("upArrow");
    } else {
      setArrow2("downArrow");
    }
    if (arrow2 === "upArrow") {
      setArrow2("downArrow");
    } else {
      setArrow2("upArrow");
    }
  };
  const handleArrow3 = () => {
    if (arrow3 === "downArrow") {
      setArrow3("upArrow");
    } else {
      setArrow3("downArrow");
    }
    if (arrow3 === "upArrow") {
      setArrow3("downArrow");
    } else {
      setArrow3("upArrow");
    }
  };
  const handleArrow4 = () => {
    if (arrow4 === "downArrow") {
      setArrow4("upArrow");
    } else {
      setArrow4("downArrow");
    }
    if (arrow4 === "upArrow") {
      setArrow4("downArrow");
    } else {
      setArrow4("upArrow");
    }
  };
  const handleArrow5 = () => {
    if (arrow5 === "downArrow") {
      setArrow5("upArrow");
    } else {
      setArrow5("downArrow");
    }
    if (arrow5 === "upArrow") {
      setArrow5("downArrow");
    } else {
      setArrow5("upArrow");
    }
  };
  const handleArrow6 = () => {
    if (arrow6 === "downArrow") {
      setArrow6("upArrow");
    } else {
      setArrow6("downArrow");
    }
    if (arrow6 === "upArrow") {
      setArrow6("downArrow");
    } else {
      setArrow6("upArrow");
    }
  };
  const handleArrow7 = () => {
    if (arrow5 === "downArrow") {
      setArrow7("upArrow");
    } else {
      setArrow7("downArrow");
    }
    if (arrow7 === "upArrow") {
      setArrow7("downArrow");
    } else {
      setArrow7("upArrow");
    }
  };
  const handleArrow8 = () => {
    if (arrow8 === "downArrow") {
      setArrow8("upArrow");
    } else {
      setArrow8("downArrow");
    }
    if (arrow8 === "upArrow") {
      setArrow8("downArrow");
    } else {
      setArrow8("upArrow");
    }
  };
  const handleArrow9 = () => {
    if (arrow9 === "downArrow") {
      setArrow9("upArrow");
    } else {
      setArrow9("downArrow");
    }
    if (arrow9 === "upArrow") {
      setArrow9("downArrow");
    } else {
      setArrow9("upArrow");
    }
  };
  const handleArrow10 = () => {
    if (arrow10 === "downArrow") {
      setArrow10("upArrow");
    } else {
      setArrow10("downArrow");
    }
    if (arrow10 === "upArrow") {
      setArrow10("downArrow");
    } else {
      setArrow10("upArrow");
    }
  };
  const handleArrow11 = () => {
    if (arrow11 === "downArrow") {
      setArrow11("upArrow");
    } else {
      setArrow11("downArrow");
    }
    if (arrow11 === "upArrow") {
      setArrow11("downArrow");
    } else {
      setArrow11("upArrow");
    }
  };
  const handleArrow12 = () => {
    if (arrow12 === "downArrow") {
      setArrow12("upArrow");
    } else {
      setArrow12("downArrow");
    }
    if (arrow12 === "upArrow") {
      setArrow12("downArrow");
    } else {
      setArrow12("upArrow");
    }
  };

  return (
    <div
      className={
        " w-full items-center flex justify-center flex-col px-4 md:px-10 lg:px-12 mb-12"
      }
    >
      <div className={" text-4xl font-bold my-4"}>FAQs</div>
      <div className=" w-full items-center justify-center grid md:max-w-lg lg:max-w-xl">
        <button
          onClick={handleArrow1}
          className={
            " bg-green-100 mb-1 rounded-t-3xl p-4 flex items-center justify-between"
          }
        >
          <div className={""}>What is ZamBus Hire?</div>
          {arrow1 === "downArrow" && (
            <RiArrowDropUpLine className=" rotate-180" size={32} />
          )}
          {arrow1 === "upArrow" && <RiArrowDropUpLine size={32} />}
        </button>
        {arrow1 === "upArrow" && (
          <div className={" mb-3 bg-green-300 rounded-b-3xl p-4"}>
            ZamBus Hire helps you rent a vehicle from the best operators in your
            city.
          </div>
        )}
        <button
          onClick={handleArrow2}
          className={
            " bg-green-100 mb-1 rounded-t-3xl p-4 flex items-center justify-between"
          }
        >
          <div className={""}>How does it work?</div>
          {arrow2 === "downArrow" && (
            <RiArrowDropUpLine className=" rotate-180" size={32} />
          )}
          {arrow2 === "upArrow" && <RiArrowDropUpLine size={32} />}
        </button>
        {arrow2 === "upArrow" && (
          <div className={"mb-3 bg-green-300 rounded-b-3xl p-4"}>
            We ask you a few simple questions regarding your trip. We work with
            the best operators in your city to get you detailed quotations, so
            that you get the best deal.
          </div>
        )}
        <button
          onClick={handleArrow3}
          className={
            "bg-green-100 mb-1 rounded-t-3xl p-4 flex items-center justify-between"
          }
        >
          <div className={""}>Which cities are you operational in?</div>
          {arrow3 === "downArrow" && (
            <RiArrowDropUpLine className=" rotate-180" size={32} />
          )}
          {arrow3 === "upArrow" && <RiArrowDropUpLine size={32} />}
        </button>
        {arrow3 === "upArrow" && (
          <div className={"mb-3 bg-green-300 rounded-b-3xl p-4"}>
            We are currently operational in Bangalore, Mumbai, Pune, Chennai,
            Hyderabad, Delhi, Ahmedabad, Madurai, Mysore, Visakhapatnam, Surat,
            Vadodara, Vijayawada, Coimbatore, Goa, Pondicherry, Erode, Ooty,
            Udaipur, Jaipur, Guwahati, Trichy and Kolkata.
          </div>
        )}
        <button
          onClick={handleArrow4}
          className={
            "bg-green-100 mb-1 rounded-t-3xl p-4 flex items-center justify-between"
          }
        >
          <div className={""}>What happens if the vehicle breaks down?</div>
          {arrow4 === "downArrow" && (
            <RiArrowDropUpLine className=" rotate-180" size={32} />
          )}
          {arrow4 === "upArrow" && <RiArrowDropUpLine size={32} />}
        </button>
        {arrow4 === "upArrow" && (
          <div className={"mb-3 bg-green-300 rounded-b-3xl p-4"}>
            Since we work with the best operators, the vehicles are usually
            reliable. In case of a breakdown, it is the operator's
            responsibility to replace the vehicle during the journey.
          </div>
        )}
        <button
          onClick={handleArrow5}
          className={
            "bg-green-100 mb-1 rounded-t-3xl p-4 flex items-center justify-between"
          }
        >
          <div className={""}>How are the Kilometers calculated?</div>
          {arrow5 === "downArrow" && (
            <RiArrowDropUpLine className=" rotate-180" size={32} />
          )}
          {arrow5 === "upArrow" && <RiArrowDropUpLine size={32} />}
        </button>
        {arrow5 === "upArrow" && (
          <div className={"mb-3 bg-green-300 rounded-b-3xl p-4"}>
            The 'Kilometers' are calculated basis the return trip distance
            between the boarding point and the destination. Any additional
            distance covered within the city between the Garage and the pickup
            point is also included in it.{" "}
          </div>
        )}
        <button
          onClick={handleArrow6}
          className={
            "bg-green-100 mb-1 rounded-t-3xl p-4 flex items-center justify-between"
          }
        >
          <div className={""}>What are the payment terms?</div>
          {arrow6 === "downArrow" && (
            <RiArrowDropUpLine className=" rotate-180" size={32} />
          )}
          {arrow6 === "upArrow" && <RiArrowDropUpLine size={32} />}
        </button>
        {arrow6 === "upArrow" && (
          <div className={"mb-3 bg-green-300 rounded-b-3xl p-4"}>
            You can confirm your reservation by paying a small booking fee,
            typically equal to 25% of the base fare. The balance can be paid
            directly to us through online modes till two days before the start
            of the journey or to the operator in cash at the time of boarding.
          </div>
        )}
        <button
          onClick={handleArrow7}
          className={
            "bg-green-100 mb-1 rounded-t-3xl p-4 flex items-center justify-between"
          }
        >
          <div className={""}>What if I need to cancel my trip?</div>
          {arrow7 === "downArrow" && (
            <RiArrowDropUpLine className=" rotate-180" size={32} />
          )}
          {arrow7 === "upArrow" && <RiArrowDropUpLine size={32} />}
        </button>
        {arrow7 === "upArrow" && (
          <div className={"mb-3 bg-green-300 rounded-b-3xl p-4"}>
            What if I need to cancel my trip? Cancellation policy is specific to
            each operator and is listed against the quotes on the quotations
            page.
          </div>
        )}
        <button
          onClick={handleArrow8}
          className={
            "bg-green-100 mb-1 rounded-t-3xl p-4 flex items-center justify-between"
          }
        >
          <div className={""}>How are toll & taxes calculated?</div>
          {arrow8 === "downArrow" && (
            <RiArrowDropUpLine className=" rotate-180" size={32} />
          )}
          {arrow8 === "upArrow" && <RiArrowDropUpLine size={32} />}
        </button>
        {arrow8 === "upArrow" && (
          <div className={"mb-3 bg-green-300 rounded-b-3xl p-4"}>
            Tolls and Interstate taxes are best estimates only. If these amounts
            are included in the fare, you'll be charged/reimbursed for any
            difference between the actuals and estimations, as applicable.
          </div>
        )}
        <button
          onClick={handleArrow9}
          className={
            "bg-green-100 mb-1 rounded-t-3xl p-4 flex items-center justify-between"
          }
        >
          <div className={" text-left"}>
            What are the benefits of booking or renting a vehicle with ZamBus?
          </div>
          {arrow9 === "downArrow" && (
            <RiArrowDropUpLine className=" rotate-180" size={32} />
          )}
          {arrow9 === "upArrow" && <RiArrowDropUpLine size={32} />}
        </button>
        {arrow9 === "upArrow" && (
          <div className={"mb-3 bg-green-300 rounded-b-3xl p-4"}>
            ZamBus is among the leading online booking services and for a good
            reason. It provides its customers with a plethora of options to
            choose from when it comes to operators, bus types, amenities, etc.
            and collaborates with the top travel agencies in the country.
            Travellers can choose between a bus with air conditioning and a
            non-air conditioned bus. The buses offer comfortable seating which
            boosts passenger age inclusivity and may also contain amenities like
            a mini-refrigerator or icebox.
          </div>
        )}
        <button
          onClick={handleArrow10}
          className={
            "bg-green-100 mb-1 rounded-t-3xl p-4 flex items-center justify-between"
          }
        >
          <div className={" text-left"}>
            What are the COVID-19 measures being taken with ZamBus?
          </div>
          {arrow10 === "downArrow" && (
            <RiArrowDropUpLine className=" rotate-180" size={32} />
          )}
          {arrow10 === "upArrow" && <RiArrowDropUpLine size={32} />}
        </button>
        {arrow10 === "upArrow" && (
          <div className={"mb-3 bg-green-300 rounded-b-3xl p-4"}>
            ZamBus, in light of the recent rapid spread of COVID-19, has
            introduced a new move which they call Safety+. Under Safety+, all
            buses are required to adhere to certain strict rules and guidelines.
            Some of these include regular and strict temperature checks along
            with advisories, making the use of masks mandatory for all employees
            as well as passengers, and sanitisers must be provided before
            boarding and present on all buses at all times.
          </div>
        )}
        <button
          onClick={handleArrow11}
          className={
            "bg-green-100 mb-1 rounded-t-3xl p-4 flex items-center justify-between"
          }
        >
          <div className={" text-left"}>
            How long is ZamBus Bus Hire customer care available?
          </div>
          {arrow11 === "downArrow" && (
            <RiArrowDropUpLine className=" rotate-180" size={32} />
          )}
          {arrow11 === "upArrow" && <RiArrowDropUpLine size={32} />}
        </button>
        {arrow11 === "upArrow" && (
          <div className={"mb-3 bg-green-300 rounded-b-3xl p-4"}>
            ZamBus customer care is available at all hours, that is, 24/7. The
            customer care staff are friendly and can be asked about any ZamBus
            bus hire questions without hesitation.
          </div>
        )}
        <button
          onClick={handleArrow12}
          className={
            "bg-green-100 mb-1 rounded-t-3xl p-4 flex items-center justify-between"
          }
        >
          <div className={" text-left"}>
            Will there be blankets and linens provided in a complementary
            fashion aboard the Vehicle with ZamBus?
          </div>
          {arrow12 === "downArrow" && (
            <RiArrowDropUpLine className=" rotate-180" size={32} />
          )}
          {arrow12 === "upArrow" && <RiArrowDropUpLine size={32} />}
        </button>
        {arrow12 === "upArrow" && (
          <div className={"mb-3 bg-green-300 rounded-b-3xl p-4"}>
            For the time being, due to the current situation created by the
            pandemic, ZamBus will not be allowing the provision of blankets and
            various other cover-ups. This measure falls under the Safety+
            guidelines.
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
