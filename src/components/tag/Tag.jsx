import PropTypes from 'prop-types';

export const Tag = ({text}) => {
  return <span className="tag">{text}</span>;
};

Tag.propTypes = {
    text: PropTypes.string,
};