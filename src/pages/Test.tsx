import { useState } from 'react'

const About = () => {
    const state = useState<number>(100)
    const [count,setCount] = state
    console.log('state: ', state,state[1]);

    const buttonClick = () => setCount(count + 1)

    return (
        <div>
            <button onClick={buttonClick}>{count}</button>
        </div>
    )
}

export default About
