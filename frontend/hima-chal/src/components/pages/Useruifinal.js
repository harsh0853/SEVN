import React, { useState, useEffect } from "react";
import "./UserUi.css";

export default function Useruifinal() {
    const [destinationUser, setDestinationUser] = useState("");
    const [destination, setDestination] = useState("");
    const [availableRides, setAvailableRides] = useState([]);
    const [error, setError] = useState(null);
    const [vehicleData, setVehicleData] = useState({});
    const [selectedRide, setSelectedRide] = useState(null);


    const fetchVehicleDetails = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/bus/busdetails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ busnumber: selectedRide }),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch vehicle details");
            }

            const data = await response.json();
            setVehicleData(data);
            setError(null);
        } catch (error) {
            console.error("Error fetching vehicle details:", error);
            setVehicleData({});
            setError("NO TRANSPORT FOUND");
        }
    };

    const fetchAvailableRides = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/bus/availablebuses",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ end: destination }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch available rides");
            }

            const data = await response.json();
            setAvailableRides(data);
            setError(null);
        } catch (error) {
            console.error("Error fetching available rides:", error);
            setAvailableRides([]);
            setError("Error fetching available rides. Please try again.");
        }
    };

    const handleRideSelection = (ride) => {
        setSelectedRide(ride);
        fetchVehicleDetails();
    };

    const handleDestinationUserAutocomplete = (inputId) => {
        const input = document.getElementById(inputId);
        const autocomplete = new window.google.maps.places.Autocomplete(input);

        autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace();

            if (place && place.geometry) {
                setDestinationUser(place.name);
                console.log("Selected Place Details:", place);
            }
        });

        input.addEventListener("input", (e) => {
            const value = e.target.value;
            setDestinationUser(value);
        });
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBwswtGSMZBRrNaFtl8nfzy2W85oXGT1go&libraries=places`;
        script.async = true;

        script.onload = () => {
            handleDestinationUserAutocomplete("destinationuser");
        };


        document.body.appendChild(script);
    }, []);

    const initializeMap = (location) => {
        const mapOptions = {
            center: location,
            zoom: 15,
        };

        const map = new window.google.maps.Map(document.querySelector(".mapsection"), mapOptions);

        new window.google.maps.Marker({
            position: location,
            map: map,
        });
    };

    const loadGoogleMapsScript = (callback) => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBwswtGSMZBRrNaFtl8nfzy2W85oXGT1go&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = callback; // Use the callback to initialize the map and Autocomplete

        document.body.appendChild(script);
    };

    const initializeAutocomplete = () => {
        const input = document.getElementById("destinationuser");
        const autocomplete = new window.google.maps.places.Autocomplete(input);

        autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace();

            if (place && place.geometry) {
                const location = place.geometry.location;
                initializeMap(location);
            }
        });
    };

    const initialGeolocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                const userLocation = { lat: latitude, lng: longitude };
                setDestinationUser("");

                initializeMap(userLocation);
            });
        }
    };

    useEffect(() => {
        loadGoogleMapsScript(() => {
            // Initialize the map
            initialGeolocation();
            // Initialize Autocomplete
            initializeAutocomplete();
        });
    }, []);
    return (
        <>
            <div className="container-fluid cont">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="row">
                                <div className="form-group">
                                    <div className="row">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="la1"
                                            style={{ color: "white" }}
                                        >
                                            Select your ride
                                        </label>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-1">
                                            <img
                                                src="/carimagefinal.png"
                                                style={{ width: "40px", height: "40px" }}
                                                alt="Car"
                                            />
                                        </div>
                                        <div className="col-sm-11">
                                            <select
                                                className="form-select op"
                                                aria-label="Default select example"
                                            >
                                                <option value="1" className="op" style={{ backgroundColor: 'black' }}>
                                                    Bus
                                                </option>
                                                <option value="2" className="op" style={{ backgroundColor: 'black' }}>
                                                    Other vehicle
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="la1"
                                            style={{ color: "white" }}
                                        >
                                            Select your Destination
                                        </label>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-1">
                                            <img
                                                src="/mapspic.png"
                                                style={{ width: "50px", height: "40px" }}
                                                alt="Map"
                                            />
                                        </div>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control op"
                                                id="destinationuser"
                                                aria-describedby="emailHelp"
                                                style={{ width: "100%" }}
                                                onChange={(e) => setDestinationUser(e.target.value)}
                                                value={destinationUser}
                                            />
                                        </div>
                                        <div className="col-sm-2">
                                            <button
                                                className="btn btn-success"
                                                onClick={fetchAvailableRides}
                                            >
                                                <center>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-search"
                                                        viewBox="0 0 16 16"
                                                        style={{
                                                            color: "white",
                                                            width: "160%",
                                                            height: "160%",
                                                            fontWeight: "bolder",
                                                        }}
                                                    >
                                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                    </svg>
                                                </center>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="row">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="la1"
                                        style={{ color: "white" }}
                                    >
                                        Available Rides
                                    </label>
                                    <div className="col-sm-1"></div>

                                    <div className="col-sm-11 ru">
                                        {error ? (
                                            <p>{error}</p>
                                        ) : availableRides.length > 0 ? (
                                            availableRides.map((ride) => (
                                                <div
                                                    key={ride._id}
                                                    onClick={() => handleRideSelection(ride.busnumber)}
                                                    className="ride-item"
                                                >
                                                    {ride.busnumber + "HEY"}
                                                </div>
                                            ))
                                        ) : (
                                            <p></p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-6 mapsection">

                        </div>
                    </div>
                    <br>
                    </br><br>
                    </br><br>
                    </br>
                    <div className="row">
                        <div className="row">
                            <span className="la1" style={{ color: "white" }}>
                                Ride Details
                            </span>
                            <div
                                className="col-sm-12 op"
                                style={{
                                    width: "100%",
                                    height: "20vh",

                                }}
                            >
                                {selectedRide && (
                                    <>
                                        <p>Driver's Name: {vehicleData.name}</p>
                                        <p>Driver Contact Number: {vehicleData.contact}</p>
                                        <p>Bus Number: {vehicleData.busnumber}</p>
                                        {/* Add other vehicle details as needed */}
                                    </>
                                )}
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <button className="btn btn-outline-success">Start your Ride</button>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        </>
    );
}