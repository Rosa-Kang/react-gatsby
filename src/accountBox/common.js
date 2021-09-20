import styled from "styled-components"


export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 2em;
`

export const MutedLink = styled.a`
    font-size: 12px;
    color: rgba(191, 191, 191, 1);
    font-weight: 500;
    text-decoration: none;
    margin: 1.9em auto 0;

    &:hover {
        color: #F26A2E;
    }
`
export const Input = styled.input`
    outline: none;
    height: 42px;
    width: 100%;
    padding: 0px 10px;
    border: none;
    border-bottom: 1.4px solid rgba(232, 232, 232, 1);
    transition: all 200ms ease-in-out;

    &:focus {
        outline: none;
    }
`

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgba(191, 191, 191, 1);
  font-weight: 600;
  text-decoration: none;
  margin: 0 4px;

  &:hover {
        color: #F26A2E;
    }
`;


