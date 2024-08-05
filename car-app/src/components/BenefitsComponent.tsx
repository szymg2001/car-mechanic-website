import { getIcon } from "../IconsFile";
import "../css/benefits.css";

type SingleBoxPropsType = {
  iconName: string;
  header: string;
  text: string;
};

function SingleBox({ iconName, header, text }: SingleBoxPropsType) {
  return (
    <div className="benefits__single-box">
      <p className="benefits__single-box__header">{header}</p>
      <p className="benefits__single-box__text">{text}</p>
      <div className="benefits__single-box__icon">
        {getIcon(iconName).iconSVG}
      </div>
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
        iconName="blocks"
        header="Szeroki wachlarz usług"
        text="Zajmujemy się wszystkim, co związane z Twoim samochodem. Nasz serwis oferuje pełną gamę usług."
      />
      <SingleBox
        iconName="clock"
        header="Zawsze na czas"
        text="Naprawy przeprowadzane szybko i bez zbędnej zwłoki, w najkrótszym możliwym czasie."
      />
    </div>
  );
}
