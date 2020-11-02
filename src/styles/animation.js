import { css, keyframes } from 'styled-components'

const FadeInkeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to{
    filter: blur(0);
    opacity: 1;
  }
`;

export const fadeInd = ({ time = "5s", type = "ease" } = {}) => css`
  animation: 1s ${FadeInkeyframes} ease;
`;