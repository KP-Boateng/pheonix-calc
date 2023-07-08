import "./screen.css";
import PropTypes from "prop-types";

const Screen = ({ errorState, output, receivedInput, cursorPosition }) => {
  return (
    <div className="screen">
      <div className="input cursor-pointer">
        {receivedInput}
        {cursorPosition !== -1 && (
          <span
            className="cursor blinking-cursor"
            style={{ left: `calc(0.6em + ${cursorPosition * 1.5}em)` }}
          ></span>
        )}
      </div>
      <div className="result text-3xl  w-full text-right">
        <div className={errorState && "text-red-500"}>{output}</div>
      </div>
      {/* {cursorPosition !== -1 && <div className="blinking-cursor"></div>} */}
    </div>
  );
};

Screen.propTypes = {
  errorState: PropTypes.func.isRequired,
  output: PropTypes.func.isRequired,
  receivedInput: PropTypes.func.isRequired,
  cursorPosition: PropTypes.func.isRequired,
};

export default Screen;
