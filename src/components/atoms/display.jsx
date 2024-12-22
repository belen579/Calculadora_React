
import PropTypes from 'prop-types';

const Display = ({ value }) => {
  return (
    <div className="pantalla">
      <input type="text" value={value} readOnly />
    </div>
  );
};


export default Display;