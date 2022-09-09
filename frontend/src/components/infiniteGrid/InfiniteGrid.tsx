import * as React from 'react'
import { FrameInfiniteGrid } from '@egjs/react-infinitegrid'

function getItems(nextGroupKey: number, count: number) {
    const nextItems = []
    const nextKey = nextGroupKey * count

    for (let i = 0; i < count; ++i) {
        nextItems.push({ groupKey: nextGroupKey, key: nextKey + i })
    }
    return nextItems
}

const Item = ({ num }: any) => (
    <div
        className="item"
        style={{
            width: '450px',
        }}
    >
        <div className="thumbnail">
            <img
                src={`https://naver.github.io/egjs-infinitegrid/assets/image/${
                    (num % 33) + 1
                }.jpg`}
                alt="egjs"
            />
        </div>
        {/* <div className="info">{`egjs ${num}`}</div> */}
    </div>
)

export default function InfiniteGrid() {
    const [items, setItems] = React.useState(() => getItems(0, 10))

    return (
        <FrameInfiniteGrid
            maxW={'7xl'}
            className="container"
            gap={5}
            frame={[
                [1, 1, 2, 2, 3],
                [1, 1, 4, 5, 5],
            ]}
            onRequestAppend={(e: any) => {
                const nextGroupKey = (+e.groupKey! || 0) + 1

                setItems([...items, ...getItems(nextGroupKey, 10)])
            }}
        >
            {items.map((item) => (
                <Item
                    data-grid-groupkey={item.groupKey}
                    key={item.key}
                    num={item.key}
                />
            ))}
        </FrameInfiniteGrid>
    )
}
