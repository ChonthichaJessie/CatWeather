import styled from 'styled-components/native';

const SearchBar = () => {
  return (
    <Wrapper>
      <SearchBarComponent>Search Bear Component</SearchBarComponent>
    </Wrapper>
  );
};

export default SearchBar;

const SearchBarComponent = styled.Text`
  color: gray;
  font-size: 14px;
`;

const Wrapper = styled.View`
    width: 100%;
    height: 48px;
    background: white ;
    margin-bottom: 13px;

`
