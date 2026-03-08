import Styled from "styled-components";

export const SignInContainer = Styled.div`
    width:380px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const ButtonContainer = Styled.div`
display: flex;
justify-content: space-between;
`;

export const SignInTitle = Styled.h2`
margin: 10px 0;
`;

export const SignInButtonContainer = Styled.div`
  display: flex;
  justify-context: flex-start;
  gap: 10px;
   @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    width:100%;

  }
`;
