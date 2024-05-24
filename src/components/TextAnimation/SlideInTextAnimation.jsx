import PropTypes from "prop-types";

export const SlideInTextAnimation = ({ text }) => {
  const defaultText = "Text Animation";
  const displayedText = text ? text : defaultText;
  const letters = displayedText.split("");

  return (
    <div className="textanim hero__sub-title">
      {letters.map((letter, index) => (
        <span key={index} className={`letter letter-${index}`}>
          {letter}
        </span>
      ))}
    </div>
  );
};

SlideInTextAnimation.propTypes = {
  text: PropTypes.string,
};
