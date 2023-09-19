import React, {useState} from 'react';
import './Driveruicss.css'
export default function Driverui() {
    const [start, setStart] = useState('');
    const [destination, setDestination] = useState('');
    const [stops, setStops] = useState('');
    const [stopList, setStopList] = useState([]);

    const [routeInfo, setRouteInfo] = useState({
        startingPoint: '',
        stops: '',
        destination: '',
    });


    const handleAddStop = () => {
        if (stops.trim() !== '') {
            setStopList([...stopList, stops]);
            setStops('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (stops.trim() !== '') {
            handleAddStop();
        }

        setRouteInfo({
            startingPoint: start,
            stops: stopList.join(', '), // Join stops into a comma-separated string
            destination,
        });

        setStart('');
        setDestination('');
        setStops('');
    };



    return (
        <div>
            <div className="container-fluid cont-1">
                <div className="container">
                    <div className="container-fluid main-cont">
                        <br></br><br></br>
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
                                                onChange={(e) => setStart(e.target.value)}
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
                                                onChange={(e) => setDestination(e.target.value)}
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
                                                    onChange={(e) => setStops(e.target.value)}
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
                                        <button className='btn btn-success' type="submit">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-7 mapsection">
                                {/* <Mapspace /> */}
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
                        <button className='btn btn-success' type="submit">Start Journey</button>
                    </div>
                </div>
                <br></br><br></br>
            </div>
        </div>
    );
}

