export const ReactionItem = ({ title, value }) => {
  const Title = title[0].toUpperCase() + title.slice(1, title.length);
  return (
    <li>
      {Title}: {value}
    </li>
  );
};
