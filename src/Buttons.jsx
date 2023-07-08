import PropTypes from "prop-types";
import "./buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const Buttons = (props) => {
  const buttonInputHandler = (input) => {
    props.button(input);
  };

  return (
    <div className="buttons">
      <div
        className="active:bg-blue-500"
        onClick={() => buttonInputHandler("(")}
      >
        <button>(</button>
      </div>
      <div onClick={() => buttonInputHandler(")")}>
        {" "}
        <button>)</button>
      </div>
      <div onClick={props.backspace}>
        <button>
          {" "}
          <FontAwesomeIcon icon={faBackward} />
        </button>
      </div>
      <div onClick={props.reset}>
        <button>AC</button>
      </div>
      <div onClick={() => buttonInputHandler("1")}>
        <button>1</button>
      </div>
      <div onClick={() => buttonInputHandler("2")}>
        {" "}
        <button>2</button>
      </div>
      <div onClick={() => buttonInputHandler("3")}>
        {" "}
        <button>3</button>
      </div>
      <div onClick={() => buttonInputHandler("+")}>
        {" "}
        <button>+</button>
      </div>
      <div onClick={() => buttonInputHandler("4")}>
        {" "}
        <button>4</button>
      </div>
      <div onClick={() => buttonInputHandler("5")}>
        {" "}
        <button>5</button>
      </div>
      <div onClick={() => buttonInputHandler("6")}>
        {" "}
        <button>6</button>
      </div>
      <div onClick={() => buttonInputHandler("-")}>
        {" "}
        <button>-</button>
      </div>
      <div onClick={() => buttonInputHandler("7")}>
        {" "}
        <button>7</button>
      </div>
      <div onClick={() => buttonInputHandler("8")}>
        {" "}
        <button>8</button>
      </div>
      <div onClick={() => buttonInputHandler("9")}>
        {" "}
        <button>9</button>
      </div>
      <div onClick={() => buttonInputHandler("×")}>
        {" "}
        <button>×</button>{" "}
      </div>
      <div onClick={() => buttonInputHandler("0")}>
        <button>0</button>
      </div>
      <div onClick={() => buttonInputHandler(".")}>
        <button>.</button>
      </div>
      <div onClick={props.calculate}>
        <button>=</button>
      </div>
      <div onClick={() => buttonInputHandler("÷")}>
        <button>÷</button>
      </div>
    </div>
  );
};

Buttons.propTypes = {
  calculate: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  button: PropTypes.func.isRequired,
  backspace: PropTypes.func.isRequired,
};

export default Buttons;
