import Port from "../../../public/Portfolio.svg";
import portfolio from "./Portfolio.module.scss";
import arrow from "../../../public/Arrow.svg";
import banner from "../../../public/Banner.svg";
import banner2 from "../../../public/Banner2.svg";
import banner3 from "../../../public/Banner3.svg"

const Portfolio = () => {
  return (
    <div>
      <div>
        <img className={portfolio.img} src={Port} alt="portfolio" />
        <p className={portfolio.help}>How we help startup builders</p>
        <a href="/">
          <img className={portfolio.img} src={arrow} alt="arrow" />
        </a>
      </div>
      <div className={portfolio.work}>
        <div className={portfolio.ipo}>
          <p>EQUITY, tax & IPO planning</p>
          <p>
            Work with a financial advisor to <br /> align your stock options
            with <br /> your financial goals.
          </p>
          <div className={portfolio.buttons}>
            <button>Get started</button>
            <button>Learn more</button>
          </div>
        </div>
        <div>
          <img className={portfolio.banner} src={banner} alt="black" />
        </div>
      </div>
      <div className={portfolio.work2}>
        <div>
          <img className={portfolio.banner} src={banner2} alt="black" />
        </div>
        <div className={portfolio.ipo}>
          <p>Exercise & Liquidity Financing</p>
          <p>
            Get the cash you need to own your <br /> equity, or get cash for
            your private <br /> shares without selling them.
          </p>
          <div className={portfolio.buttons}>
            <button>Get started</button>
            <button>Learn more</button>
          </div>
        </div>
      </div>
      <div className={portfolio.work}>
        <div className={portfolio.ipo}>
          <p>Wealth Management</p>
          <p>
            Grow your money through <br />managed portfolios and exclusive <br /> access to
            private investments.
          </p>
          <div className={portfolio.buttons}>
            <button>Get started</button>
            <button>Learn more</button>
          </div>
        </div>
        <div>
          <img className={portfolio.banner} src={banner3} alt="black" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
