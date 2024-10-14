import { debounce } from 'lodash-es'
import { useState } from 'react'

const About = () => {
    const [count, setCount] = useState<number>(100)

    const buttonClick = debounce(() => setCount(count + 1), 1000)

    return (
        <div>
            <button onClick={buttonClick}>{count}</button>
        </div>
    )
}

export default About
