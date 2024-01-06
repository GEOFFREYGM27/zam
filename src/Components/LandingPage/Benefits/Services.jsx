import { v4 as uuidv4 } from "uuid";
import { data } from "../../../constants/services";

const Services = () => {
  return (
    <div
      className={
        " flex flex-col gap-6 w-full items-center justify-center min-h-screen py-24 px-4 md:px-10 lg:px-12"
      }
    >
      <div className={""}>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fagpartseducation.com%2Fwp-content%2Fuploads%2F2016%2F02%2Four-promise_icon.png&f=1&nofb=1"
          alt="header"
          loading="lazy"
          className="h-24"
        />
      </div>
      <h1 className=" text-2xl font-bold">We promise to deliver</h1>
      <div
        className={
          " w-full grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4 items-center grid justify-center"
        }
      >
        {data.map((item) => {
          return (
            <div
              key={uuidv4()}
              className={
                "flex flex-col items-center gap-2 border p-4 rounded-3xl shadow justify-center text-center"
              }
            >
              <img
                src={item.img}
                alt="item"
                loading="lazy"
                className=" h-24 object-cover"
              />

              <p className=" font-bold">{item.title}</p>
              <p className={"text-sm text-gray-500"}>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
