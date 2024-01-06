import Styles from "./BusHirePricing.module.css";

const BusHirePricing = () => {
  return (
    <div
      className={
        " px-4 md:px-10 lg:px-12 w-full bg-green-100 items-center py-16 justify-center flex-col flex text-center"
      }
    >
      <div className={" text-4xl font-bold"}>Pricing</div>
      <div className={" md:max-w-lg w-full"}>
        By booking your vehicle via redBus, you knock out middlemen charges, and
        charges associated with bookings made in advance. redBus also provides
        packages for tourists in cities where the service is available.Charges
        for vehicles depend on the city in which they are hired. Starting base
        prices are mentioned below:
      </div>
      <div className={""}>
        <table
          className={Styles.tableSection}
          style={{ backgroundColor: "white" }}
        >
          <tr>
            <th></th>
            <th>12 Seater AC</th>
            <th>25 Seater AC</th>
            <th>40 Seater AC</th>
            <th>49 Seater AC</th>
          </tr>
          <tr>
            <th>Price Per Km</th>
            <td>K 16 / km</td>
            <td>K 25 / km</td>
            <td>K 40 / km</td>
            <td>K 45 / km</td>
          </tr>
          <tr>
            <th>Minimum Km</th>
            <td>250 km</td>
            <td>300 km</td>
            <td>300 km</td>
            <td>300 km</td>
          </tr>
          <tr>
            <th>Driver Charges</th>
            <td>K 300 / day</td>
            <td>K 400 / day</td>
            <td>K 500 / day</td>
            <td>K 450 / day</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BusHirePricing;
