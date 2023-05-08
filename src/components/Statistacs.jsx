import PropTypes from 'prop-types';
import { Item, List, Paragraf, TitleSecond } from 'styles/Feedback.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <TitleSecond>Statistics</TitleSecond>
    <List>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
    </List>
    <Paragraf>Total: {total}</Paragraf>
    <Paragraf>Positive feedback: {positivePercentage}% </Paragraf>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
