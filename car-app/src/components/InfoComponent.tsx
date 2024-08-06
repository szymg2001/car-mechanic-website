import React from "react";
import contactDetails from "../contactDetails.json";
import "../css/information.css";

interface SingleInfoBoxProps {
  children: React.ReactNode;
  title: string;
  imgSrc: string;
  reverse?: boolean;
}

function SingleInfoBox({
  children,
  title,
  imgSrc,
  reverse = false,
}: SingleInfoBoxProps) {
  return (
    <div
      className="single-info-box__container"
      style={{
        flexDirection: reverse ? "row-reverse" : "row",
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      <div className="single-info-box__content">
        <h3 className="single-info-box__header">{title}</h3>
        <div className="single-info-box__children">{children}</div>
      </div>
      <div className="single-info-box__image-container">
        <img
          src={imgSrc}
          fetchPriority="low"
          alt="info box photography"
          className="single-info-box__image"
        />
      </div>
    </div>
  );
}

export default function InfoComponent() {
  return (
    <div className="info-component__container">
      <SingleInfoBox
        reverse={true}
        title="Usługi naprawcze dla Twojego sprzętu rolniczego"
        imgSrc="rolnicze.webp"
      >
        <p className="single-info-box__text">
          Posiadamy wieloletnie doświadczenie w serwisowaniu ciągników,
          kombajnów i innych urządzeń rolniczych. Wiemy, jak istotne są te
          maszyny dla sprawnego funkcjonowania gospodarstwa rolnego, dlatego
          oferujemy pełen zakres usług, które gwarantują ich niezawodność i
          długą żywotność.
        </p>
      </SingleInfoBox>
      <SingleInfoBox imgSrc="mechanic.webp" title="Nasze usługi mechaniczne">
        <p className="single-info-box__text">
          Oferujemy szeroki zakres usług serwisowych, w tym:
        </p>
        <ul className="single-info-box__services">
          <li>Diagnostyka komputerowa</li>
          <li>Naprawa silników</li>
          <li>Wymiana oleju</li>
          <li>Naprawa układów hamulcowych</li>
          <li>Serwis klimatyzacji</li>
          <li>Wymiana opon</li>
          <li>Serwis zawieszenia</li>
          <li>Naprawa układów wydechowych</li>
        </ul>
        <p className="single-info-box__text">
          I wiele więcej. Jeśli masz jakiekolwiek pytania, zadzwoń:{" "}
          {contactDetails.phone}
        </p>
      </SingleInfoBox>
    </div>
  );
}
