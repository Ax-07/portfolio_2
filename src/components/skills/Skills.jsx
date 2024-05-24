import { iconsStack } from "../../utils/icons/iconsStack";
import { useState } from "react";
import { Section } from "../Section/Section";
import PropTypes from "prop-types";
import arrow from "../../assets/icons/arrow.svg";

const calculateStyles = (index, rotationIndex, iconAngle) => {
  const angle = (iconAngle * ((index + rotationIndex) % iconsStack.length) * Math.PI) / 180 - Math.PI / 2;
  const x = 300 * Math.cos(angle);
  const y = 300 * Math.sin(angle);
  const positionY = (index + rotationIndex) % iconsStack.length === 0 ? '-150' : `${y}`;
  const scale = (index + rotationIndex) % iconsStack.length === 0 ? 'scale(1.6)' : '';
  const zIndex = (index + rotationIndex) % iconsStack.length === 0 ? '10' : '1';
  const rotation = x / iconsStack.length;

  return { x, positionY, rotation, scale, zIndex };
};

const Icon = ({ icon, index, rotationIndex, iconAngle }) => {
  const { x, positionY, rotation, scale, zIndex } = calculateStyles(index, rotationIndex, iconAngle);
  const description = (index + rotationIndex) % iconsStack.length === 0 ? icon.description : '';

  return (
    <div
      key={index}
      className="skills__icon"
      style={{ transform: `translate(${x}px, ${positionY}px) rotate(${rotation}deg) ${scale}`, zIndex: `${zIndex}`}}
    >
      {icon.component}
      <p className={`skills__description ${description && 'skills__description--display'}`}>{description}</p>
      
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.object,
  index: PropTypes.number,
  rotationIndex: PropTypes.number,
  iconAngle: PropTypes.number,
};

export const Skills = () => {
  const [rotationIndex, setRotationIndex] = useState(0);
  const iconAngle = 360 / (iconsStack.length - 1);

  const onRotateLeft = () => {
    setRotationIndex((prevIndex) => (prevIndex - 1 + iconsStack.length) % iconsStack.length);
  };

  const onRotateRight = () => {
    setRotationIndex((prevIndex) => (prevIndex + 1) % iconsStack.length);
  };

  return (
      <section id="skills" className="skills">
        <h2 className="skills__title">Mes Technos favorites</h2>
        <div className="skills__container">
          {iconsStack.map((icon, index) => (
            <Icon key={index} icon={icon} index={index} rotationIndex={rotationIndex} iconAngle={iconAngle} />
          ))}
          <img src={arrow} alt="arrow left" className="skills__arrow skills__arrow-left" onClick={onRotateLeft}/>
          <img src={arrow} alt="arrow right" className="skills__arrow skills__arrow-right" onClick={onRotateRight}/>
        </div>
      </section>
  );
};