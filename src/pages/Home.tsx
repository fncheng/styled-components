import { lazy, startTransition, Suspense, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Lazy = lazy(() => import('../components/Lazy'))

const About = () => {
    const [show, setShow] = useState<boolean>(false)
    const handleClick = () => {
        startTransition(() => {
            setShow(true)
        })
    }

    return (
        <div>
            Home
            <button onClick={handleClick}>button</button>
            <Link to={'/about'}>About</Link>
            <NavLink to={'/react-flow'}>react-flow</NavLink>
            <Suspense>{show && <Lazy />}</Suspense>
        </div>
    )
}

export default About
