import PropTypes from 'prop-types';
import { Paragraf } from 'styles/Feedback.styled';

export const Notification = ({ total, massage }) => {
  return total === 0 && <Paragraf>{massage}</Paragraf>;
};

Notification.propTypes = {
  total: PropTypes.number.isRequired,
  massage: PropTypes.string.isRequired,
};
