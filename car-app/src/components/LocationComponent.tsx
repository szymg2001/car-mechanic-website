import SingleContactInfo from "./SingleContactInfo";
import contactDetails from "../contactDetails.json";
import "../css/location-component.css";

export default function LocationComponent() {
  return (
    <div className="location-container">
      <h4 className="location__header">Lokalizacja</h4>
      <div className="location__map">
        <iframe
          style={{ height: "100%", width: "100%", border: "0" }}
          src="https://www.google.com/maps/embed/v1/place?q=Kuryłówka,+Polska&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
      <SingleContactInfo iconName="location" value={contactDetails.location} />
    </div>
  );
}
