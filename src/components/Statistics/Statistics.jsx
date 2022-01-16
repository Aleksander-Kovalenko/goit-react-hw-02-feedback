import { Container, StatisticItem } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  const styled = {
    good: '#44be42',
    neutral: '#ffaacc',
    bad: '#cc8e91',
  };
  return (
    <Container>
      <StatisticItem style={{ color: `${styled.good}` }}>Good: {good}</StatisticItem>
      <StatisticItem style={{ color: `${styled.neutral}` }}>Neutral: {neutral}</StatisticItem>
      <StatisticItem style={{ color: `${styled.bad}` }}>Bad: {bad}</StatisticItem>
      <div>
        <p>Total: {total}</p>
        <p>Positive Feedback: {percentage}%</p>
      </div>
    </Container>
  );
};
