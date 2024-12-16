import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Loginpage() {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [justifyActiveDriver, setJustifyActiveDriver] = useState("driver");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const [signupDataDriver, setSignupDataDriver] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",

    vehicalreq: "",
    vehicalchassis: "",
    vehicalmodel: "",
    vehicalrcno: "",
    vehicaldlno: "",
  });
  const [signupDataCustomer, setSignupDataCustomer] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    emergencyContact: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isCheck, setIsCheckeddd] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setShowInput(isChecked); // Show input when checked, hide when unchecked
  };
  const handleCheckboxxxChange = () => {
    setIsCheckeddd(!isCheck);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    signupDataCustomer.emergencyContact = inputValue;
    // Do something with the input value if needed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isCheck) {
        const response = await fetch(
          "http://localhost:5000/api/auth/logindriver",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          }
        );

        const json = await response.json();
        //console.log(json);

        if (json.success) {
          // Save the auth token and redirect
          localStorage.setItem("token", json.authtoken);
          localStorage.setItem("number", json.number);
          navigate("/Driverui");
        } else {
          alert("Invalid credentials");
        }
      } else {
        const response = await fetch(
          "http://localhost:5000/api/auth/loginuser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          }
        );

        const json = await response.json();
        console.log(json);

        if (json.success) {
          // Save the auth token and redirect
          localStorage.setItem("token", json.authtoken);
          navigate("/UserUi");
        } else {
          alert("Invalid credentials");
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleDriverSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      password,
      contact,
      vehicalreq,
      vehicalchassis,
      vehicalmodel,
      vehicalrcno,
      vehicaldlno,
    } = signupDataDriver;
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/createdriver",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            contact,
            vehicaldlno,
            vehicalrcno,
            vehicalmodel,
            vehicalchassis,
            vehicalreq,
          }),
        }
      );

      const json = await response.json();
      console.log(json);

      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      localStorage.setItem("number", vehicalreq);
      navigate("/Driverui");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleCustomerSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, contact, emergencyContact } =
      signupDataCustomer;
    console.log(contact);
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            contact,
            emergencyContact,
          }),
        }
      );

      const json = await response.json();
      console.log(json);

      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/UserUI");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleJustifyClickDriver = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActiveDriver(value);
  };
  const onChangeCred = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const onChangeDrive = (e) => {
    setSignupDataDriver({
      ...signupDataDriver,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeUser = (e) => {
    setSignupDataCustomer({
      ...signupDataCustomer,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="form1"
            type="email"
            name="email"
            value={credentials.email}
            onChange={onChangeCred}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form2"
            type="password"
            name="password"
            value={credentials.password}
            onChange={onChangeCred}
          />
          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I'm a driver."
              checked={isCheck}
              onChange={handleCheckboxxxChange}
            />
          </div>

          {/* <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div> */}

          <button className="mb-4 w-100 btn btn-primary">Sign in</button>
          <p className="text-center">
            Not a member?{" "}
            <a
              href="#"
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}
            >
              Register
            </a>
          </p>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          <MDBTabs
            pills
            justify
            className="mb-3 d-flex flex-row justify-content-between"
          >
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClickDriver("driver")}
                active={justifyActiveDriver === "driver"}
              >
                Driver
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClickDriver("customer")}
                active={justifyActiveDriver === "customer"}
              >
                Customer
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={justifyActiveDriver === "driver"}>
              <MDBInput
                wrapperClass="mb-4"
                label="Name"
                value={signupDataDriver.name}
                name="name"
                id="form1"
                type="text"
                onChange={onChangeDrive}
              />
              <MDBInput
                label="Phone Number"
                name="contact"
                value={signupDataDriver.contact}
                id="typePhone"
                type="tel"
                onChange={onChangeDrive}
              />

              <MDBInput
                wrapperClass="mb-4"
                name="email"
                value={signupDataDriver.email}
                label="Email"
                id="form1"
                type="email"
                onChange={onChangeDrive}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                value={signupDataDriver.password}
                name="password"
                id="form1"
                type="password"
                onChange={onChangeDrive}
              />

              <h3>Vehicles Details</h3>
              <MDBInput
                wrapperClass="mb-4"
                label="Regd. No"
                value={signupDataDriver.vehicalreq}
                name="vehicalreq"
                id="form1"
                type="text"
                onChange={onChangeDrive}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Chassis No."
                value={signupDataDriver.vehicalchassis}
                name="vehicalchassis"
                id="form1"
                type="text"
                onChange={onChangeDrive}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Vehicle Type"
                value={signupDataDriver.vehicalmodel}
                name="vehicalmodel"
                id="form1"
                type="text"
                onChange={onChangeDrive}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="RC No."
                value={signupDataDriver.vehicalrcno}
                name="vehicalrcno"
                id="form1"
                type="text"
                onChange={onChangeDrive}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="DL No."
                value={signupDataDriver.vehicaldlno}
                name="vehicaldlno"
                id="form1"
                type="text"
                onChange={onChangeDrive}
              />

              <button
                className="mb-4 w-100 btn btn-primary"
                onClick={handleDriverSubmit}
              >
                Sign up
              </button>
            </MDBTabsPane>

            <MDBTabsPane show={justifyActiveDriver === "customer"}>
              <MDBInput
                wrapperClass="mb-4"
                label="Name"
                id="form1"
                type="text"
                name="name"
                value={signupDataCustomer.name}
                onChange={onChangeUser}
              />
              <MDBInput
                label="Phone Number"
                id="typePhone"
                type="tel"
                name="contact"
                value={signupDataCustomer.contact}
                onChange={onChangeUser}
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
                name="email"
                value={signupDataCustomer.email}
                onChange={onChangeUser}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="password"
                name="password"
                value={signupDataCustomer.password}
                onChange={onChangeUser}
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  label="Do you want to add emergency contact number?"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </div>

              {!showInput && (
                <MDBInput
                  label="Phone Number"
                  id="typePhone"
                  type="tel"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              )}

              <button
                className="mb-4 w-100 btn btn-primary"
                onClick={handleCustomerSubmit}
              >
                Sign up
              </button>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default Loginpage;
