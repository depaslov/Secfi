import woman from '../../../public/Woman.svg';
import exercise from '../../../public/Exercise.svg';
import circle from '../../../public/Minicircle.svg';
import equity from './Equity.module.scss';
import ipo from '../../../public/IPO.svg';

const Equity = () => {
    return (
        <div className={equity.equity}>
            <div className={equity.text}>
                <p className={equity.financing}>Equity Financing|</p>
                <p className={equity.startup}>for startup employees</p>
                <p>
                    Get equity planning, stock option financing, and wealth <br />
                    management from advisors that know how stock <br />
                    options and equity can help grow your wealth.
                </p>
                <button>Get started</button>
            </div>
            <div className={equity.images}>
                <img className={equity.woman} src={woman} alt="woman" />
                <img className={equity.exercise} src={exercise} alt="exercise details" />
                <img className={equity.circle} src={circle} alt="circle" />
                <a href="/"><img className={equity.ipo} src={ipo} alt="IPO info" /></a>
            </div>
        </div>
    );
};

export default Equity;