export const ReactionList = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <div>
        <p>Total: {total}</p>
        <p>Positive Feedback: {percentage}%</p>
      </div>
    </div>
  );
};
