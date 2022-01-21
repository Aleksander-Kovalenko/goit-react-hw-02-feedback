import { Wrapper, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const styled = {
    good: '#44be42',
    neutral: '#fffacc',
    bad: '#cc8e91',
  };
  return (
    <Wrapper>
      {options.map(title => (
        <Button
          key={title}
          type="submit"
          name={title}
          onClick={() => onLeaveFeedback(title)}
          style={{ backgroundColor: `${styled[title]}` }}
        >
          {title[0].toUpperCase() + title.slice(1)}
        </Button>
      ))}
    </Wrapper>
  );
};
