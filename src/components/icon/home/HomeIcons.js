import styled from "styled-components";
import theme from "../../../theme/theme";

const HomeIcons = styled.img`
  height: 5em;
  width: 5em;
  fill-opacity: 0.8;
  padding: 1.8em;
  margin-left: 1.5em;
  margin-top: 0.3em;
  margin-bottom: -1em;
  background: ${theme.colors.white};
  background-blend-mode: screen;
  border-radius: ${theme.size.cardsRadius};

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.base};
    border-radius: ${theme.size.cardsRadius};
  }
`;
export default HomeIcons;
