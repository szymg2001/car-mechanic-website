import SingleContactInfo from "./SingleContactInfo";
import contactDetails from "../contactDetails.json";
import "../css/location-component.css";

export default function LocationComponent() {
  return (
    <div className="location-container">
      <h3 className="location__header">Lokalizacja</h3>
      <div className="location__map">
        <iframe
          title="location"
          style={{ height: "100%", width: "100%", border: "0" }}
          src="https://www.google.com/maps/embed/v1/place?q=kuryłówka+616&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
      <SingleContactInfo iconName="location" value={contactDetails.location} />
    </div>
  );
}
