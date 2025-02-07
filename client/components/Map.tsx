import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import GeoCoderMarker from "./GeoCoderMarker";

interface Props {
  address: string;
  city: string;
  country: string;
}
const position: LatLngExpression = [53.35, 18.8];

const Map: React.FC<Props> = ({ address, city, country }) => {
  return (
    <MapContainer
      center={position}
      zoom={1}
      scrollWheelZoom={false}
      className="h-[40vh] w-full mt-5 z-0"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoCoderMarker address={`${address} ${city} ${country}`} />
    </MapContainer>
  );
};

export default Map;
