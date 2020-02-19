import styled, { css } from "styled-components";

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${props =>
    props.top &&
    css`
      margin-top: ${props.top};
    `}
  ${props =>
    props.bottom &&
    css`
      margin-top: ${props.bottom};
    `}
`;
export const Col = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props =>
    props.top &&
    css`
      margin-top: ${props.top};
    `}
  ${props =>
    props.bottom &&
    css`
      margin-top: ${props.bottom};
    `}
`;
