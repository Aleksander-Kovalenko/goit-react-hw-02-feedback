import { Button } from './ButtonReaction.styled';

export const ButtonReaction = ({ handleReaction, name }) => (
  <Button onClick={handleReaction} type="button" name={name.toLowerCase()}>
    {name}
  </Button>
);
