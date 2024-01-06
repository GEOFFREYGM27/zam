import React from "react";
import styles from "./Navbar.module.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import {
  loginSuccess,
  loginFailure,
  logout,
  addCustomerMongo,
} from "../../Redux/auth/actions";
import ComingSoonModal from "../../Elements/ComingSoonModal";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [isModelOpen, setIsModelOpen] = React.useState(false);
  const [open, setOPen] = React.useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );
  const setIsOpen = (bool) => {
    setIsModelOpen(bool);
  };
  console.log("Here: ", isLoggedIn, currentCustomer);
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setIsOpen(true);
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <div className=" z-40">
      <div className="bg-white overflow-hidden border-b border-green-100 flex w-full py-2 px-4 z-40 md:px-10 lg:px-12 shadow-md justify-between items-center">
        <ComingSoonModal isOpen={isModelOpen} setIsOpen={setIsModelOpen} />
        <Link
          to={"/"}
          className="text-green-500 gap-1 flex items-center justify-center"
        >
          <img
            src={logo}
            alt="logo"
            loading="lazy"
            className="object-cover h-16 md:h-20"
          />
          <p className=" text-lg text-green-900 font-extrabold">ZamBus</p>
        </Link>
        <ul
          className={
            "lg:flex hidden gap-8 text-green-900 items-center font-semibold"
          }
        >
          <li className="hover:text-green-500 duration-200">
            <Link to="/">BUS TICKETS</Link>
          </li>
          <li className="hover:text-green-500 duration-200">
            <Link to="/bus-hire">BUS HIRE</Link>
          </li>
        </ul>
        <div
          className={
            "list-none lg:flex hidden items-center text-green-900 font-semibold"
          }
        >
          {/* <li onClick={() => setIsOpen(true)}>HELP</li> */}
          <li className=" cursor-pointer" onClick={() => setIsOpen(true)}>
            MANAGE BOOKING
          </li>
          <li>
            <div>
              <RiArrowDropDownLine
                className={styles.icons}
                onClick={handleClick}
              />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={() => setIsOpen(true)}
              >
                <MenuItem onClick={handleClose}>Bus Ticket</MenuItem>
                <MenuItem onClick={handleClose}>Cancel</MenuItem>
                <MenuItem onClick={handleClose}>Reschedule</MenuItem>
                <MenuItem onClick={handleClose}>Show My Ticket</MenuItem>
                <MenuItem onClick={handleClose}>Email / SMS</MenuItem>
              </Menu>
            </div>
          </li>
          <li>
            <MdAccountCircle
              className={styles.icons}
              style={{ fontSize: "30px" }}
            />
          </li>
          <li>
            <div>
              <RiArrowDropDownLine
                className={styles.icons}
                onClick={handleClick2}
              />

              {isLoggedIn && currentCustomer ? (
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl2}
                  keepMounted
                  open={Boolean(anchorEl2)}
                  onClose={handleClose2}
                >
                  <MenuItem
                    onClick={handleClose2}
                    //onClick={() => setIsOpen(true)}
                  >
                    My Trips
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose2}
                    //onClick={() => setIsOpen(true)}
                  >
                    Wallet/Cards
                  </MenuItem>
                  <MenuItem onClick={handleClose2}>
                    <Link
                      to="/my-profile"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      My Profile
                    </Link>
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose2}
                    //onClick={() => setIsOpen(true)}
                  >
                    Wallet
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>SignOut</MenuItem>
                </Menu>
              ) : (
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl2}
                  keepMounted
                  open={Boolean(anchorEl2)}
                  onClose={handleClose2}
                >
                  <MenuItem onClick={handleClose2}>
                    <GoogleLogin
                      // clientId="493530183469-naj3i844vuh8ru5usav057k5kuabc3iq.apps.googleusercontent.com"
                      clientId="223259213532-kgr7a7cm749vloebvko6kun3shc10iri.apps.googleusercontent.com"
                      onSuccess={(response) => {
                        console.log(
                          "---------------------------CALLED-------------------------------"
                        );
                        dispatch(loginSuccess(response));
                        dispatch(addCustomerMongo(response.profileObj));
                      }}
                      onFailure={(response) => {
                        dispatch(loginFailure(response));
                      }}
                      cookiePolicy={"single_host_origin"}
                    />
                  </MenuItem>
                </Menu>
              )}
            </div>
          </li>
        </div>

        {/* Mobile menu */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setOPen(!open)}
            className=" text-green-500 relative"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className={`w-8 h-8 ${
                  open ? "rotate-90" : ""
                } duration-300 delay-150`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`absolute lg:hidden w-full min-h-screen ${
          open ? " scale-x-100" : " scale-x-0"
        } duration-300 z-40 bg-white h-screen origin-right`}
      >
        <div className=" flex flex-col gap-5 text-center items-center justify-center list-none py-24">
          <li>
            <Link onClick={() => setOPen(false)} to="/">
              BUS TICKETS
            </Link>
          </li>
          <li>
            <Link onClick={() => setOPen(false)} to="/bus-hire">
              BUS HIRE
            </Link>
          </li>
          <li onClick={() => setIsOpen(true)}>MANAGE BOOKING</li>
          <li>
            <div>
              <RiArrowDropDownLine
                className={styles.icons}
                onClick={handleClick}
              />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={() => setIsOpen(true)}
              >
                <MenuItem onClick={handleClose}>Bus Ticket</MenuItem>
                <MenuItem onClick={handleClose}>Cancel</MenuItem>
                <MenuItem onClick={handleClose}>Reschedule</MenuItem>
                <MenuItem onClick={handleClose}>Show My Ticket</MenuItem>
                <MenuItem onClick={handleClose}>Email / SMS</MenuItem>
              </Menu>
            </div>
          </li>
          <li>
            <MdAccountCircle
              className={styles.icons}
              style={{ fontSize: "30px" }}
            />
          </li>
          <li>
            <div className="flex">
              <RiArrowDropDownLine
                className={styles.icons}
                onClick={handleClick2}
              />

              {isLoggedIn && currentCustomer ? (
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl2}
                  keepMounted
                  open={Boolean(anchorEl2)}
                  onClose={handleClose2}
                >
                  <MenuItem
                    onClick={handleClose2}
                    //onClick={() => setIsOpen(true)}
                  >
                    My Trips
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose2}
                    //onClick={() => setIsOpen(true)}
                  >
                    Wallet/Cards
                  </MenuItem>
                  <MenuItem onClick={handleClose2}>
                    <Link
                      to="/my-profile"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      My Profile
                    </Link>
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose2}
                    //onClick={() => setIsOpen(true)}
                  >
                    Wallet
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>SignOut</MenuItem>
                </Menu>
              ) : (
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl2}
                  keepMounted
                  open={Boolean(anchorEl2)}
                  onClose={handleClose2}
                >
                  <MenuItem onClick={handleClose2}>
                    <GoogleLogin
                      // clientId="493530183469-naj3i844vuh8ru5usav057k5kuabc3iq.apps.googleusercontent.com"
                      clientId="446362734274-cq1j14nuk3ov3elpe64dbnosinakaoof.apps.googleusercontent.com"
                      onSuccess={(response) => {
                        console.log(
                          "---------------------------CALLED-------------------------------"
                        );
                        dispatch(loginSuccess(response));
                        dispatch(addCustomerMongo(response.profileObj));
                      }}
                      onFailure={(response) => {
                        dispatch(loginFailure(response));
                      }}
                      cookiePolicy={"single_host_origin"}
                    />
                  </MenuItem>
                </Menu>
              )}
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
