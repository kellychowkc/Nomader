import * as React from 'react'
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid'
import styles from './InfiniteGrid.module.css'

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
        className={styles.item}
        style={{
            width: '32%',
        }}
    >
        <div className="thumbnail">
            <img
                className={styles.image}
                src={`https://naver.github.io/egjs-infinitegrid/assets/image/${
                    (num % 33) + 1
                }.jpg`}
                alt="egjs"
            ></img>
        </div>
    </div>
)

export default function App() {
    const [items, setItems] = React.useState(() => getItems(0, 10))
    const [itemLength, setItemLength] = React.useState(0)

    React.useEffect(() => {
        setItemLength(items.length)
    }, [items])

    console.log(itemLength)

    return (
        <MasonryInfiniteGrid
            className={styles.containerBox}
            gap={8}
            onRequestAppend={(e) => {
                const nextGroupKey = (+e.groupKey! || 0) + 1
                {
                    itemLength < 30 ? (
                        setItems([...items, ...getItems(nextGroupKey, 10)])
                    ) : (
                        <></>
                    )
                }
            }}
        >
            {items.map((item) => (
                <Item
                    data-grid-groupkey={item.groupKey}
                    key={item.key}
                    num={item.key}
                />
            ))}
        </MasonryInfiniteGrid>
    )
}
