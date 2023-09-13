import styled from "styled-components";

export const StyledItemCard = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 3px;
  flex: 1 0 0;
  flex-wrap: wrap;

  border-radius: 12px;
  border: 1px solid #FFF;
  background: rgba(250, 250, 250, 0.80);
  backdrop-filter: blur(50px);

  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.05);

  .cover-image-wrapper {
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }

  .cover-image {
    width: 100%;
    height: 100%;
    max-width: 700px;
    object-fit: cover;
    position: absolute;
    opacity: 0.15;
    overflow: hidden;
    z-index: -1;
    filter: blur(200px) brightness(1.5) saturate(4);
  }

  .image-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 1px;

    overflow: hidden;

    img {
      width: 100%;
      max-width: 500px;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  .text-wrapper {
    display: flex;
    padding: 16px;
    align-items: flex-start;
    gap: 10px;
    font-weight: 500;
    font-size: 1.2rem;
  }
`