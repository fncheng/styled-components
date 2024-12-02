import { startTransition, useEffect, useMemo, useRef, useState } from 'react'
import { CustomButton } from '../Button'
import '../index.css'
import { Button } from 'antd'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { FixedSizeList as List } from 'react-window'

const appClass = css`
    color: sandybrown;
    background-color: yellow;
    width: 120px;
`

const StyledVideo = styled.video`
    margin-top: 20px;
    width: 100%;
`

const StyledButton = styled(Button)`
    ${appClass}
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: #4caf50;
`

const StyledAntdButton = styled(Button)`
    width: 150px;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
`

const Home = () => {
    const [count, setCount] = useState(1)
    const [text, setText] = useState('Initial Text')
    const [items, setItems] = useState<number[]>([])
    const [isPending, setIsPending] = useState(false)

    const ref = useRef<HTMLButtonElement>(null)

    const handleClick = () => {
        setIsPending(true)
        setText('Text updated immediately!')

        startTransition(() => {
            updateItems()
            setIsPending(false)
        })
    }
    const updateItems = () => {
        const newItems = Array.from({ length: 10000 }, (_, i) => i + 1)
        setItems(newItems)
    }

    const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
        <div style={style}>Item {items[index]}</div>
    )

    useEffect(() => {
        return () => {}
    }, [])

    return (
        <div>
            <StyledButton css={appClass} onClick={() => setCount(count + 1)}>
                {count}
            </StyledButton>
            <h3>{text}</h3>
            <StyledAntdButton ref={ref} type='primary' onClick={handleClick}>
                click Me
            </StyledAntdButton>
            {isPending && <p>Updating list...</p>}
            <List height={400} itemCount={items.length} itemSize={30} width={300}>
                {Row}
            </List>
        </div>
    )
}

export default Home
