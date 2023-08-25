import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBar.styled';
import { ImSearch } from 'react-icons/im';

export const SearchBar = ({ onSubmit }) => {
  return (
    <SearchBarHeader>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormButton type="submit">
          <ImSearch />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBarHeader>
  );
};
