import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Driveruicss.css";

export default function Driverui() {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [stops, setStops] = useState("");
  const [stopList, setStopList] = useState([]);
  const [latLongs, setLatLongs] = useState([]);
  const [credentials, setCredentials] = useState({
    busnumber: "",
    start: "",
    end: "",
    stop: [""], // Start with one empty stop
    geolocation: { latitude: 0, longitude: 0 },
  });

  const [routeInfo, setRouteInfo] = useState({
    startingPoint: "",
    stops: "",
    destination: "",
  });

  const [intervalId, setIntervalId] = useState(null);
  let navigate = useNavigate();

  const updateGeolocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCredentials((prevCredentials) => ({
          ...prevCredentials,
          geolocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        }));
        sendGeolocationToServer(position.coords);
      });
    }
  };

  const sendGeolocationToServer = async (coords) => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await fetch(
          "http://localhost:5000/api/bus/createbuses",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              busnumber: credentials.busnumber,
              start: start,
              end: destination,
              stop: stopList,
              geolocation: {
                latitude: coords.latitude,
                longitude: coords.longitude,
              },
              latlong: latLongs,
            }),
          }
        );

        const json = await response.json();
        console.log(json);

        // Handle errors if needed

        const interv = setInterval(updateGeolocation, 30000);
        setIntervalId(interv);

        // Update routeInfo after submit
        setRouteInfo({
          startingPoint: start,
          stops: stopList.join(", "), // Join stops into a comma-separated string
          destination: destination,
        });
      } catch (error) {
        console.error("Error updating geolocation:", error);
      }
    } else {
      navigate("/driversignup");
    }
  };

  const initialGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCredentials((prevCredentials) => ({
          ...prevCredentials,
          geolocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        }));
      });
    }
  };

  useEffect(() => {
    initialGeolocation();
  }, []);

  const handleAddStop = () => {
    if (stops.trim() !== "") {
      setStopList([...stopList, stops]);
      setStops("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (token) {
      const { busnumber } = credentials;
      try {
        const response = await fetch(
          "http://localhost:5000/api/bus/createbuses",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              busnumber,
              start,
              end: destination,
              stop: stopList,
              geolocation: {
                latitude: credentials.geolocation.latitude,
                longitude: credentials.geolocation.longitude,
              },
              latlong: latLongs,
            }),
          }
        );

        const json = await response.json();
        console.log(json);

        // Update routeInfo after submit
        setRouteInfo({
          startingPoint: start,
          stops: stopList.join(", "), // Join stops into a comma-separated string
          destination: destination,
        });
      } catch (error) {
        console.error("Error logging in:", error);
      }
    } else {
      // navigate("/driversignup");
    }

    if (stops.trim() !== "") {
      handleAddStop();
    }

    setRouteInfo({
      startingPoint: start,
      stops: stopList.join(", "), // Join stops into a comma-separated string
      destination: destination,
    });

    setStart("");
    setDestination("");
    setStops("");
  };

  let map;

  const handleAutocomplete = (inputId) => {
    const input = document.getElementById(inputId);
    const autocomplete = new window.google.maps.places.Autocomplete(input);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place && place.geometry) {
        if (inputId === "start") {
          setStart(place.name);
        } else if (inputId === "destination") {
          setDestination(place.name);
        } else if (inputId === "stops") {
          setStops(place.name);
        }
        console.log("Selected Place Details:", place);
        const latitude = place.geometry.location.lat();
        const longitude = place.geometry.location.lng();
        console.log("Latitude:", latitude, "Longitude:", longitude);
        setLatLongs((prevLatLongs) => [
          ...prevLatLongs,
          { latitude, longitude },
        ]);

        if (map) {
          map.setCenter(place.geometry.location);
          map.setZoom(15); // You can adjust the zoom level as needed
          new google.maps.Marker({
            position: place.geometry.location,
            map: map,
          });
        }
      }
    });
    input.addEventListener("input", (e) => {
      const value = e.target.value;
      if (inputId === "start") {
        setStart(value);
      } else if (inputId === "destination") {
        setDestination(value);
      } else if (inputId === "stops") {
        setStops(value);
      }
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBwswtGSMZBRrNaFtl8nfzy2W85oXGT1go&libraries=places`;
    script.async = true;
    script.onload = () => {
      handleAutocomplete("start");
      handleAutocomplete("destination");
      handleAutocomplete("stops");
      // Initialize the map
      /* global google */
      map = new window.google.maps.Map(document.querySelector(".mapsection"), {
        center: {
          lat: credentials.geolocation.latitude,
          lng: credentials.geolocation.longitude,
        }, // Initial center coordinates
        zoom: 10, // Initial zoom level
      });
    };
    document.body.appendChild(script);
  }, []);
  return (
    <div>
      <div className="container-fluid cont-1">
        <div className="container">
          <div className="container-fluid main-cont">
            <br />
            <br />
            <div className="row row-up">
              <div className="col-5 journey">
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="inp">
                      <label htmlFor="Start" className="form-label">
                        Choose Starting Point
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Starting Point..."
                        id="start"
                        aria-label="startpt"
                        value={start}
                        // onChange={(e) => setStart(e.target.value)}
                      />
                    </div>
                    <div className="inp">
                      <label htmlFor="Destination" className="form-label">
                        Choose Destination
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Destination..."
                        id="destination"
                        aria-label="endpt"
                        value={destination}
                        // onChange={(e) => setDestination(e.target.value)}
                      />
                    </div>
                    <div className="inp">
                      <label htmlFor="Stop" className="form-label">
                        Add Stops
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Stops..."
                          id="stops"
                          aria-label="stoppt"
                          value={stops}
                          // onChange={(e) => setStops(e.target.value)}
                        />
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-add"
                          onClick={handleAddStop}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <br />
                    <button className="btn btn-success" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-7 mapsection">
                {/* Render your map here */}
                <div className="col-7 mapsection">
                  <div
                    id="map"
                    style={{ width: "100%", height: "400px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="row row-dwn">
            <div className="col-sm-8">
              <div className="routeinfodiv">
                <div>Starting Point: {routeInfo.startingPoint}</div>
                <br />
                <div>Destination: {routeInfo.destination}</div>
                <br />
                <div>
                  Stops:
                  <ul>
                    {stopList.map((stop, index) => (
                      <li key={index}>{stop}</li>
                    ))}
                  </ul>
                </div>
                <br />
              </div>
            </div>

            <div className="col-sm-4"></div>

            <button className="btn btn-success" type="submit">
              Start Journey
            </button>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
