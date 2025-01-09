import loadable from '@loadable/component'
import { lazy, Suspense } from 'react'
import { createBrowserRouter, type RouteObject, RouterProvider } from 'react-router-dom'
import App from '../App'

const pages: Record<string, () => Promise<any>> = import.meta.glob('../pages/**/*.tsx')

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Test = lazy(() => import('../pages/Test'))
const ReactFLow = lazy(() => import('../pages/ReactFlow'))

const loadWithDelay = (promise: Promise<any>, time: number) => {
    const delay = (d: number) => new Promise((resolve) => setTimeout(resolve, d))
    const delayPromise = delay(time)
    return Promise.all([promise, delayPromise]).then(() => promise)
}

const AsyncPage = loadable(
    (props: { page: string | string[] }) => {
        const { page } = props
        if (Array.isArray(page)) {
            return loadWithDelay(import(`../pages/${page[0]}/${page[1]}.tsx`), 500)
        }
        return loadWithDelay(import(`../pages/${page}/index.tsx`), 500)
    },
    {
        fallback: <div> Layout Loading...</div>,
        cacheKey: (props) => props.page
    }
)

const AntdPage = loadable(
    (props: { page: string }) => {
        const pagePath = `../pages/${props.page}.tsx`
        const pageModule = pages[pagePath]
        return loadWithDelay(pageModule(), 200)
    },
    {
        fallback: <div> Layout Loading...</div>,
        cacheKey: (props) => props.page
    }
)

const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: (
                    <Suspense fallback={<div>loading...</div>}>
                        <About />
                    </Suspense>
                ),
                errorElement: <div>error</div>
            },
            {
                path: 'test',
                element: <Test />
            },
            {
                path: 'react-flow',
                element: <ReactFLow />
            },
            {
                path: 'form',
                element: <AsyncPage page={['AntdForm', 'index']} />
            },
            {
                path: 'cascader',
                element: <AsyncPage page={['AntdForm', 'cascader']} />
            },
            {
                path: 'antd',
                element: <AntdPage page='Antd' />
            },
            {
                path: 'antd/table',
                element: <AntdPage page='Antd/Table' />
            },
            {
                path: 'antd/vir-table',
                element: <AntdPage page='Antd/VirtualTable' />
            }
        ]
    }
]

const router = createBrowserRouter(routes)
const Router = () => <RouterProvider router={router} />

export default Router
