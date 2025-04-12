import {
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

function LocationMarker({ position, setPosition, setValue }) {
  const map = useMapEvents({
    click: (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng);
      if (setValue) {
        setValue("lat", e.latlng.lat);
        setValue("lng", e.latlng.lng);
      }
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const Mainmap = ({ register, Location, setValue }) => {
  const [position, setPosition] = useState(null);
  const DEFAULT_LOCATION = [13, 100];

  return (
    <div>
      {register && (
        <>
          <input hidden {...register("lat")} />
          <input hidden {...register("lng")} />
        </>
      )}

      <h1 className="font-semibold mt-4">Where are you?</h1>

      {position && (
        <p className="text-sm text-gray-400">
          Coordinates : {position.lat.toFixed(6)}, {position.lng.toFixed(6)}
        </p>
      )}

      <MapContainer
        className="h-[50vh] rounded-md z-0"
        center={Location || DEFAULT_LOCATION}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {
          Location && <Marker position={Location}>
          </Marker>
        }

        <LocationMarker
          position={position}
          setPosition={setPosition}
          setValue={setValue}
        />
      </MapContainer>
    </div>
  );
};
export default Mainmap;
