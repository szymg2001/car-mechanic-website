import Logo from "./Logo";
import SingleContactInfo from "./SingleContactInfo";
import contactDetails from "../contactDetails.json";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <Logo />
      <hr className="navbar-mobile-hr" />
      <div className="navbar__contact-details">
        <SingleContactInfo value={contactDetails.phone} iconName="phone" />
        <SingleContactInfo
          value={contactDetails.location}
          iconName="location"
        />
        <SingleContactInfo value={contactDetails.mail} iconName="mail" />
      </div>
    </div>
  );
}
