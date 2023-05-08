import PropTypes from 'prop-types';
import { Container, TitleMain } from 'styles/Feedback.styled';

export const Section = ({ title, children }) => {
  return (
    <Container>
      <TitleMain>{title}</TitleMain>
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
