import { StyledLoadButton } from './LoadButton.styled';
export const LoadButton = ({ onClick, children }) => (
  <StyledLoadButton type="button" onClick={onClick}>
    Load more
  </StyledLoadButton>
);
