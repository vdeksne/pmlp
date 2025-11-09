import { useEffect, useMemo, useState } from "react";
import logoEn from "./assets/logo_eng.png";
import logoLv from "./assets/logo_lv.png";
import bgImage from "./assets/bg.jpg";

import "./App.css";

const content = {
  en: {
    langLabel: "English",
    title: "Personal & Small App Hosting",
    tagline: `© ${new Date().getFullYear()} Ministry of the Interior of the Republic of Latvia, Office of Citizenship and Migration Affairs. All rights to the published content are reserved.`,
    primaryCta: "epak.pmlp.gov.lv",
    secondaryCta: "vizucelvedis.bumbierkoks.eu",
    featureHeading: "Visa Application",
    featureList: [
      "Electronic Visa Application enables the applicant to fill in an online application form for a Schengen visa",
      "Or a national visa (D-type visa)",
    ],
    featureHeading2: "Visa Guide",
    featureList2: [
      "Information regarding national long-stay visa (D) application at the OCMA",
      "Information regarding Schengen short-term visa (C) extension at the OCMA",
    ],
    logos: [{ src: logoEn, alt: "English logo" }],
  },
  lv: {
    langLabel: "Latviešu",
    title: "Personīgām un nelielām lietotnēm",
    tagline: `© ${new Date().getFullYear()} LR IeM Pilsonības un migrācijas lietu pārvalde, publicētā satura visas tiesības aizsargātas.`,
    primaryCta: "epak.pmlp.gov.lv",
    secondaryCta: "vizucelvedis.bumbierkoks.eu",
    featureHeading: "Vīzas pieteikums",
    featureList: [
      "Publisks pakalpojums, kas dod iespēju Šengenas vīzas pieteikumu aizpildīt elektroniski",
      "Un Ilgtermiņa vīzas pieteikumu aizpildīt elektroniski",
    ],
    featureHeading2: "Vīzu ceļvedis",
    featureList2: [
      "Informācija par nacionālās ilgtermiņa vīzas (D) pieprasīšana Pārvaldē",
      "Informācija par Šengenas īstermiņa vīzas (C) pagarināšana Pārvaldē",
    ],
    logos: [{ src: logoLv, alt: "Latviešu logo" }],
  },
};

function App() {
  const [language, setLanguage] = useState("en");

  const copy = useMemo(() => content[language], [language]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="landing landing-page-square">
      <header className="landing__header">
        <div
          className="language-switch"
          role="group"
          aria-label="Language selector"
        >
          <button
            type="button"
            className={language === "en" ? "is-active" : ""}
            onClick={() => setLanguage("en")}
          >
            English
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1"
            height="20"
            viewBox="0 0 1 20"
            fill="none"
          >
            <path d="M0.5 0V20" stroke="#4C5059" />
          </svg>
          <button
            type="button"
            className={language === "lv" ? "is-active" : ""}
            onClick={() => setLanguage("lv")}
          >
            Latviešu
          </button>
        </div>
      </header>

      <div className="logos">
        <img
          src={
            language === "en"
              ? content.en.logos[0].src
              : content.lv.logos[0].src
          }
          alt={
            language === "lv"
              ? content.en.logos[0].alt
              : content.en.logos[0].alt
          }
        />
      </div>

      <main className="landing__content">
        {/* <span className="eyebrow">{copy.langLabel}</span> */}
        {/* <h1>{copy.title}</h1>
        <p className="tagline">{copy.tagline}</p> */}

        {/* <div className="actions">
          <a
            className="primary"
            href="https://epak.pmlp.gov.lv/NVIS.EService001.WebSite/"
          >
            {copy.primaryCta}
          </a>
          <a className="secondary" href="https://vizucelvedis.bumbierkoks.eu/#">
            {copy.secondaryCta}
          </a>
        </div> */}
      </main>

      <div className="card-container">
        <a
          className="primary block"
          target="_blank"
          href="https://epak.pmlp.gov.lv/NVIS.EService001.WebSite/"
        >
          <section className="features" id="deployment">
            <h2>{copy.featureHeading}</h2>
            <ul>
              {copy.featureList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </a>
        <a
          className="secondary block"
          target="_blank"
          href="https://vizucelvedis.bumbierkoks.eu/#"
        >
          <section className="features" id="deployment">
            <h2>{copy.featureHeading2}</h2>
            <ul>
              {copy.featureList2.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </a>
      </div>

      <img className="bg-image" src={bgImage} alt="Decorative background" />
      <div className="footer">
        <p>{copy.tagline}</p>
      </div>
    </div>
  );
}

export default App;
