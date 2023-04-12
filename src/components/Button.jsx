import dice from "../assets/icon-dice.svg";

const Button = ({ handleClick }) => {
  return (
    <button className="advice-btn" onClick={handleClick}>
      <img src={dice} />
    </button>
  );
};

export default Button;
