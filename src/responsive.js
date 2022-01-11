import { css } from "styled-components"

export const responsive1 = (props) => {
  return css`
    @media only screen and (max-width: 1080px) {
      ${props}
    }
  `;
}

export const responsive2 = (props) => {
  return css`
    @media only screen and (max-width: 550px) {
      ${props}
    }
  `;
}

export const responsive3 = (props) => {
  return css`
    @media only screen and (width: 320px) {
      ${props}
    }
  `;
}
