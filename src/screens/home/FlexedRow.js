import styled from "styled-components";

export const FlexedRow = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;
export const FlexedCol = styled.div`
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1rem;
  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 1rem;
  }
  @media only screen and (max-width: 428px) {
   padding: 1rem 0rem 1rem 1rem;
  }

  @media only screen and (max-width: 320px) {
    padding: 1rem;
  }
`;
