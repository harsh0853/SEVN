import React from "react";
import "./Signupcss.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    emergencyContact: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, contact, emergencyContact } = credentials;
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

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container-fluid c1">
        <br></br>
        <br></br>
        <div className="container c2">
          <br></br>
          <br></br>
          <div className="row ro1">
            <div className="col-sm-3"></div>
            <div className="col-sm-6 r1">
              <div className="container">
                <form onSubmit={handleSubmit}>
                  <span className="t1">Sign Up</span>
                  <br></br>
                  <br></br>
                  <div className="row">
                    <label htmlFor="exampleInputEmail1">Name*</label>
                    <br></br>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Name"
                          name="name"
                          value={credentials.name}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address*</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      name="email"
                      value={credentials.email}
                      onChange={onChange}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password*</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      name="password"
                      value={credentials.password}
                      onChange={onChange}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Contact*</label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter contact number"
                      name="contact"
                      value={credentials.contact}
                      onChange={onChange}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Emergency Contact
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Contact 1"
                      name="emergencyContact"
                      value={credentials.emergencyContact}
                      onChange={onChange}
                    />
                  </div>
                  <br></br>
                  <div className="row">
                    <button type="submit" className="btn btn-primary" C>
                      Submit
                    </button>
                  </div>
                  <br></br>
                </form>
              </div>
            </div>
            <div className="col-sm-3"></div>
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
}
