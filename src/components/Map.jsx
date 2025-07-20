import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// This helper recenters the map when coordinates change
function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView([coords.lat, coords.lon], 12); // Zoom level 12
    return null;
}

export default function Map({ coordinates, API_KEY }) {
    return (
        <div className="Map">
            <MapContainer center={[coordinates.lat, coordinates.lon]} zoom={10} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>

                {/* Base OpenStreetMap layer */}
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; OpenStreetMap contributors' />

                {/* Adjust map view on coordinate change */}
                <ChangeMapView coords={coordinates} />

            </MapContainer>
        </div>
    )
}