import { nanoid } from 'nanoid';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(title => (
        <Button key={nanoid(5)} type="submit" name={title} onClick={onLeaveFeedback}>
          {title[0].toUpperCase() + title.slice(1)}
        </Button>
      ))}
    </div>
  );
};
