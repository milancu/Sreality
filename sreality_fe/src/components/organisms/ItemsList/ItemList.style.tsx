import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

// @ts-ignore
export const StyledItemList = styled(InfiniteScroll)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 10vh;
`