import { useState } from 'react'
import TestComponent from '../components/TestComponent'
import AsyncComponent from '../components/AsyncComponent'

const Test: React.FC = () => {
    const [count, setCount] = useState<number>(100)

    const buttonClick = () => setCount(count + 1)

    return (
        <div>
            <button onClick={buttonClick}>{count}</button>
            <TestComponent component={<AsyncComponent number={count + 1} />}>
                <AsyncComponent number={count} />
            </TestComponent>
        </div>
    )
}

export default Test
