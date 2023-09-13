import React, {HTMLProps} from "react";
import {StyledMainLayout} from "./MainLayout.style";

interface MainLayoutProps extends HTMLProps<HTMLDivElement> {
    children: React.ReactNode,
}

const BlurElementRed = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="748" height="451" fill="none" viewBox="0 0 748 451" id={"blurElement1"}>
            <path fill="#FFEDED"
                  d="M-78.254-194.147H748v442.784l-189.877-43.883C444.28 178.443 325.411 219.483 252.05 310.427L139.441 450.028-78.254 248.637v-442.784Z"/>
        </svg>
    )
}

const BlurElementBlue = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="671" height="559" fill="none" viewBox="0 0 671 559" id={"blurElement2"}>
            <path fill="#EDF2FF"
                  d="M937.92 449.9 222.363 863.027.971 479.565l186.38-56.934c111.747-34.136 194.17-129.112 212.23-244.553L427.303.876l289.225 65.562L937.92 449.9Z"/>
        </svg>
    )
}

const MainLayout: React.FC<MainLayoutProps> = ({
                                                   children,
                                                   id,
                                                   className
                                               }) => {
    return (
        <StyledMainLayout className={className} id={id}>
            <BlurElementRed/>
            <BlurElementBlue/>
            <div id={"children"}>{children}</div>
        </StyledMainLayout>
    )
}
export default MainLayout