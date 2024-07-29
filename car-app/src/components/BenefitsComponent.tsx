import React from "react";
import { getIcon } from "../IconsFile";

type SingleBoxPropsType = {
  iconName: string;
  header: string;
  text: string;
};

function SingleBox({ iconName, header, text }: SingleBoxPropsType) {
  let [icon, setIcon] = React.useState(getIcon(iconName));

  return (
    <div className="benefits__single-box">
      <h3 className="benefits__single-box__header">{header}</h3>
      <p className="benefits__single-box__text">{text}</p>
      <div className="benefits__single-box__icon">{icon.iconSVG}</div>
    </div>
  );
}

export default function BenefitsComponent() {
  return (
    <div className="benefits-container">
      <SingleBox
        iconName="car"
        header="Serwis dla każdej marki"
        text="Twój samochód, nasza troska - bez względu na markę. Zaufaj nam z każdym samochodem."
      />
      <SingleBox
        iconName="car"
        header="Szeroki wachlarz usług"
        text="Zajmujemy się wszystkim, co związane z Twoim samochodem. Nasz serwis oferuje pełną gamę usług."
      />
      <SingleBox
        iconName="car"
        header="Zawsze na czas"
        text="Naprawy przeprowadzane szybko i bez zbędnej zwłoki, w najkrótszym możliwym czasie."
      />
    </div>
  );
}
