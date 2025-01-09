import { lazy, startTransition, Suspense, useRef, useState } from 'react'
import { LazyRef } from '../components/Lazy'

const Lazy = lazy(() => import('../components/Lazy'))

const About = () => {
    const [show, setShow] = useState<boolean>(false)
    const lazyRef = useRef<LazyRef>(null)

    const handleClick = () => {
        startTransition(() => {
            setShow(true)
        })
    }
    const handleLazyClick = () => {
        lazyRef.current?.lazy()
        console.log('count: ', lazyRef.current?.count)
    }

    return (
        <div>
            Home
            <button onClick={handleClick}>button</button>
            <Suspense>{show && <Lazy ref={lazyRef} onClick={handleLazyClick} />}</Suspense>
            <span>{lazyRef.current?.count}</span>
        </div>
    )
}

export default About
