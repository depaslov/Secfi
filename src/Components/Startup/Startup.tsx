import startup from "./Startup.module.scss";
import tc from "../../../public/TC.svg";
import Banner4 from "../../../public/Banner4.svg";
import man1 from "../../../public/Man1.svg";
import man2 from "../../../public/Man2.svg";
import woman1 from "../../../public/Woman1.svg";
import woman2 from "../../../public/Woman2.svg";

const Startup = () => {
  return (
    <div>
      <div className={startup.startup}>
        <div className={startup.why}>
          <p>WHY SECFI</p>
          <p>
            Built by startup <br /> employees
          </p>
          <div className={startup.as}>
            <p>As seen in</p>
            <img src={tc} alt="tc" />
          </div>
        </div>
        <div className={startup.cont}>
          <p className={startup.we}>We put equity first</p>
          <p className={startup.our}>
            Our team has deep expertise in equity, tax implications, and how{" "}
            <br /> it fits into your financial picture.
          </p>
          <p className={startup.we}>You don’t need millions</p>
          <p className={startup.our}>
            We help you make important equity decisions that can set you <br />{" "}
            up for financial success.
          </p>
          <p className={startup.we}>Holistic wealth management</p>
          <p className={startup.our}>
            We take a comprehensive view of all your finances, including <br />{" "}
            stock options, to help you save time and money, and grow your <br />{" "}
            wealth.
          </p>
        </div>
      </div>
      <div className={startup.banner4}>
        <div>
          <img src={Banner4} alt="banner4" />
        </div>
        <div className={startup.text}>
          <p>WE KNOW EQUITY.</p>
          <p>$48B</p>
          <p>In equity value on the platform</p>
        </div>
      </div>
      <div className={startup.banner5}>
        <div className={startup.testi}>
          <p>TESTIMONALS</p>
          <p>What our clients say</p>
        </div>

        <div className={startup.banners}>
          <div className={startup.realize}>
            <p>
              I realized I’ve been sorely <br /> needing your advisory <br />{" "}
              services. So excited to work <br /> with you.
            </p>
            <p>Gusto</p>
            <p>Senior Engineer</p>
          </div>
          <div className={startup.realize}>
            <p>
              Secfi was one of the only <br /> places I could find that could{" "}
              <br /> give me accurate <br /> calculations on AMT.
            </p>
            <p>Amanda</p>
            <p>Early HR employee at pre-IPO startup</p>
          </div>
          <div className={startup.realize}>
            <p>
              Secfi felt like the safest <br /> option. There is upside and{" "}
              <br /> almost no downside, and I <br /> might as well play it
              safe.
            </p>
            <p>Victor</p>
            <p>Engineering leader at a pre-IPO startup</p>
          </div>
        </div>
      </div>
      <div>
        <p className={startup.know}>Know your options</p>
        <div className={startup.banner6}>
          <div className={startup.company}>
            <p>
              My company is <br /> going public or <br /> getting acquired
            </p>
            <img src={man1} alt="man1" />
            <div className={startup.openCollection}>
              <span>Open collection</span>
              <button className={startup.arrowButton}>←</button>
            </div>
          </div>
          <div className={startup.managing}>
            <p>
              Managing wealth <br /> with stock options
            </p>
            <img src={man2} alt="man2" />
            <div className={startup.openCollection}>
              <span>Open collection</span>
              <button className={startup.arrowButton}>←</button>
            </div>
          </div>
          <div className={startup.exerting}>
            <p>
              Exercising <br /> stock options
            </p>
            <img src={woman1} alt="woman1" />
            <div className={startup.openCollection}>
              <span>Open collection</span>
              <button className={startup.arrowButton}>←</button>
            </div>
          </div>
          <div className={startup.starting}>
            <p>
              Starting a new job <br /> with stock options
            </p>
            <img src={woman2} alt="woman2" />
            <div className={startup.openCollection}>
              <span>Open collection</span>
              <button className={startup.arrowButton}>←</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startup;
