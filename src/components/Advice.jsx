import Button from "./Button";
import dividerDesktop from "../assets/pattern-divider-desktop.svg";
import dividerPhone from "../assets/pattern-divider-mobile.svg";
import { ThreeDots } from "react-loader-spinner";

const Advice = ({ advice, handleClick, isLoading }) => {
  return (
    <div className="advice-container">
      <h4 className="advice-header">Advice # {advice.id}</h4>
      {isLoading ? (
        <ThreeDots color="hsl(150, 100%, 66%)" />
      ) : (
        <p className="advice-text">{`"${advice.advice}"`}</p>
      )}
      <div>
        <img className="divider-desktop" src={dividerDesktop} />
        <img className="divider-phone" src={dividerPhone} />
      </div>
      <Button handleClick={handleClick} />
    </div>
  );
};

export default Advice;
