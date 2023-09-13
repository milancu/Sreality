import React from 'react'
import useSWRInfinite from "swr/infinite";
import {Flat} from "./types";
import fetcher from "./utility/fetcher";
import MainLayout from "./layouts/MainLayout";
import ItemCard from "./components/molecules/ItemCard/ItemCard";
import {StyledItemList} from "./components/organisms/ItemsList/ItemList.style";
import ItemCardSkeleton from "./components/molecules/ItemCard/ItemCardSkeleton";

function App() {

    const {
        data,
        size,
        isLoading,
        setSize,
    } = useSWRInfinite((index) =>
        `/api/estates/?page=${index + 1}`, fetcher);


    const loadMore = () => setSize(size + 1);
    const flats = data ? [].concat(...data) : [];
    const isEmpty = data?.[0]?.length === 0;

    return (
        <MainLayout id={"scrollableDiv"}>
            <h1 style={{
                textAlign: 'center',
                marginTop: '10vh'
            }}>FLATS FOR SALE</h1>
            {data === undefined ? <ItemCardSkeleton/> : <StyledItemList
                scrollableTarget={"scrollableDiv"}
                dataLength={data?.length}
                next={loadMore}
                hasMore={!isEmpty}
                endMessage={<p>No more flats.</p>}
                loader={<ItemCardSkeleton/>}
            >
                {flats.map((f: Flat, index: number) => {
                    return (
                        <ItemCard flat={f} key={index}/>
                    )
                })}
            </StyledItemList>}
        </MainLayout>
    )
}

export default App
