import styled from '@emotion/styled'
import { lazy, startTransition, Suspense, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LazyRef } from '../components/Lazy'

const Lazy = lazy(() => import('../components/Lazy'))

const StyledNavLink = styled(NavLink)`
    margin-right: 10px;
    color: #00bd7e;
`

const About = () => {
    const [show, setShow] = useState<boolean>(false)
    const lazyRef = useRef<LazyRef>(null)

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
            <NavLink to={'/test'}>Test</NavLink>
            <StyledNavLink to={'/react-flow'}>react-flow</StyledNavLink>
            <StyledNavLink to={'/form'}>Form</StyledNavLink>
            <StyledNavLink to={'/antd'}>Antd</StyledNavLink>
            <StyledNavLink to={'/antd/table'}>AntdTable</StyledNavLink>
            <StyledNavLink to={'/antd/vir-table'}>AntdVirTable</StyledNavLink>
            <Suspense>
                {show && <Lazy ref={lazyRef} onClick={() => lazyRef.current?.lazy()} />}
            </Suspense>
        </div>
    )
}

export default About
