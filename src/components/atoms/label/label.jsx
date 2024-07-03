import PropTypes from 'prop-types';

import './label.scss';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const Label = ({ text }) => {
  return <span className="label">{text}</span>;
};

Label.propTypes = propTypes;

export default Label;
