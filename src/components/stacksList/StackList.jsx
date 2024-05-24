import PropTypes from "prop-types";
import { iconsStack } from "../../utils/icons/iconsStack";

export const StackList = ({stacks}) => {
  return (
    <ul className="stacks__list">
    {Array.isArray(stacks) ? (
      stacks.map((stack, index) => {
        const icon = iconsStack.find(
          (icon) => icon.name.toLowerCase() === stack.toLowerCase()
        );

        return (
          <li key={index} className="stacks__item">
            {icon && icon.component}
          </li>
        );
      })
    ) : typeof stacks === "string" ? (
      <li className="stacks__item">
        {
          iconsStack.find(
            (icon) =>
              icon &&
              typeof icon.name === "string" &&
              icon.name.toLowerCase() === stacks.toLowerCase()
          )?.component
        }
      </li>
    ) : null}
  </ul>
  );
};

StackList.propTypes = {
    stacks: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string
    ]).isRequired,
  };