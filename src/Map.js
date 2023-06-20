import React, { useEffect, useState } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function MapContainer(props) {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
            localStorage.setItem('latitude', latitude);
            localStorage.setItem('longitude', longitude);
        });

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);


    const mapStyles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
    };

    return (
        <div style={mapStyles}>
            {latitude && longitude ? (
                <Map google={props.google} zoom={14} initialCenter={{ lat: latitude, lng: longitude }} >
                    <Marker position={{ lat: latitude, lng: longitude }} />
                </Map>
            ) : (
                <div>Loading map...</div>
            )}
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: 'MAP_API_KEY' // Replace with your Google Maps API key
})(MapContainer);
