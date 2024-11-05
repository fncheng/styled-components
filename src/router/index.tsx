import loadable from "@loadable/component";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Test = lazy(() => import("../pages/Test"));
const ReactFLow = lazy(() => import("../pages/ReactFlow"));

const loadWithDelay = (promise: Promise<any>, time: number) => {
    const delay = (d: number) => new Promise((resolve) => setTimeout(resolve, d));
    const delayPromise = delay(time);
    return Promise.all([promise, delayPromise]).then(() => promise);
};

const AsyncPage = loadable(
    (props: { page: string }) => loadWithDelay(import(`../pages/${props.page}/index.tsx`), 500),
    {
        fallback: <div> Layout Loading...</div>,
        cacheKey: (props) => props.page,
    }
);

const routes: RouteObject[] = [
    {
        path: "/",
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: (
                    <Suspense fallback={<div>loading...</div>}>
                        <About />
                    </Suspense>
                ),
                errorElement: <div>error</div>,
            },
            {
                path: "test",
                element: <Test />,
            },
            {
                path: "react-flow",
                element: <ReactFLow />,
            },
            {
                path: "form",
                element: <AsyncPage page="AntdForm" />,
            },
            {
                path: "antd",
                element: <AsyncPage page="Antd" />,
            },
        ],
    },
];

const router = createBrowserRouter(routes);
const Router = () => <RouterProvider router={router} />;

export default Router;
