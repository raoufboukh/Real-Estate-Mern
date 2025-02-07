"use client";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Marker, Popup, useMap } from "react-leaflet";
import * as ELG from "esri-leaflet-geocoder";

interface Props {
  address: string;
}

const DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  shadowUrl: "/image.png",
});

const GeoCoderMarker: React.FC<Props> = ({ address }) => {
  const map = useMap();
  const [position, setPosition] = useState<[number, number]>([60, 19]);

  useEffect(() => {
    if (!map || !address?.trim()) {
      return;
    }

    const geocodeService = ELG.geocode();

    geocodeService
      .text(address)
      .run(
        (
          err: Error | null,
          results: { results: { latlng: { lat: number; lng: number } }[] }
        ) => {
          if (err) {
            console.error("Geocoding error:", err);
            return;
          }

          if (results?.results?.length > 0) {
            const { lat, lng } = results.results[0].latlng;
            setPosition([lat, lng]);
            map.flyTo([lat, lng], 6);
          }
        }
      );
  }, [address, map]); // ✅ Depend on `address` changes

  return (
    <Marker position={position} icon={DefaultIcon}>
      <Popup>{address}</Popup>
    </Marker>
  );
};

export default GeoCoderMarker;
