import Logo from "./Logo";
import SingleContactInfo from "./SingleContactInfo";
import contactDetails from "../contactDetails.json";
import "../css/footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <Logo />
      <div className="footer__contact-info">
        <SingleContactInfo
          iconName="location"
          value={contactDetails.location}
        />
        <SingleContactInfo iconName="phone" value={contactDetails.phone} />
        <SingleContactInfo iconName="mail" value={contactDetails.mail} />
      </div>
    </div>
  );
}
