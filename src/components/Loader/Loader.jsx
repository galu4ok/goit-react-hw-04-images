import { RotatingLines } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <>
      <StyledLoader>
        <RotatingLines width="80" strokeColor="#3f51b5" />
      </StyledLoader>
    </>
  );
};
