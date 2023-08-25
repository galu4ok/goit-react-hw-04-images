import styled from 'styled-components';

export const ImageGalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const ImageGalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 5px -2px rgba(0, 0, 0, 0.82);
`;
