import {StyledItemCard} from "./ItemCard.style";
import {Flat} from "../../../types";
import React from "react";

interface ItemCardProps {
    flat: Flat
}

const ItemCard: React.FC<ItemCardProps> = ({flat}) => {
    return (
        <StyledItemCard>
            <div className={'cover-image-wrapper'}>
                <img className={"cover-image"} src={flat.imageUrl} alt={"flat-image"}/>
            </div>
            <div className={"image-wrapper"}>
                <img src={flat.imageUrl} alt={"flat-image"}/>
            </div>
            <div className={"text-wrapper"}>
                {flat.title}
            </div>
        </StyledItemCard>
    )
}

export default ItemCard