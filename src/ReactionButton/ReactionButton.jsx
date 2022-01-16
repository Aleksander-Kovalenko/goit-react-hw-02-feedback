import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(title => (
        <button key={nanoid(5)} type="submit" name={title} onClick={onLeaveFeedback}>
          {title[0].toUpperCase() + title.slice(1)}
        </button>
      ))}
    </div>
  );
};
