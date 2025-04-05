import {
  LayersControl,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  Tooltip,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { listCamping } from "@/api/camping";

const Layers = () => {
  const [landmarks, setLandmarks] = useState([]);

  useEffect(() => {
    hdlGetLandmark();
  }, []);

  const hdlGetLandmark = () => {
    listCamping()
      .then((res) => setLandmarks(res.data.result))
      .catch((err) => console.log(err));
  };

  return (
    <LayersControl>
      <LayersControl.BaseLayer name="OSM" checked>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Satellite">
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
      </LayersControl.BaseLayer>

      <LayersControl.Overlay name="Landmark" checked>
        <LayerGroup>
          {landmarks?.map((item) => {
            return (
              <Marker key={item.id} position={[item.lat, item.lng]}>
                <Popup>
                  {item.title}
                  <br /> {item.description}
                </Popup>
                <Tooltip>
                  <>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                  </>
                </Tooltip>
              </Marker>
            );
          })}
        </LayerGroup>
      </LayersControl.Overlay>
    </LayersControl>
  );
};
export default Layers;
