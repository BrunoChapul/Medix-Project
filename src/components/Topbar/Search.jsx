import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Search() {
  return (
    <>
      <Content>
        <Label htmlFor="input">
          <SearchOutlinedIcon sx={{ fontSize: "2rem", opacity: 0.3 }} />
        </Label>
        <Input id="input" placeholder="Search" type="text" />
      </Content>
    </>
  );
}

const Content = styled.div`
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  left: 0.5rem;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border-radius: 0.4rem;
  border: 0.01rem solid ${(props) => props.theme.colors.main + "33"};
  padding: 0.8rem 1rem 0.8rem 3rem;
  font-family: ${(props) => props.theme.font.primary};
  outline: 0;

  &::placeholder {
    opacity: 0.5;
  }
`;

export default Search;
