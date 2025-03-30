import woman from "../../../public/Woman.svg";
import exercise from "../../../public/Exercise.svg";
import circle from "../../../public/Minicircle.svg";
import equity from "./Equity.module.scss";
import ipo from "../../../public/IPO.svg";
import chat from "../../../public/Chat.png";

const Equity = () => {
  return (
    <div>
      <div className={equity.equity}>
        <div className={equity.text}>
          <p className={equity.financing}>Equity Financing|</p>
          <p className={equity.startup}>for startup employees</p>
          <p className={equity.getequity}>
            Get equity planning, stock option financing, and wealth <br />
            management from advisors that know how stock <br />
            options and equity can help grow your wealth.
          </p>
          <button>Get started</button>
        </div>
        <div className={equity.images}>
          <img className={equity.woman} src={woman} alt="woman" />
          <img
            className={equity.exercise}
            src={exercise}
            alt="exercise details"
          />
          <img className={equity.circle} src={circle} alt="circle" />
          <a href="/">
            <img className={equity.ipo} src={ipo} alt="IPO info" />
          </a>
        </div>
      </div>
      <hr />
      <div className={equity.block2}>
        <p className={equity.work}>
          We work with employees from <br />
          the best startups
        </p>
        <div className={equity.center}>
          <div className={equity.frame}>
            <p className={equity.website}>
              This website stores data such as cookies to enable essential site{" "}
              <br /> functionality, as well as marketing, personalization, and
              analytics. <br /> By remaining on this website you indicate your
              consent.
            </p>
            <div className={equity.policy}>
              <a href="/">Privacy policy</a>
              <a href="/">Cookie policy</a>
              <button>Got it</button>
            </div>
            <p className={equity.leading}>
              THE LEADING EQUITY PLANNING PLATFORM
            </p>
          </div>
          <p className={equity.got}>You’ve got startup equity. Now what?</p>
          <p className={equity.see}>
            See your full net worth including your stock options, compare
            exercise and <br /> selling strategies, and see how taxes impact
            your net gains.
          </p>
        </div>

        <div>
          <a href="/">
            <img className={equity.chat} src={chat} alt="chat" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Equity;
