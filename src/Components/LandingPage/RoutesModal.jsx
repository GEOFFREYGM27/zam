import { useSelector } from "react-redux";

export default function RoutesModal() {
  const routes = useSelector((state) => state.routesReducer.routes);

  return (
    <div className=" w-full min-h-screen items-center justify-center flex-col flex">
      <p className=" text-red-300">
        Note: Currently we are serving our customers only in the below mentioned
        routes.
      </p>
      <div className=" bg-white flex flex-col p-3 rounded-md">
        <div className="grid grid-cols-3 items-center justify-center gap-6">
          <div>Departure</div>
          <div>Arrival</div>
          <div>Bus Count</div>
        </div>
        {routes.map((row) => (
          <div key={row._id} className=" grid grid-cols-3">
            <div>{row.departureLocation.name}</div>
            <div>{row.arrivalLocation.name}</div>
            <div>{row.buses}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
