import Button from "./Button";
import "../css/hero.css";

export default function HeroComponent({ callback }: { callback: () => void }) {
  return (
    <div className="hero-container">
      <div className="hero__text">
        <h2 className="hero__header">
          Mechanika samochodowa na najwyższym poziomie!
        </h2>
        <p className="hero__paragraph">
          <span className="hero__paragraph-part">
            Zapewniamy bogaty wachlarz usług serwisowych, które przedłużą
            żywotność Twojego pojazdu i zwiększą jego niezawodność. Zaufaj
            naszemu doświadczeniu i pasji do motoryzacji&nbsp;–&nbsp;Twój
            samochód będzie zawsze w najlepszym stanie technicznym i gotowy na
            czas.{" "}
          </span>
          <span className="hero__paragraph-part">
            Oferujemy szybkie, solidne i spersonalizowane usługi, które pozwolą
            Ci cieszyć się bezpieczną i komfortową jazdą. Twoje zadowolenie jest
            dla nas priorytetem, dlatego gwarantujemy najwyższą jakość obsługi.
          </span>
        </p>
        <Button onClick={callback}>Zobacz, gdzie jesteśmy</Button>
      </div>
      <div className="hero__photo-container">
        <img
          fetchPriority="high"
          src="herophoto.webp"
          alt="Hero component photography"
          className="hero__photo"
        />
      </div>
    </div>
  );
}
