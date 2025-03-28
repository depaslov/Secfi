import footer from "./Footer.module.scss";
import twitter from "../../../public/Twitter.svg";
import linkedin from "../../../public/Linkedin.svg";
import hz from "../../../public/Hz.svg";

const Footer = () => {
  return (
    <div>
      <div className={footer.footer}>
        <ul>
          <li>
            <a className={footer.SOLUTION} href="/">
              SOLUTION
            </a>
          </li>
          <li>
            <a href="/">Equity and Tax Planning</a>
          </li>
          <li>
            <a href="/">IPO and Liquidity Planning</a>
          </li>
          <li>
            <a href="/">Exercise Financing</a>
          </li>
          <li>
            <a href="/">Liquidity Financing</a>
          </li>
          <li>
            <a href="/">Secfi Wealth</a>
          </li>
          <li>
            <a href="/">Investment Management</a>
          </li>
          <li>
            <a href="/">Secfi for Startups</a>
          </li>
          <li>
            <a href="/">Secfi Capital</a>
          </li>
        </ul>
        <ul>
          <li className={footer.TOOLS}>
            <a href="/">TOOLS</a>
          </li>
          <li>
            <a href="/">Equity Planner</a>
          </li>
          <li>
            <a href="/">AMT Calculator</a>
          </li>
          <li>
            <a href="/">Stock Option Tax Calculator</a>
          </li>
          <li>
            <a href="/">Exercise Timing Planner</a>
          </li>
          <li>
            <a href="/">Stock Option Exit Calculator</a>
          </li>
        </ul>
        <ul>
          <li>
            <a className={footer.LEARN} href="/">
              LEARN
            </a>
          </li>
          <li>
            <a href="/">Secfi Learn</a>
          </li>
          <li>
            <a href="/">Founders & Funders</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
        </ul>
        <ul>
          <li>
            <a className={footer.ABOUT} href="/">
              About us
            </a>
          </li>
          <li>
            <a href="/">Our Story</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">News & Press</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Legal</a>
          </li>
        </ul>
        <ul className={footer.info}>
          <div className={footer.social}>
            <a href="/">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="/">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="/">
              <img src={hz} alt="hz" />
            </a>
          </div>
          <li>
            <a href="/">Privacy policy</a>
          </li>
          <li>
            <a href="/">Cookie Policy</a>
          </li>
          <li>
            <a href="/">Security</a>
          </li>
          <li>
            <a href="/">Terms of Service</a>
          </li>
          <li>
            <a href="/">Referral Program</a>
          </li>
        </ul>
      </div>
      <div className={footer.text}>
        <p>© Secfi 2023 — All rights reserved.</p>
        <p className={footer.check}>Check the background of Secfi Securities on FINRA’s BrokerCheck</p>
        <p>
          Securities products offered by Secfi Securities, LLC, an
          SEC-registered broker-dealer and Member FINRA / SIPC
          ((https://www.finra.org/#/ and https://www.sipc.org/)). Access
          important information in our Legal Resources
          (https://secfi.com/important-information-secfi-securities-llc) and
          learn more about Secfi Securities in our Customer Relationship Summary
          (https://files.brokercheck.finra.org/crs_302112.pdf). Investment
          advisory products and services, including financial planning and
          investment management, offered exclusively to Clients under an
          in-force Agreement by Secfi Advisory Limited, an SEC-registered
          investment adviser. Access important information in our Legal
          Resources and learn more about Secfi Advisory Limited in our Client
          Relationship Summary
          (https://secfi.com/important-information-secfi-advisory-limited). This
          information is provided by Secfi for educational and illustrative
          purposes only and is not considered an offer, solicitation of an
          offer, advice, or recommendation to buy, sell, or hold any security.
          All investing involves risk, including the risk of losing the money
          you invest, and past performance does not guarantee future
          performance. Secfi relies on information from various sources believed
          to be reliable, including information from its Customers, Clients, and
          other third parties, but cannot guarantee the accuracy or completeness
          of that information. Secfi, Inc. does not provide tax, legal, or
          investment advice. Secfi is not affiliated with, sponsored, or
          endorsed by the companies listed, described, or featured on its site.
          Company logos or trademarks used do not imply endorsement and are the
          property of their respective owners.
        </p>
      </div>
    </div>
  );
};

export default Footer;
