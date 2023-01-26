import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/common.scss";
import "./index.scss";
import CFESBanner from "../images/cfes_logo.png";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="outer-container">
      <div className="website-container">
        <div className="website-header">
          <img src={CFESBanner} alt="CFES Logo" className="logo" />
        </div>
        <div className="website-message">
          <p>
            Hi friends! We are so sorry for the inconvenience, but our website
            is down right now.
          </p>
          <ul className="quick-resources">
            <li>
              If you are looking for the CSE 2023 website,{" "}
              <a href="https://cse2023.com" target={"_blank"}>
                click here
              </a>
              .
            </li>
            <li>
              If you are looking for the CEC 2023 website,{" "}
              <a href="https://cec2023.ca" target={"_blank"}>
                click here
              </a>
              .
            </li>
            <li>
              If you are looking for any specific resources, check out the{" "}
              <a
                href="https://drive.google.com/drive/folders/1w-m3voVWbAM8TgigXoxgbxCiHKn36O6m"
                target={"_blank"}
              >
                external drive
              </a>
              .
            </li>
          </ul>
          <p>
            If you have any questions, please reach out to{" "}
            <a href="mailto:vpc@cfes.ca">vpc@cfes.ca</a> and we will find you
            what you need!
          </p>
        </div>
        <div className="website-resources">
          <div className="calls-to-action">
            <p>
              From coast to coast to coast, we acknowledge the ancestral and
              unceded territories of all the Inuit, Métis and First Nations
              people that call this land home. We acknowledge Indigenous people
              and knowledge keepers have been doing engineering for thousands of
              years but have not historically been recognized for their
              expertise. We affirm our commitment and responsibility as settlers
              to amplifying Indigenous ways of knowing and access to engineering
              in our work.
            </p>
            <a href="https://ehprnh2mwo3.exactdn.com/wp-content/uploads/2021/01/Calls_to_Action_English2.pdf">
              Truth & Reconciliation Commission of Canada: Calls to Action
            </a>
            <p>
              D’un océan à l’autre, nous reconnaissons les territoires
              ancestraux et non cédés de tous les Inuits, Métis et Premières
              Nations qui habitent cette terre. Nous reconnaissons que les
              peuples indigènes et les gardiens des connaissances faisaient de
              l’ingénierie depuis des milliers d’années, mais n’ont pas toujours
              été reconnut pour leur expertise. Nous affirmons notre engagement
              et notre responsabilité en tant qu’organisation d’ingénierie
              coloniale à amplifier les façons indigènes de connaître et l’accès
              à l’ingénierie dans notre travail. Nous sommes solidaires
              aujourd’hui et tous les jours avec tous les guerriers indigènes.
              Nous sommes tous visés par les traités.
            </p>
            <a href="https://ehprnh2mwo3.exactdn.com/wp-content/uploads/2021/04/4-Appels_a_l-Action_French.pdf">
              Commission de vérité et réconciliation du Canada : Appels à
              l’action{" "}
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

export const Head: HeadFC = () => <title>CFES | FCEG | Canadian Federation of Engineering Students</title>;
