import PropTypes from 'prop-types';
import InfoBox from '@/components/molecules/info-box/info-box';

import './card-list.scss';

const propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const CardList = ({ items }) => {
  return (
    <div className="card-list">
      {items.map(item => (
        <InfoBox key={item.id} label={item.label} info={item.info} />
      ))}
    </div>
  );
};

CardList.propTypes = propTypes;

export default CardList;
