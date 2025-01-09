import { Link, NavLink, Outlet } from 'react-router-dom'
import Router from './router'
import { Suspense } from 'react'
import { ProLayout } from '@ant-design/pro-components'
import styled from '@emotion/styled'

const StyledNavLink = styled(NavLink)`
    margin-right: 10px;
    color: #00bd7e;
`

export default function App() {
    return (
        <div>
            <StyledNavLink to={'/'}>Home</StyledNavLink>
            <StyledNavLink to={'/about'}>About</StyledNavLink>
            <StyledNavLink to={'/test'}>Test</StyledNavLink>
            <StyledNavLink to={'/react-flow'}>react-flow</StyledNavLink>
            <StyledNavLink to={'/form'}>Form</StyledNavLink>
            <StyledNavLink to={'/cascader'}>Cascader</StyledNavLink>
            <StyledNavLink to={'/antd'}>Antd</StyledNavLink>
            <StyledNavLink to={'/antd/table'}>AntdTable</StyledNavLink>
            <StyledNavLink to={'/antd/vir-table'}>AntdVirTable</StyledNavLink>
            <Outlet />
            {/* <ProLayout
                menuItemRender={(item, dom) => {
                    console.log('item: ', item)
                    console.log('dom: ', dom)
                    return item.path && <StyledNavLink to={item.path}>{dom}</StyledNavLink>
                }}
                menuDataRender={() => [
                    {
                        path: '/about',
                        name: 'About'
                    },
                    {
                        path: '/test',
                        name: 'Test'
                    },
                    {
                        path: '/react-flow',
                        name: 'ReactFlow'
                    },
                    {
                        path: '/form',
                        name: 'Form'
                    },
                    {
                        path: '/antd',
                        name: 'Antd',
                        children: [
                            {
                                path: '/antd',
                                name: 'Antd'
                            },
                            {
                                path: 'table',
                                name: 'AntdTable'
                            },
                            {
                                path: 'vir-table',
                                name: 'AntdVirTable'
                            }
                        ]
                    }
                ]}
            >
                <Outlet />
            </ProLayout> */}
        </div>
    )
}
