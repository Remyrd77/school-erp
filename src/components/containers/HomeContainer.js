import styled from "styled-components";
import theme from "../../theme/theme";

const HomeContainer = styled.div`
  height: 100%;
  padding: 0rem 3rem 0rem 5rem;
  background: ${theme.colors.base};
  @media only screen and (max-width: 768px) {
    padding: 0rem 0rem 0rem 0.8rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 0rem 0rem 0rem 0.5rem;
  }
`;
export default HomeContainer;
