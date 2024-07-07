import PropTypes from 'prop-types';

import './content.component.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Content = ({ children }) => {
  return <div className="content">{children}</div>;
};

Content.propTypes = propTypes;

export default Content;
