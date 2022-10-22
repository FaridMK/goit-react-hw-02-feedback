import PropTypes from 'prop-types';
import Feedback from './Feedback/Feedback';

export const App = () => {
  return (
    <div>
      <Feedback />
    </div>
  );
};

App.prototype = {
  children: PropTypes.node,
};
