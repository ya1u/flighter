import { keyframes } from "styled-components";

const textShaking = keyframes`
  0% {
    transform: translateX(-1px);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(-1px);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export { textShaking, fadeOut };
