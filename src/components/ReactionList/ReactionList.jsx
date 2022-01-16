import { ReactionItem } from './ReactionItem';

export const ReactionList = ({ names, numbers }) => {
  return (
    <>
      {names.map((item, i) => (
        <ReactionItem title={item} value={numbers[i]} />
      ))}
    </>
  );
};
