import logo from "../../../assets/logo.png";
const BusHireFooter = () => {
  return (
    <div>
      <div
        className={
          " w-full flex flex-col items-center justify-center gap-24  pt-24 bg-black text-white"
        }
      >
        <div
          className={
            " w-full grid lg:grid-cols-4 gap-12 px-4 md:px-10 lg:px-12 md:grid-cols-2 grid-cols-1 lg:text-left text-center items-center lg:items-start justify-center"
          }
        >
          <div className={" text-gray-300"}>
            <h3 className=" font-bold mb-2 text-white">Book</h3>
            <p>Bus Ticket</p>
            <p>Bus hire</p>
            <p>Tempo Travellers</p>
          </div>
          <div className={" text-gray-300"}>
            <h3 className=" font-bold mb-2 text-white">About</h3>
            <p>About us</p>
            <p>Contact us</p>
          </div>
          <div className={" text-gray-300"}>
            <h3 className=" font-bold mb-2 text-white">Info</h3>
            <p>T & C</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>FAQ</p>
          </div>
          <div className={" text-gray-300"}>
            <h3 className=" font-bold mb-2 text-white">Our Partners</h3>
            <p>Power tools</p>
            <p>Mazhandu</p>
          </div>
        </div>
        <div
          className={
            " flex w-full items-center border-t-gray-500 bg-white px-4 md:px-10 lg:px-12 text-green-900 gap-4 py-6 justify-center border-t"
          }
        >
          <div>
            <img src={logo} alt="logo" loading="lazy" className=" h-12" />
          </div>
          <div className={""}>Ⓒ 2023 ZamBus All rights reserved</div>
        </div>
      </div>
    </div>
  );
};

export default BusHireFooter;
