import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import "../styles/common.scss";
import "./index.scss";
import CFESBanner from "../images/cfes_logo.png";
import { Trans, useTranslation } from "react-i18next";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { languages as langConsts } from "../utils/languageConstants";

const IndexPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  const { language, languages, originalPath } = useI18next();

  return (
    <div className="outer-container">
      <div className="website-container">
        <div className="website-header">
          <img src={CFESBanner} alt="CFES Logo" className="logo" />
          {languages.map((lang) => {
            if (lang !== language) {
              return (
                <Link to={originalPath} language={lang} key={lang} className="lang-link">
                  {langConsts[lang]}
                </Link>
              );
            }
          })}
        </div>
        <div className="website-message">
          <p>{t("outage-message")}</p>
          <ul className="quick-resources">
            <li>
              <Trans i18nKey={"cse-link"} ns={"translation"}>
                <a href="https://cse2023.com" target={"_blank"}>
                  click here
                </a>
              </Trans>
            </li>
            <li>
              <Trans i18nKey={"cec-link"} ns={"translation"}>
                <a href="https://cec2023.ca" target={"_blank"}>
                  click here
                </a>
              </Trans>
            </li>
            <li>
              <Trans i18nKey={"external-drive"} ns={"translation"}>
                <a
                  href="https://drive.google.com/drive/folders/1w-m3voVWbAM8TgigXoxgbxCiHKn36O6m"
                  target={"_blank"}
                >
                  click here
                </a>
              </Trans>
            </li>
          </ul>
          <p>
            <Trans i18nKey={"contact-link"}>
              {" "}
              <a href="mailto:vpc@cfes.ca">vpc@cfes.ca</a>
            </Trans>
          </p>
        </div>
        <div className="website-resources">
          <div className="calls-to-action">
            <p>{t("trc-message")}</p>
            <a href={language == 'en' ? "https://ehprnh2mwo3.exactdn.com/wp-content/uploads/2021/01/Calls_to_Action_English2.pdf" : "https://ehprnh2mwo3.exactdn.com/wp-content/uploads/2021/04/4-Appels_a_l-Action_French.pdf"}>
              {t("trc-link")}
            </a>
          </div>
          <div className="resource-links">
            <h3 className="resource-header">Resources</h3>
            <ul className="resource-list">
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1vFBdwC-7V79QQYbYXdmAGENF4Ddg3rPk?usp=sharing"
                  target={"_blank"}
                >
                  Policy Manual
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/12qE49B-nHSgL1hk7I1GYyp8WvluXukOB/view?usp=sharing"
                  target={"_blank"}
                >
                  Constitution
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/open?id=1w-m3voVWbAM8TgigXoxgbxCiHKn36O6m"
                  target={"_blank"}
                >
                  Full Drive
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1vxUrmMIJQVQRBFwaZbuedXlvLtVGxHOh/view?usp=sharing"
                  target={"_blank"}
                >
                  CFES Acronym Cheat Sheet
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1ieb8ixH-okIoforHQOEYbnQIWGOhywQ6/view?usp=sharing"
                  target={"_blank"}
                >
                  Bylaws
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1_46MIYY4MkcZtOAZ60zWZGp0Ecylu_TV?usp=sharing"
                  target={"_blank"}
                >
                  Reports
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>CFES | FCEG | Canadian Federation of Engineering Students</title>
);

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
