import React, { useEffect } from "react";
import "./Userrideuicss.css";
import axios from 'axios';
import ReactStars from "react-rating-stars-component";
export default function Userridefinal() {
    const latlong = [
        { latitude: 28.7040592, longitude: 77.1024907 },
        { latitude: 26.9124336, longitude: 75.7872709 },
        { latitude: 26.9124344, longitude: 75.7872578 },
        { latitude: 28.6105073, longitude: 77.1145653 },
    ];
    const driverlive = { latitude: 26.9124338, longitude: 75.7872711 };
    const myposi = { latitude: 28.7040594, longitude: 77.1024909 };
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    let eta1, eta2;
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBwswtGSMZBRrNaFtl8nfzy2W85oXGT1go&libraries=places`;
        script.async = true;

        script.onload = () => {
            const mapOptions = {
                center: { lat: driverlive.latitude, lng: driverlive.longitude },
                zoom: 150,
            };

            const map = new window.google.maps.Map(
                document.querySelector(".mapsection"),
                mapOptions
            );

            // Add markers for all points
            latlong.forEach((point, index) => {
                const icon =
                    index === 0
                        ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                        : index === latlong.length - 1
                            ? "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                            : "http://maps.google.com/mapfiles/ms/icons/red-dot.png";

                new window.google.maps.Marker({
                    position: point,
                    map,
                    icon,
                });
            });

            // Draw route for driver's path
            const driverPath = new window.google.maps.DirectionsRenderer({
                polylineOptions: {
                    strokeColor: "green",
                },
            });
            const directionsService = new window.google.maps.DirectionsService();

            const waypointsDriver = latlong.slice(1, -1).map((point) => ({
                location: new window.google.maps.LatLng(
                    point.latitude,
                    point.longitude
                ),
                stopover: true,
            }));

            const driverRequest = {
                origin: new window.google.maps.LatLng(
                    driverlive.latitude,
                    driverlive.longitude
                ),
                destination: new window.google.maps.LatLng(
                    latlong[latlong.length - 1].latitude,
                    latlong[latlong.length - 1].longitude
                ),
                waypoints: waypointsDriver,
                travelMode: "DRIVING",
            };

            directionsService.route(driverRequest, (result, status) => {
                if (status === "OK") {
                    driverPath.setDirections(result);

                    // Calculate ETA
                    const route = result.routes[0];
                    let totalDuration = 0;

                    route.legs.forEach((leg) => {
                        totalDuration += leg.duration.value;
                    });

                    const etaMinutes = Math.round(totalDuration / 60);
                    console.log(`Estimated Time (Driver to End): ${etaMinutes} minutes`);
                    eta1 = etaMinutes;
                }
            });

            driverPath.setMap(map);

            // Draw route for myposi to driverlive
            const myposiToDriverPath = new window.google.maps.DirectionsRenderer({
                polylineOptions: {
                    strokeColor: "red",
                },
            });

            const myposiToDriverRequest = {
                origin: new window.google.maps.LatLng(
                    myposi.latitude,
                    myposi.longitude
                ),
                destination: new window.google.maps.LatLng(
                    driverlive.latitude,
                    driverlive.longitude
                ),
                travelMode: "DRIVING",
            };

            directionsService.route(myposiToDriverRequest, (result, status) => {
                if (status === "OK") {
                    myposiToDriverPath.setDirections(result);

                    // Calculate ETA
                    const route = result.routes[0];
                    let totalDuration = 0;

                    route.legs.forEach((leg) => {
                        totalDuration += leg.duration.value;
                    });

                    const etaMinutes = Math.round(totalDuration / 60);
                    console.log(
                        `Estimated Time (MyPosi to Driver): ${etaMinutes} minutes`
                    );
                    eta2 = etaMinutes;
                }
            });

            myposiToDriverPath.setMap(map);
        };

        document.body.appendChild(script);
    }, []);
    const sendSOS = async () => {
        try {

            const accountSid = 'AC6ffd9b7e5b8b14ff190550dcc11f16f4'; // Replace with your API key
            const authToken = '96e3931ddb61757fe783776c8de0a916'; // Replace with your API secret
            const fromPhoneNumber = '+14694442720'; // Replace with your Twilio phone number
            const toPhoneNumber = '+919861085259'; // Replace with the recipient's phone number
            const message = 'SOS! This is an emergency message. Please help!';

            fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${btoa(`${accountSid}:${authToken}`)}`,
                },
                body: new URLSearchParams({
                    'From': fromPhoneNumber,
                    'To': toPhoneNumber,
                    'Body': message,
                }),
            })
                .then(response => {
                    if (response.ok) {
                        alert('SOS message sent successfully!');
                    } else {
                        alert('Failed to send SOS message. Please try again later.');
                    }
                })
                .catch(error => {
                    console.error('Error sending SOS message:', error);
                    alert('An error occurred while sending the SOS message.');
                });



        }
        catch (error) {
            console.error('Error sending SOS message:', error);
        }
    };
    // -----------

    const handleSOSClick = () => {
        sendSOS();
    };
    return (
        <>
            <div className="container-fluid cont">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br><br></br>
                <br></br>
                <br></br>
                <div className="container">
                    <div className="row mapsection" style={{ height: "300px" }}></div>
                    <br></br>
                    <span> {eta1}</span>
                    <span> {eta2}</span>
                    <br></br>
                    <div className="row">
                        <div className="row">
                            <span className="la1">Review your ride</span>
                        </div>
                        <div className="row">
                            <div className="col-sm-5 col1">
                                <div className="row">
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={30}
                                        activeColor="#ffd700"
                                    />
                                </div><br></br>
                                <div className="row">
                                    <label style={{ fontWeight: 'bold' }}>Write your review</label>
                                    <div className="row">
                                        <textarea placeholder='Comments....' className="inp" style={{ margin: '3%' }}>

                                        </textarea>
                                    </div>
                                </div><br></br>
                                <div className="row">
                                    <div className="col-sm-9">

                                    </div>
                                    <div className="col-sm-3">
                                        <button className="btn btn-outline-success">Submit</button>
                                    </div>
                                </div><br></br>
                            </div>
                            <div className="col-sm-6">

                            </div>
                            <div className="col-sm-1">
                                <button className="btn btn-outline-danger" onClick={handleSOSClick}><img
                                    src="/sosfinal.png"
                                    style={{ width: "120px", height: "120px" }}
                                ></img></button>
                            </div>
                            <div className="col-sm-5"></div>
                        </div>
                        <div className="row">
                            
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <button className="btn btn-outline-danger" style={{width:'100%'}}>Stop ride!</button>
                            </div>
                            <div className="col-sm-7">

                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>
        </>
    );
}
