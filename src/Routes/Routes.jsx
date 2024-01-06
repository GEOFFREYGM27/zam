import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import StarRating from "../Components/StarRating";

// Lazy load your components
const LandingPage = React.lazy(() =>
  import("../Components/LandingPage/LandingPage")
);
const SelectBus = React.lazy(() => import("../Components/SelectBus/SelectBus"));
const Profile = React.lazy(() => import("../Components/Profile Page/Profile"));
const Payment = React.lazy(() => import("../Components/Payment Page/Payment"));
const BusBookingForm = React.lazy(() =>
  import("../Components/Bus Booking Form/BusBookingForm")
);
const BusHire = React.lazy(() =>
  import("../Components/Bus hire Main Page/BusHire")
);
const BusServiceCardPage = React.lazy(() =>
  import("../Components/BusServiceSection/BusServiceCard/BusServiceCardPage")
);
const BusServiceDetailsPage = React.lazy(() =>
  import(
    "../Components/BusServiceSection/BusServiceDetails/BusServiceDetailsPage"
  )
);
const BusServicePaymentPage = React.lazy(() =>
  import(
    "../Components/BusServiceSection/BusServicePayment/BusServivePaymentPage"
  )
);
const Error = React.lazy(() => import("../Components/Error/Error"));

function Loading() {
  return (
    <div className=" min-h-screen items-center justify-center w-full">
      <div className=" w-32 h-32 rounded-full border-4 border-t-0 border-green-500"></div>
    </div>
  );
}
const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={Loading}>
            <LandingPage />
          </Suspense>
        </Route>
        <Route path="/select-bus/:departure/:arrival/:date" exact>
          <Suspense fallback={Loading}>
            <SelectBus />
          </Suspense>
        </Route>
        <Route path="/my-profile" exact>
          <Suspense fallback={Loading}>
            <Profile />
          </Suspense>
        </Route>
        <Route path="/payment-page" exact>
          <Suspense fallback={Loading}>
            <Payment />
          </Suspense>
        </Route>
        <Route path="/booking-form" exact>
          <Suspense fallback={Loading}>
            <BusBookingForm />
          </Suspense>
        </Route>
        <Route path="/bus-hire" exact>
          <Suspense fallback={Loading}>
            <BusHire />
          </Suspense>
        </Route>
        <Route path="/bus-hire-card" exact>
          <Suspense fallback={Loading}>
            <BusServiceCardPage />
          </Suspense>
        </Route>
        <Route path="/rating" Component={ StarRating} />
        <Route path="/bus-hire-details/:id" exact>
          <Suspense fallback={Loading}>
            <BusServiceDetailsPage />
          </Suspense>
        </Route>
        <Route path="/payments-hire" exact>
          <Suspense fallback={Loading}>
            <BusServicePaymentPage />
          </Suspense>
        </Route>
        <Route>
          <Suspense fallback={Loading}>
            <Error></Error>
          </Suspense>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
