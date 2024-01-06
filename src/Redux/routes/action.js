import * as actionTypes from "./actionTypes";
import axios from "axios";
const getRoutesRequest = () => {
  return {
    type: actionTypes.GET_ROUTES_REQUEST,
  };
};
const getRoutesSuccess = (routes) => {
  return {
    type: actionTypes.GET_ROUTES_SUCCESS,
    payload: routes,
  };
};
const getRoutesFailure = () => {
  return {
    type: actionTypes.GET_ROUTES_FAILURE,
  };
};
const getRoutes = () => {
  return async (dispatch) => {
    dispatch(getRoutesRequest());
    try {
      const res = await axios.get(
        `https://backends-nine.vercel.app/v1/api/routes`
      );
      dispatch(getRoutesSuccess(res.data));
      console.log("routes fetched");
    } catch (err) {
      dispatch(getRoutesFailure());
    }
  };
};

export { getRoutes };
