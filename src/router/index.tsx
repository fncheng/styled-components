import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const ReactFLow = lazy(() => import('../pages/ReactFlow/index'))

const routes: RouteObject[] = [
    {
        path: '/',
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
                path: 'react-flow',
                element: <ReactFLow />
            }
        ]
    }
]

const router = createBrowserRouter(routes)
const Router = () => <RouterProvider router={router} />

export default Router
