import styled from "styled-components";

export const StyledMainLayout = styled.div`
  position: fixed;
  inset: 0;

  background: #e8ebf5;

  overflow: auto;

  #children {
    position: relative;
    z-index: 2;
    margin-inline: auto;
    width: clamp(200px, 95%, 1000px);
  }

  #blurElement2, #blurElement1 {
    filter: blur(60px);
    position: fixed;
    z-index: 1;
  }

  #blurElement1 {
    top: 0;
    left: 0;
  }

  #blurElement2 {
    bottom: 0;
    right: 0;
  }
`