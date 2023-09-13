import React from "react";
import ContentLoader from "react-content-loader";

const ItemCardSkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={"100%"}
            height={219}
            viewBox="0 0 1000 219"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            style={{
                border: "1px solid white",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.6)",
                marginTop: "10vh",
                backdropFilter: "blur(100px)"
            }}
        >
            <rect x="20" y="28" rx="7" ry="7" width="299" height="163"/>
            <rect x="359" y="43" rx="9" ry="9" width="308" height="18"/>
        </ContentLoader>
    )
}

export default ItemCardSkeleton