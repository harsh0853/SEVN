import React, { useState, useEffect } from "react";
import "./Driverridecss.css";

export default function Driverridefinal() {
    const [credentials, setCredentials] = useState({ count: 0 });
    const [m, setm] = useState({ textar: "Normal" });
    const [latlong, setLatLongData] = useState([]);
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const number = localStorage.getItem("number");

    // Define the updateGeolocation function
    const updateGeolocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
        }
    };
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const onChangee = (e) => {
        setm({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/bus/seat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    count: credentials.count,
                    busnumber: "",
                }),
            });

            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error("Error updating passengers:", error);
        }
    };
    const handleMsg = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/bus/msg", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    m: m.textar,
                    busnumber: "",
                }),
            });

            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error("Error updating passengers:", error);
        }
    };

    useEffect(() => {
        // Fetch latlong data from the server based on the busnumber
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({}), // Include busnumber in the request body if needed
        };

        fetch("http://localhost:5000/api/bus/latlong", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setLatLongData(data.latlong);
            })
            .catch((error) => {
                console.error("Error fetching latlong data:", error);
            });
    }, []);

    useEffect(() => {
        // Load the Google Maps script
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBwswtGSMZBRrNaFtl8nfzy2W85oXGT1go&libraries=places`; // Replace with your actual Google Maps API key
        script.async = true;

        script.onload = () => {
            const directionsService = new window.google.maps.DirectionsService();
            const directionsRenderer = new window.google.maps.DirectionsRenderer();

            let mapOptions = {};

            if (latlong && latlong.length > 0) {
                mapOptions = {
                    center: { lat: latlong[0].latitude, lng: latlong[0].longitude },
                    zoom: 2000,
                };
            } else {
                mapOptions = {
                    center: { lat: 0, lng: 0 },
                    zoom: 2,
                };
            }

            const map = new window.google.maps.Map(
                document.querySelector(".mapsection"),
                mapOptions
            );
            map.setZoom(2000);
            directionsRenderer.setMap(map);

            if (latlong && latlong.length > 0) {
                const waypoints = latlong.slice(1, -1).map((point) => ({
                    location: new window.google.maps.LatLng(
                        point.latitude,
                        point.longitude
                    ),
                    stopover: true,
                }));

                const origin = new window.google.maps.LatLng(
                    latlong[0].latitude,
                    latlong[0].longitude
                );

                const destination = new window.google.maps.LatLng(
                    latlong[latlong.length - 1].latitude,
                    latlong[latlong.length - 1].longitude
                );

                const request = {
                    origin,
                    destination,
                    waypoints,
                    travelMode: "DRIVING",
                };

                directionsService.route(request, (result, status) => {
                    if (status === "OK") {
                        directionsRenderer.setDirections(result);
                    }
                });
            }

            // Create the locationMarker only when lat and long are not null
            if (lat !== null && long !== null) {
                const locationMarker = new window.google.maps.Marker({
                    position: {
                        lat: lat,
                        lng: long,
                    },
                    map,
                    icon: {
                        url: "https://cdn-icons-png.flaticon.com/128/1178/1178998.png",
                        scaledSize: new window.google.maps.Size(35, 35),
                    },
                });

                // Add pulsing animation to the marker
                let animationInterval;

                const pulseAnimation = () => {
                    if (map && locationMarker) {
                        locationMarker.setAnimation(
                            locationMarker.getAnimation() === null
                                ? window.google.maps.Animation.BOUNCE
                                : null
                        );
                    }
                };

                animationInterval = setInterval(pulseAnimation, 3000);

                // Clear the animation interval when the component unmounts
                return () => clearInterval(animationInterval);
            }
        };

        document.body.appendChild(script);

        // Update geolocation every 5 seconds
        const geolocationInterval = setInterval(updateGeolocation, 5000);

        // Clear the geolocation interval when the component unmounts
        return () => clearInterval(geolocationInterval);
    }, [lat, long, latlong]);

    return (
        <>
            <div className="container-fluid cont text-dark text-dark cv1">
                <br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="mapsection" style={{ height: "400px" }}></div>
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-5">
                            <div className="row">
                                <div className="form-group">
                                    <label for="exampleInputEmail1 " className="la1">
                                        Seats currently occupied
                                    </label>
                                    <div className="row">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-sm-10">
                                                    <input
                                                        type="number"
                                                        name="count"
                                                        value={credentials.count}
                                                        onChange={onChange}
                                                        className="inp"
                                                        style={{ width: '100%' }}
                                                    />
                                                </div>
                                                <div className="col-sm-2">
                                                    <button type="submit" className="btn btn-outline-success" style={{ fontWeght: 'bolder' }}>Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <br></br>
                                <br></br>
                                <form onSubmit={handleMsg}>
                                    <div className="row">
                                        <h5 className="la1">Broadcast your status to users.</h5>
                                        <textarea
                                            placeholder="Broadcast here...."
                                            name="textar"
                                            value={m.textar}
                                            onChange={onChangee}
                                            className="inp"
                                        ></textarea>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-sm-10">

                                        </div>
                                        <div className="col-sm-2">
                                            <button type="submit" className="btn btn-outline-success">
                                                Publish
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="row">
                                <button type="button" className="btn btn-outline-danger">
                                    Stop Ride
                                </button>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </>
    );
}
