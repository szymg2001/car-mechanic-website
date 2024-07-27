import React from "react";
import { getIcon } from "../IconsFile";
import "../css/single-contact-info.css";

export default function SingleContactInfo({
  value,
  iconName,
}: {
  value: string;
  iconName: string;
}) {
  let [icon, setIcon] = React.useState(getIcon(iconName));

  return (
    <div className="contact-info__container">
      <div className="contact-info__icon">{icon.iconSVG}</div>
      <p className="contact-info__value">{value}</p>
    </div>
  );
}
