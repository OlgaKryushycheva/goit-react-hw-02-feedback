import PropTypes from 'prop-types';
import { Paragraf } from 'styles/Feedback.styled';

export const Notification = ({ massage }) => {
  return <Paragraf>{massage}</Paragraf>;
};

Notification.propTypes = {
  massage: PropTypes.string.isRequired,
};
