import { Container, ContainerProgress } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <Container>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <div>
        <p>Total: {total}</p>
        <p>Positive Feedback: {percentage}%</p>
      </div>
    </Container>
  );
};
